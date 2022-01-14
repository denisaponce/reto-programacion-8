const cosasQueAprendimos = [
  {
    tema: 'terminal',
    class: '',
  },
  {
    tema: 'node',
    class: '',
  },
  {
    tema: 'oop',
    class: '',
  },
  {
    tema: 'flexbox',
    class: '',
  },
  {
    tema: 'css',
    class: '',
  },
  {
    tema: 'dom',
    class: 'special',
  },
];

function main() {
  cosasQueAprendimos.forEach((cosa) => {
    const nuevoItem = document.createElement("li");
    nuevoItem.innerText = cosa.tema;
    cosa.class && nuevoItem.classList.add(cosa.class);
    document.querySelector(".lista").appendChild(nuevoItem);
  });
}

main();

// const terminal = document.createElement('li');
// const node = document.createElement('li');
// const oop = document.createElement('li');
// const flexbox = document.createElement('li');
// const css = document.createElement('li');
// const dom = document.createElement('li');








