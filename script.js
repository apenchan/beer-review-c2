console.log("I am working");

var beers = [];

function addBeer(name, category) {
    beers.push({
        name: name,
        category: category
    });
}
$(".post-beer").click(function() {
    console.log("I was clicked");
    var name = $('.beer-input').val();
    var category = $('.category-input').val();
    addBeer(name, category);
    updateBeers()
})


function updateBeers() {
	$('.beers-list').empty();
  for(var i = 0; i < beers.length; i ++){
  	var li = ('<li>' + "Beer: " + beers[i].name + ", Caterory: " + beers[i].category + '</li>');
  	$('.beers-list').append(li);
  }
}

