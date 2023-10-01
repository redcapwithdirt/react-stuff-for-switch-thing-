
import { Link, NavLink } from "react-router-dom";
import Homepagelogo from '../../assets/logo-home-page.png'

import "./Home.scss"

const Home = () => {
    return (
        <div>

            {/* navigation bar */}
            <div className="nav-bar">

                {/* Switch Thing  */}
                <div className="logo-text">
                    <Link to='/' className="switch">
                        Switch
                    </Link>
                    <Link to='/' className="switch things">
                        Things
                    </Link>
                </div>



                <div className="nav-links">
                    {/* Home Link  */}
                    <NavLink
                        to='/'
                        className='nav-link'
                        activeClassName="active"
                    >
                        Home
                    </NavLink>

                    {/* Search Link  */}
                    <NavLink
                        to='/search'
                        className='nav-link'
                        activeClassName="active"
                    >
                        Search
                    </NavLink>

                    {/* Login Link  */}
                    <NavLink
                        to='/login'
                        className='nav-link'
                        activeClassName="active"
                    >
                        Login
                    </NavLink>
                </div>
            </div>

            {/* Home page  */}
            <div className="homepage">

                {/* Logo in the home page  */}
                <div className="logo-homepage">
                    <img src={Homepagelogo} alt="Logo" />
                </div>

                {/* The text in the home page  */}
                <div className="hero-text">
                    <h1 className="main-text">
                        Keep up <br />
                        with the era
                    </h1>

                    <p className="the-para">
                        Unlock Potential <br />
                        with Switchboards: Keep Fingers Cool, Performance Hot!
                    </p>

                    <Link to='/search' className="search-button">
                        Search
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Home;