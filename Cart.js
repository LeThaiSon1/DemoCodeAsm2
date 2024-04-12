
// function updateCartDisplay() {
    
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; 
  
//     const cartTableBody = document.getElementById('cart-table-body');
//     cartTableBody.innerHTML = ''; 
  
//     let total = 0;
//     cartItems.forEach(item => {
//       const tableRow = document.createElement('tr');
  
//       const productNameCell = document.createElement('td');
//       productNameCell.textContent = item.name;
//       tableRow.appendChild(productNameCell);
  
//       const quantityCell = document.createElement('td');
//       quantityCell.textContent = item.quantity;
//       tableRow.appendChild(quantityCell);
  
//       const priceCell = document.createElement('td');
//       priceCell.textContent = `$${item.price.toFixed(2)}`; // Format price
//       tableRow.appendChild(priceCell);
  
//       total += item.price * item.quantity;
  
//       cartTableBody.appendChild(tableRow);
//     });
  
//     const cartTotalElement = document.getElementById('cart-total');
//     cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
//   }
  

//   document.addEventListener('cartUpdated', updateCartDisplay);
  
 
//   updateCartDisplay();

function updateCartDisplay() {
    // Simulate retrieving cart data (replace with actual logic)
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Get cart from local storage
  
    const cartTableBody = document.getElementById('cart-table-body');
    cartTableBody.innerHTML = ''; // Clear existing content
  
    let total = 0;
    cartItems.forEach((item, index) => {
      const tableRow = document.createElement('tr');
  
      const productNameCell = document.createElement('td');
      productNameCell.textContent = item.name;
      tableRow.appendChild(productNameCell);
  
      const quantityCell = document.createElement('td');
      quantityCell.textContent = item.quantity;
      tableRow.appendChild(quantityCell);
  
      const priceCell = document.createElement('td');
      priceCell.textContent = `$${item.price.toFixed(2)}`; // Format price
      tableRow.appendChild(priceCell);
  
    
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        removeItemFromCart(index);
      
      });
      tableRow.appendChild(removeButton);
      
      total += item.price * item.quantity;
  
      cartTableBody.appendChild(tableRow);
    });
    
    const cartTotalElement = document.getElementById('cart-total');
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
  }
   document.addEventListener('cartUpdated', updateCartDisplay);
   updateCartDisplay();

