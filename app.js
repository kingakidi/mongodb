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

// SCHEMA 

const personSchema = new mongoose.Schema({
    age: Number, 
    name: String, 
    qualify: Boolean
})
// MODEL 

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: "Aka'aba Musa Akidi", 
    age: 26, 
    qualify: true
})

// person.save()

Post.find(function (err, post) {
    // err ? console.log(error) : console.log(post)

    if (err) {
        console.log(err)
    }else{
        post.forEach(el=>{
            console.log(el.text)
        })
    }

})