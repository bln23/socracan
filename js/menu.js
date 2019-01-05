(function() {
  'use strict';
  const header = document.querySelector('header');
  document.getElementById('toggle').addEventListener('click', () => {
    header.classList.toggle('expanded');
  });
}());
