// Variáveis globais
let basePrice = 9.00;
let additions = {
    'carne': { price: 4.00, quantity: 0 },
    'ovo': { price: 2.00, quantity: 0 },
    'queijo': { price: 2.00, quantity: 0 },
    'presunto': { price: 2.00, quantity: 0 }
};

// Abrir modal
function openModal(burgerType) {
    document.getElementById('burger-modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Impede scroll na página principal
    
    // Resetar quantidades ao abrir um novo modal
    for (let addition in additions) {
        additions[addition].quantity = 0;
        document.getElementById(`${addition}-quantity`).textContent = '0';
    }
    
    updateTotalPrice();
}

// Fechar modal
function closeModal() {
    document.getElementById('burger-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Permite scroll novamente
}

// Fechar modal clicando fora dele
window.onclick = function(event) {
    const modal = document.getElementById('burger-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Incrementar quantidade do adicional
function incrementAddition(addition) {
    additions[addition].quantity++;
    document.getElementById(`${addition}-quantity`).textContent = additions[addition].quantity;
    updateTotalPrice();
}

// Decrementar quantidade do adicional
function decrementAddition(addition) {
    if (additions[addition].quantity > 0) {
        additions[addition].quantity--;
        document.getElementById(`${addition}-quantity`).textContent = additions[addition].quantity;
        updateTotalPrice();
    }
}

// Atualizar preço total
function updateTotalPrice() {
    let total = basePrice;
    
    for (let addition in additions) {
        total += additions[addition].price * additions[addition].quantity;
    }
    
    document.getElementById('total-price').textContent = `R$ ${total.toFixed(2)}`;
}