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
		// document.querySelector('#detailDataWrapper').innerHTML =
		// 	"<h1>Sorry, we cant found the product that you looking for!!! <a href='/index.html'>Back to list products</a></h1>";

		return;
	}

	const listProductWrapper = document.querySelector('#listProductWrapper');

	// render ảnh sản phẩm
	document.querySelector('#detailDataPreviewImg').src = matchItem.previewImg;
	// render chi tiết sản phẩm
	document.querySelector('#detailDataText').innerHTML = `
	<h3>${matchItem.name}</h3>
	<p>$${matchItem.originPrice}</p>
	<p>${matchItem.description}</p>`;
};
fetchDetailProduct();
