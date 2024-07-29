
function crearNuevoElemento(tagName, contenido) {
    const nuevoElemento = document.createElement(tagName);
    nuevoElemento.textContent = contenido;
    document.body.appendChild(nuevoElemento);
  }
  
  // Ejemplo de uso:
  crearNuevoElemento('p', '¡Hola desde una nueva función!');
  