import React from 'react'
import axios from 'axios'


const AppContext = React.createContext()
function AppProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [waiting, setWaiting] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [index, setIndex] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const [quiz, setQuiz] = React.useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy'
  })
  
  const API_ENDPOINT = 'https://opentdb.com/api.php?'
 
  const fetchingData = async (url) => {
        setWaiting(false)
        setLoading(true)
        const response = await axios(url).catch((err) => console.log(err))
        if(response) {
          const data = response.data.results
          if (data.length > 0) {
                setQuestions(data)
                setLoading(false)
                setError(false)
                setWaiting(false)
          } else {
            setError(true)
            setWaiting(true)
            }
        } else {
          setWaiting(true)
          }
        }

  function handleChange(e) {
    setQuiz(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name] : e.target.value
      }
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    let categoryVal
    if (quiz.category === 'sports') {
      categoryVal = 21
    } else if (quiz.category === 'history') {
      categoryVal = 23
    } else if (quiz.category === 'politics') {
      categoryVal = 24
    }
    fetchingData(`${API_ENDPOINT}amount=${quiz.amount}&category=${categoryVal}&difficulty=${quiz.difficulty}&type=multiple`)
  }

  function shuffleAnswers(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
         const randomAnswerList = array.map(item => {
            return {
              value: item
            }
          })
    return randomAnswerList
 }
  function nextQuestion(){
    setIndex(prevIndex => {
      const index = prevIndex + 1
      if (index > questions.length - 1) {
        openModal()
        return 0
      } else {
        return index
      }
    })
  }
  
  function checkAnswer(value) {
    if(value) {
      setCorrect(oldValue => oldValue + 1)
    }
    nextQuestion()
  }
  function openModal(){
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
    setCorrect(0)
    setWaiting(true)
  }
    
  return (
    <AppContext.Provider
      value={{
        quiz,
        handleChange,
        handleSubmit,
        error,
        questions,
        waiting,
        loading,
        index,
        shuffleAnswers,
        correct,
        nextQuestion,
        checkAnswer,
        isModalOpen,
        closeModal
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppContext, AppProvider }