import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Child1 from './components/Child1';
import Child2 from './components/child2';
import Pages from './pages/pages';
import About from './pages/about';
import Contact from './pages/contact';
import Skills from './pages/skills';
import Navbar from './components/navbar';
import Counter from './components/counter';
import State from './hooks/State';
import Hooks from './components/Hooks';
import Effect from './hooks/Effect';
import Login from './pages/Login';

const App = () => {
  const arr = ['hai', 'hello', 'print'];
  const user = { username: 'sanjaymjs', password: "123456" };

  return (
    <div>
      <Navbar />
      <Login/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages items={arr} users={user} />} />
        <Route path="/child1" element={<Child1 name="sanjay" phonenum="9878909878" />} />
        <Route path="/child2" element={<Child2 />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        =
      </Routes>
    </div>
  );
};

export default App;
