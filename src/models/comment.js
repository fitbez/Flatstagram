// create Comment class here
class Comment {
  constructor(commentContent, imageId) {
    this.id = Comment.all.length;
    this.imageId = imageId;
    this.commentContent = commentContent;
    Comment.all.push(this)
  }

// returns the full detials of an image
  static findImage(imageId) {
    const theImage = Image.all[imageId];
    theImage.comments = Comment.all.filter(eachComment => eachComment.imageId === imageId);
    return theImage;
    }

// returns html string equivalent of all comments
    static commentEl() {
      let htmlString = '';
      Comment.all.forEach(eachComment => {
        htmlString += `<li
        id="comment-text-${eachcomment.id}">${eachComment.commentContent}</li>`;
      });
      return htmlString;
    }
}

Comment.all = [];
