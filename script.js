'use strict';

// ===== BASE DE DATOS (20 JUGADORES) =====
const cartasJugadores = [
    // --- JUGADORES ORIGINALES ---
    // NUEVO: Se agregó la propiedad "stock" con valores aleatorios entre 50 y 100
    { id: 1, nombre: "Kylian Mbappé", equipo: "Real Madrid CF", posicion: "Delantero", rating: 91, pace: 97, shooting: 89, passing: 80, precio: 150000, emoji: "🇫🇷", imagen: "https://momentodeportivord.com/wp-content/uploads/2024/06/Kylian-Mbappe-Madrid-1.jpg", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 2, nombre: "Erling Haaland", equipo: "Manchester City", posicion: "Delantero", rating: 91, pace: 89, shooting: 93, passing: 70, precio: 145000, emoji: "🇳🇴", imagen: "https://c8.alamy.com/comp/2R6T1Y5/istanbul-erling-haaland-of-manchester-city-fc-with-uefa-champions-league-trophy-coupe-des-clubs-champions-europeans-after-the-uefa-champions-league-final-between-manchester-city-fc-and-fc-inter-milan-at-ataturk-olympic-stadium-on-june-10-2023-in-istanbul-turkey-ap-dutch-height-maurice-of-stone-2R6T1Y5.jpg", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 3, nombre: "Jude Bellingham", equipo: "Real Madrid CF", posicion: "Mediocampista", rating: 90, pace: 80, shooting: 82, passing: 85, precio: 130000, emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwey_wFF-1AAhY8Kf142C6TEjWhV9r3TsErg&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 4, nombre: "Vinicius Jr", equipo: "Real Madrid CF", posicion: "Delantero", rating: 90, pace: 95, shooting: 82, passing: 78, precio: 135000, emoji: "🇧🇷", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSre650BNqmI4jNrr-N608DezUAuG_wO4Hg&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 5, nombre: "Rodri", equipo: "Manchester City", posicion: "Mediocampista", rating: 90, pace: 68, shooting: 72, passing: 87, precio: 120000, emoji: "🇪🇸", imagen: "https://www.mancity.com/meta/media/gkwfuj0u/rodri.jpg", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 6, nombre: "Lautaro Martínez", equipo: "Inter de Milán", posicion: "Delantero", rating: 89, pace: 86, shooting: 87, passing: 73, precio: 95000, emoji: "🇦🇷", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_M5nZP7Cay00IceNDLyUVI1Fv59wlYVtFWw&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 7, nombre: "Florian Wirtz", equipo: "Bayer Leverkusen", posicion: "Mediocampista", rating: 88, pace: 82, shooting: 84, passing: 85, precio: 85000, emoji: "🇩🇪", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBdN0O7c4b9-rCDf9dk9SyyxKLULJyEcwSA&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 8, nombre: "Virgil van Dijk", equipo: "Liverpool FC", posicion: "Defensor", rating: 89, pace: 78, shooting: 62, passing: 71, precio: 90000, emoji: "🇳🇱", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOJsE6tO_N-JpRus28k_ztCLorCDXguxDCg&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 9, nombre: "Thibaut Courtois", equipo: "Real Madrid CF", posicion: "Portero", rating: 90, pace: 45, shooting: 35, passing: 55, precio: 80000, emoji: "🇧🇪", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqEFUndDXD4bquIOpWD5G5mfCxElnc2CFJg&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 10, nombre: "Mohamed Salah", equipo: "Liverpool FC", posicion: "Delantero", rating: 89, pace: 90, shooting: 87, passing: 81, precio: 100000, emoji: "🇪🇬", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkEKPo0i4npYGsh8L-3ihAUwi4mb9STfdHA&s", stock: Math.floor(Math.random() * 51) + 50 },
    
    // --- 10 NUEVOS JUGADORES AGREGADOS ---
    { id: 11, nombre: "Alexis Sánchez", equipo: "Inter de Milán", posicion: "Delantero", rating: 84, pace: 82, shooting: 80, passing: 75, precio: 45000, emoji: "🇨🇱", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEad0XtEZ7j_uoIUrV1Jle-VTXZ1y6a5YF3A&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 12, nombre: "Cristiano Ronaldo", equipo: "Al Nassr FC", posicion: "Delantero", rating: 90, pace: 84, shooting: 92, passing: 78, precio: 110000, emoji: "🇵🇹", imagen: "https://lahora.gt/wp-content/uploads/sites/5/2022/07/CR7.jpeg", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 13, nombre: "Lionel Messi", equipo: "Inter Miami CF", posicion: "Delantero", rating: 93, pace: 85, shooting: 92, passing: 91, precio: 200000, emoji: "🇦🇷", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEplqaIGKdFpj7ILrYKZ6vBo_bgkd6O6ZhYQ&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 14, nombre: "Arda Güler", equipo: "Real Madrid CF", posicion: "Mediocampista", rating: 82, pace: 80, shooting: 78, passing: 82, precio: 60000, emoji: "🇹🇷", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLscNOuseAPdIm-2RDNi3r3UC4ROfoVMm9A&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 15, nombre: "Lamine Yamal", equipo: "FC Barcelona", posicion: "Delantero", rating: 85, pace: 92, shooting: 80, passing: 83, precio: 95000, emoji: "🇪🇸", imagen: "https://tntsports.cl/__export/1760791756065/sites/cdfchile/img/2025/10/18/lamine_yamal_barcelona_2025.webp", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 16, nombre: "Ousmane Dembélé", equipo: "PSG", posicion: "Delantero", rating: 88, pace: 94, shooting: 82, passing: 80, precio: 105000, emoji: "🇫🇷", imagen: "https://media.redgol.cl/wp-content/uploads/sites/8/2025/09/22134148/dembele.-scaled-e1758559333224-470x352.webp", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 17, nombre: "Raphinha", equipo: "FC Barcelona", posicion: "Delantero", rating: 87, pace: 88, shooting: 80, passing: 83, precio: 92000, emoji: "🇧🇷", imagen: "https://www.fcbarcelona.com/photo-resources/2025/09/10/08bbb1ff-004b-4623-a675-66fd1fbfdc8b/11-Raphinha.jpg?width=1200&height=750", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 18, nombre: "Bruno Fernandes", equipo: "Man Utd", posicion: "Mediocampista", rating: 89, pace: 72, shooting: 85, passing: 88, precio: 115000, emoji: "🇵🇹", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5Z2u6BXhTFtrI30g-VtP3FBSqYkxCwY6ag&s", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 19, nombre: "Moisés Caicedo", equipo: "Chelsea FC", posicion: "Mediocampista", rating: 87, pace: 82, shooting: 70, passing: 80, precio: 98000, emoji: "🇪🇨", imagen: "https://res.cloudinary.com/chelsea-production/image/upload/c_fit,h_630,w_1200/v1/editorial/news/2025/09/14/caicedo-brentford-a-celeb", stock: Math.floor(Math.random() * 51) + 50 },
    { id: 20, nombre: "Kevin De Bruyne", equipo: "Manchester City", posicion: "Mediocampista", rating: 91, pace: 74, shooting: 86, passing: 93, precio: 140000, emoji: "🇧🇪", imagen: "https://preview.redd.it/90-of-manchester-city-fans-believe-kevin-de-bruyne-is-the-v0-qqdlsg2reg3f1.jpeg?width=640&crop=smart&auto=webp&s=8218cf7ed7c03a5ea93b86956741b28663113625", stock: Math.floor(Math.random() * 51) + 50 }
];

// ===== ESTADO DEL CARRITO =====
let carrito = [];

// ===== FUNCIONES PURAS =====
function validarRUT(rut) {
    let clean = rut.replace(/\./g, '').replace(/-/g, '').toUpperCase();
    if (!/^[0-9]+[0-9K]$/.test(clean)) return false;
    let sum = 0, mul = 2;
    for (let i = clean.length - 2; i >= 0; i--) {
        sum += clean[i] * mul;
        mul = mul === 7 ? 2 : mul + 1;
    }
    const mod = sum % 11;
    const dv = mod === 1 ? 'K' : mod === 0 ? '0' : (11 - mod).toString();
    return dv === clean.slice(-1);
}

function formatearPrecio(n) { return '$' + n.toLocaleString('es-CL'); }
function calcularIVA(base) { return Math.round(base * IVA); }
const IVA = 0.19;

// ===== FUNCIONES DE CARRITO =====

// NUEVO: Lógica modificada para descontar stock
function agregarAlCarrito(id) {
    const jugador = cartasJugadores.find(j => j.id === id);
    if (!jugador) return;

    // Verificar stock disponible
    if (jugador.stock <= 0) {
        mostrarNotificacion(`${jugador.nombre} no tiene stock disponible`);
        return;
    }

    const itemExistente = carrito.find(item => item.id === id);
    
    // Descontar stock del array principal
    jugador.stock--;
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...jugador,
            cantidad: 1
        });
    }
    
    actualizarUI();
    renderizarListaCartas(); // Llamamos para actualizar visualmente el stock en la tarjeta
    mostrarNotificacion(`${jugador.nombre} agregado al carrito`);
}

// NUEVO: Lógica modificada para reponer stock
function eliminarDelCarrito(id) {
    const itemEliminado = carrito.find(item => item.id === id);
    if (itemEliminado) {
        const jugador = cartasJugadores.find(j => j.id === id);
        if (jugador) {
            jugador.stock += itemEliminado.cantidad; // Reponemos el stock
        }
    }
    carrito = carrito.filter(item => item.id !== id);
    actualizarUI();
    renderizarListaCartas(); // Actualizar vista de stock
}

// NUEVO: Lógica modificada para reponer stock al vaciar
function vaciarCarrito() {
    carrito.forEach(item => {
        const jugador = cartasJugadores.find(j => j.id === item.id);
        if (jugador) {
            jugador.stock += item.cantidad; // Reponemos el stock de todos los items
        }
    });
    carrito = [];
    actualizarUI();
    renderizarListaCartas(); // Actualizar vista de stock
}

function calcularTotalCarrito() {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
}

// ===== FUNCIONES DE UI (DOM) =====

function actualizarUI() {
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById('cart-count').textContent = totalItems;
    renderizarResumenCheckout();
    renderizarModalCarrito();
}

function renderizarListaCartas() {
    const contenedor = document.getElementById('lista-elementos');
    const filtroPos = document.getElementById('filtro-posicion').value;
    
    let lista = [...cartasJugadores];
    if (filtroPos !== 'todas') lista = lista.filter(c => c.posicion === filtroPos);

    contenedor.innerHTML = '';

    lista.forEach(carta => {
        const article = document.createElement('article');
        article.className = 'player-card';
        
        const enCarrito = carrito.some(item => item.id === carta.id);
        const sinStock = carta.stock <= 0;
        
        // NUEVO: Clases dinámicas para colores de stock y botones deshabilitados
        const stockClass = sinStock ? 'player-card__stock--out' : carta.stock <= 10 ? 'player-card__stock--low' : '';
        const btnClass = sinStock ? 'btn--disabled' : (enCarrito ? 'btn--success' : 'btn--primary');
        const btnText = sinStock ? 'Sin Stock' : (enCarrito ? '✓ En Carrito' : 'Agregar al Carrito');
        
        article.innerHTML = `
            <div class="player-card__header">
                <span class="player-card__rating">${carta.rating}</span>
                <span class="player-card__position">${carta.posicion}</span>
                <div class="player-card__image">
                    <img src="${carta.imagen}" alt="${carta.nombre}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'player-card__emoji-fallback\\'\\>${carta.emoji}</span>';">
                </div>
                <h3 class="player-card__name">${carta.nombre}</h3>
                <span class="player-card__team">${carta.equipo}</span>
                <span class="player-card__stock ${stockClass}">Stock: ${carta.stock}</span>
            </div>
            <div class="player-card__body">
                <div class="player-card__stats">
                    <div class="stat-item"><span class="stat-item__value">${carta.pace}</span><span class="stat-item__label">RITMO</span></div>
                    <div class="stat-item"><span class="stat-item__value">${carta.shooting}</span><span class="stat-item__label">DISPARO</span></div>
                    <div class="stat-item"><span class="stat-item__value">${carta.passing}</span><span class="stat-item__label">PASE</span></div>
                </div>
                <div class="player-card__price">
                    <span>Precio:</span>
                    <span class="price-value">${formatearPrecio(carta.precio)}</span>
                </div>
                <div class="player-card__actions">
                    <button class="btn ${btnClass}" data-id="${carta.id}" ${sinStock ? 'disabled' : ''}>
                        ${btnText}
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(article);
    });
    
    contenedor.onclick = (e) => {
        // NUEVO: Evitar agregar si está deshabilitado
        if (e.target.matches('.btn--primary, .btn--success')) {
            agregarAlCarrito(parseInt(e.target.dataset.id));
        }
    };
}

function renderizarResumenCheckout() {
    const lista = document.getElementById('checkout-items');
    const subtotal = calcularTotalCarrito();
    const iva = calcularIVA(subtotal);
    const total = subtotal + iva;

    // NUEVO: Lógica para validar si se lleva el álbum
    const tieneAlbumGratis = subtotal >= 500000;

    if (carrito.length === 0) {
        lista.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío.</p>';
        document.getElementById('btn-pagar').disabled = true;
    } else {
        document.getElementById('btn-pagar').disabled = false;
        lista.innerHTML = '';
        carrito.forEach(item => {
            const div = document.createElement('div');
            div.className = 'checkout-item';
            div.innerHTML = `
                <div>
                    <span class="checkout-item__name">${item.nombre} x${item.cantidad}</span>
                </div>
                <div>
                    <span class="checkout-item__price">${formatearPrecio(item.precio * item.cantidad)}</span>
                    <button class="checkout-item__remove" data-id="${item.id}">🗑️</button>
                </div>
            `;
            lista.appendChild(div);
        });

        // NUEVO: Mostrar el álbum en el historial/resumen si supera los 500k
        if (tieneAlbumGratis) {
            const albumDiv = document.createElement('div');
            albumDiv.className = 'checkout-item checkout-item--promo';
            albumDiv.innerHTML = `
                <div>
                    <span class="checkout-item__name">🎁 Álbum Mundial 2026</span>
                </div>
                <div>
                    <span class="checkout-item__price">¡GRATIS!</span>
                </div>
            `;
            lista.appendChild(albumDiv);
        }
    }

    document.getElementById('checkout-subtotal').textContent = formatearPrecio(subtotal);
    document.getElementById('checkout-iva').textContent = formatearPrecio(iva);
    document.getElementById('checkout-total').textContent = formatearPrecio(total);
}

function renderizarModalCarrito() {
    const body = document.getElementById('modal-carrito-body');
    if (carrito.length === 0) {
        body.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    body.innerHTML = '';
    carrito.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item-row';
        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${item.emoji}</text></svg>'">
            <div class="info">
                <strong>${item.nombre}</strong>
                <div>Cant: ${item.cantidad}</div>
            </div>
            <div class="price">${formatearPrecio(item.precio * item.cantidad)}</div>
        `;
        body.appendChild(div);
    });
}

// ===== MODAL Y NOTIFICACIONES =====

function mostrarModalCarrito() {
    const modal = document.getElementById('modal-carrito');
    modal.classList.add('modal--active');
    renderizarModalCarrito();
}

function cerrarModalCarrito() {
    document.getElementById('modal-carrito').classList.remove('modal--active');
}

function mostrarNotificacion(msg) {
    console.log(msg);
}

// ===== FORMULARIO Y CHECKOUT =====

function manejarSubmit(e) {
    e.preventDefault();
    
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let valido = true;
    const form = e.target;
    form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    form.querySelectorAll('.form-input').forEach(el => el.classList.remove('form-input--error'));

    const nombre = form.querySelector('#nombre');
    if (!nombre.value.trim()) { nombre.nextElementSibling.textContent = 'Requerido'; nombre.classList.add('form-input--error'); valido = false; }

    const rut = form.querySelector('#rut');
    if (!validarRUT(rut.value)) { document.getElementById('rut-error').textContent = 'RUT Inválido'; rut.classList.add('form-input--error'); valido = false; }

    const email = form.querySelector('#email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.nextElementSibling.textContent = 'Email Inválido'; email.classList.add('form-input--error'); valido = false; }

    const tel = form.querySelector('#telefono');
    if (!/^\d{8}$/.test(tel.value)) { document.getElementById('telefono-error').textContent = '8 dígitos'; tel.classList.add('form-input--error'); valido = false; }

    if (!valido) return;

    // ÉXITO
    const subtotal = calcularTotalCarrito();
    const total = subtotal + calcularIVA(subtotal);
    
    // NUEVO: Mensaje dinámico si se obtiene el álbum
    const tieneAlbumGratis = subtotal >= 500000;
    let mensajeExito = `¡Gracias ${nombre.value}! Tu compra de ${carrito.length} cartas por ${formatearPrecio(total)} ha sido procesada.`;
    if (tieneAlbumGratis) {
        mensajeExito += ` 🎁 ¡Te llevas el Álbum del Mundial 2026 GRATIS!`;
    }

    const modal = document.getElementById('modal-confirmacion');
    document.getElementById('modal-message').textContent = mensajeExito;
    modal.classList.add('modal--active');
    
    // Resetear todo (el stock NO se repone porque la compra ya se hizo)
    form.reset();
    carrito = [];
    actualizarUI();
    renderizarListaCartas();
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    renderizarListaCartas();
    actualizarUI();
    
    document.getElementById('filtro-posicion').onchange = renderizarListaCartas;
    document.getElementById('form-compra').onsubmit = manejarSubmit;
    
    document.getElementById('rut').oninput = (e) => {
        let v = e.target.value.replace(/\D/g, '').slice(0, 9);
        if (v.length > 1) v = v.slice(0, -1) + '-' + v.slice(-1);
        e.target.value = v;
    };
    
    document.getElementById('telefono').oninput = (e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 8);

    const toggle = document.querySelector('.nav__toggle');
    const menu = document.querySelector('.nav__menu');
    toggle.onclick = () => menu.classList.toggle('nav__menu--open');

    document.getElementById('btn-ver-carrito').onclick = mostrarModalCarrito;
    document.querySelector('#modal-carrito .modal__close').onclick = cerrarModalCarrito;
    document.querySelector('#modal-carrito .modal__overlay').onclick = cerrarModalCarrito;
    
    document.getElementById('btn-vaciar-carrito').onclick = () => {
        vaciarCarrito();
        cerrarModalCarrito();
    };

    document.getElementById('btn-checkout-modal').onclick = (e) => {
        e.preventDefault();
        cerrarModalCarrito();
        document.getElementById('formulario').scrollIntoView({behavior: "smooth"});
    };

    document.getElementById('modal-close-btn').onclick = () => {
        document.getElementById('modal-confirmacion').classList.remove('modal--active');
    };

    document.getElementById('checkout-items').onclick = (e) => {
        if (e.target.matches('.checkout-item__remove')) {
            const id = parseInt(e.target.dataset.id);
            eliminarDelCarrito(id);
        }
    };
});