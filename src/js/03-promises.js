import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmitForm);

// Notiflix.Notify.init({
//   width: '280px',
//   position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
//   distance: '10px',
//   opacity: 1,
//   borderRadius: '5px',
//   rtl: false,
//   timeout: 3000,
//   messageMaxLength: 110,
//   backOverlay: false,
//   backOverlayColor: 'rgba(0,0,0,0.5)',
//   plainText: true,
//   showOnlyTheLastOne: false,
//   clickToClose: false,
//   pauseOnHover: true,

//   ID: 'NotiflixNotify',
//   className: 'notiflix-notify',
//   zindex: 4001,
//   fontFamily: 'Quicksand',
//   fontSize: '13px',
//   cssAnimation: true,
//   cssAnimationDuration: 400,
//   cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
//   closeButton: false,
//   useIcon: false,
//   useFontAwesome: false,
//   fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
//   fontAwesomeIconSize: '34px',

//   info: {
//     background: '#26c0d3',
//     textColor: '#fff',
//     childClassName: 'notiflix-notify-info',
//     notiflixIconColor: 'rgba(0,0,0,0.2)',
//     fontAwesomeClassName: 'fas fa-info-circle',
//     fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
//     backOverlayColor: 'rgba(38,192,211,0.2)',
//   },
// });

function onSubmitForm(event) {
  event.preventDefault();

  const {
    delay: strDelay,
    step: strStep,
    amount: strAmount,
  } = event.currentTarget.elements;

  const delay = Number(strDelay.value);
  const step = Number(strStep.value);
  const amount = Number(strAmount.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.init({
          useIcon: false,
          info: {
            background: 'green',
          },
        });
        Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.init({
          useIcon: false,
          info: {
            background: 'red',
          },
        });
        Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
