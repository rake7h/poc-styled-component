import React from 'react'
import { Button } from './Button'

const Hello = ({ name }) => {
  return <>
  <h1>Hello {name}!</h1>
  <Button>Hey!</Button>
  </>
}

export default Hello
