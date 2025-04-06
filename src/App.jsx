
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
const [bookmarked, setBookmarked]= useState([])
const [readingCount, setReadingCount]= useState(0)



const handleBookMark = (blog) => {
  setBookmarked([...bookmarked,blog])
}

const handleMarkAsRead = (time) => {
  const updatedCount= parseFloat(readingCount) + parseFloat(time)
  setReadingCount(updatedCount)

}




  return (
    <>
  
    <Navbar></Navbar>
<div className='main-content flex text-center'>
  <div className='left-container w-[70%]'>
    <Blogs 
    handleBookMark={handleBookMark}
    handleMarkAsRead={handleMarkAsRead}
    ></Blogs>
  </div>

  <div className='right-container w-[30%]'>
    <h1>Reading time: {readingCount}</h1>
    <h1>Bookmark Count: {bookmarked.length}</h1>

    {
      bookmarked.map((marked)=> <p key={marked.id}>{marked.title}</p>)
    }

</div>


</div>



    
      
    </>
  )
}

export default App
