import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
 
  const [readingTime, setReadingTime] = useState(0)
  
  const handleMarkAsRead = (time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
   console.log('click',time);
    
  }

  const handelAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)

  }



  return (
    <>

      <Header></Header>
      <div className='md flex container mx-auto'>
        <Blogs
         handelAddBookmark={handelAddBookmark} 
         handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} ></Bookmarks>
      </div>


    </>
  )
}

export default App
