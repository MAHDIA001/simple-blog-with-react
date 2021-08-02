
const Blogs = ({blogs,title,deleteBtn})=>{

    return(
    <div className="blogs-list">
        <h2>{title}</h2>
{blogs.map((blog)=>(
    <div className="blog-preview" key={blog.id}>
        
        
        <h2>The title of blog: {blog.title}</h2>
        <p>The author: {blog.author}</p>
        <button onClick={()=>deleteBtn(blog.id)} deleteBtn={blog.id}>Delete!</button>

    </div>

                  ))}
                  </div>
    )
                }
export default Blogs;