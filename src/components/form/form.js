import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector}from 'react-redux'
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import useStyle from './styles';
import {createPost, updatePost} from '../../store/actions/posts'
const Form=({currentId,setCurrentId})=>{
    const post =useSelector(state=>(currentId?state.posts.find(memory=>memory._id===currentId):null))
    const [postData,setPostData]=useState(currentId? post : ({creator:'',title:'',message:'',tags:[]}))
    const classes=useStyle()
    const dispatch=useDispatch()
    useEffect(()=>{
        if(post) setPostData(post)
    },[post])
    const clear=()=>{
        setCurrentId(0)
        setPostData({creator:'',title:'',message:'',tags:[],selectedFile:''})
    }
    const handleSubmit=e=>{
        e.preventDefault()
        if(currentId===0){
            dispatch(createPost(postData))
        }else{
            dispatch(updatePost(currentId,postData))
        }
        clear()
    }
    return(
    <Paper sx={{p:1}}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography  variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField sx={{margin:"5px 0"}}name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField sx={{margin:"5px 0"}} name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField sx={{margin:"5px 0"}} name="message" variant="outlined" label="Message" fullWidth multiline  rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField sx={{margin:"5px 0"}} name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileBase}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}  /></div>
        <Button sx={{margin:"5px 0 3px 0"}} className={classes.buttonSubmit} variant="contained" color="primary"  type="submit">Submit</Button>
        <Button sx={{marginBottom:1}} className={classes.buttonClear}variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>
      </form>
    </Paper>

    )
}


export default Form;