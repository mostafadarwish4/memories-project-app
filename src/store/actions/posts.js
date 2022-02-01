import axios from '../../api/index';

export const getPosts=()=>async dispatch=>{
    const {data}=await axios.get('/posts')
   dispatch ({type:'get',payload:data})
}

export const createPost=(post)=>async dispatch=>{
    try {
        const {data}=await axios.post('/posts',post)
        dispatch({type:'create',payload:data})
    } catch (e) {
        console.log(e.mesage)
    }
}

export const deletePost=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/posts/${id}`);
        dispatch({type:'delete',payload:id});
    } catch (e) {
        console.log(e)
    }
}

export const updatePost=(id,updateData)=>async dispatch=>{
    try {
        const {data}=await axios.patch(`/posts/${id}`,updateData);
        dispatch({type:'update',payload:{...updateData,_id:id}});
    } catch (e) {
        console.log(e)
    }
}

export const likePost= id => async dispatch=>{
    try{
        await axios.patch(`/posts/${id}/likePost`);
        console.log(id)
        dispatch({type:'like',payload:id});
    }catch(e){
        console.log(e.message)
    }
}