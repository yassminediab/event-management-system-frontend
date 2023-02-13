import {Link} from 'react-router-dom';
import classes from './mainNavigation.module.css';

function MainNavigation() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if(token && !user?.company?.id) {
        return (<UserNavigation/>)
    }
    if(token && !!user?.company?.id) {
        return (<CompanyNavigation/>)
    }
    return (<GuestNavigation/>)
}

function GuestNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}> Event Management system</div>
            <nav>
                <ul>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/register/company'>Register as a company</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>


        </header>

    );
}
function UserNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}> Event Management system</div>
            <nav>
                <ul>
                    <li><Link to='/companies'>Companies</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/events'>Events</Link></li>
                    <li><Link to='/userEvents'>My Events</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                </ul>
            </nav>


        </header>

    );
}

function CompanyNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}> Event Management system</div>
            <nav>
                <ul>
                    <li><Link to='/companyEvents'>My Events</Link></li>
                    <li><Link to='/company/profile'>Profile</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                </ul>
            </nav>
        </header>

    );
}

export default MainNavigation;
