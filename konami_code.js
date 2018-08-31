const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

document.body.addEventListener('keydown', e => init(e))
let i;

function init(e) {
  if (i) {
    i = i
  } else {
    i = 0
  }

  const key = e.key

  if (key === codes[i] && i === codes.length - 1) {
    i = 0
    alert('Yay!')
  } else if (key === codes[i]) {
    i++
  } else {
    i = 0
  }

}
