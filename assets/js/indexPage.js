let items = document.querySelectorAll('#recipeCarousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

const fetchListCardProduct = (category, idListCard) => {
	
	const listProducts = window.listProducts;
	let str = ``;
	const listProductWrapper = document.querySelector(idListCard);
	listProducts.forEach(o => {
		if (o.category === category) {
			str += `<div class="col">
			<div class="el-wrapper">
				<div class="box-up">
					<img class="img" src="${o.previewImg}" alt="">
					<div class="img-info">
						<div class="info-inner">
							<span class="p-name">${o.name}</span>
						</div>
					</div>
				</div>
	
				<div class="box-down">
					<div class="h-bg">
						<div class="h-bg-inner"></div>
					</div>
	
					<a class="cart" href="#">
						<span class="price">$${o.originPrice}</span>
						<span class="add-to-cart">
							<span class="txt">Buy Now</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	`
		}
	});
	// gán chuỗi vào html
	listProductWrapper.innerHTML = str || `<h2>Sorry, we have no products yet</h2>`;
};
fetchListCardProduct('Fans', '#ListCardHomePageCategory1');



