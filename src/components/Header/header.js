import React from 'react';
import useStyles from './styles'
import memories from '../images/memories.png'

const Header=()=>{
    const classes=useStyles();
return (
    <div className={classes.appBar}>
        <h1 className={classes.heading}  align="center" >Memories</h1>
        <img className={classes.image} src={memories} alt="icon" height="50"  />
    </div>
)

}

export default Header;