// Help Center Page - Accordion State Management

document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.accordion-icon');

    // Set initial state - first accordion open by default
    if (item.dataset.accordion === 'contact') {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.style.transform = 'rotate(180deg)';
    }

    header.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all accordions
      accordionItems.forEach(otherItem => {
        const otherContent = otherItem.querySelector('.accordion-content');
        const otherIcon = otherItem.querySelector('.accordion-icon');
        
        otherItem.classList.remove('active');
        otherContent.style.maxHeight = '0';
        otherIcon.style.transform = 'rotate(0deg)';
      });

      // Open clicked accordion if it wasn't active
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Support form submission
  const supportForm = document.querySelector('.support-form');
  if (supportForm) {
    supportForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(supportForm);
      const data = Object.fromEntries(formData);
      
      // Log form data (in production, this would send to a server)
      console.log('Support form submitted:', data);
      
      // Show success message
      alert('Thank you for your message! We will get back to you within 24 hours.');
      
      // Reset form
      supportForm.reset();
    });
  }
});
