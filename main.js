// var name = ['Teal Highlights', 'Black Block Letters', 'Cool and Casual', 'Arrows Enclosed', 'Water Paint Feels', 'Black Bold Letters', 'Randomly Bright', 'Golden Words', 'Calmer'];
var name="";
var picture = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png", "img/9.png"];
var price = [12,10,15,12,15,16,10,12,12];
var id, titlename = '', individualPrice, photo;

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

$(document).ready(function(){

for(var j =0;j<name.length;j++)
	console.log("name at " + j + "is " + name[j]);
var existingPillows = JSON.parse(localStorage.getItem("cart"));
var totalcost=0, tax=0, subtotal=0;

if (existingPillows == null){
	$("#numbers").hide();
}
else {
	$("#numbers").html(existingPillows.length);
	
	for(var i=0;i<existingPillows.length;i++)
	{
		console.log(existingPillows[i]);
		// $("#imagesmall").attr("src",existingPillows[i].image);
		// $("#imagetitle").append(existingPillows[i].title);
		// $("#imageshape").append(existingPillows[i].shape);
		// $("#imagesize").append(existingPillows[i].size);
		// $("#imagequote").append(existingPillows[i].quote);
		// $("#imagequantity").append(existingPillows[i].quantity);
		// $("#imageidvprice").append(existingPillows[i].cost);
		// $("#imagetotal").append(existingPillows[i].total);
		// $("removebutton").append()
		$(".cartItemBlock").append('<div class=cartItemId id=cartItem' + [i] + '> </div');
		$('<img/>',{
			src: existingPillows[i].image, 
			class: 'cartImages'
		}).appendTo($('#cartItem'+[i]));
		//$('#cartItem' +[i]).append('<div id=imagesmall>' +existingPillows[i].image + '</div>');
		// $('#cartItem'+[i]).append('<div class=listcontainer id=container' + [i] + '></div>');
		// $('#container'+[i]).append('<ul class=listclass id=list' + [i] + '></ul>');
		// $('#list' +[i]).append('<li>' + existingPillows[i].title + '</li>');
		// $('#list' +[i]).append('<li>Shape: ' + existingPillows[i].shape + '</li>');
		// $('#list' +[i]).append('<li>Size: ' + existingPillows[i].size + '</li>');
		$('#list' +[i]).append('<li>Quote: ' + existingPillows[i].quote + '</li>');
		$('#cartItem' +[i]).append('<div id=imagetitle>' + existingPillows[i].title + '</div>');
		$('#cartItem' +[i]).append('<div id=imageshape>Shape: ' + existingPillows[i].shape + '</div>');
		$('#cartItem' +[i]).append('<div id=imagesize>Size: ' + existingPillows[i].size + '</div>');
		$('#cartItem' +[i]).append('<div id=imagequote>Quote: ' + existingPillows[i].quote + '</div>');
		$('#cartItem' +[i]).append('<div id=imagequantity>' + existingPillows[i].quantity + '</div>');
		$('#cartItem' +[i]).append('<div id=imageprice>$ ' + existingPillows[i].cost + '</div>');
		$('#cartItem' +[i]).append('<div id=imagetotal>$ ' + existingPillows[i].total + '</div>');
		subtotal = subtotal + existingPillows[i].total;
		$('#cartItem' +[i]).append('<button class=removebutton id=' +[i] + '>X</button>' + "<br><br><br>");
	}

	$("#sub").append("&nbsp;","&nbsp;","&nbsp;", "$ ", subtotal);	
	tax = 0.06*subtotal;
	$("#tax").append("&nbsp;","&nbsp;","&nbsp;","$ ", tax);
	totalcost = subtotal + tax;
	$("#final").append("&nbsp;","&nbsp;","&nbsp;","$ ", totalcost);
	// console.log("subtotal: " + subtotal + " tax: " + tax + " totalcost: " + totalcost);
}

$("#choice1").click(function(){
		id=0;
		name = "Teal Highlights";
		// console.log(name);
		localStorage.setItem("itemName",name);
		localStorage.setItem("itemId",id);
	});

$("#choice2").click(function(){
		id = 1;
		name = "Black Block Letters";
		localStorage.setItem("itemName",name);
		localStorage.setItem("itemId",id);
	});

$("#choice3").click(function(){
		id = 2;
		name= "Cool and Casual";
		localStorage.setItem("itemName",name);
		localStorage.setItem("itemId",id);
	});

$("#choice4").click(function(){
		id = 3;
		name= "Arrows Enclosed";
		localStorage.setItem("itemName",name);
		localStorage.setItem("itemId",id);
	});

$("#choice5").click(function(){
		id = 4;
		name= "Water Paint Feels";
		localStorage.setItem("itemName",name);
		localStorage.setItem("itemId",id);
	});

$("#choice6").click(function(){
		id = 5;
		name= "Black Bold Letters";
		localStorage.setItem("itemName",name);
		localStorage.setItem("itemId",id);
	});

$("#choice7").click(function(){
		id = 6;
		name= "Randomly Bright";
		localStorage.setItem("itemName",name);
		localStorage.setItem("itemId",id);
	});

$("#choice8").click(function(){
		id = 7;
		name= "Golden Words";
		localStorage.setItem("itemName",name);
		localStorage.setItem("itemId",id);
	});

$("#choice9").click(function(){
		id = 8;
		name= "Calmer";
		localStorage.setItem("itemName",name);
		localStorage.setItem("itemId",id);
	});

$("#text").hide();
var shapes, sizes,input;
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

	$("#circles").click(function(){
		$("#circles").css("background-color","#1C2333");
		$("#circles").css("color","white");
		sizes = "S";
	});


	$("#circlem").click(function(){
		$("#circlem").css("background-color","#1C2333");
		$("#circlem").css("color","white");
		sizes = "M";

	});


	$("#circlel").click(function(){
		$("#circlel").css("background-color","#1C2333");
		$("#circlel").css("color","white");
		sizes = "L";
	});


	$("#circlexl").click(function(){
		$("#circlexl").css("background-color","#1C2333");
		$("#circlexl").css("color","white");
		sizes = "XL";
	});

	$("#Tertiary").click(function(){
		input = document.getElementById('tertiarytext').value;
		console.log("tertiary value is: "+input);

	});

	$("#Primary").click(function(){
		//var input = document.getElementById('tertiarytext').value;
		//$("#Primary").hide();
		$("#text").show();
		setTimeout(function() {
        $("#text").fadeOut(1500);
   		 }, 3000);
		nameItem = localStorage.getItem("itemName");
		id = localStorage.getItem("itemId");
		console.log("ID "+id);
		var quant = $("#dropdown").val();
		var individualPrice = price[id];
		var totalPrice = quant*individualPrice;

		var newPillow = new Pillow(nameItem,picture[id],shapes,sizes,input,quant,price[id],totalPrice);
		console.log(newPillow);
		var pillowArray = JSON.parse(localStorage.getItem("cart")) || [];
		pillowArray.push(newPillow);
		localStorage.setItem("cart", JSON.stringify(pillowArray));
		//location.reload();
		$("#numbers").show();
		$("#numbers").html(pillowArray.length); //---- update the inside html of the div the text
		console.log("new Pillow" + newPillow);
		
  });

	// $("#removebutton").click(function(){
	// 	localStorage.removeItem("savedPillow");
	// 	$("#imagesmall").remove();
	// 	$("#imagetitle").remove();
	// 	$("#imageshape").remove();
	// 	$("#imagesize").remove();
	// 	$("#imagequote").remove();
	// 	$("#imagequantity").remove();
	// 	$("#imageidvprice").remove();
	// 	$("#imagetotal").remove();
	// 	$("#removebutton").hide();
	// });

	$(".removebutton").click(function(){
       var arrayPlace = $(this).attr('id');
       existingPillows.splice(arrayPlace, 1);
       localStorage.setItem("cart",JSON.stringify(existingPillows));
       location.reload();
   });
});



