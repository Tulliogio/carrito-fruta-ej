const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const fragment = document.createDocumentFragment()

const botones = document.querySelectorAll('.card .btn')

const carritoObjecto = {}

const agregarCarrito = (e) => {


     const producto = {
          titulo: e.target.dataset.fruta,
          cantidad: 1
     };

     if (carritoObjecto.hasOwnProperty(producto.titulo)) {
          
          producto.cantidad = carritoObjecto[producto.titulo].cantidad + 1
     }


     carritoObjecto[producto.titulo] = producto;

     pintarCarrito();
}

const pintarCarrito = () => {
     carrito.textContent = ""


     Object.values(carritoObjecto).forEach((item) => {
          const clone = template.content.firstElementChild.cloneNode(true)
          clone.querySelector('.lead').textContent = item.titulo
          clone.querySelector('.badge').textContent = item.cantidad 

          fragment.appendChild(clone)



     })
     carrito.appendChild(fragment)
}

botones.forEach((btn) => {
     btn.addEventListener('click',agregarCarrito)
})

