function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested');
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i= 0; i <ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + 3).toString();
  }
  
}

function deepestChild() {
  var letsSee= document.querySelector('#deepestChild');
  while (!letSee.children) {
    letsSee=letsSee.children[0];
  }
  return letSee;
}