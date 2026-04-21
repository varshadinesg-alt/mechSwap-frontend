// Product Detail Page JavaScript

// Sample product data
const products = {
  1: {
    name: 'Haas CNC Machine',
    price: '₹4,50,000',
    category: 'CNC Machines',
    location: 'Mumbai',
    description: 'This Haas CNC Machine is in excellent condition and has been well-maintained. It features advanced CNC controls, high precision machining capabilities, and is suitable for various industrial applications. The machine comes with all necessary accessories and documentation.',
    specs: {
      machineType: 'CNC Machine',
      usageType: 'Industrial',
      subcategory: 'CNC Lathe',
      model: 'VF-2',
      location: 'Mumbai',
      yearsUse: '10 years',
      condition: 'Excellent',
      warranty: '6 months',
      capacity: '315 KVA',
      quantity: '1'
    }
  },
  2: {
    name: 'Trumpf Press Brake',
    price: '₹3,75,000',
    category: 'Press Brakes',
    location: 'Delhi',
    description: 'Trumpf Press Brake in excellent working condition. Features advanced hydraulic system, precise bending capabilities, and is ideal for sheet metal fabrication. Regularly maintained with full service history available.',
    specs: {
      machineType: 'Press Brake',
      usageType: 'Industrial',
      subcategory: 'Hydraulic Press',
      model: 'TruBend 7036',
      location: 'Delhi',
      yearsUse: '8 years',
      condition: 'Good',
      warranty: '3 months',
      capacity: '250 KVA',
      quantity: '1'
    }
  },
  3: {
    name: 'Harrison Lathe',
    price: '₹2,75,000',
    category: 'Lathes',
    location: 'Bangalore',
    description: 'Harrison Lathe in excellent condition. Perfect for precision turning operations. Features robust construction, smooth operation, and comes with all necessary tooling. Ideal for small to medium scale manufacturing.',
    specs: {
      machineType: 'Lathe Machine',
      usageType: 'Industrial',
      subcategory: 'Engine Lathe',
      model: 'M300',
      location: 'Bangalore',
      yearsUse: '6 years',
      condition: 'Excellent',
      warranty: '6 months',
      capacity: '180 KVA',
      quantity: '1'
    }
  },
  4: {
    name: 'Bridgeport Milling',
    price: '₹3,20,000',
    category: 'Milling Machines',
    location: 'Chennai',
    description: 'Bridgeport Milling Machine in good working condition. Versatile and reliable for various milling operations. Features precision controls and sturdy construction. Suitable for both light and heavy-duty milling tasks.',
    specs: {
      machineType: 'Milling Machine',
      usageType: 'Industrial',
      subcategory: 'Vertical Mill',
      model: 'Series I',
      location: 'Chennai',
      yearsUse: '7 years',
      condition: 'Good',
      warranty: '3 months',
      capacity: '200 KVA',
      quantity: '1'
    }
  },
  5: {
    name: 'Mazak CNC Machine',
    price: '₹8,20,000',
    category: 'CNC Machines',
    location: 'Delhi',
    description: 'Mazak CNC Machine in excellent condition. State-of-the-art CNC controls, high-speed machining capabilities, and perfect for complex manufacturing operations. Fully automated with advanced programming features.',
    specs: {
      machineType: 'CNC Machine',
      usageType: 'Industrial',
      subcategory: 'CNC Lathe',
      model: 'Integrex i-200',
      location: 'Delhi',
      yearsUse: '3 years',
      condition: 'Excellent',
      warranty: '12 months',
      capacity: '400 KVA',
      quantity: '1'
    }
  },
  6: {
    name: 'Amada Press Brake',
    price: '₹5,50,000',
    category: 'Press Brakes',
    location: 'Mumbai',
    description: 'Amada Press Brake in excellent condition. Features advanced CNC controls, high precision bending, and is perfect for sheet metal fabrication. Well-maintained with complete documentation.',
    specs: {
      machineType: 'Press Brake',
      usageType: 'Industrial',
      subcategory: 'CNC Press',
      model: 'RG-100',
      location: 'Mumbai',
      yearsUse: '4 years',
      condition: 'Excellent',
      warranty: '6 months',
      capacity: '300 KVA',
      quantity: '1'
    }
  }
};

// Load product data based on URL parameter
function loadProductData() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  if (productId && products[productId]) {
    const product = products[productId];
    
    // Update page title
    document.title = `${product.name} - MechSwap`;
    
    // Update breadcrumb
    document.getElementById('breadcrumb-title').textContent = product.name;
    
    // Update product name
    document.getElementById('product-name').textContent = product.name;
    
    // Update product price
    document.getElementById('product-price').textContent = product.price;
    
    // Update product location
    document.getElementById('product-location').textContent = product.location;
    
    // Update product category
    document.getElementById('product-category').textContent = product.category;
    
    // Update product description
    document.getElementById('product-description').textContent = product.description;
    
    // Update technical specifications
    document.getElementById('spec-machine-type').textContent = product.specs.machineType;
    document.getElementById('spec-usage-type').textContent = product.specs.usageType;
    document.getElementById('spec-subcategory').textContent = product.specs.subcategory;
    document.getElementById('spec-model').textContent = product.specs.model;
    document.getElementById('spec-location').textContent = product.specs.location;
    document.getElementById('spec-years-use').textContent = product.specs.yearsUse;
    document.getElementById('spec-condition').textContent = product.specs.condition;
    document.getElementById('spec-warranty').textContent = product.specs.warranty;
    document.getElementById('spec-capacity').textContent = product.specs.capacity;
    document.getElementById('spec-quantity').textContent = product.specs.quantity;
    
    // Update WhatsApp link (placeholder)
    const whatsappButton = document.querySelector('.whatsapp-button');
    const whatsappFloat = document.querySelector('.whatsapp-float');
    const whatsappMessage = encodeURIComponent(`Hi, I'm interested in ${product.name} priced at ${product.price}. Is it still available?`);
    const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`;
    
    if (whatsappButton) {
      whatsappButton.href = whatsappUrl;
    }
    
    if (whatsappFloat) {
      whatsappFloat.href = whatsappUrl;
    }
  } else {
    // Handle invalid product ID
    document.querySelector('.product-detail-container').innerHTML = `
      <div class="error-message">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist or has been removed.</p>
        <a href="product-list.html" class="btn btn-primary">Back to Marketplace</a>
      </div>
    `;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadProductData();
});
