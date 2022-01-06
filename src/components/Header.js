import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div>
            <nav className="nav">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link"  exact="true"  to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/note">Note</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/create">Create</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Header