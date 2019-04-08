
/*
let labelsHourly = ["8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
let dataHourly = [12, 28, 35, 21, 44, 61, 57, 29, 6, 8, 3];
let labelsDaily = [25, 26, 27, 28, 29, 30, 31];
let dataDaily = [89, 205, 453, 231, 396, 322, 302];
let labelsWeekly = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
let dataWeekly = [750, 1240, 900, 1250, 1750, 1250, 1500, 1000, 1500, 2050, 1500, 2000];
let labelsMonthly = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dataMonthly = [19170, 21320, 16530, 14320, 17430, 23720, 14910, 10260, 15870, 18180, 22420, 16800];
*/

/*  Charts  */
let lineChart = document.getElementById('trafficChart');
let barChart = document.getElementById('dailyChart');
let donutChart = document.getElementById('mobileUsers');

let myLineChart = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [250, 800, 750, 1000, 1250, 950, 500, 1150, 2100, 2250, 2300],
        backgroundColor: 'rgba(115, 119, 191, 0.25)',
        borderColor: '#7477bf',
        borderWidth: 1.5,
        pointBorderWidth: 1.8,
        pointRadius: 5,
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#e7e8f9',
        lineTension: 0,
      }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  }
});

let myBarChart = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        data: [50, 75, 150, 200, 350, 200, 350],
        backgroundColor: '#7477BF',
          borderColor: '#7477BF',
          borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          barPercentage: 0.9,
          barThickness: 0.8,
              gridLines: {
              offsetGridLines: true
          }
        }]
      },
      maintainAspectRatio: false,
      aspectRatio: 2,
      legend: {
        display: false,
      },
      layout: {
          padding: {
              left: 0,
              right: 0,
              top: 30,
              bottom: 20
          }
      }
    }
  });

let myDonutChart = new Chart(donutChart, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [{
        data: [15, 20, 60],
        backgroundColor: ['#8dd490', "#2eb5b5", "#7477BF"],
        borderWidth: 0
    }]
  },
  options: {
    legend: {
      display: true,
      position: "right",
      labels: {
        boxWidth: 20,
        padding: 15,
        fontSize: 16
      }
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
        }
    }
  }
});
Chart.defaults.global.responsive = true;

/*  Close alert box */
const closebtn = document.querySelector('.closebtn');

closebtn.addEventListener('click', () => {
    closebtn.parentNode.style.display = 'none';
});

/* Notifications / dropdown menu */
const notify = document.querySelector('.header__bellIcon--notify');
const dropdownbtn = document.querySelector('.dropdownbtn');

notify.addEventListener('click', () => {
  document.getElementById("myDropdown").classList.toggle("show");
})

/* Submit Message */
let message = document.querySelector('.message__form');

message.addEventListener('submit', e => {
  e.preventDefault();
  let input = message.querySelector('input').value;
  let text = message.querySelector('textarea').value;
  message.querySelector('input').value = '';
  message.querySelector('textarea').value = '';

  // Show confirmation
  if(input !== '' && text !== '') {
    alert('Your message has been successfully sent');
  }

  // Show error message
  if(input === '' && text !== ''){
    alert('Please search for an User');

  } else if (input !== '' && text === '') {
    alert('Please enter a message for ' + input);

  } else if (input === '' && text === ''){
    alert('Please complete all required fields')
  }
  
})



