import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
  }
}

export default App;