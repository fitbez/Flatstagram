class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.comment = {};

  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
    this.removeCommentListener();
  }

 // method
removeCommentListener() {
  this('body').on('click', '.destroy-comment' function(){
    const imageId = $(this).data('commentid');
    $(this).splice(imageId, 1);
    Comment.all.parent('li').remove();
  })
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

// appends the comment to the ul of the image
  static render(comment) {
    const ul =$(`ul#comments-${comment.imageId}`);
    ul.append(`<li><button data-commentid =${Comment.all.length -1} class= 'destroy-comment'>x</button>${comment.commentContent}</li>`);
  }
};
