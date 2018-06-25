function getReceipt(){
	var text1 = "<h2>You Ordered:</h2>";
	var text2 = "<h2>Subtotal:</h2>";
	var runningTotal = 0;
	var sizePrice = 0;
	var symbol = "&#43;";
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
			if (sizeArray[i].checked) {
				var selectedSize = sizeArray[i].value;
				text1 = text1+selectedSize+"<hr>";
			}
	}
	if (selectedSize === "Personal Pizza") {
		sizePrice = 6;
		text2 = text2+symbol+sizePrice+"<hr>";
	} else if (selectedSize === "Medium Pizza") {
		sizePrice = 10;
		text2 = text2+symbol+sizePrice+"<hr>";
	} else if (selectedSize === "Large Pizza") {
		sizePrice = 14;
		text2 = text2+symbol+sizePrice+"<hr>";
	} else if (selectedSize === "Extra Large Pizza") {
		sizePrice = 16;
		text2 = text2+symbol+sizePrice+"<hr>";
	}
	runningTotal = sizePrice;
	getMeat(runningTotal,text1,text2);

}

function getMeat(runningTotal,text1,text2) {
	var meatPrice = 0;
	var selectedMeat= [];
	var symbol = "&#43;";
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatPrice = (meatCount - 1);
	} else {
		meatPrice = 0;
	}
	runningTotal = (runningTotal + meatPrice);
	for (var j = 0; j < selectedMeat.length; j++) {
		text1 = text1+selectedMeat[j]+"<hr>";
		if (meatCount <= 1) {
			text2 = text2+symbol+ 0 +"<hr>";
			meatCount = meatCount - 1;
		} else if (meatCount == 2) {
			text2 = text2+symbol+ 1 +"<hr>";
			meatCount = meatCount - 1;
		} else  {
			text2 = text2+symbol+ 1 +"<hr>";
			meatCount = meatCount - 1;
		}
	}
	getCheese(runningTotal,text1,text2)
}

function getCheese(runningTotal,text1,text2) {
	var cheesePrice = 0;
	var selectedCheese = [];
	var symbol = "&#43;";
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra Cheese") {
			cheesePrice = 3;
		}
	}
	text1 = text1+selectedCheese+"<hr>";
	text2 = text2+symbol+cheesePrice+"<hr>";
	runningTotal = (runningTotal + cheesePrice);
	getCrust(runningTotal,text1,text2)

}

function getCrust(runningTotal,text1,text2) {
	var crustPrice = 0;
	var selectedCrust = [];
	var symbol = "&#43;";
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustPrice = 3;
		}
	}
	text1 = text1+selectedCrust+"<hr>";
	text2 = text2+symbol+crustPrice+"<hr>";
	runningTotal = (runningTotal+crustPrice);
	getSauce(runningTotal,text1,text2)
}

function getSauce(runningTotal,text1,text2) {
	var symbol = "&#43;";
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
			text1 = text1+selectedSauce+"<hr>";
		}
	}	
	text2 = text2+symbol+ 0 +"<hr>";
	getVeggies(runningTotal,text1,text2);
}

function getVeggies(runningTotal,text1,text2) {
	var veggiePrice = 0;
	var selectedVeggie = [];
	var symbol = "&#43;";
	var veggieArray = document.getElementsByClassName("veggies");
	for (var j = 0; j < veggieArray.length; j++) {
		if (veggieArray[j].checked) {
			selectedVeggie.push(veggieArray[j].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggiePrice = (veggieCount - 1);
	} else {
		veggiePrice = 0;
	}
	runningTotal = (runningTotal+veggiePrice);
	for (var j = 0; j < selectedVeggie.length; j++) {
		text1 = text1+selectedVeggie[j]+"<hr>";
		if (veggieCount <= 1) {
			text2 = text2 +symbol+ 0 + "<hr>";
			veggieCount = veggieCount - 1;
		} else if (veggieCount == 2) {
			text2 = text2 +symbol+ 1 + "<hr>";
			veggieCounth = veggieCount - 1;
		} else {
			text2 = text2 +symbol+ 1 + "<hr>";
			veggieCount = veggieCount - 1;
		}
	}
document.getElementById("cart").style.opacity=1;
document.getElementById("showText1").innerHTML = text1;
document.getElementById("showText2").innerHTML = text2;
document.getElementById("totalPrice").innerHTML = "<h2>Total: <strong>$"+runningTotal+".00"+"</strong></h2>";
}