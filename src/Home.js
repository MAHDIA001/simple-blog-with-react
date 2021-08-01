import React, { useState } from 'react'

const Home=()=>{
const [blogs,setBlogs] = useState([
{title: 'My new website!', body:'lorem ipsum...', author:'Mario', id:1},
{title: 'Welcome party!', body:'lorem ipsum...', author:'Luigi', id:2},
{title: 'My dev top tips!', body:'lorem ipsum...', author:'Mario', id:3}
])
        return(
            <div className="home">
              {blogs.map((blog)=>(
<div className="blog-preview" key={blog.id}>
    <h2>The title of blog: {blog.title}</h2>
    <p>The author: {blog.author}</p>
</div>
              ))}
            </div>
        );
   
}
export default Home;