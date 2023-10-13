import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

// Import your components/pages

import {Tablepage} from './Tablepage';
import Formpage from './formpage';


function App() {
  return (
    // <Router>
    //  <Routes>
    //   <Route path="/" component={Formpage }/>
      
    //     <Route path="/table" component={Tablepage} />
        
    //     </Routes>
    // </Router>
  <>
    <Formpage/> 
  </>
  );
}

export default App;
