import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Movie from './components/MovieComponent';
import FavoriteList from './components/FavoriteList';
import MovieContainer from './components/MovieContainer';


function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path='/' element = {<MovieContainer />} />
          <Route path='' element = {<FavoriteList />} />
          <Route path='*' element = {<Navigate to = '/'/>} />
        </Routes>
        
      </Router>
  );
}

export default App;
