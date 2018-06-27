import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Header from '../Header/Header';
import Search from '../Search/Search';
import ComparedContainer from '../ComparedContainer/ComparedContainer';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      schoolStats: this.props.districts.stats,
      searchResult: [],
      selectedCards: []
    }
    console.log(this.state.schoolStats[0])
  }

  submitSearch = (search) => {
    const searchEntry = this.props.districts.findAllMatches(search)
    
    this.setState({searchResult: searchEntry})
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Header /> 
        </header>
        <Search
          submitSearch={this.submitSearch}
        />
        <ComparedContainer 
          selectedCards={this.state.selectedCards}
        />
        <CardContainer
          schoolStats={this.state.schoolStats}
          searchResults={this.state.searchResult}
        />
      </div>
    );
  }
}

export default App;
