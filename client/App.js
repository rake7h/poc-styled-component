import React, { useState } from 'react'
import Hello from './Components/Hello'
import Calendar from 'react-calendar'
import CalendarRawCss from 'react-calendar/dist/Calendar.css?raw'

const AppComponent = () => {
  const [name] = useState('world')

  return (
    <>
      <Hello name={name} />
      <div css={CalendarRawCss}>
        <Calendar />
      </div>
    </>
  )
}

export default AppComponent
