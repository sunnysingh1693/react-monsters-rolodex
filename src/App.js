import { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

import "./App.css"
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchQuery: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchQuery } = this.state;
    const handleSearch = (text) => {
      this.setState({ searchQuery: text })
    }
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return (
      <div className="App">
        <h1 className='title'>Monster's Rolodex</h1>
        <SearchBox searchFunction={handleSearch} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
