import React, {Component} from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component{
    render(){
        return(
            <div className="Pokedex">
                {this.props.Pokemons.map((Poke) => <Pokecard data={Poke}/>)}
            </div>
        );
    }
}

export default Pokedex;