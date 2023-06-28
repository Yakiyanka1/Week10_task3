function calculateTotalPrice() {
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput.value ?
        parseInt(quantityInput.value) : 1;
    const price = 19000;
    const totalPrice = quantity * price;
    const formattedPrice = totalPrice.toLocaleString('ru-RU');
    const countElement = document.getElementById('count');
    countElement.textContent = `Стоимость покупки: ${formattedPrice} рублей`;
}