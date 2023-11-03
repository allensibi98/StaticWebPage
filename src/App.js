import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './configureStore';

function App() {


  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          {/* <Routes>
            <Route exact path='/about' element={<About />} />
          </Routes> */}
        </Router>
      </Provider>
    </>

  );
}

export default App;
