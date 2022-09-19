import React from 'react'

import styled from 'styled-components'

const HelloWrap = styled.div`
 height: 80px;
 width: 100vw;
 background: dodgerblue;
 padding: 30px;
`

const Header = ({ name }) => {
  return <>
    <HelloWrap>
      <p>I'm Header</p>
      <h1>{name}!</h1>
    </HelloWrap>
  </>
}

export default Header
