import React,{useState,useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {Container,Grid,Grow} from '@mui/material';
import Posts from './components/posts/posts';
import Header from './components/Header/header';
import Form from './components/form/form';
import {getPosts} from './store/actions/posts';


const App=()=>{
    const [currentId,setCurrentId]=useState(0);
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
    return(
        
            <Container maxWidth="lg">
                <Header/>
                <Grow in>
                    <Container >
                        <Grid  container justify="space-between" alignItems="stretch" spacing={8}  >
                            <Grid item xs={12} sm={4} position="relative" >
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={7} >
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
        </Container>
       
        
    );
}

 export default App;
 