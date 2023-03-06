import { useState, useEffect } from 'react';
import OrgSearch from './OrgSearch';
import './App.css';

const url = 'https://acnhapi.com/v1a/'

const App = () => {
  const [nameOrganism, setNameOrganism] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchOrganism = async(typeOrganism, nameOrganism) => {

    const response = await fetch(`${url}${typeOrganism}/${nameOrganism}`); // gets data and stores in response variable
    const data = await response.json(); // converts data to json

    console.log(data);
    setNameOrganism(data);

  }

  useEffect(() => {
    searchOrganism('fish','');
  }, []); // when to use searchOrganism 

  return (
    <div className="app">
      <h1>✿ ACNH Collector ✿</h1>

      <div className="search">
        <input
            placeholder="Enter name of organism"
            value={searchTerm}
            onChange={(enter) => {setSearchTerm(enter.target.value)}}
        />
        <div className="searchButton">
          <button
          onClick={() => searchOrganism('fish', '')}>Fish
          </button>
          <button 
          onClick={() => searchOrganism('bugs', '')}>Bugs
          </button>
        </div>
      </div>
      

      {nameOrganism?.length > 0
        ? (
          <div className="container">
            {nameOrganism.filter((organism)=> {
              if (searchTerm == "") {
                return organism
              } else if (organism.name['name-USen'].includes(searchTerm.toLowerCase())) {
                return organism
              }

            }).map((organism) => 
            (<OrgSearch key={organism.id} organism={organism}/>
            ))}
          </div>
        ) : (
            <div className="empty">
                <h3>Sorry, no results found!</h3>
            </div>
        )
      }

    </div>
  );
}

export default App;
