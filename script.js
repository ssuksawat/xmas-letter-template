(function () {
  'use strict';

  var letterEl = document.querySelector('.letter');
  var envelopeEl = document.querySelector('.letter__envelope');

  envelopeEl.addEventListener('click', function () {
    letterEl.classList.toggle('is-open');
  });
  
})();
