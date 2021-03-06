const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   DOB: {
      type: Date,
      required: true
   },
   isSuspended: {
      type: Boolean,
      required: true
   },
   blogs: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
   }],
   articles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article"
   }]
});

const ArticleSchema = new Schema({
   title:{
      type: String,
      required: true
   }, 
   body:{
      type: String,
      required: true
   },
   date: {
      type: Date,
      required: true
   },
   comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
   }],
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   }
})



const CommentSchema = new Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   date: {
      type: Date,
      required: true
   },
   content:{
      type: String,
      required: true
   }
})


const User = mongoose.model("User", UserSchema);
const Article = mongoose.model("Article", ArticleSchema);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = {User, Article, Comment}