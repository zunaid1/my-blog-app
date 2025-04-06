
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
  
    <Navbar></Navbar>
<div className='main-content flex text-center'>
  <div className='left-container w-[70%]'>

  </div>

  <div className='right-container w-[30%]'>
    <h1>Reading time: 0</h1>
    <h1>Bookmark Count: 0</h1>

</div>


</div>



    <Blogs></Blogs>
      
    </>
  )
}

export default App
