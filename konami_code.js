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

function init() {
  let i = 0
  document.body.addEventListener('keydown', (e) => {
    const key = e.key
    i = (key === codes[i]) ? ++i : 0 
    if (i === codes.length) {
      alert("SWEEEEET!");
      i = 0
    }});
}
