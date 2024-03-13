import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [books, setBooks] = useState([])

   //useEffect(()) has 2 , callback and dependency array
   useEffect(()=>{
    //standardization of url https://localhost:2500 to 
axios.get('/api/books')
.then((response) => {
setBooks(response.data)
console.log(response.data);
}
)
.catch((error)=>{
console.log(error);
})
}) 

  return (
    <>
    <h1>Books Application</h1>
    <h2>Number of Books : {books.length}</h2>
      {console.log(books.length)}
   

    </>
  )
}

export default App
