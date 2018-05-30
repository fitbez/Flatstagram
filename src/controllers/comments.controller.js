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
