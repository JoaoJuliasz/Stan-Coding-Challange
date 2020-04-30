import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './pages/Container'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    )
  }
}

export default App;
