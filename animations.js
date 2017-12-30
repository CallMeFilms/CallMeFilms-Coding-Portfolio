function expandText(num) {
  var anch = document.getElementById('icon' + num);
  var para = anch.getElementsByTagName('p')[0];
  if(para.id == 'linkedIn') {
    para.innerHTML = 'L';
  } else {
    para.innerHTML = 'T';
  }
  para.style.display = 'block';
  var addInterval = setInterval(addLetter, 50, para.id, addInterval);
}

function addLetter(identity, interval) {
  var para = document.getElementById(identity);
  switch(para.innerHTML) {
    case 'L':
    para.innerHTML = 'Li';
    break;
    case 'Li':
    para.innerHTML = 'Lin';
    break;
    case 'Lin':
    para.innerHTML = 'Link';
    break;
    case 'Link':
    para.innerHTML = 'Linke';
    break;
    case 'Linke':
    para.innerHTML = 'Linked';
    break;
    case 'Linked':
    para.innerHTML = 'LinkedI';
    break;
    case 'LinkedI':
    para.innerHTML = 'LinkedIn';
    clearInterval(interval);
    break;
    case 'T':
    para.innerHTML = 'Tw';
    break;
    case 'Tw':
    para.innerHTML = 'Twi';
    break;
    case 'Twi':
    para.innerHTML = 'Twit';
    break;
    case 'Twit':
    para.innerHTML = 'Twitt';
    break;
    case 'Twitt':
    para.innerHTML = 'Twitte';
    break;
    case 'Twitte':
    para.innerHTML = 'Twitter';
    break;
  }
}

function setRemove(num) {
  clearInterval(addInterval);
  var anch = document.getElementById('icon' + num);
  var para = anch.getElementsByTagName('p')[0];
  var removeInterval = setInterval(removeText, 50, para.id, removeInterval);
}

function removeText(identity, interval) {
  var para = document.getElementById(identity);
  switch(para.innerHTML) {
    case 'LinkedIn':
    para.innerHTML = 'LinkedI';
    break;
    case 'LinkedI':
    para.innerHTML = 'Linked';
    break;
    case 'Linked':
    para.innerHTML = 'Linke';
    break;
    case 'Linke':
    para.innerHTML = 'Link';
    break;
    case 'Link':
    para.innerHTML = 'Lin';
    break;
    case 'Lin':
    para.innerHTML = 'Li';
    break;
    case 'Li':
    para.innerHTML = 'L';
    clearInterval(interval);
    break;
  }
}
