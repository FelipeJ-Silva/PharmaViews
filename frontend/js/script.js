// Selecionar os elementos necessários
const form = document.querySelector('.add-form');
const inputTask = document.querySelectorAll('.input-task');
const tableBody = document.querySelector('#table-body');
const clearButton = document.querySelector('.btn-action:nth-child(1)'); // Primeiro botão na ordem do formulário

// Função para adicionar uma nova linha na tabela
function addRow(event) {
  event.preventDefault(); // Prevenir recarregamento da página

  const [task, date, investment] = Array.from(inputTask).map(input => input.value);

  // Verificar se todos os campos foram preenchidos
  if (!task || !date || !investment) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Tornar a tabela visível
  tableBody.style.display = '';

  // Criar nova linha na tabela
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${task}</td>
    <td>${date}</td>
    <td>${investment}</td>
    <td>
      <button class="btn-action edit-row">
        <span class="material-symbols-outlined">edit</span>
      </button>
    </td>
    <td>
      <button class="btn-action delete-row">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </td>
  `;

  // Adicionar eventos para os botões "Editar" e "Excluir"
  newRow.querySelector('.edit-row').addEventListener('click', () => editRow(newRow));
  newRow.querySelector('.delete-row').addEventListener('click', () => {
    newRow.remove();

    // Ocultar o <tbody> se ele ficar vazio
    if (!tableBody.querySelector('tr')) {
      tableBody.style.display = 'none';
    }
  });

  // Adicionar a nova linha ao corpo da tabela
  tableBody.appendChild(newRow);

  // Limpar os campos do formulário após adicionar
  form.reset();
}

// Função para editar uma linha da tabela
function editRow(row) {
  const cells = row.querySelectorAll('td');
  const [taskCell, dateCell, investmentCell] = cells;

  // Preencher os campos do formulário com os valores atuais
  inputTask[0].value = taskCell.textContent;
  inputTask[1].value = dateCell.textContent;
  inputTask[2].value = investmentCell.textContent;

  // Remover a linha original após iniciar a edição
  row.remove();

  // Ocultar o <tbody> se ele ficar vazio
  if (!tableBody.querySelector('tr')) {
    tableBody.style.display = 'none';
  }
}

// Função para limpar os campos do formulário
function clearForm(event) {
  event.preventDefault(); // Prevenir qualquer comportamento padrão do botão
  inputTask.forEach(input => (input.value = ''));
}

// Adicionar evento no formulário para o botão "Adicionar"
form.addEventListener('submit', addRow);

// Adicionar evento no botão "Limpar"
clearButton.addEventListener('click', clearForm);
