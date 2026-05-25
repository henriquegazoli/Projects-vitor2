const API_URL = 'http://18.220.206.32:3000';

const form = document.getElementById('userForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');
const usersList = document.getElementById('usersList');

async function loadUsers() {
  try {
    const res = await fetch(`${API_URL}/users`);
    const users = await res.json();
    renderUsers(users);
  } catch (err) {
    usersList.innerHTML = '<li class="empty">Erro ao carregar usuarios</li>';
  }
}

function renderUsers(users) {
  if (users.length === 0) {
    usersList.innerHTML = '<li class="empty">Nenhum usuario cadastrado</li>';
    return;
  }
  usersList.innerHTML = users.map(u => `
    <li>
      <div class="user-info">
        <strong>${u.nome}</strong>
        <small>${u.email}</small>
      </div>
      <button class="delete-btn" onclick="deleteUser(${u.id})">Remover</button>
    </li>
  `).join('');
}

async function deleteUser(id) {
  await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
  loadUsers();
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  message.textContent = '';
  message.className = '';

  try {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nomeInput.value,
        email: emailInput.value,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Erro ao cadastrar');
    }

    message.textContent = 'Usuario cadastrado!';
    message.className = 'success';
    form.reset();
    loadUsers();
  } catch (err) {
    message.textContent = err.message;
    message.className = 'error';
  }
});

loadUsers();
