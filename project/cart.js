$(".add-to-cart").click(function(event){
                event.preventDefault();
                var name = $(this).attr("data-name");
                var price = Number($(this).attr("data-price"));
                addItemToCart(name, price, 1);
                displayCart();
            });


		function displayCart() {
			var cartArray = listCart();
			var output = "";
			for(var i in cartArray) {
				output += "<li>"+cartArray[i].name+" "+cartArray[i].qty+"</li>"
			}
				 $("#show-cart").html(output);
				
		}