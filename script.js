function showSection(id) {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function addTask(type) {
  const inputId = type === 'personal' ? 'personalTask' : 'groupTask';
  const listId = type === 'personal' ? 'personalList' : 'groupList';
  const task = document.getElementById(inputId).value.trim();
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById(listId).appendChild(li);
    document.getElementById(inputId).value = '';
  }
}

function addUser() {
  const name = document.getElementById('newUserName').value.trim();
  if (name) {
    document.getElementById('currentUser').textContent = name;
    alert('New user added!');
    document.getElementById('newUserName').value = '';
  }
}

function addReminder() {
  const task = document.getElementById('reminderTask').value.trim();
  const time = document.getElementById('reminderTime').value;
  if (task && time) {
    const reminderTime = new Date(time);
    const now = new Date();
    const delay = reminderTime - now;

    if (delay > 0) {
      setTimeout(() => {
        alert(`Reminder: ${task}`);
      }, delay);
      alert(`Reminder set for "${task}" at ${reminderTime.toLocaleString()}`);
    } else {
      alert("Please choose a future time.");
    }

    document.getElementById('reminderTask').value = '';
  }
}
