import React, { useEffect } from'react'
import './App.css'
import axios from 'axios'
import { useState} from 'react'

const App =() => {
  // axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})

  const [bookData, setBooksData] = React.useState([])

  const getData = () =>{
    axios .get("https://reactnd-books-api.udacity.com/books", {
      headers: { 'Authorization': 'whatever-you-want' }
    })
    .then((res)=>  setBooksData(res.data.books))
    .catch((err)=> {
      console.log("Status code = 404");
      console.log("Website not found")
    })
    };
    console.log(bookData)
    useEffect(() => {
      getData()
    }, [])

  

  return (
    <div className='App'>
    {bookData.map((el, i) => (
      <div key={i}>
        <div><h2>{el.title}</h2></div>
        <div className='image-container'>
          <img src={el.imageLinks.thumbnail} alt={el.title} />
          <p>{el.description}</p>
        </div>
        <div className='names'>{el.authors.map((el, i) => {
          return <h4 key={i}>{el}</h4>
        })}</div>

        <hr />
      </div>
    ))}
  </div>
)
};

export default App
