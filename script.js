document.addEventListener('DOMContentLoaded', () => {
    const btnContador = document.getElementById('btnContador');
    const contadorEl = document.getElementById('contador');
    let contador = 0;

    btnContador.addEventListener('click', () => {
        contador++;
        contadorEl.textContent = contador;
    });

    const form = document.getElementById('formContato');
    const resposta = document.getElementById('resposta');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
        form.reset();

        setTimeout(() => {
            resposta.textContent = '';
        }, 5000);
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
