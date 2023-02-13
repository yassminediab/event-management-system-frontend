import classes from './button.module.css';
import {Link} from 'react-router-dom'

function Button(props) {
    return (
        <div class="row">
            <div className={classes.rb} >
                <Link to={props.to} className={classes.buttom}>{props.title}</Link>

            </div>
        </div>
    );
}

export default Button;
