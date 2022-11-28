import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

let activeTimer = false;
let intervalId = null;
let endTime = 0;

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  startBtn: document.querySelector('button'),
};

const timePicker = flatpickr('#datetime-picker', options);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkTime(selectedDates);
  },
};
