import React from 'react'
// import { Child } from './pages/Child'
import Child1 from './components/Child1'
import Child2 from './components/child2'
import Pages from './pages/pages'
import About from './pages/about'
import Contact from './pages/contact'
import Skills from './pages/skills'

const App = () => {
  var arr = ['hai','hello','print'];
  var user = {username :'sanjaymjs',password : "123456"};
  return (
    <div>
      <Child1 name="sanjay" phonenum="9878909878"/>
      <Child2/>
      <Pages items={arr} users = {user}/>
      <About/>
      <Contact/>
      

    </div>
  )
}

export default App