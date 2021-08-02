import React, { useState,useEffect } from 'react'
import Blogs from './Blogs'

const Home=()=>{
const [name,setName] = useState('mario')
const [blogs,setBlogs] = useState(null);
const deleteBtn =(id)=>{
const newBlog = blogs.filter(blog=>blog.id!=id)
setBlogs(newBlog)
}
useEffect(() => {
fetch('http://localhost:8000/blogs')
.then(res=>{
  return res.json();
})
.then(data=>{
  setBlogs(data);
})
}, []);
 return(
      <div className="home">
            {blogs && <Blogs blogs={blogs} />}
            

      </div>
        );
   
}
export default Home;