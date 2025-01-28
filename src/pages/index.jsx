import InputText from '../components/eventtext.jsx'
import InputForm from '../components/inputFiled.jsx'
import ParticipantFully from '../components/participant-fully.jsx'
import "../style/inputfield.css"
import "../style/body.css"
import { useState } from 'react'

function Index() {
  const [participants, setParticipants] = useState([])

  const handleFormSubmit = (data) => {
    setParticipants([...participants, data])
  }

  return (
    <>
      <div className='form-wrap-container'>
        <img src="src/assets/img-container.png" alt="Orange-Rabbit-Festival-2023" />
        <div className='form-container'>
          <InputText/>
          <InputForm onSubmit={handleFormSubmit}/>
        </div>
        <div className='form-container-two'>
          <ParticipantFully participants={participants} />
        </div>
      </div>
    </>
  )
}

export default Index