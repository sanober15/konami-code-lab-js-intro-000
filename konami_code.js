const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0
  const s = document.querySelectorAll('body')
  for (var i = 0; i < code.length; i++) {
    let code[i] = parseInt(input.which || input.detail);
    input.addEventListener('keydown', function(e){
      if (e.which === input) {
        alert ("Hurray!");
      }
    })
  }
}