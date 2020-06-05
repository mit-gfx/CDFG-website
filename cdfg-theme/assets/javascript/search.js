var search = instantsearch({
  appId: 'OMGVKMVLF3',
  apiKey: '1b5082a36d54fcbbe30919251cf6fb8b',
  indexName: 'MIT CSAIL CDFG',
  routing: true,
  searchFunction: function(helper) {
    if (helper.state.query === '') {
      return;
    }

    helper.search();
  }
});

// search.highlight({
//   highlightedTagName: 'span',
// });

search.addWidget(
  instantsearch.widgets.hits({
    container: '#search_results',
    templates: {
      empty: 'No search results',
      item: '<span class="label">{{ collection }}{{^collection}}Page{{/collection}}</span> \
        <h3><a href="{{ url }}">{{{_highlightResult.title.value}}}</a></h3> \
        <p>{{{_snippetResult.content.value}}}</p> \
        {{#authors}}<p>Authors: {{{_snippetResult.authors.value}}}{{/authors}}</p> \
        <hr>'
    },
    searchParameters: {
      attributesToSnippet: ["content", "excerpt_text", "title", "authors", "publication"]
    }
  })
);

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'Search our site'
  })
);

search.start();

var body = document.querySelector('body')
toggleSearch = function(e) {
  // e.preventDefault()
  searchbox = document.getElementById('searchbox').focus()
  document.body.classList.toggle('search-active')
}

searchQueryExists = function() {
  var field = 'query';
  var url = window.location.href;
  if(url.indexOf('?' + field + '=') != -1)
      return true;
  else if(url.indexOf('&' + field + '=') != -1)
      return true;
  return false
}


var reset_button = document.getElementsByClassName('ais-search-box--reset')

reset_button[0].addEventListener("click", function(){
  body.classList.remove('search-active');
  // search.helper.setQuery('').search();
  document.getElementById('search_results').innerHTML = "";
  document.getElementById('searchbox').value == ""
}, false)


if ( searchQueryExists() ) {
  body.classList.add('search-active');
}