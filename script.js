document.addEventListener("DOMContentLoaded", () => {
  // Показать начальный экран
  showScreen("screen1");

  // Задержка перед переходом на экран входа
  setTimeout(() => {
      showScreen("screen2");
  }, 2000);

  document.getElementById("login-form").addEventListener("submit", (e) => {
      e.preventDefault();
      showScreen("screen3"); // Переход на экран мероприятий
  });

  // Добавляем обработчики навигации
  addNavHandlers();
});

function addNavHandlers() {
  // Обработчики навигации для каждой кнопки
  document.getElementById("home").onclick = () => showScreen("screen3");
  document.getElementById("add").onclick = () => showScreen("screen4");
  document.getElementById("message").onclick = () => showScreen("screen6");
  document.getElementById("profile").onclick = () => showScreen("screen5");
}

function showScreen(screenId) {
  // Скрываем все экраны
  document.querySelectorAll(".screen").forEach(screen => {
      screen.classList.remove("visible");
      screen.classList.add("hidden");
  });

  // Показываем выбранный экран
  const selectedScreen = document.getElementById(screenId);
  selectedScreen.classList.remove("hidden");
  selectedScreen.classList.add("visible");

  // Перепривязываем обработчики для кнопок навигации, чтобы они работали после смены экрана
  addNavHandlers();
}

// Функции для других экранов остаются без изменений


// Функции для других экранов остаются без изменений



  
// Остальные функции остаются без изменений

function toggleEvents(type) {
    // Получаем элементы
    const plannedPanel = document.querySelector('.content-panel.planned');
    const pastPanel = document.querySelector('.content-panel.past');
    const slider = document.querySelector('.slider');
    const plannedBtn = document.querySelector('.toggle-button.planned-btn');
    const pastBtn = document.querySelector('.toggle-button.past-btn');
  
    // Переключаем отображение панелей и положение ползунка
    if (type === 'planned') {
      plannedPanel.classList.add('active');
      pastPanel.classList.remove('active');
      slider.style.left = '0';
  
      // Добавляем класс active к нужной кнопке
      plannedBtn.classList.add('active');
      pastBtn.classList.remove('active');
    } else {
      plannedPanel.classList.remove('active');
      pastPanel.classList.add('active');
      slider.style.left = '50%';
  
      // Добавляем класс active к нужной кнопке
      plannedBtn.classList.remove('active');
      pastBtn.classList.add('active');
    }
}

function Calendar2(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),
        D = new Date(year,month,Dlast),
        DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
        calendar = '<tr>',
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
    if (DNfirst != 0) {
      for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
    }else{
      for(var  i = 0; i < 6; i++) calendar += '<td>';
    }
    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today">' + i;
      }else{
        calendar += '<td>' + i;
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
}

// Инициализация календаря
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
}
