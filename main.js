// Get elements
const items = document.querySelectorAll('#cart-items tr');
const totalElement = document.querySelector('#cart-total');

// Add event listeners for quantity buttons and delete buttons
items.forEach(item => {
  const minusButton = item.querySelector('.minus');
  const plusButton = item.querySelector('.plus');
  const quantityElement = item.querySelector('.quantity');
  const itemTotalElement = item.querySelector('.item-total');
  const deleteButton = item.querySelector('.delete');
  const likeButton = item.querySelector('.like');

  minusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      updateItemTotal();
    }
  });

  plusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateItemTotal();
  });

  deleteButton.addEventListener('click', () => {
    item.remove();
    updateCartTotal();
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('clicked');
  });

  function updateItemTotal() {
    const price = parseInt(item.querySelector('td:nth-child(2)').textContent.slice(1));
    const quantity = parseInt(quantityElement.textContent);
    const itemTotal = price * quantity;
    itemTotalElement.textContent = `$${itemTotal}`;
    updateCartTotal();
  }
});

// Update cart total
function updateCartTotal() {
  let total = 0;
  items.forEach(item => {
    const itemTotal = parseInt(item.querySelector('.item-total').textContent.slice(1));
    total += itemTotal;
  });
  totalElement.textContent = `$${total}`;
}
