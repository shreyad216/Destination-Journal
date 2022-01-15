import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

//nav bar 

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Destination Journal</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Destinations</Link>
                    </li>
                    <li>
                        <Link to='/add-place'>Add New Destination</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;