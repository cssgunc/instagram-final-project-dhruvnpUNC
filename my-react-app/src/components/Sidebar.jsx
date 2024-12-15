import "./Sidebar.css";
import logo from './insta_logo.svg';
import { Link } from "react-router";
function Sidebar() {
    return( 
    <>
        <div className ="sidebar">
            <img src={logo} className="logo"></img>
            <Link to="/home">
                <h2>Home</h2>
            </Link>
            <h2>Search</h2>
            <h2>Explore</h2>
            <h2>Reels</h2>
            <h2>Messages</h2>
            <h2>Notifications</h2>
            <h2>Create</h2>
            <Link to="/account">
                <h2>Profile</h2>
            </Link>
        </div>
    </>
    );
    
}

export default Sidebar;