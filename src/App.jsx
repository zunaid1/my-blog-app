
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
const [bookmarked, setBookmarked]= useState([])



const handleBookMark = (blog) => {
  setBookmarked([...bookmarked,blog])

 
}

console.log(bookmarked);

  return (
    <>
  
    <Navbar></Navbar>
<div className='main-content flex text-center'>
  <div className='left-container w-[70%]'>
    <Blogs handleBookMark={handleBookMark}></Blogs>
  </div>

  <div className='right-container w-[30%]'>
    <h1>Reading time: 0</h1>
    <h1>Bookmark Count: 0</h1>

    {
      bookmarked.map((marked)=> <p key={marked.id}>{marked.title}</p>)
    }

</div>


</div>



    
      
    </>
  )
}

export default App
