document.addEventListener('DOMContentLoaded', function() {
    // Bloquear o scroll manual
    document.body.style.overflow = 'hidden';
    //digitar as letras
    const Titulo= "MATHEUS TEIXEIRA!"; 
    const subTitulo = "Developer."; 
        const delay = 50; 

        let i = 0;
        function digitar() {
            if (i < Titulo.length) {
                document.getElementById("texto").textContent += Titulo.charAt(i);
                document.getElementById("subtexto").textContent += subTitulo.charAt(i);
                i++;
                setTimeout(digitar, delay);
            }
        }

        digitar();
  //dar um zoom na foto e cancelar o zoom
    function zoomAndScroll() {
      const foto = document.getElementById('perfil');
      const secao1 = document.getElementById('primeiro');
      const secao2 = document.getElementById('segundo');
      const secao3 = document.getElementById('terceiro');
  
      foto.classList.add('zoom');
  
      setTimeout(function() {
        foto.classList.remove('zoom');
        secao2.scrollIntoView({ behavior: 'instant', block: 'center' });
      }, 250);
  
      secao2.addEventListener('click', function(event) {
        event.stopPropagation(); 
        secao3.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
  
      secao3.addEventListener('click', function(event) {
        event.stopPropagation(); 
        secao1.scrollIntoView({ behavior: 'smooth', block: 'center' });
        foto.classList.remove('zoom');
      });
    }
  
    const foto = document.getElementById('perfil');
    foto.addEventListener('click', zoomAndScroll);
  });

   // Função para animar as barras de progresso
   function animateProgressBar() {
    const progressBarElements = document.querySelectorAll('progress');

    progressBarElements.forEach((progressBar) => {
      const targetValue = progressBar.getAttribute('value');
      let currentValue = 0;

      const animationInterval = setInterval(() => {
        if (currentValue >= targetValue) {
          clearInterval(animationInterval);
        } else {
          currentValue++;
          progressBar.value = currentValue;
        }
      }, 20);
    });
  }

  animateProgressBar();

  
  