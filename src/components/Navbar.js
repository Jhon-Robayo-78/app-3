import "./CSS modulos/navbar.css"

function Navbar(){
    return(
        <nav className="navbar1"  id="Principal">
            <div className="container-fluid">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   <div className="navbar-collapse" id="nav-item">
                   <li className="nav-item"><img src='LOGO UTB.png' width={150} alt="logo utb"/></li>
                       <li className="nav-item">
                           <a className="nav-link active" aria-current="page" href="/">Home</a>
                       </li>
                       <li className="nav-item">
                           <a className="nav-link active" aria-current="page" href="/ListPerson">List</a>
                       </li>
                    </div>

               </ul>
            </div>
           
        </nav>

    );
}

export default Navbar;
//                   <li className="nav-item"><span className="navbar-brand mb-0 h1"><img src='LOGO UTB.png' width={150} alt="logo utb"/></span></li>
