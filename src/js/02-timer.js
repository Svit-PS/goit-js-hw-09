import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timer = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const btnStart = document.querySelector('[data-start]');
btnStart.addEventListener('click', onClickStart);

btnStart.setAttribute('disabled', '');
let futureDate = null;
let fp = null;

Notiflix.Report.init({
  className: 'notiflix-report',
  width: '300px',
  backgroundColor: '#f8f8f8',
  borderRadius: '25px',
  rtl: false,
  zindex: 4002,
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  backOverlayClickToClose: false,
  fontFamily: 'Quicksand',
  svgSize: '110px',
  plainText: true,
  titleFontSize: '16px',
  titleMaxLength: 34,
  messageFontSize: '15px',
  messageMaxLength: 400,
  buttonFontSize: '14px',
  buttonMaxLength: 34,
  cssAnimation: true,
  cssAnimationDuration: 360,
  cssAnimationStyle: 'fade', // 'fade' - 'zoom'

  warning: {
    //svgColor: '#eebf31',
    svgColor: 'red',
    // titleColor: '#1e1e1e',
    titleColor: 'red',
    // messageColor: '#242424',
    messageColor: 'red',
    //buttonBackground: '#eebf31',
    buttonBackground: 'red',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(100,191,49,0.2)',
  },
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: 'd.m.Y H:i',
  onClose(selectedDates) {
    futureDate = selectedDates[0];
    console.log('futureDate: ', futureDate);

    const deltaDate = futureDate - Date.now();
    if (deltaDate < 0) {
      // window.alert('Please choose a date in the future');
      //Notiflix.Notify.warning('Please choose a date in the future');
      Notiflix.Report.warning(
        'OOO, No!!!',
        'Please choose a date in the future',
        'OK'
      );
      btnStart.setAttribute('disabled', '');
      fp = flatpickr('#datetime-picker', options);
    } else {
      btnStart.removeAttribute('disabled');
    }
  },
  // minDate: 'today',
  // maxDate: new Date().fp_incr(15),
};

fp = flatpickr('#datetime-picker', options);
let idTimer = null;

function onClickStart() {
  btnStart.setAttribute('disabled', '');
  idTimer = setInterval(() => {
    const deltaDate = futureDate - Date.now();
    if (deltaDate < 1000) {
      clearInterval(idTimer);
      // btnStart.removeAttribute('disabled');
    }
    const objTimer = convertMs(deltaDate);
    upDateTimer(objTimer);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function upDateTimer({ days, hours, minutes, seconds }) {
  timer.days.textContent = addLeadingZero(days);
  timer.hours.textContent = addLeadingZero(hours);
  timer.minutes.textContent = addLeadingZero(minutes);
  timer.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  if (value.toString().length < 2) {
    return value.toString().padStart(2, '0');
  }
  return value.toString();
}
