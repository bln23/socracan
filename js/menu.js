(function() {
  'use strict';
  const header = document.querySelector('header');
  document.getElementById('toggle').addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('expanded');
  });
}());
