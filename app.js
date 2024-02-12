const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11:'December'
}

//Get current year and month
const current = new Date();


var year = current.getFullYear();
var month = current.getMonth();





const setDates = (year,month) => {
  //Get the first and the last day of the current month
const getFirstday = new Date(year,month,1);
const getLastday = new Date(year, month + 1, 0);

//Previous month's last date
const lastMonthLastday = new Date(year, month, 0);
  let lastdate = lastMonthLastday.getDate();
  
  if (getFirstday.getDay() != 0) {
    for (i = lastMonthLastday.getDay(); i >= 0; i--){

      const markup = `<li class="date">${lastdate}</li>`
      document.querySelector('.calendar-days').insertAdjacentHTML('afterbegin', markup);
      document.querySelector('.date').style.opacity = '.2';
      lastdate--;
    }
  }
   
  for (i = 0; i < getLastday.getDate(); i++){
    const markup = `<li class="date">${i+1}</li>`
    document.querySelector('.calendar-days').insertAdjacentHTML('beforeend', markup);
    
  }

  const dates = document.querySelectorAll('.date');
  dates.forEach((ele) => {
    if (ele.textContent == current.getDate()) {
      ele.classList.add('border');
    }
  });
}



const setMonthYear = (month,year) => {
  document.querySelector('.month').innerHTML = months[month];
  document.querySelector('.calendar-year').innerHTML = year;
}

setMonthYear(month,year);
setDates(year, month);

document.querySelector('.arrow-left').addEventListener('click', () => {
  document.querySelectorAll('.calendar-days').forEach((ele) => {
    ele.innerHTML = ' ';
  });

  if (month == 0) {
    year -= 1;
    month = 12;
  }
  month -= 1;

  setMonthYear(month , year);
  setDates(year, month);

});

document.querySelector('.arrow-right').addEventListener('click', () => {
  document.querySelectorAll('.calendar-days').forEach((ele) => {
    ele.innerHTML = ' ';
  });

  if (month == 11) {
    year += 1;
    month = -1;
  }
  month += 1;

  setMonthYear(month , year);
  setDates(year, month);

});









