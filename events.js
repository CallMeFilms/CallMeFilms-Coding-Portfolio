window.onscroll = function() {changeNav()};

function changeNav() {
  var anchs = document.getElementById('headerNav').getElementsByTagName('a');
  if(document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    for (var i = 0; i < anchs.length; i++) {
      anchs[i].className = 'blueNav';
    }
  } else if (document.body.scrollTop < window.innerHeight || document.documentElement.scrollTop < window.innerHeight) {
    for (var i = 0; i < anchs.length; i++) {
      if(anchs[i].className == 'blueNav') {
      anchs[i].className = 'orangeNav';
      }
    }
  }
}
