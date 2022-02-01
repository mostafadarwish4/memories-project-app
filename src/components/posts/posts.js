import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import Post from './post/post';
const Posts=({setCurrentId})=>{
    const posts=useSelector(state=>state.posts);
    const classes=useStyles()
    return(
        !posts.length ? <CircularProgress /> : (
      <Grid className={classes.main} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>

    ))
}


export default Posts;