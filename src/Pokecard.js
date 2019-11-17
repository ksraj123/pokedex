import React, {Component} from 'react'
import './Pokecard.css'

function getImageUrl(id){
    id = String(id);
    var idLength = id.length;
    for (let i  = 1; i <= 3 - idLength; i++){
        id = "0" + id;
    }
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
}

class Pokecard extends Component {
    render(){
        let {id, name, type, base_experience: exp} = this.props.data;
        return(
            <div className="Pokecard">
                <span className="Pokecard-name">{name} </span>
                <img className="Pokecard-img" src={getImageUrl(id)}/>
                <span className="Pokecard-type">Type: {type} </span>
                <span className="Pokecard-exp">EXP: {exp} </span>
            </div>
        );
    }
}

export default Pokecard;