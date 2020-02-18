//// this is your original code before you tried to do this and you broke it. good job james
import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from "./PokeList.js";
import SearchOptions from './SearchOptions.js'
import request from 'superagent'; 
import getPokemon from './getPokemon.js';
// import Search from './Search'
// import Paging from "./Paging.js";

// need to add paging and total results of pages



export default class App extends Component {
  
  state = { pokemon: [] };
  
  async loadPokemon() { 
    const response = await getPokemon();
    const pokemon = response.results;
    console.log(response);
    console.log("||", pokemon);
    this.setState({
      pokemon: pokemon,
    });
  }
  
  async componentDidMount() {
    const pokeDex = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({pokemon: pokeDex.body.results});
    
        window.addEventListener("hashchange", async () => {
            await this.loadPokemon();
        })
      }   
        
    render() {
  // const { pokemon } = this.state;
  // console.log(this.state.pokemon);
  
  return(
    
    <main>
      <Header />
      {/* <Search /> */}
      <SearchOptions />
        <ul> 
        <PokeList pokemon={this.state.pokemon} />
        </ul> 
        {/* <Paging /> */}
    </main>

    
  )}
}  