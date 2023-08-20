
import {Link} from 'react-router-dom'
import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";

function MainHeader(props) {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>
            <MdMessage></MdMessage>
            React Poster
        </h1>
        <p>
            {/* <button className={classes.button} onClick={props.onSayingHi}>Say Hi!</button> */}
            <Link to="/create-post" className={classes.button}>
                <MdPostAdd size={18}/>
                New Post 
            </Link>
        </p>
      </header>
    </>
  );
}

export default MainHeader;
