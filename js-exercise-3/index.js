function getComment() {
  var arrComment = JSON.parse(localStorage.getItem('comment'));
  if (arrComment) {
    arrComment = arrComment;
  } else {
    arrComment = [];
  }
  return arrComment;
}
var arrComment = getComment();
var $commentList = document.getElementById('js-comment-list');

function showComment() {
  $commentList.innerHTML = '';
  for (var i = 0; i < arrComment.length; i++) {
    $commentList.innerHTML +=
      '<li class="comment-item" id="js-comment">' +
      '<a class="comment-link" href="#"><img class="img-avatar" src="./images/avatar.jpg"></a>' +
      '<ul class="comment-card">' +
      '<li class="card-item">' +
      '<h3 class="name-user">Name user</h3>' +
      '</li>' +
      '<li class="cart-item">' +
      '<p class="comment-detail">' + arrComment[i] + '</p>' +
      '</li>' +
      '</ul>' +
      '<button type="button" class="btn-delete-comment" data-id="' + i + '">X</button>' +
    '</li>'
  }
  deleteComment();
  countComment();
}
showComment();

function countComment() {
  var $count = document.getElementById('js-count-comment');
  if (arrComment) {
    $count.innerHTML = '(' + arrComment.length + ')';
  } else {
    $count.innerHTML = '(0)';
  }
}

function addComment() {
  var $btnAdd = document.getElementById('js-btn-add');
  $btnAdd.addEventListener('click', function (event) {
    var strComment = document.getElementById('js-input-comment').value;
    if (strComment) {
      arrComment.push(strComment);
      localStorage.setItem('comment', JSON.stringify(arrComment));
      showComment();
      document.getElementById('js-input-comment').value = '';
    } else {
      alert('Nothing to comment');
    }
  })
}
addComment();

function deleteComment() {
  var $btnDelete = document.getElementsByClassName('btn-delete-comment');
  for (var i = 0; i < $btnDelete.length; i++) {
    $btnDelete[i].addEventListener('click', function (event) {
      var idDelete = event.target.dataset.id;
      arrComment.splice(idDelete, 1);
      localStorage.setItem('comment', JSON.stringify(arrComment));
      showComment();
      // deleteComment();
    });
  }
}
