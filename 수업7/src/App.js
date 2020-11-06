import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} /> {/* "/"- Home 컴포넌트가 나옴 / exact={true}를 작성해야 "/ablut"를 작성하면 Home이 안나온다 */}
        <Route path="/about" component={About} /> {/* "/about" - about 컴포넌트가 나옴 */}
        <Route path="/movie_detail" component={Detail} />
      </HashRouter> /* Route컴포넌트는 반드시 HashRouter 안에 있어야한다 */
  );
}

export default App;
