document.getElementById('btn').addEventListener('click', () => {
    const msg = document.getElementById('msg');
    msg.textContent = 'Olá do Site 1! Hora: ' + new Date().toLocaleTimeString();
});
