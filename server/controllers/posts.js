import PostMessage from '../models/postMessage.js';

//logic for posts for less clutter
export const getPosts = async (req, res) => {
    try{
        //getting info from model, takes time (async)
        const postMessages = await PostMessage.find();
        
        //returns the info in model
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message : error.message });
    }
};

//info sent to form on front-end for posts
export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        //201: a successful creation
        res.status(201).json(newPost);
    } catch (error) {
        //409: a request conflict
        res.status(409).json({ message: error.message });
    }
}