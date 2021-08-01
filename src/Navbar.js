

const Navbar =()=>{
   
        return(
          
                <nav className="navbar">
             <h1>BLOG</h1>
             <div className="links">
             <a href="/">HOME</a>
             <a href="/create" style={{
                 color: 'white',
                 background: '#f1356d',
                 borderRadius: '8px'
             }}>NEW BLOG</a>
             </div>
             </nav>

        )
   
}
export  default Navbar