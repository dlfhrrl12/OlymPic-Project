import React, { useState } from 'react'
import MedalForm from './MedalForm'
import MedalList from './MedalList'
import './olympic.css'
// Main
function Olympic() {
  const [countries, setCountries] = useState([]); // 상태 관리 (저장배열)
  return (
    <div className='container'>
      <h1 className='title'>2025 파리 올림픽</h1>
      <MedalForm countries={countries} setCountries={setCountries}/>
      <MedalList countries={countries} setCountries={setCountries}/>
    </div>
  )
}

export default Olympic

