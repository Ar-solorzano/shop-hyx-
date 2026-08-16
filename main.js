// =======================================================================
// 🚀 HYX_APEX - MOTOR CENTRAL DEL CATÁLOGO, AUTENTICACIÓN Y CARRITO
// =======================================================================

// --- CONFIGURACIÓN EMAILJS ---
const EMAILJS_PUBLIC_KEY = "a5xYcKFPGUcPeasBJ";
const EMAILJS_SERVICE_ID = "service_vq0ts8a";
const EMAILJS_TEMPLATE_RECUPERAR = "template_28ov4g8";
const EMAILJS_TEMPLATE_COMPRA = "template_1flx9b7";

// Esta función se asegura de inicializar EmailJS solo cuando la página ha terminado de cargar
window.addEventListener('load', () => {
    if (typeof emailjs !== "undefined") {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log("✅ EmailJS inicializado correctamente.");
    } else {
        console.error("❌ Error: La librería email.min.js no se ha cargado en el HTML.");
    }
});


if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

// =======================================================================
// 1. BASE DE DATOS DE LOS 102 PRODUCTOS (CORREGIDA AL 100%)
// =======================================================================
const productos = [
    // 🚹 SECCIÓN HOMBRES (IDs 1 al 51)
    { id: 1, nombre: "Sudadera Apex Alpha", precio: 899, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/1.jpg" },
    { id: 2, nombre: "Sudadera Nocturna Hood", precio: 950, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/2.jpg" },
    { id: 3, nombre: "Sudadera Over-Size Black", precio: 820, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/3.jpg" },
    { id: 4, nombre: "Sudadera Apex Tech", precio: 1100, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/4.jpg" },
    { id: 5, nombre: "Sudadera Neon Glitch", precio: 999, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/5.jpg" },
    { id: 6, nombre: "Sudadera Minimalist Gray", precio: 799, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/6.jpg" },
    { id: 7, nombre: "Sudadera Cyber-Punk Edge", precio: 1250, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/7.jpg" },
    { id: 8, nombre: "Sudadera Heavy Cotton", precio: 899, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/8.jpg" },
    { id: 9, nombre: "Sudadera Street King", precio: 920, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/9.jpg" },
    { id: 10, nombre: "Sudadera Dark Zen", precio: 850, categoria: "sudaderas", sexo: "Hombre", imagen: "img/hombres/10.jpg" },
    { id: 11, nombre: "Conjunto Apex Tracksuit", precio: 1899, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/11.jpg" },
    { id: 12, nombre: "Conjunto Jogger & Hoodie", precio: 1650, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/12.jpg" },
    { id: 13, nombre: "Conjunto Neon Dark", precio: 1799, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/13.jpg" },
    { id: 14, nombre: "Conjunto Urban Stealth", precio: 1950, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/14.jpg" },
    { id: 15, nombre: "Conjunto Carbon Fiber", precio: 2100, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/15.jpg" },
    { id: 16, nombre: "Conjunto Cyber Street", precio: 1850, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/16.jpg" },
    { id: 17, nombre: "Conjunto Future Cargo", precio: 1999, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/17.jpg" },
    { id: 18, nombre: "Conjunto Phantom Black", precio: 1750, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/18.jpg" },
    { id: 19, nombre: "Conjunto Core Basic", precio: 1499, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/19.jpg" },
    { id: 20, nombre: "Conjunto Tokyo Drift", precio: 2200, categoria: "conjuntos", sexo: "Hombre", imagen: "img/hombres/20.jpg" },
    { id: 21, nombre: "Playera Apex Graphic", precio: 399, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/21.jpg" },
    { id: 22, nombre: "Playera Cyber Oversize", precio: 450, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/22.jpg" },
    { id: 23, nombre: "Playera Dark Elements", precio: 420, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/23.jpg" },
    { id: 24, nombre: "Playera Neon Future", precio: 480, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/24.jpg" },
    { id: 25, nombre: "Playera Stealth Mode", precio: 399, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/25.jpg" },
    { id: 26, nombre: "Playera Kanji Street", precio: 460, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/26.jpg" },
    { id: 27, nombre: "Playera Acid Wash", precio: 499, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/27.jpg" },
    { id: 28, nombre: "Playera Minimal Logo", precio: 350, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/28.jpg" },
    { id: 29, nombre: "Playera Matrix Digital", precio: 475, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/29.jpg" },
    { id: 30, nombre: "Playera Retro Cyber", precio: 430, categoria: "playeras", sexo: "Hombre", imagen: "img/hombres/30.jpg" },
    { id: 31, nombre: "Pantalón Cargo Stealth", precio: 899, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/31.jpg" },
    { id: 32, nombre: "Pantalón Jogger Future", precio: 799, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/32.jpg" },
    { id: 33, nombre: "Pantalón Cyber Strap", precio: 999, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/33.jpg" },
    { id: 34, nombre: "Pantalón Tactical Black", precio: 1100, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/34.jpg" },
    { id: 35, nombre: "Pantalón Urban Denim", precio: 850, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/35.jpg" },
    { id: 36, nombre: "Pantalón Heavy Fleece", precio: 750, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/36.jpg" },
    { id: 37, nombre: "Pantalón Tech Runner", precio: 920, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/37.jpg" },
    { id: 38, nombre: "Pantalón Relaxed Street", precio: 799, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/38.jpg" },
    { id: 39, nombre: "Pantalón Matrix Cyber", precio: 1050, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/39.jpg" },
    { id: 40, nombre: "Pantalón Neon Line", precio: 880, categoria: "pantalones", sexo: "Hombre", imagen: "img/hombres/40.jpg" },
    { id: 41, nombre: "Tenis Apex Cyberpunk 01", precio: 2299, categoria: "tenis", sexo: "Hombre", imagen: "img/hombres/41.jpg" },
    { id: 42, nombre: "Mochila Tactical Tech", precio: 1200, categoria: "mochilas", sexo: "Hombre", imagen: "img/hombres/42.jpg" },
    { id: 43, nombre: "Lentes Future Matrix", precio: 450, categoria: "accesorios", sexo: "Hombre", imagen: "img/hombres/43.jpg" },
    { id: 44, nombre: "Cinturón Industrial Neon", precio: 250, categoria: "accesorios", sexo: "Hombre", imagen: "img/hombres/44.jpg" },
    { id: 45, nombre: "Calcetines Apex Street", precio: 120, categoria: "accesorios", sexo: "Hombre", imagen: "img/hombres/45.jpg" },
    { id: 46, nombre: "Cangurera Cyber Stealth", precio: 499, categoria: "mochilas", sexo: "Hombre", imagen: "img/hombres/46.jpg" },
    { id: 47, nombre: "Gorro Bucket Cyber", precio: 320, categoria: "accesorios", sexo: "Hombre", imagen: "img/hombres/47.jpg" },
    { id: 48, nombre: "Pulsera Carbon Code", precio: 180, categoria: "accesorios", sexo: "Hombre", imagen: "img/hombres/48.jpg" },
    { id: 49, nombre: "Bufanda Tactical Tech", precio: 299, categoria: "accesorios", sexo: "Hombre", imagen: "img/hombres/49.jpg" },
    { id: 50, nombre: "Guantes Neopreno Apex", precio: 399, categoria: "accesorios", sexo: "Hombre", imagen: "img/hombres/50.jpg" },
    { id: 51, nombre: "Tenis Future Runner 02", precio: 2499, categoria: "tenis", sexo: "Hombre", imagen: "img/hombres/51.jpg" },

    // 🚺 SECCIÓN MUJERES (IDs 52 al 102)
    { id: 52, nombre: "Sudadera Cyber Valkyrie", precio: 920, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/52.jpg" },
    { id: 53, nombre: "Sudadera Neon Goddess", precio: 899, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/53.jpg" },
    { id: 54, nombre: "Sudadera Crop Cyberpunk", precio: 799, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/54.jpg" },
    { id: 55, nombre: "Sudadera Dark Moon", precio: 850, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/55.jpg" },
    { id: 56, nombre: "Sudadera Future Pastel", precio: 880, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/56.jpg" },
    { id: 57, nombre: "Sudadera Over-Size Pink", precio: 820, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/57.jpg" },
    { id: 58, nombre: "Sudadera Cyber Matrix", precio: 1150, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/58.jpg" },
    { id: 59, nombre: "Sudadera Urban Quartz", precio: 899, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/59.jpg" },
    { id: 60, nombre: "Sudadera Stealth Vixen", precio: 999, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/60.jpg" },
    { id: 61, nombre: "Sudadera Hologram Tech", precio: 1200, categoria: "sudaderas", sexo: "Mujer", imagen: "img/mujeres/61.jpg" },
    { id: 62, nombre: "Conjunto Valkyrie Suit", precio: 1950, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/62.jpg" },
    { id: 63, nombre: "Conjunto Crop & Jogger", precio: 1599, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/63.jpg" },
    { id: 64, nombre: "Conjunto Neon Quartz", precio: 1799, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/64.jpg" },
    { id: 65, nombre: "Conjunto Carbon Vixen", precio: 1999, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/65.jpg" },
    { id: 66, nombre: "Conjunto Pastel Tech", precio: 1699, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/66.jpg" },
    { id: 67, nombre: "Conjunto Future Cyber", precio: 1850, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/67.jpg" },
    { id: 68, nombre: "Conjunto Stealth Girl", precio: 1750, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/68.jpg" },
    { id: 69, nombre: "Conjunto Matrix Cyber", precio: 2100, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/69.jpg" },
    { id: 70, nombre: "Conjunto Tokyo Vibe", precio: 1899, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/70.jpg" },
    { id: 71, nombre: "Conjunto Cyber Athletic", precio: 1499, categoria: "conjuntos", sexo: "Mujer", imagen: "img/mujeres/71.jpg" },
    { id: 72, nombre: "Playera Cyber Vixen", precio: 380, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/72.jpg" },
    { id: 73, nombre: "Playera Crop Neon", precio: 350, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/73.jpg" },
    { id: 74, nombre: "Playera Kanji Queen", precio: 420, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/74.jpg" },
    { id: 75, nombre: "Playera Graphic Apex", precio: 399, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/75.jpg" },
    { id: 76, nombre: "Playera Dark Goddess", precio: 450, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/76.jpg" },
    { id: 77, nombre: "Playera Holographic", precio: 480, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/77.jpg" },
    { id: 78, nombre: "Playera Cyber Matrix", precio: 410, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/78.jpg" },
    { id: 79, nombre: "Playera Pastel Cyber", precio: 390, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/79.jpg" },
    { id: 80, nombre: "Playera Futuristic", precio: 460, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/80.jpg" },
    { id: 81, nombre: "Playera Minimal Apex", precio: 330, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/81.jpg" },
    { id: 82, nombre: "Playera Cyber Angel", precio: 440, categoria: "playeras", sexo: "Mujer", imagen: "img/mujeres/82.jpg" },
    { id: 83, nombre: "Pantalón Jogger Vixen", precio: 799, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/83.jpg" },
    { id: 84, nombre: "Pantalón Cargo Valkyrie", precio: 899, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/84.jpg" },
    { id: 85, nombre: "Pantalón Cyber Strap Girl", precio: 950, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/85.jpg" },
    { id: 86, nombre: "Pantalón Tactical Queen", precio: 1050, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/86.jpg" },
    { id: 87, nombre: "Pantalón Pastel Jogger", precio: 750, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/87.jpg" },
    { id: 88, nombre: "Pantalón Neon Line Girl", precio: 820, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/88.jpg" },
    { id: 89, nombre: "Pantalón Urban Cargo", precio: 880, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/89.jpg" },
    { id: 90, nombre: "Pantalón Future Denim", precio: 920, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/90.jpg" },
    { id: 91, nombre: "Pantalón Matrix Leggings", precio: 690, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/91.jpg" },
    { id: 92, nombre: "Pantalón Tech Streetwear", precio: 899, categoria: "pantalones", sexo: "Mujer", imagen: "img/mujeres/92.jpg" },
    { id: 93, nombre: "Tenis Valkyrie Step 01", precio: 2199, categoria: "tenis", sexo: "Mujer", imagen: "img/mujeres/93.jpg" },
    { id: 94, nombre: "Mochila Hologram Mini", precio: 950, categoria: "mochilas", sexo: "Mujer", imagen: "img/mujeres/94.jpg" },
    { id: 95, nombre: "Lentes Valkyrie Vision", precio: 420, categoria: "accesorios", sexo: "Mujer", imagen: "img/mujeres/95.jpg" },
    { id: 96, nombre: "Choker Industrial Neon", precio: 199, categoria: "accesorios", sexo: "Mujer", imagen: "img/mujeres/96.jpg" },
    { id: 97, nombre: "Calcetas Cyber High", precio: 150, categoria: "accesorios", sexo: "Mujer", imagen: "img/mujeres/97.jpg" },
    { id: 98, nombre: "Cangurera Neon Quartz", precio: 450, categoria: "mochilas", sexo: "Mujer", imagen: "img/mujeres/98.jpg" },
    { id: 99, nombre: "Arnés Tactical Fashion", precio: 590, categoria: "accesorios", sexo: "Mujer", imagen: "img/mujeres/99.jpg" },
    { id: 100, nombre: "Aretes Carbon Cyber", precio: 120, categoria: "accesorios", sexo: "Mujer", imagen: "img/mujeres/100.jpg" },
    { id: 101, nombre: "Guantes Crop Cyber", precio: 290, categoria: "accesorios", sexo: "Mujer", imagen: "img/mujeres/101.jpg" },
    { id: 102, nombre: "Tenis Quartz Cyber 02", precio: 2350, categoria: "tenis", sexo: "Mujer", imagen: "img/mujeres/102.jpg" }
];
// Una imagen representativa reutilizada por cada sección del catálogo.
const imagenesPorCategoria = {
    sudaderas: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=900&auto=format&fit=crop",
    conjuntos: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    playeras: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop",
    pantalones: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=900&auto=format&fit=crop",
    tenis: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=900&auto=format&fit=crop",
    mochilas: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=900&auto=format&fit=crop",
    accesorios: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?q=80&w=900&auto=format&fit=crop"
};

const imagenFallback = "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop";

// Estado global de la App
let carrito = [];
let codigoVerificacionTemporal = "";
let correoEnRecuperacion = "";
let sexoFiltroActivo = "todos";

// Elementos del DOM del catálogo
const contenedorProductos = document.getElementById('contenedor-productos');
const buscador = document.getElementById('buscador');
const botonesCategoria = document.querySelectorAll('.btn-categoria');
const enlacesSexo = document.querySelectorAll('[data-filtro-sexo]');

// =======================================================================
// 2. RENDERIZACIÓN DE PRODUCTOS
// =======================================================================
function mostrarProductos(lista) {
    if (!contenedorProductos) return;
    contenedorProductos.innerHTML = "";

    if (lista.length === 0) {
        contenedorProductos.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#a0aec0; padding:50px 0;">No hay artículos vinculados a esa selección.</p>`;
        return;
    }

    lista.forEach(prod => {
        const card = document.createElement('div');
        const imagenSeccion = imagenesPorCategoria[prod.categoria] || imagenFallback;
        card.className = 'producto-card';
        card.innerHTML = `
            <div class="producto-img-box">
            <img
            src="${imagenSeccion}"
            alt="${prod.categoria} - ${prod.nombre}"
            loading="lazy"
            onerror="this.onerror=null; this.src='${imagenFallback}';"
        >
            </div>imagen
            <div>
                <p class="producto-tag">${prod.sexo} | ${prod.categoria}</p>
                <h4>${prod.nombre}</h4>
                <p class="producto-precio">$${prod.precio.toLocaleString('es-MX')}</p>
            </div>
            <button class="btn-agregar-carro" onclick="agregarAlCarrito(${prod.id})">Agregar al Carrito</button>
        `;
        contenedorProductos.appendChild(card);
    });
}

// =======================================================================
// 3. FILTRADO INTELIGENTE (Buscador + Categoría + Género)
// =======================================================================
function filtrarCatalogo() {
    const textoBuscado = buscador.value.toLowerCase().trim();
    const botonActivo = document.querySelector('.btn-categoria.activo');
    const categoriaActiva = botonActivo ? botonActivo.getAttribute('data-categoria') : 'todos';

    const filtrados = productos.filter(prod => {
        const coincideTexto = prod.nombre.toLowerCase().includes(textoBuscado);
        const coincideCategoria = (categoriaActiva === 'todos' || prod.categoria === categoriaActiva);
        const coincideSexo = (sexoFiltroActivo === 'todos' || prod.sexo === sexoFiltroActivo);
        return coincideTexto && coincideCategoria && coincideSexo;
    });

    mostrarProductos(filtrados);
}

if (buscador) buscador.addEventListener('input', filtrarCatalogo);

botonesCategoria.forEach(btn => {
    btn.addEventListener('click', () => {
        botonesCategoria.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        filtrarCatalogo();
    });
});

enlacesSexo.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        enlacesSexo.forEach(l => l.classList.remove('activo'));
        enlace.classList.add('activo');
        sexoFiltroActivo = enlace.getAttribute('data-filtro-sexo');
        filtrarCatalogo();
    });
});

// =======================================================================
// 4. LÓGICA DEL CARRITO DE COMPRAS (GENERACIÓN DE COMPRAS)
// =======================================================================
const modalCarrito = document.getElementById('modal-carrito');
const btnAbrirCarrito = document.getElementById('btn-carrito');
const btnCerrarCarrito = document.getElementById('btn-cerrar-carrito');
const contenedorCarritoItems = document.getElementById('contenedor-carrito-items');
const carritoTotalPrecio = document.getElementById('carrito-total-precio');
const cartCountElement = document.getElementById('cart-count');
const btnFinalizarCompra = document.getElementById('btn-finalizar-compra');

function agregarAlCarrito(id) {
    const itemEncontrado = productos.find(p => p.id === id);
    if (!itemEncontrado) return;

    const existe = carrito.find(item => item.id === id);
    if (existe) {
        existe.cantidad += 1;
    } else {
        carrito.push({ ...itemEncontrado, cantidad: 1 });
    }
    actualizarCarritoUI();
}

function quitarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarritoUI();
}

function actualizarCarritoUI() {
    if (!contenedorCarritoItems) return;
    contenedorCarritoItems.innerHTML = "";
    
    let totalCuenta = 0;
    let totalPrendas = 0;

    if (carrito.length === 0) {
        contenedorCarritoItems.innerHTML = `<p style="text-align:center; color:#a0aec0; padding:20px 0;">El carrito está vacío.</p>`;
    } else {
        carrito.forEach(item => {
            totalCuenta += item.precio * item.cantidad;
            totalPrendas += item.cantidad;

            const fila = document.createElement('div');
            fila.className = "carrito-item-fila";
            fila.innerHTML = `
                <div class="item-detalles">
                    <h5>${item.nombre} (x${item.cantidad})</h5>
                    <span>$${(item.precio * item.cantidad).toLocaleString('es-MX')}</span>
                </div>
                <button class="btn-quitar-item" onclick="quitarDelCarrito(${item.id})">Eliminar</button>
            `;
            contenedorCarritoItems.appendChild(fila);
        });
    }

    carritoTotalPrecio.textContent = `$${totalCuenta.toLocaleString('es-MX')}.00`;
    cartCountElement.textContent = totalPrendas;
}

// Ventana del carrito
if (btnAbrirCarrito) btnAbrirCarrito.addEventListener('click', () => modalCarrito.classList.add('mostrar'));
if (btnCerrarCarrito) btnCerrarCarrito.addEventListener('click', () => modalCarrito.classList.remove('mostrar'));

// ACCIÓN: GENERAR COMPRA REAL
if (btnFinalizarCompra) {
    btnFinalizarCompra.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert("No tienes prendas en tu carrito para generar un pedido.");
            return;
        }
        
        let desglose = "📦 NUEVA COMPRA GENERADA EN HYX_APEX:\n\n";
        carrito.forEach(item => {
            desglose += `- ${item.nombre} x${item.cantidad} ($${(item.precio * item.cantidad).toLocaleString('es-MX')})\n`;
        });
        desglose += `\nTotal Final: ${carritoTotalPrecio.textContent}\n\n¡Gracias por tu compra! Tu orden ya está en procesamiento.`;
        
        alert(desglose);
        
        // Limpiamos la cesta
        carrito = [];
        actualizarCarritoUI();
        modalCarrito.classList.remove('mostrar');
    });
}

// =======================================================================
// 5. CONTROL DEL MODAL DE ACCESO (VISTAS INTERNAS)
// =======================================================================
const modalAuth = document.getElementById('modal-auth');
const btnAbrirAuth = document.getElementById('btn-abrir-auth');
const btnCerrarAuth = document.getElementById('btn-cerrar-auth');

const vistaLogin = document.getElementById('vista-login');
const vistaRegistro = document.getElementById('vista-registro');
const vistaRecuperar = document.getElementById('vista-recuperar');

function irAVista(vista) {
    vistaLogin.style.display = "none";
    vistaRegistro.style.display = "none";
    vistaRecuperar.style.display = "none";
    vista.style.display = "block";
}

if (btnAbrirAuth && modalAuth) {
    btnAbrirAuth.addEventListener('click', () => {
        irAVista(vistaLogin);
        modalAuth.classList.add('mostrar');
    });
}
if (btnCerrarAuth) btnCerrarAuth.addEventListener('click', () => modalAuth.classList.remove('mostrar'));

document.getElementById('link-ir-registro').addEventListener('click', () => irAVista(vistaRegistro));
document.getElementById('link-ir-login').addEventListener('click', () => irAVista(vistaLogin));
document.getElementById('link-ir-recuperar').addEventListener('click', () => irAVista(vistaRecuperar));
document.getElementById('link-volver-login').addEventListener('click', () => irAVista(vistaLogin));

// Envío simulado de Formularios
document.getElementById('form-login').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Sesión validada e iniciada con éxito!");
    modalAuth.classList.remove('mostrar');
});

document.getElementById('form-registro').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Nuevo perfil VIP registrado de manera exitosa!");
    irAVista(vistaLogin);
});

// =======================================================================
// 6. RECUPERAR CONTRASEÑA ENLAZADO CON EMAILJS
// =======================================================================
const formRecuperar = document.getElementById('form-recuperar-correo');
const btnEnviarCodigo = document.getElementById('btn-enviar-codigo');
const seccionNuevoPass = document.getElementById('seccion-nuevo-pass');
const correoInput = document.getElementById('correo-recuperar');

if (formRecuperar) {
    formRecuperar.addEventListener('submit', (e) => {
        e.preventDefault();

        codigoVerificacionTemporal = Math.floor(100000 + Math.random() * 900000).toString();
        correoEnRecuperacion = correoInput.value.trim();

        btnEnviarCodigo.textContent = "Transmitiendo código...";
        btnEnviarCodigo.disabled = true;

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_RECUPERAR, {
            to_email: correoEnRecuperacion,
            codigo_seguridad: codigoVerificacionTemporal
        })
        .then(() => {
            alert(`Código enviado.\nVerifica tu correo electrónico en: ${correoEnRecuperacion}`);
            seccionNuevoPass.style.display = "flex";
            btnEnviarCodigo.textContent = "Reenviar Código";
            btnEnviarCodigo.disabled = false;
        })
        .catch((err) => {
            alert("Error de credenciales de EmailJS. Verifica tu ID de Servicio o Plantilla.");
            console.error(err);
            btnEnviarCodigo.textContent = "Reintentar";
            btnEnviarCodigo.disabled = false;
        });
    });
}

const btnValidarCodigo = document.getElementById('btn-validar-codigo');
const inputCodigoIngresado = document.getElementById('recuperar-codigo');
const inputNuevaContra = document.getElementById('recuperar-nuevo-password');

if (btnValidarCodigo) {
    btnValidarCodigo.addEventListener('click', () => {
        const codigo = inputCodigoIngresado.value.trim();
        if (codigo === codigoVerificacionTemporal && codigoVerificacionTemporal !== "") {
            alert(`¡Proceso Completado!\nLa contraseña para ${correoEnRecuperacion} se ha reestablecido.`);
            modalAuth.classList.remove('mostrar');
            formRecuperar.reset();
            seccionNuevoPass.style.display = "none";
            codigoVerificacionTemporal = "";
        } else {
            alert("Código de seguridad incorrecto.");
        }
    });
}

// Desplazamiento de pantalla suave
const btnScroll = document.getElementById('btn-scroll-catalogo');
if (btnScroll) {
    btnScroll.addEventListener('click', () => {
        document.querySelector('.filtros-seccion').scrollIntoView({ behavior: 'smooth' });
    });
}

// Inicialización de la Tienda
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
});