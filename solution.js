class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.comment = {};
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // create comment form listener code here
    this.$addCommentForm.on('submit', function(event) {
      event.preventDefault(); // so that the defualt behaviour of forms won't happen
      const imageId = $(this).data('id');
      const commentText = $(this).children('.user-text').val();
      const aComment = new Comment(commentText, imageId);
        CommentsController.render(aComment);
    });
  }

  static render(comment) {
    const ul =$(`ul#comments-${comment.imageId}`);
    ul.append(`<li>${comment.commentContent}</li>`);
  }
}

// create Comment class here
class Comment {
  constructor(commentContent, imageId) {
    this.id = Comment.all.length;
    this.imageId = imageId;
    this.commentContent = commentContent;
    Comment.all.push(this)
  }

static findImage(imageId) {
  const theImage = Image.all[imageId];
  theImage.comments = Comment.all.filter(eachComment => eachComment.imageId === imageId);
  return theImage;
  }

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
