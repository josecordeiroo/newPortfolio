import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Section>Hero</Section>
  )
}

export default Hero

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`