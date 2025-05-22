const formulario = document.getElementById('formularioLibro');
const carrito = document.getElementById('carrito');
const total = document.getElementById('total');

let suma = 0;

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value.trim();
  const precio = parseFloat(document.getElementById('precio').value);

  if (!titulo || isNaN(precio) || precio <= 0) {
    alert('Ingrese datos válidos');
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${titulo} - $${precio}`;
  li.classList.add('list-group-item');
  carrito.appendChild(li);

  suma += precio;
  total.textContent = suma;

  formulario.reset();
});
