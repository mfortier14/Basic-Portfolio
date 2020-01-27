document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    // var elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems, options);
    // var instances = M.Collapsible.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
    // $('.open-button').on("click", function() {
    //   $('.sidenav').sidenav();
    })
  // });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);

    instances.open();
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });


  // instances.open().on("click", () => {

  // }