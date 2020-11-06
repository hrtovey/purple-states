function changeCSS(year) {
    document.body.className = "";
    document.body.classList.add(year);
}



function init() {
  document.querySelectorAll('.year-selector').forEach(function(btn) {
    btn.addEventListener('click', function(e) {

      changeCSS(e.target.id);
      document.querySelectorAll('.year-selector').forEach(function(btn) {
        btn.classList.remove('current-year');
      });
      
      btn.classList.add('current-year');
    })
  })
}

document.addEventListener('DOMContentLoaded', function(event) {
  init();
})