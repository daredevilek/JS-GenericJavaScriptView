//Dependencies
require.config({
  paths: {
    'jQuery320': 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min'
  }
});


require(['jQuery320'], function (jQuery320) {

  //HTML
  $(document.body).append('<div id="search"><input type="text" placeholder="filter by search" id="filter-search" /></div>' +
    '<section class="page">' +
    '<ul class="menu" id="myUL">' +
    '<li>' +
    '<button class="accordion-control">Classics</button>' +
    '<div class="accordion-panel">' +
    '<p>Take your tastebuds for a gentle stroll through an English garden filled with Monsieur Pigeon\'s beautifully fragrant Flower Series marshmallows. With three sweetly floral options: <strong>Elderberry</strong>, <strong>Rose Petal</strong>, and <strong>Chrysanthemum</strong> - all edible and all naturally flavored - they will have you dreaming of butterflies and birdsong in no time.</p>' +
    '</div>' +
    '</li>' +
    '<li>' +
    '<button class="accordion-control">The Flower Series</button>' +
    '<div class="accordion-panel">' +
    ' <p>Take your tastebuds for a gentle stroll through an English garden filled with Monsieur Pigeon\'s beautifully fragrant Flower Series marshmallows. With three sweetly floral options: <strong>Elderberry</strong>, <strong>Rose Petal</strong>, and <strong>Chrysanthemum</strong> - all edible and all naturally flavored - they will have you dreaming of butterflies and birdsong in no time.</p>' +
    '</div>' +
    '</li>' +
    '<li>' +
    '<button class="accordion-control">Salt o\' the Sea</button>' +
    '<div class="accordion-panel">' +
    '<p>Ahoy! If you long for a taste of organic sea salt mixed in with your sweet Monsieur Pigeon marshmallows, look no further than our Salt o\' the Sea range. Featuring two delicious flavors: <strong>Salted Caramel</strong> and <strong>Cashew Butter</strong>, this sweetly salty duo will expand your taste horizons.</p>' +
    '</div>' +
    '</li>' +
    '</ul>' +
    '</section>' 
  );
  //JS

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

  var $li = $('li .accordion-control');
  var $search = $('#filter-search');      // Get the input element
  var cache = [];                         // Create an array called cache

  $li.each(function () {                 // For each image
    cache.push({                          // Add an object to the cache array
      element: this,                      // This image
      text: this.outerText.trim().toLowerCase() // Its alt text (lowercase trimmed)
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


