import styles from '../styles/Homepage.module.css';
import { Link } from "react-router-dom";

function Homepage(){
    return <div className={styles.mainContainer}>
        <h1>Welcome to the Random Store</h1>
        <p>
            Step into a world where everything is a little unexpected. <br></br>
            From stylish clothing to curious gadgets, our shelves are stocked <br></br>
            with all sorts of random treasures waiting to be discovered. <br></br>
        </p>
        <p> 
            Click
            <Link to="/shop" className={styles.shopLink}> here </Link> 
            to start your journey
        </p>
        </div>
}

export default Homepage;
