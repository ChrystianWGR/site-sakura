const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Remove a observação depois que a imagem é vista
      }
    });
  }, {
    threshold: 0.5 // Define o limite de visibilidade como metade do elemento visível
  });
  
  const elements = document.querySelectorAll('.hidden');
  
  elements.forEach((element) => myObserver.observe(element));  