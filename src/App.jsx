
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
const [bookmarked, setBookmarked]= useState([])
const [readingCount, setReadingCount]= useState(0)



const handleBookMark = (blog) => {
  setBookmarked([...bookmarked,blog])
}

const handleMarkAsRead = (time, id) => {
  const updatedCount= parseFloat(readingCount) + parseFloat(time)
  setReadingCount(updatedCount)
  handleRemoveBookmark(id)

}

const handleRemoveBookmark = (id) => {
  const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
  setBookmarked(remainingBookMark);
}



  return (
    <>
  
    <Navbar></Navbar>
    <div className='main-content  text-center flex flex-col-reverse md:flex-row lg:flex-row '>
  <div className='left-container w-full md:w-[70%]  lg:w-[70%]'>
    <Blogs 
    handleBookMark={handleBookMark}
    handleMarkAsRead={handleMarkAsRead}
    ></Blogs>
  </div>

  <div className='right-container w-full md:w-[30%]  lg:w-[30%]'>
    <h1 className=''>Reading time: {readingCount}</h1>
    <h1>Bookmark Count: {bookmarked.length}</h1>

    {
            bookmarked.map((marked) => <p className='bg-blue-100 text-xl text-blue-800 font-bold m-2 p-4 rounded' key={marked.id}>{marked.title}</p>)
    }

</div>


    </div>

    <Footer></Footer>

      
    </>
  )
}

export default App
