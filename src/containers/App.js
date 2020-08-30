import React,{Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {names} from '../names';

class App extends Component {
  constructor(){
    super()
    this.state={
      names:names,
      searchfield:''
    }
  }
  onSearchChange=(event)=> {
    this.setState({searchfield: event.target.value})
  }
  render(){
    const filteredNames=this.state.names.filter(names=>{
      return names.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return !names.length ?
    <h1>Loading..</h1>:
    (
      <div className="tc">
      <h2 class="f1">My Favourite Anime Chracters </h2>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
         <CardList names={filteredNames} />
      </Scroll>
      </div>
    );
  }
}

export default App;
