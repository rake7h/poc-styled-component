import React, { useState } from 'react'
import Hellos from './Components/Hello'

const Hello = React.lazy(() => import('grow/grow'));

const AppComponent = () => {
  const [name] = useState('world')

  return (<>
  <Hellos name={name} />
  <Hello/>
  </>
)
}

export default AppComponent
