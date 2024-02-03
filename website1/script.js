

// script.js
function postComment() {
    const postInput = document.getElementById('postInput');
    
    if (postInput.value.trim() === '') return;

    const post = document.createElement('div');
    post.classList.add('post');
    
    // You can add more complex HTML structure for posts with user image, like button, etc.
    
    const postContent = document.createElement('p');
    postContent.textContent = postInput.value;
    
    const likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', function() {
        toggleLike(this);
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deletePost(this);
    });
    
    const commentInput = document.createElement('input');
    commentInput.placeholder = 'Add a comment';
    
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', function() {
        addComment(this);
    });
    
    const commentSection = document.createElement('div');
    commentSection.classList.add('comment-section');
    
    post.appendChild(postContent);
    post.appendChild(likeButton);
    post.appendChild(deleteButton);
    post.appendChild(commentInput);
    post.appendChild(commentButton);
    post.appendChild(commentSection);
    
    document.getElementById('feed').prepend(post);
    postInput.value = '';
}

function deletePost(button) {
    const post = button.closest('.post');
    post.remove();
}

function addComment(button) {
    const post = button.closest('.post');
    const commentInput = post.querySelector('input');
    const commentSection = post.querySelector('.comment-section');
    const comment = document.createElement('p');
    comment.textContent = commentInput.value;
    commentSection.appendChild(comment);
    commentInput.value = '';
}

function toggleLike(button) {
    if (button.textContent === 'Like') {
        button.textContent = 'Unlike';
    } else {
        button.textContent = 'Like';
    }
}