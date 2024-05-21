// Função para criar uma partícula
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Define o tamanho aleatório da partícula entre 2 e 4 pixels
    const size = Math.floor(Math.random() * 4) + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Define a posição aleatória da partícula na tela
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = '0';

    // Adiciona a partícula ao contêiner de partículas
    document.getElementById('particles').appendChild(particle);

    // Remove a partícula após atingir o final do cabeçalho
    const headerHeight = document.querySelector('.nebula').offsetHeight;
    const animationDuration = parseFloat(getComputedStyle(particle).animationDuration) * 1000; // Converte para milissegundos
    const particleSpeed = (headerHeight / animationDuration) * 2; // Velocidade das partículas em pixels/ms

    setTimeout(() => {
        particle.style.opacity = 0; // Define a opacidade para 0 gradualmente
        setTimeout(() => {
            particle.remove();
        }, 500); // Tempo de transição antes de remover a partícula
    }, animationDuration + (headerHeight / particleSpeed));
}

// Função para gerar partículas periodicamente
function generateParticles() {
    setInterval(createParticle, 400); // Ajusta o intervalo para gerar partículas mais devagar
}

// Inicia a geração de partículas quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', generateParticles);