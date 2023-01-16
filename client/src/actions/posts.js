//import every call (*) from api as var api
import * as api from '../api'; 

//returns something that occurred in the App
//instead of return, dispatch the action performed
export const getPosts = () => async (dispatch) => {
    //handle data from response
    try{
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data} );
    } catch(error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        
        dispatch({ type: 'CREATE', payload: data } );
    } catch (error) {
        console.log(error);
    }
}