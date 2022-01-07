import react, {useState,useEffect} from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import PokeCard from './components/PokeCard/PokeCard';

function App() {
  const [pokeList , setPokeList] = useState ([])
  const [PokeName , setPokeName] = useState ("")

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((res) =>{
      setPokeList(res.data.results)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])


  const changePokeName = event => {
    setPokeName(event.target.value)
  };

  return (
    <div>
      <select onChange={changePokeName}>    
        <option value={""}>Nenhum</option>
          {pokeList.map((pokemon)=>{
            return(
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option> 
            )
          })}
      </select>                   
    {setPokeName && <PokeCard pokemon = {PokeName}/>}
    </div>
  );
}

export default App;
