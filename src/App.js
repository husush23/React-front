import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import Greetings from './components/Greeting';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Greetings />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
