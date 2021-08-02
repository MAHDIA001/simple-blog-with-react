import React, { useState } from 'react'
import Blogs from './Blogs'

const Home=()=>{
const [blogs,setBlogs] = useState([
{title: 'My new website!', body:'lorem ipsum...', author:'Mario', id:1},
{title: 'Welcome party!', body:'lorem ipsum...', author:'Luigi', id:2},
{title: 'My dev top tips!', body:'lorem ipsum...', author:'Mario', id:3}
]);
const deleteBtn =(id)=>{
const newBlog = blogs.filter(blog=>blog.id!=id)
setBlogs(newBlog)

}
        return(
            <div className="home">
<Blogs blogs={blogs} title="All Blogs!"deleteBtn={deleteBtn} />



            </div>
        );
   
}
export default Home;