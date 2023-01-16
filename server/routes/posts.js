import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//executes when visiting localhost5000/posts (middleware is in index.js)
router.get('/', getPosts);
router.post('/', createPost);


export default router;