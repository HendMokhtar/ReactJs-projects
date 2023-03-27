import React from 'react'
import { nanoid } from 'nanoid'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
export default function App() {
  const url = 'https://randomuser.me/api/'
  const [personInfo, setPersonInfo] = React.useState([])
  const [userInfo, setUserInfo] = React.useState({title:'',vlaue: ''})
  const [loading, setLoading] = React.useState(false)
  
  const fetchRandom = async () => { 
   setLoading(true) 
   await fetch(url)
    .then(res => res.json())
    .then(data => setPersonInfo(data.results))
    setLoading(false)
  } 
  React.useEffect(() => {
     fetchRandom()
  }, [])

  function showInfo(title, value) {
    setUserInfo({title: title, value: value })
  }
  if (loading) {
    return (
      <h2 className='mt-5 text-center'>Loading...</h2>
    )
  }
  return (
    <section>
      <div className='bg-block'></div>
      {personInfo.map((item, index) => {
        return (
          <div className='container' key={index}>
          <div className='profileImg'>
          <img src={item.picture.large} alt='name' />
          </div>
          <div className='profileInfo'>
          <p className='user-title'>My {userInfo.title || 'name'} is</p>
          <p className='user-value'> {userInfo.value || `${item.name.first} ${item.name.last}`} </p>
          </div>
            <div className='icons'>
              <FaUser onMouseOver={() => showInfo('name',`${item.name.first} ${item.name.last}`)}/>
              <FaEnvelopeOpen onMouseOver={()=>showInfo('email',item.email)}/>
              <FaCalendarTimes onMouseOver={()=>showInfo('age',item.dob.age)}/>
              <FaMap onMouseOver={()=>showInfo('street', `${item.location.street.number} ${item.location.street.name}`)}/>
              <FaPhone onMouseOver={()=>showInfo('phone',item.phone)}/>
              <FaLock onMouseOver={()=>showInfo('pass',item.login.password)}/>
          </div>
          <button className='btn' onClick={fetchRandom}>random user</button>
        </div>
        )
      })}
    </section>
  )
    
}
