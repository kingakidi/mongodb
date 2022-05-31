const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/posts')

const postSchema = new mongoose.Schema({
    title: String, 
    text: String,
    username: String
})

const Post = mongoose.model('Post', postSchema)

const post = new Post({
    title: "Breaking News", 
    text: "Wicast has initiate the projection of yield your voice to the nations", 
    username: "kingakidi"
})

// post.save()

