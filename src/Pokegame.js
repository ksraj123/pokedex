import React, {Component} from 'react'
import Archive from './PokemonsArchive'
import Pokedex from './Pokedex'

var PokeArray = Archive.slice(0);

function totalExp (selection){
    return selection.reduce((acc, next) => acc + next.exp, 0)
}

function getRandomPokemons(num){
    let selection = [];
    for (let i = 1; i <= num; i++){
        let selectIndex = Math.floor(Math.random() * PokeArray.length);
        selection.push(PokeArray[selectIndex]);
        PokeArray.splice(selectIndex, 1);
    }
    return selection;
}

class Pokegame extends Component{
    render(){
        const selection1 = getRandomPokemons(4);
        const selection2 = getRandomPokemons(4);
        const handStyle = {
                            textAlign: "center", 
                            color: "green",
                            textDecoration: "underline",
                            fontFamily: "Helvetica",
                            fontWeight: "100"
                          }
        return(
            <div className="Pokegame">
                <h1 style={handStyle}>Winning Hand</h1>
                <Pokedex Pokemons={totalExp(selection1) > totalExp(selection2)? selection1 : selection2}/>
                <h1 style={handStyle}>Loosing Hand</h1>
                <Pokedex Pokemons={totalExp(selection1) > totalExp(selection2)? selection2 : selection1}/>
            </div>
        );
    }
}

export default Pokegame;