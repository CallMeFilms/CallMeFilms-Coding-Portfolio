window.onscroll = function() {changeNav()};

function changeNav() {
  var anchs = document.getElementById('headerNav').getElementsByTagName('a');
  if (document.body.scrollTop > (window.innerHeight * 2 - 100) || document.documentElement.scrollTop > (window.innerHeight * 2 - 100)) {
    for (var i = 0; i < anchs.length; i++) {
      if(anchs[i].className == 'orangeToBlueNav' || anchs[i].className == 'brightOrangeToBlueNav') {
        anchs[i].className = 'blueToBrightOrangeNav';
      }
    }
  } else if(document.body.scrollTop > (window.innerHeight - 100) || document.documentElement.scrollTop > (window.innerHeight - 100)) {
    for (var i = 0; i < anchs.length; i++) {
      if(anchs[i].className == 'blueToOrangeNav') {
        anchs[i].className = 'orangeToBlueNav';
      } else if(anchs[i].className == 'blueToBrightOrangeNav') {
        anchs[i].className = 'brightOrangeToBlueNav';
      } else {
        anchs[i].className = 'orangeToBlueNav';
      }
    }
  } else if(document.body.scrollTop < window.innerHeight || document.documentElement.scrollTop < window.innerHeight) {
    for (var i = 0; i < anchs.length; i++) {
      if(anchs[i].className == 'orangeToBlueNav' || anchs[i].className == 'brightOrangeToBlueNav') {
      anchs[i].className = 'blueToOrangeNav';
      }
    }
  }
}
