import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './Home';
import Movie from './Movie';


const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <>
<div>hello, wordl</div>
    </>
  );
}

export default App;