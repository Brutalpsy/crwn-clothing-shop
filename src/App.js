import React from 'react';
import HomePage from './pages/homepage/homepage.componenet';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

const HatsPage = (props) => (
  <div>
    <Link to='/topics'>Topics</Link>
    <button onClick={() => props.history.push('/topics')}>goto</button>
    <h1>Hats page</h1>
  </div>
);

const TopicsList = (props) => (
  <div>
    <button onClick={() => props.history.push('/hatspage')}>hats</button>
    <h1>Topic list</h1>
    <Link to={`${props.match.url}/13`}>to 13</Link> <br />
    <Link to={`${props.match.url}/14`}>to 14</Link> <br />
    <Link to={`${props.match.url}/15`}>to 15</Link> <br />
  </div>
);

const TopicDetail = (props) => (
  <div>
    <h1>Topic detail</h1>
    <button onClick={() => props.history.push('/topics')}>back</button>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hatspage' component={HatsPage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </Switch>
  );
}

export default App;
