import React from 'react';
import Loading from './components/Loading';
import { useGlobalContext } from './context';
import SetupForm from './pages/SetupForm'
import ResultModal from './components/ResultModal';

const he = require("he")


export default function App() {
  const { loading,
          waiting,
          questions,
          index,
          shuffleAnswers,
          correct,
          nextQuestion,
          checkAnswer,
          isModalOpen
  } = useGlobalContext()

  if (waiting) {
    return <SetupForm/>
  }
  if (loading) {
    return <Loading/>
  }
  const {incorrect_answers, correct_answer, question} = questions[index]
  const answers = shuffleAnswers([...incorrect_answers, correct_answer])
  return (
    <main className='container'>
      {isModalOpen && <ResultModal/>}
      <section className='quiz'>
        <p className='correct-answers'>
          Correct Answers : {correct}/{index}
        </p>
        <h2>{he.decode(question)}</h2>
        <div className='btn-container mt-5'>
          {answers.map((item,index) => {
            return (
              <button className='answer-btn' 
                      key={index}
                      onClick={() => checkAnswer(item.value === correct_answer)}>
                {item.value}
              </button>
            )
          })}
        </div>
        <button className='nextBtn' onClick={nextQuestion}>next question</button>
        </section>
    </main>
  );
}

