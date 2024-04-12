
function addToCart(productName, price) {
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; 
  
    
    const existingItem = cartItems.find(item => item.name === productName);
  
    if (existingItem) {
      existingItem.quantity++; 
    } else {
      cartItems.push({ name: productName, price, quantity: 1 }); 
    }
  
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    
    document.dispatchEvent(new CustomEvent('cartUpdated'));
  }
  
  
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      const productElement = button.parentElement; 
      const productName = productElement.querySelector('h3').textContent;
      const priceText = productElement.querySelector('p').textContent;
      const price = parseFloat(priceText.slice(0, -1)); 
  
      
      addToCart(productName, price); 
  
      
      alert(`"${productName}" has been added to your cart!`);
    });
  });
  
  
  const paginationButtons = document.querySelectorAll('.buttonpage button');
  
  paginationButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      event.preventDefault();
  
      const targetPage = button.querySelector('a').textContent;
      console.log(`Navigating to page: ${targetPage}`);
  
      
    });
  });