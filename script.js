//Dependencies
require.config({
  paths: {
    'jQuery320': 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min'
  }
});


require(['jQuery320'], function (jQuery320) {

  //HTML
  $(document.body).append('<h1>Search</h1><div id="search"><input type="text" placeholder="filter by search" id="filter-search" /></div>' +
    '<section class="page">' +
    '<ul class="menu" id="myUL">' +
    '<li>' +
    '<button class="accordion-control">Panel1</button>' +
    '<div class="accordion-panel">' +
    '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>' +
    '</div>' +
    '</li>' +
    '<li>' +
    '<button class="accordion-control">Panel2</button>' +
    '<div class="accordion-panel">' +
    ' <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>' +
    '</div>' +
    '</li>' +
    '<li>' +
    '<button class="accordion-control">Panel3</button>' +
    '<div class="accordion-panel">' +
    '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>' +
    '</div>' +
    '</li>' +
    '</ul>' +
    '</section>' 
  );
  //JS
//AccordionFunction
  (function ($) {                                    // Use $ as variable name
    $.fn.accordion = function (speed) {        // Return the jQuery selection
      this.on('click', '.accordion-control', function (e) {
        e.preventDefault();
        $(this)
          .next('.accordion-panel')
          .not(':animated')
          .slideToggle(speed);
      });
      return this;                                 // Return the jQuery selection
    };
  }(jQuery));

  $('.menu').accordion(500);
// SearchFunction
  var $li = $('li .accordion-control');
  var $search = $('#filter-search');      // Get the input element
  var cache = [];                         // Create an array called cache

  $li.each(function () {                 // For each image
    cache.push({                          // Add an object to the cache array
      element: this,                      // This image
      text: this.outerText.trim().toLowerCase() // Its outerText (lowercase trimmed)
    });
  });
  function filter() {                     // Declare filter() function
    var query = this.value.trim().toLowerCase();  // Get the query
    cache.forEach(function (p) {         // For each entry in cache pass image
      var index = 0;                      // Set index to 0

      if (query) {                        // If there is some query text
        index = p.text.indexOf(query);  // Find if query text is in there
      }

      p.element.style.display = index === -1 ? 'none' : '';  // Show / hide
    });
  }
  if ('oninput' in $search[0]) {          // If browser supports input event
    $search.on('input', filter);          // Use input event to call filter()
  } else {                                // Otherwise
    $search.on('keyup', filter);          // Use keyup event to call filter()
  }
})();


