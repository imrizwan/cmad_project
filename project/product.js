var cart = [];

var Product = function(key,name,price,priceStr,qty) {
	this.key = key;
	this.name = name;
	this.price = price;
	this.priceStr = priceStr;
	this.qty = qty;
}

// var product1 = new Product(1, 'Honda Civic 2017', 23.5, '23.5 Lacs', 1);
// var product2 = new Product(2, 'Honda City 2017', 15.3, '15.3 Lacs', 1);
// var product3 = new Product(3, 'Toyota Corola 2017', 17.3, '17.3 Lacs', 1);
// var product4 = new Product(4, 'Suzuki Mehran', 8, '8 Lacs', 1);



function addItemToCart(key,name,price,priceStr,qty) {
	for(var i in cart) {
		if(cart[i].key === key) {
			cart[i].qty += qty;
			return;
		}
	}

	var product = new Product(key,name,price,priceStr,qty);
	cart.push(product);
	saveCart();
}

// addItemToCart(1, "Honda Civic 2017", 23.5, "23.5 Lacs", 2);
// addItemToCart(1, "Honda Civic 2017", 23.5, "23.5 Lacs", 2);
// addItemToCart(2, "Suzuki Mehran", 8, "8 Lacs", 1);


function removeItemFromCart(key) {
	for(var i in cart) {
		if(cart[i].key === key) {
			cart[i].qty--;
			if(cart[i].qty === 0) {
				cart.splice(i,1);
			}
			break;
		}
	}
	saveCart();
}

// removeItemFromCart(1);

function removeItemFromCartAll(key) {
	for(var i in cart) {
		if(cart[i].key === key) {
			cart.splice(i,1);
			break;
		}
	}
	saveCart();
}

function clearCart() {
	cart = [];
	saveCart();
}

function countCart() {
	var totalCount = 0;

	for(var i in cart) {
		totalCount += cart[i].qty;
	}
	return totalCount;
}

function totalCart() {
	var totalCost = 0;

	for(var i in cart) {
		totalCost += cart[i].price * cart[i].qty;
	}
	return totalCost;
}

function listCart() {
	var cartCopy = [];
	for(var i in cart) {
		var item = cart[i];
		var itemCopy = {};
		for(var p in item) {
			itemCopy[p] = item[p];
		}
		cartCopy.push(itemCopy);
	}	
	return cartCopy;
}

function saveCart() {
	localStorage.setItem("shoppingCart",JSON.stringify(cart));
}

function loadCart() {
	cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();

console.log(listCart());

//jquery