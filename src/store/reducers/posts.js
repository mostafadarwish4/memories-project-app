export const postsReducer=(posts=[],action)=>{
    switch (action.type) {
        case 'get':
            return action.payload;
        case 'update':
            return posts.map(post=>(
                post._id===action.payload._id?
                {...post,...action.payload}:post))
        case "create":
            return [...posts,action.payload]   
        case "delete":
            return posts.filter(post=>post._id!==action.payload)
        case 'like':
            return (posts.map(post=>(
                post._id===action.payload?
                {...post,likeCount:post.likeCount+1}: post )))
        default:
            return posts;
    }
}