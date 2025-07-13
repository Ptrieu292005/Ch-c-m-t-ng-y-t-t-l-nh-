document.getElementById('clickButton').addEventListener('click', function () {
  const numberOfPopups = 200; // Số lượng cửa sổ bật lên
  const delay = 150; // Độ trễ

  for (let i = 0; i < numberOfPopups; i++) {
    setTimeout(() => createPopup(), i * delay);
  }
});

function createPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup-window');

  // Header
  const header = document.createElement('div');
  header.classList.add('popup-title');

  const cheeseImg = document.createElement('img');
  cheeseImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62SqmDr4b8XGe99nCp8lvPfZkb6-po-8-qg&s';
  cheeseImg.style.width = '30px';
  cheeseImg.style.height = '30px';
  header.appendChild(cheeseImg);

  const buttons = document.createElement('div');
  buttons.classList.add('popup-buttons');

  const minimizeBtn = document.createElement('div');
  minimizeBtn.classList.add('minimize');

  const maximizeBtn = document.createElement('div');
  maximizeBtn.classList.add('maximize');

  const closeBtn = document.createElement('div');
  closeBtn.classList.add('close');

  buttons.appendChild(minimizeBtn);
  buttons.appendChild(maximizeBtn);
  buttons.appendChild(closeBtn);

  header.appendChild(buttons);

  // Body
  const body = document.createElement('div');
  body.classList.add('popup-body');
  body.innerText = 'Anh xin lỗi em nhiều';

  popup.appendChild(header);
  popup.appendChild(body);

  document.body.appendChild(popup);

  const x = Math.random() * (window.innerWidth - 350);
  const y = Math.random() * (window.innerHeight - 220);

  popup.style.position = 'absolute';
  popup.style.left = `${x}px`;
  popup.style.top = `${y}px`;

  // Fade-in effect
  setTimeout(() => {
    popup.classList.add('show');
  }, 100);
}
