// Write your Pizza Builder JavaScript in this file.

$('.btn-pepperonni').click(function() {
  $('.pep').toggle();
  $('.panel li:contains("pepperonni")').toggle();
  $('.btn-pepperonni').toggleClass('active');
  updatePrice(classStatus);
});


$('.btn-mushrooms').click(function() {
    $('.mushroom').toggle();
    $('.panel li:contains("mushrooms")').toggle();
    updatePrice(classStatus);
});

$('.btn-mushrooms').click(function() {
    $('.btn-mushrooms').toggleClass('active');
    updatePrice(classStatus);
});

$('.btn-green-peppers').click(function() {
    $('.green-pepper').toggle();
    $('.panel li:contains("green")').toggle();
    $('.btn-green-peppers').toggleClass('active');
    updatePrice(classStatus);
  });

function defaultValue(){
  $(".btn-sauce").toggleClass('active');
  $(".btn-crust").toggleClass('active');
  $('.crust').find('.sauce').removeClass('sauce-white');
  updatePrice(classStatus);
}

$('.btn-sauce').click(function(){
  $(".btn-sauce").toggleClass('active');
  $(".sauce").toggle();
  $('.panel li:contains("white")').toggle();
  updatePrice(classStatus);
})

$('.btn-crust').click(function(){
  $(".btn-crust").toggleClass('active');
  $(".crust").toggle();
  $('.panel li:contains("gluten")').toggle();
  updatePrice(classStatus);
})

$(document).ready(function(){
  defaultValue();
})

var classStatus = [
  {name : $(".btn-pepperonni"), price:1},
  {name : $(".btn-mushrooms"), price:1},
  {name : $(".btn-green-peppers"), price:1},
  {name : $(".btn-sauce"), price:3},
  {name : $(".btn-crust"), price:5},
]

function updatePrice(classStatus){
  var total = 10;
  for (var i = 0; i<classStatus.length; i++){
    if(classStatus[i].name.hasClass("active")){
      total += classStatus[i].price;
    }
  }
  var displayedTotalPrice =$("#total").text(total + "$")
  return displayedTotalPrice;
}



