// create Comment class here
class Comment {
  constructor(commentContent, imageId) {
    this.id = Comment.all.length;
    this.imageId = imageId;
    this.commentContent = commentContent;
    Comment.all.push(this)
  }
}
