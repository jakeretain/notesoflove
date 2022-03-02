var msgs = [
  "Note #1\nOne",
  "Note #2\nTwo",
  "Note #3\nThree",
  "Note #4\nFour",
  "Note #5\nFive",
  "Note #6\nSix",
  "Note #7\nSeven"
  ]

  var btn = document.querySelector('#nl-frame-btn');
  var txt = document.querySelector('#nl-frame-note');

  btn.addEventListener('click', function(){

  var target = Math.floor( Math.random() * msgs.length );
  for (var i = 0; i < msgs.length; i++) {
  cycle(i, target)
}
})

  function cycle(i, target){
  setTimeout(function() {
    if(i === msgs.length - 1) {
      txt.innerText = msgs[target]
    } else {
      txt.innerText = msgs[i]
    }
  }, 100 * i)
}
