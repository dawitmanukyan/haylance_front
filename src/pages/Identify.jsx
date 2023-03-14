import { Link } from 'react-router-dom';
import classes from '../style/Identify.module.css';

function Identify() {
    return (
        <div className={classes.identifydiv}>
            <div className={classes.iden}>
                <p className={classes.identifypass}>Password Reset</p>
                <hr></hr>
                <div className={classes.identifyinstdiv}>
                    <p className={classes.identifyinst}>Please write your email, after which an email with a special code will be sent to it (Attention, do not tell this code to anyone)</p>
                </div>
                <form method='post' className={classes.identify_form}>
                    <input type={'email'} placeholder='Email' className={classes.identifyinpt}/>
                    <button className={classes.identifybtn}>Send</button>
                    <Link to='/signin'>
                        <button className={classes.identifycnbtn}>Cancel</button>
                    </Link>
                    <div className={classes.identifyerrordiv}>
                        <p className={classes.identifyerror}>inncorect Email</p>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Identify;