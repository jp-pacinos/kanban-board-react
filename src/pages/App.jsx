import React from 'react'
import Header from 'components/LayoutHeader'
import Board from 'components/Board'
import 'assets/tailwind.generated.css'

const App = () => {
  return (
    <div className="antialiased">
      <Header />
      <Board />
    </div>
  )
}

export default App
