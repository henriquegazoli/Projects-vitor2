document.getElementById('btn').addEventListener('click', () => {
    const msg = document.getElementById('msg');
    msg.textContent = 'Olá do Site 2! Hora: ' + new Date().toLocaleTimeString();
});
