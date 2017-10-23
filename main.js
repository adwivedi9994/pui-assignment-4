
// Variables to store the name of the product, the reference image, price, id (stores the index for the array reference), individual price of the product and the photos.
var name="";
var picture = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png"];
var price = [12,10,15,12,15,16,10,12,12];
var id, titleName = '', individualPrice, photo;

// Creates an object pillow with all the attributes
function Pillow(title,image,shape,size,quote,quantity,cost,total)
{
	this.image = image;
	this.title = title;
	this.shape = shape;
	this.size = size;
	//this.color = color;
	this.quote = quote;
	this.quantity = quantity;
	this.cost = cost;
	this.total = total;
}


// Starts executing as soon as the page is loaded.
$(document).ready(function(){

// Checks if there is any existing pillow there in the cart
var existingPillows = JSON.parse(localStorage.getItem("cart"));
// Stores the total cost of the items in the cart
var totalCost=0, tax=0, subTotal=0;

// checks if the array of objects in the local storage is empty or no and then executes accordingly
if (existingPillows == null){
	$("#numbers").hide();
}
else {
	$("#numbers").html(existingPillows.length);
	
	for(var i=0;i<existingPillows.length;i++)
	{
		// Creates a div for all the elements that have been added to the cart dynamically
		console.log(existingPillows[i]);
		$(".cart-item-block").append('<div class=cart-item-id id=cart-item' + [i] + '> </div');
		$('<img/>',{
			src: existingPillows[i].image, 
			class: 'cart-images'
		}).appendTo($('#cart-item'+[i]));
		$('#list' +[i]).append('<li>Quote: ' + existingPillows[i].quote + '</li>');
		$('#cart-item' +[i]).append('<div id=image-title>' + existingPillows[i].title + '</div>');
		$('#cart-item' +[i]).append('<div id=image-shape>Shape: ' + existingPillows[i].shape + '</div>');
		$('#cart-item' +[i]).append('<div id=image-size>Size: ' + existingPillows[i].size + '</div>');
		$('#cart-item' +[i]).append('<div id=image-quote>Quote: ' + existingPillows[i].quote + '</div>');
		$('#cart-item' +[i]).append('<div id=image-quantity>' + existingPillows[i].quantity + '</div>');
		$('#cart-item' +[i]).append('<div id=image-price>$ ' + existingPillows[i].cost + '</div>');
		$('#cart-item' +[i]).append('<div id=image-total>$ ' + existingPillows[i].total + '</div>');
		subTotal = subTotal + existingPillows[i].total;
		$('#cart-item' +[i]).append('<button class=remove-button id=' +[i] + '>X</button>' + "<br><br><br>");
		$('#cart-item' +[i]).append('<div id=rectangle-cart><div>');
	}

	$("#sub").append("&nbsp;","&nbsp;","&nbsp;", "$ ", subTotal);	
	tax = 0.06*subTotal;
	$("#tax").append("&nbsp;","&nbsp;","&nbsp;","$ ", tax);
	totalcost = subTotal + tax;
	$("#final").append("&nbsp;","&nbsp;","&nbsp;","$ ", totalCost);
}

//In case the index of the items are clicked, the defining elements are mentioned here. Only the first one is needed right now
$("#choice1").click(function(){
		id=0;
		name = "Teal Highlights";
		localStorage.setItem("item-name",name);
		localStorage.setItem("item-id",id);
	});

$("#choice2").click(function(){
		id = 1;
		name = "Black Block Letters";
		localStorage.setItem("item-name",name);
		localStorage.setItem("item-id",id);
	});

$("#choice3").click(function(){
		id = 2;
		name= "Cool and Casual";
		localStorage.setItem("item-name",name);
		localStorage.setItem("item-id",id);
	});

$("#choice4").click(function(){
		id = 3;
		name= "Arrows Enclosed";
		localStorage.setItem("item-name",name);
		localStorage.setItem("item-id",id);
	});

$("#choice5").click(function(){
		id = 4;
		name= "Water Paint Feels";
		localStorage.setItem("item-name",name);
		localStorage.setItem("item-id",id);
	});

$("#choice6").click(function(){
		id = 5;
		name= "Black Bold Letters";
		localStorage.setItem("item-name",name);
		localStorage.setItem("item-id",id);
	});

$("#choice7").click(function(){
		id = 6;
		name= "Randomly Bright";
		localStorage.setItem("item-name",name);
		localStorage.setItem("item-id",id);
	});

$("#choice8").click(function(){
		id = 7;
		name= "Golden Words";
		localStorage.setItem("item-name",name);
		localStorage.setItem("item-id",id);
	});

$("#choice9").click(function(){
		id = 8;
		name= "Calmer";
		localStorage.setItem("item-name",name);
		localStorage.setItem("item-id",id);
	});

//Hides a text in the cart page
$("#text").hide();
//variables to store the data that is collected from the user making the choice
var shapes, sizes,input;
//Shape is stored
	$("#rectangle-click").click(function(){
		//$("#big-pic").attr("src", "img/2.png");
		shapes = "Rectangle";
	});

	$("#round-click").click(function(){
		$("#big-pic").attr("src", "img/BigRound.png");
		shapes = "Round";
	});

	$("#dog-click").click(function(){
		$("#big-pic").attr("src", "img/BigDog.png");
		shapes = "Dog";
	});

	$("#bear-click").click(function(){
		$("#big-pic").attr("src", "img/BigBear.png");
		shapes = "Bear";
	});

	$("#bunny-click").click(function(){
		$("#big-pic").attr("src", "img/BigBunny.png");
		shapes = "Bunny";
	});

	$("#cat-click").click(function(){
		$("#big-pic").attr("src", "img/BigCat.png");
		shapes = "Cat";
	});

	$("#custom-click").click(function(){
		$("#big-pic").attr("src", "img/BigCustom.png");
		shapes = "Custom";
	});

	//Size is stores
	$("#circle-s").click(function(){
		$("#circle-s").css("background-color","#1C2333");
		$("#circle-s").css("color","white");
		sizes = "S";
	});


	$("#circle-m").click(function(){
		$("#circle-m").css("background-color","#1C2333");
		$("#circle-m").css("color","white");
		sizes = "M";

	});

	$("#circle-l").click(function(){
		$("#circle-l").css("background-color","#1C2333");
		$("#circle-l").css("color","white");
		sizes = "L";
	});

	$("#circle-xl").click(function(){
		$("#circle-xl").css("background-color","#1C2333");
		$("#circle-xl").css("color","white");
		sizes = "XL";
	});

	//Gets the input text for the quote
	$("#Tertiary").click(function(){
		input = document.getElementById('tertiarytext').value;
		console.log("tertiary value is: "+input);

	});

	//List of commands that get executed when the Add to cart button is pressed
	$("#Primary").click(function(){
		$("#Primary").hide();
		$("#text").show();
		setTimeout(function() {
        $("#text").fadeOut(1000);
   		 }, 1000);
		setTimeout(function() {
        $("#Primary").fadeIn(1000);
   		 }, 1000);
		// $("#Primary").show();
		nameItem = localStorage.getItem("item-name");
		id = localStorage.getItem("item-id");
		console.log("ID "+id);
		var quant = $("#dropdown").val();
		var individualPrice = price[id];
		var totalPrice = quant*individualPrice;

		//New object pillow is created
		var newPillow = new Pillow(nameItem,picture[id],shapes,sizes,input,quant,price[id],totalPrice);
		//An array is defined in the local storage to store the objects
		var pillowArray = JSON.parse(localStorage.getItem("cart")) || [];
		pillowArray.push(newPillow);
		localStorage.setItem("cart", JSON.stringify(pillowArray));
		//Shows the number of items in the cart
		$("#numbers").show();
		$("#numbers").html(pillowArray.length);
		
  });

	//In case the remove button is pressed, remove the child from the tree
	$(".remove-button").click(function(){
       var arrayPlace = $(this).attr('id');
       existingPillows.splice(arrayPlace, 1);
       localStorage.setItem("cart",JSON.stringify(existingPillows));
       location.reload();
   });
});



