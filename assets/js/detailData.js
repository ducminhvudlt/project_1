const fetchDetailProduct = () => {
    // lấy id sản phẩm cần lọc theo url và parse thành dạng number
    const params = new URLSearchParams(window.location.search);
    const filterById = +params.get('productId');

    // lấy danh sách data từ client side
    const listProducts = window.listProducts;

    // lọc data theo id vừa lấy - lưu ý vì là chi tiết nên chỉ có tối đa 1 data thỏa mãn
    const matchItem = listProducts.find(o => o.id === filterById);

    // trường hợp không thấy sản phẩm
    if (!matchItem) {
        document.querySelector('#dummyProductData').innerHTML =
            "<h1>Sorry, we cant found the product that you looking for!!! <a href='/index.html'>Back to list products</a></h1>";
        return;
    }
    const productWrapper = document.querySelector('#dummyProductData')
	let strLable = matchItem.salePrice != `` ? `<div class="product-label">
                                <span>Sale</span>
                                <span class="sale">${((matchItem.originPrice - matchItem.salePrice) * 100 / matchItem.originPrice).toFixed()}%</span>
                            </div>` : ``;
    let str = `<div class="col-md-6">
						<div id="product-main-view">
							<div class="product-view">
								<img src="${matchItem.previewImg}" alt="">
							</div>
						</div>
						<div id="product-view">
						</div>
					</div>
				<div class="col-md-6">
						<div class="product-body">
							${strLable}
							<h2 class="product-name">${matchItem.name}</h2>
							<h3 class="product-price">$${matchItem.salePrice} <del class="product-old-price">$${matchItem.originPrice}</del></h3>
							<div>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
								<a href="#">3 Review(s) / Add Review</a>
							</div>
							<p><strong>Availability:</strong> In Stock</p>
							<p><strong>Brand:</strong> ${matchItem.brand}</p>
							<p>
								${matchItem.description}
							</p>
							<div class="product-options">
								<ul class="size-option">
									<li><span class="text-uppercase">Size:</span></li>
									<li class="active"><a href="#">S</a></li>
									<li><a href="#">XL</a></li>
									<li><a href="#">SL</a></li>
								</ul>
								<ul class="color-option">
									<li><span class="text-uppercase">Color:</span></li>
									<li class="active"><a href="#" style="background-color:#475984;"></a></li>
									<li><a href="#" style="background-color:#8A2454;"></a></li>
									<li><a href="#" style="background-color:#BF6989;"></a></li>
									<li><a href="#" style="background-color:#9A54D8;"></a></li>
								</ul>
							</div>

							<div class="product-btns">
								<div class="qty-input">
									<span class="text-uppercase">QTY: </span>
									<input class="input" type="number">
								</div>
								<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								<div class="pull-right">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-share-alt"></i></button>
								</div>
							</div>
						</div>
				</div>`;
    productWrapper.innerHTML = str || `<h2>Sorry, we have no products yet</h2>`;
};
fetchDetailProduct();
