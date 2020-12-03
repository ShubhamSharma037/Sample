import React,{useEffect} from 'react';
import './App.css';
import AOS from 'aos';
import Layout from './UI/Layout/Layout';
import Home from './Components/Home/Home'
import About from './Components/About/about';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Project/ProjectPage';
import {Switch, Route, BrowserRouter} from 'react-router-dom';



function App() {
  
  useEffect(()=>{
    window.scrollTo(0,0);
    AOS.init({
        duration : 500,
        easing : "ease-in",
        once : true
    })
  })


  return (

    
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path='/about' component={About}/>  
            <Route path='/contact'  component={Contact}/>
            <Route path='/Projects'  component={Projects}/>
            <Route path='/' exact component={Home}/>
            <Route component={Home}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
