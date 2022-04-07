$(document).ready(function () {
  var now = moment().format("dddd, MMMM Do YYYY"); // Day, M/D/Y/T format

  // Display current date

  $('#currentDay').text(now);

  var cal = new Date(); // init date and time
  var currentHour = cal.getHours();

  for (var i = 8; i < 18; i++) {
    if (i < currentHour) {
      // Transform to past class all the items that are less than i
      document.getElementById(i.toString()).classList.add('past');
    } else if (i === currentHour) {
      document.getElementById(i.toString()).classList.add('present');
    } else if (i > currentHour) {
      document.getElementById(i.toString()).classList.add('future');
    }
  }

  // Local Storage Feature

  {
    $('.saveBtn').click(function () {
      var hr8 = $('#8').val();
      localStorage.setItem('8AM', hr8);
      var hr9 = $('#9').val();
      localStorage.setItem('9AM', hr9);
      var hr10 = $('#10').val();
      localStorage.setItem('10AM', hr10);
      var hr11 = $('#11').val();
      localStorage.setItem('11AM', hr11);
      var hr12 = $('#12').val();
      localStorage.setItem('12AM', hr12);
      var hr13 = $('#13').val();
      localStorage.setItem('13AM', hr13);
      var hr14 = $('#14').val();
      localStorage.setItem('14AM', hr14);
      var hr15 = $('#15').val();
      localStorage.setItem('15AM', hr15);
      var hr16 = $('#16').val();
      localStorage.setItem('16AM', hr16);
      var hr17 = $('#17').val();
      localStorage.setItem('17AM', hr17);
    });
  }

  // Display saved tasks
  var saved8 = localStorage.getItem('8AM');
  $('#8').val(saved8);
  var saved9 = localStorage.getItem('9AM');
  $('#9').val(saved9);
  var saved10 = localStorage.getItem('10AM');
  $('#10').val(saved10);
  var saved11 = localStorage.getItem('11AM');
  $('#11').val(saved11);
  var saved12 = localStorage.getItem('12AM');
  $('#12').val(saved12);
  var saved13 = localStorage.getItem('13AM');
  $('#13').val(saved13);
  var saved14 = localStorage.getItem('14AM');
  $('#14').val(saved14);
  var saved15 = localStorage.getItem('15AM');
  $('#15').val(saved15);
  var saved16 = localStorage.getItem('16AM');
  $('#16').val(saved16);
  var saved17 = localStorage.getItem('17AM');
  $('#17').val(saved17);


});


