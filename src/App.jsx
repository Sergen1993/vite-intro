// import Greeting from './Greeting'
// import './App.css'

// const age = 10 * 3

// function App() {
//   return (
//     <>
//     <h1>Hello !</h1>
//     <Greeting foo="bar" name="Sergen" age={age} />
//     <p>Lorem ipsum dolor, liatur consequatur tenetur.</p>
//     </>
//   )
// }

// export default App

// ====
// Short cut for structure \\
// section>article*3>(header>img+p+time)+p\\
// ====

import React from 'react'
import Comment from '../Comment'
import Card from "./Card"


const app = () => {
  return (
    <section>
      <Comment 
        avatar="http://i.pravatar.cc/60?1" name="Sergen Tasdivar" date="11/07/23" >
        <h3>Hello</h3>
        <p>A better comment !</p>
      </Comment>
      <Card>
        <Comment avatar="http://i.pravatar.cc/60?2" name="Tooks Bloggs" date="12/07/23" comment="React is Awesome !" />
      </Card>
      <Comment avatar="http://i.pravatar.cc/60?3" name="Jane Doe" date="23/07/23" comment="Couldn't agree more !" />
    </section>
  )
}

export default app