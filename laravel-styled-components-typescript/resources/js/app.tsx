import React from 'react'
import { render } from 'react-dom'
import tw, { GlobalStyles } from 'twin.macro'
import { Button, Logo } from './components'

const App = () => (
  <div
    css={[
      tw`flex flex-col items-center justify-center h-screen`,
      tw`bg-gradient-to-b from-electric to-ribbon`
    ]}
  >
    <GlobalStyles />
    <div tw="flex flex-col justify-center h-full space-y-5">
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

render(<App />, document.getElementById('app'))
