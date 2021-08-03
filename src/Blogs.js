
const Blogs = ({blogs,title})=>{

    return(
    <div className="blogs-list">
        <h2>{title}</h2>

    <div className="blog-preview" key={blogs.id}>
        
        
        <h2>The title of blog: {blogs.title}</h2>
        <p>The author: {blogs.author}</p>
       

    </div>

                  
                  </div>
    )
                }
export default Blogs;