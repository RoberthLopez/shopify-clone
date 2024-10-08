document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq__item button');

  faqItems.forEach((button) => {
    button.addEventListener('click', () => {
      const currentItem = button.parentElement;
      const currentText = currentItem.querySelector('.faq__item-text');

      // Check if the clicked item is already open
      const isOpen = currentItem.classList.contains('active');

      // Close all FAQ items
      document.querySelectorAll('.faq__item').forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.faq__item-text').style.maxHeight = null;
      });

      // If the clicked item was not already open, open it
      if (!isOpen) {
        currentItem.classList.add('active');
        currentText.style.maxHeight = currentText.scrollHeight + 'px';
      }
    });
  });
});
