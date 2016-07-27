
var $query = $("#query");

//start function on button click

$("#submit").click(function(event){
  //event.preventDefault();
$query = $("#query").val();
// $snippet = $("#snippet").val();
// **** FORM THE URL ****
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "0d88ce861d024b2f91a5d00184961d50",
  'q': $query,
  'fl': "snippet"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

  var randomNum = Math.floor(Math.random()*10)
  var $article = $("<p>");
  $article = $article.text(result.response.docs[randomNum].snippet);

  $("#contentLoad").append($article);

}).fail(function(err) {
  throw err;
});

});







//         console.log(result.response);
//         var searchResults = showSearchData(request.tagged, result.response.docs.length );
//         $('.info').html(searchResults);
//
//         $.each(result.response.docs, function(i, item) {
//             var showing = showData(item, result);
//             $('#articleLoad').append(showing);
//         });
//     }).fail(function() {
//         console.log("error");
//         $('#articleLoad').html('This feature is not working.');
//     });







//     success: $("#articleLoad").text(url.val())
//   });
//
// });


//
//
// }).done((result) => {
//   console.log(result);
//   $("#articleLoad").text(url.val());
//
// }).fail((err) => {
//   throw err;
// });
//
// )}; //end submit button


















// var showData = function (i, result) {
//
// var template = $(".results .template .searchDisplay").clone();
//
// var headline = template.find('.headline');
// headline.text(result.response.docs.headline);
//
// var abstract = template.find('.abstract');
// abstract.text(result.response.docs.abstract);
//
// var snippet = template.find('.snippet');
// snippet.text(result.response.docs.snippet);
//
// var url = template.find('.url');
// url.text(result.response.docs.url);
//
// console.log(result)
// console.log(result.response.docs.headline)
//
// $('.searchDisplay').show('fast');
//
// return result;
// };
//
//
// // THIS FUNCTION CALLS OUT TO THE NYT API, GETS DATA
// var findSearch = function(search){
//
// var request =   {tagged: search,
//                 site: 'New York Times',
//                 order: 'decs',
//                 sort: 'creation'};
//
// var result = $.ajax({
//     url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search + '&fq=source:("The New York Times")&page=0&sort=oldest&api-key=a1eeb62c8df499298c449983e6967154:3:69423736',
//
//     type: 'GET',
//     dataType: 'json',
//     data: search,
// })
// .done(function(result) {
//     console.log("success");
//     console.log(result.response);
//     var searchResults = showSearchData(request.tagged, result.response.docs.length );
//     $('.info').html(searchResults);
//
//     $.each(result.response.docs, function(i, item) {
//         var showing = showData(item, result);
//         $('.searchDisplay').append(showing);
//     });
// }).fail(function() {
//     console.log("error");
//     $('.results').html('This feature is not working. :-(');
// });
