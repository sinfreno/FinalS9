import './App.css';
import React from 'react';
import VideoItem from './VideoItem.js';
import VideoList from './VideoList.js';
import SearchBar from './SearchBar.js';

class App extends React.Component{
    
  render() {
    return (
    
    <div className="App">
      <div><SearchBar /></div>
      <div><VideoItem /></div>
      <div><VideoList /></div>
    </div>
    )
  }


}

export default App;
