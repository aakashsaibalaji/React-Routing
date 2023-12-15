//import logo from './logo.svg';

import About from './component/routing/about';
//import Display from './component/Display';
import Content from './component/routing/content';
import Features from './component/routing/features';
import Heading from './component/routing/heading';
//import Header from './component/Header';
//import Footer from './component/Footer';
//import Counter from './component/Counter';
//import Conditionhandle from './component/Conditionhandle';
//import Display from './component/Display';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className='App'>
      {/*<Header/>
      <Footer/>
      <Counter/>
      <Conditionhandle/>
      <Display/>*/}
      <BrowserRouter>
         <Routes>
           <Route path="/home" element={<Heading/>}/>
           <Route path="/content" element={<Content />}/>
           <Route path="/features" element={<Features />}/>
           <Route path='/about' element={<About/>}/>
         </Routes>
      </BrowserRouter>
      {/*<Display/>*/}
      </div>
  );
}

export default App;
