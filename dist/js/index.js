let monthA = 'January,February,March,April,May,June,July,August,September,October,November,December'.split(',');
let todayDate = new Date();
let currYear = todayDate.getFullYear();
let currMonth = monthA[todayDate.getMonth()];
let currDay = todayDate.getDate();


let number = document.createElement('p');
date = document.getElementById('date').append(number);
number.classList.add('header__date-number');
number.textContent = currDay;

let month = document.createElement('p');
date = document.getElementById('date').append(month);
month.classList.add('header__date-month');
month.textContent = currMonth;