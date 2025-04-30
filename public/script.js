document.getElementById('musicForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        nome: document.getElementById('nome').value.trim(),
        ano: document.getElementById('ano').value.trim(),
        genero: document.getElementById('genero').value.trim(),
        cantor: document.getElementById('cantor').value.trim(),
    };

    if (!formData.nome || !formData.ano || !formData.genero || !formData.cantor) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const buttonType = document.getElementById('atualizarBtn').style.display === 'none' ? 'cadastrar' : 'atualizar';

    try {
        let response;
        if (buttonType === 'cadastrar') {
            response = await fetch('http://localhost:3000/api/musicas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        } else {
            const id = document.getElementById('musicForm').dataset.id;
            response = await fetch(`http://localhost:3000/api/musicas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        }

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            carregarMusicas();
            document.getElementById('musicForm').reset();
            document.getElementById('atualizarBtn').style.display = 'none';
            document.getElementById('cadastrarBtn').style.display = 'inline';
        } else {
            alert(result.error || 'Erro ao cadastrar/atualizar música.');
        }
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao enviar dados para o servidor.');
    }
});

// Evento de clique no botão Atualizar
document.getElementById('atualizarBtn').addEventListener('click', async function() {
    const formData = {
        nome: document.getElementById('nome').value.trim(),
        ano: document.getElementById('ano').value.trim(),
        genero: document.getElementById('genero').value.trim(),
        cantor: document.getElementById('cantor').value.trim(),
    };

    if (!formData.nome || !formData.ano || !formData.genero || !formData.cantor) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const id = document.getElementById('musicForm').dataset.id;

    try {
        const response = await fetch(`http://localhost:3000/api/musicas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            carregarMusicas();
            document.getElementById('musicForm').reset();
            document.getElementById('atualizarBtn').style.display = 'none';
            document.getElementById('cadastrarBtn').style.display = 'inline';
        } else {
            alert(result.error || 'Erro ao atualizar música.');
        }
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao enviar dados para o servidor.');
    }
});

// Carregar músicas
async function carregarMusicas() {
    try {
        const response = await fetch('http://localhost:3000/api/musicas');
        if (response.ok) {
            const musicas = await response.json();
            const tbody = document.getElementById('musicList');
            tbody.innerHTML = '';

            musicas.forEach(musica => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${musica.nome}</td>
                    <td>${musica.ano}</td>
                    <td>${musica.genero}</td>
                    <td>${musica.cantor}</td>
                    <td>${musica.dataadd}</td>
                    <td>
                        <button onclick="editarMusica(${musica.id}, '${musica.nome}', ${musica.ano}, '${musica.genero}', '${musica.cantor}')">Editar</button>
                        <button onclick="deletarMusica(${musica.id})">Deletar</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        } else {
            console.error('Erro ao carregar músicas:', await response.text());
        }
    } catch (error) {
        console.error('Erro ao carregar músicas:', error);
    }
}

// Editar música
function editarMusica(id, nome, ano, genero, cantor) {
    document.getElementById('nome').value = nome;
    document.getElementById('ano').value = ano;
    document.getElementById('genero').value = genero;
    document.getElementById('cantor').value = cantor;

    document.getElementById('musicForm').dataset.id = id;
    document.getElementById('atualizarBtn').style.display = 'inline';
    document.getElementById('cadastrarBtn').style.display = 'none';
}

// Deletar música
async function deletarMusica(id) {
    const confirmDelete = confirm('Tem certeza que deseja excluir esta música?');
    if (confirmDelete) {
        try {
            const response = await fetch(`http://localhost:3000/api/musicas/${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                carregarMusicas();
            } else {
                alert(result.error || 'Erro ao excluir música.');
            }
        } catch (error) {
            console.error('Erro ao deletar música:', error);
        }
    }
}

// Buscar músicas
async function buscarMusicas() {
    const query = document.getElementById('txtBusca').value.trim();
    try {
        const response = await fetch(`http://localhost:3000/api/musicas?search=${query}`);
        if (response.ok) {
            const musicas = await response.json();
            const tbody = document.getElementById('musicList');
            tbody.innerHTML = '';

            musicas.forEach(musica => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${musica.nome}</td>
                    <td>${musica.ano}</td>
                    <td>${musica.genero}</td>
                    <td>${musica.cantor}</td>
                    <td>${musica.dataadd}</td>
                    <td>
                        <button onclick="editarMusica(${musica.id}, '${musica.nome}', ${musica.ano}, '${musica.genero}', '${musica.cantor}')">Editar</button>
                        <button onclick="deletarMusica(${musica.id})">Deletar</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        } else {
            console.error('Erro ao carregar músicas:', await response.text());
        }
    } catch (error) {
        console.error('Erro ao buscar músicas:', error);
    }
}

// Carregar músicas ao abrir a página
carregarMusicas();
