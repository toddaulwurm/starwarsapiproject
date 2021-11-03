import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Form from './components/Form';
import Noun from './components/Noun';

function App() {
  const [currentSearch, setCurrentSearch] = useState("")
  const [categories, setCategories] = useState([])
  const [data, setData] = useState({})
  const newSearch = (newSearch) =>{
    setCurrentSearch(newSearch)
  }
  useEffect(() => {
    axios.get('https://swapi.dev/api/')
        .then(response => {setCategories(Object.entries(response.data)); console.log(Object.entries(response.data))})
    }, []);

  useEffect(()=>{
    if(!currentSearch.length){
      return
    }
    axios.get(currentSearch)
    .then(response => {setData(response.data)})
  }, [currentSearch]);

  // function viewSearch(currentSearch){
  //   return currentSearch
  // };
  
  return (
    <BrowserRouter>
      <h1>Search Star Wars API</h1>
      <Form onNewSearch={newSearch} categories={categories}></Form>
      <Noun currentSearch={currentSearch} data={data}></Noun>
    </BrowserRouter>
  );
}

export default App;



// const [responseData, setResponseData] = useState(null);
// useEffect(()=>{
//     axios.get('https://swapi.dev/api/people/1')
//         .then(response=>{setResponseData(response.data)})
// }, []); 
