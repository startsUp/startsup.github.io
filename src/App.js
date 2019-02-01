import React, { Component } from 'react';
import logo from './logo.svg';
import pic from './res/pic.png'
import Card from './components/card'
import './App.css';
import {Section} from './components/section'
class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Shardool Patel</h1>
        </header>
        <Section title='Projects' contentClass='project-cards'/>
        <Section title='Experience' contentClass='experience'/>
      </div>
    );
  }
}

export default Home
