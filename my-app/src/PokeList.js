
import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        const { pokemon } = this.props;
        const pokemonItems = pokemon.map(pokemon => <PokeItem pokemon={pokemon} />);
// Map is undefined and it is because one of these VARS IS FKED UP  Or i am not calling something correctly
            return (
            
            <main>  
                <section className="pokemon-list">
                    <ul>                   
                        {pokemonItems}
                    </ul>
                </section>
            </main>
        )
    }
}
