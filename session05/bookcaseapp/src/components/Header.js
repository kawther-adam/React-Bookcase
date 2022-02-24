import react from 'react';
import {Link} from 'react-router-dom';

// function Header(_props) {
//     return(
//         <React.Fragment><h1>My Bookcase</h1>
//         <Link to="/"> Home </Link>
//    <Link to="/bookcase" className="bookLink"> Bookcase</Link>
//  </React.Fragment>
        

//     )
// }

const Header = (props) => {
    return (

    <div className="header">
    <h1>Home</h1>
    <Link to="/"> Home </Link>
    <Link to="/bookcase" className="bookLink"> Bookcase</Link>
    </div>
    )
}

export default Header;