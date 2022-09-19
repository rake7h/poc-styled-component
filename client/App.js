import React, { useState } from 'react'
import Hellos from './Components/Hello'

const AppComponent = () => {
  const [name] = useState('world')

  return (
    <>
    <h1>Im Remote</h1>
    <Hellos name={name} />
    </>
  )
}

export default AppComponent
