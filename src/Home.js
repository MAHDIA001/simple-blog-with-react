import React, { useState,useEffect } from 'react'
import Blogs from './Blogs'

const Home=()=>{
const [name,setName] = useState('mario')
const [blogs,setBlogs] = useState(null);
const[isPending,setIsPending] = useState(true)
const [error,setError] =useState(null);
 useEffect(() => {
setTimeout(()=>{
  fetch('http://localhost:8000/blogsa')
.then(res=>{
  if(!res.ok){
  throw Error('could not load the page')
 
  }
  return res.json();
})
.then(data=>{
  setBlogs(data);
  setIsPending(false)
  setError(null)
}).catch(err=>{
  setIsPending(false)
  setError(err.message)
})
},1000)
}, []);
 return(
      <div className="home">
        {
          error && <div>{error}</div>
        }
        {isPending && <div>Loading...</div>}
            {blogs && <Blogs blogs={blogs} />}
      </div>
        );
   
}
export default Home;