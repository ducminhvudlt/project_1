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

const fetchListCardProduct = (category, idListCard, amountProduct) => {

    const listProducts = window.listProducts;
    let str = ``;
    const listProductWrapper = document.querySelector(idListCard);
    let countProduct = 0;
    listProducts.forEach(o => {
        if (o.category === category && countProduct < amountProduct) {
            countProduct++;
            let strLable = o.salePrice != `` ? `<div class="product-label">
                                <span>Sale</span>
                                <span class="sale">${((o.originPrice - o.salePrice) * 100 / o.originPrice).toFixed()}%</span>
                            </div>` : ``;
            str += `<div class="col-md-3 col-sm-6 col-xs-6">
					<div class="product product-single">
						<div class="product-thumb">
						${strLable}
							<a href="product-page.html?productId=${o.id}" class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</a>
							<img src="${o.previewImg}" alt="">
						</div>
						<div class="product-body">
							<h3 class="product-price">$${o.salePrice}<del class="product-old-price">$${o.originPrice}</del></h3>
							<div class="product-rating">
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star-o empty"></i>
							</div>
							<h2 class="product-name"><a href="#">${o.name}</a></h2>
							<div class="product-btns">
								<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
								<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
								<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
	`
        }
    });

    // gán chuỗi vào html
    listProductWrapper.innerHTML = str || `<h2>Sorry, we have no products yet</h2>`;
};
fetchListCardProduct('Fans', '#Fans', 4);
fetchListCardProduct('cfl', '#CFL', 3);
fetchListCardProduct('geysers', '#geysers', 4);

