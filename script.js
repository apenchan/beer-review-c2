console.log("I am working");

var beers = [];

function addBeer(name, category, rating) {
    beers.push({
        name: name,
        category: category,
        rating: rating
    });
}
$(".post-beer").click(function() {
    console.log("I was clicked");
    var name = $('.beer-input').val();
    var category = $('.category-input').val();
    var rating = $('select[name=beer-rating-input]').val();
    addBeer(name, category, rating);
    updateBeers()
    // addRating()
})


function updateBeers() {
	$('.beers-list').empty();
  for(var i = 0; i < beers.length; i ++){
  	var li = ('<li>' + "Beer: " + beers[i].name + ", Caterory: " + beers[i].category + " " + beers[i].rating + '</li>');
  	$('.beers-list').append(li);
  }
  $('.beer-input').val("");
  $('.category-input').val("");
}

function sortBeer(){
	$('.sort-beer-button').click(function(){
		var rating = $('select[name=beer-rating-input]').val();
		beers.sort('rating')
	})
}


