const filterWrapper = document.querySelector('#filterWrapper');
// lấy danh sách các thẻ dùng để lọc theo Category
const listFilterByCateItem = filterWrapper.querySelectorAll('#filterByCate .filter-items');
// lấy danh sách các thẻ dùng để lọc theo Equipment
const listFilterByEquipmentItem = filterWrapper.querySelectorAll('#filterByEquip .filter-items');

listFilterByCateItem.forEach(o => {
	o.addEventListener('click', () => {
		const data = o.getAttribute('data-filter');

		const params = new URLSearchParams(window.location.search);
		// // set data lên param
		params.set('category', data);
		// reload lại với search vừa được set
		window.location.href = `/index.html?${params.toString()}`;
	});
});
listFilterByEquipmentItem.forEach(o => {
	o.addEventListener('click', () => {
		const data = o.getAttribute('data-filter');

		const params = new URLSearchParams(window.location.search);
		// // set data lên param
		params.set('equipment', data);

		// reload lại với search vừa được set
		window.location.href = `/index.html?${params.toString()}`;
	});
});

const renderListProduct = () => {
	// lấy category cần lọc theo url
	const params = new URLSearchParams(window.location.search);
	const filterByCate = params.get('category');
	const filterByEquiptment = params.get('equipment');

	// lấy danh sách data từ client side
	const listProducts = window.listProducts;

	// lọc data theo cate vừa lấy
	const listFilteredItem = listProducts.filter(o => {
		const isMatchCate = filterByCate ? o.category === filterByCate : true;
		const isMatchEquipment = filterByEquiptment ? o.equipments === filterByEquiptment : true;
		return isMatchCate && isMatchEquipment;
	});
	let str = ``;

	const listProductWrapper = document.querySelector('#listProductWrapper');
	// mapping danh sách data ra thành chuỗi
	listFilteredItem.forEach(o => {
		str += `<div class="col-4 mb-3">
		<div class="card">
			<img src="${o.previewImg}" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">${o.name}</h5>
				<p class="card-title"><b>Category</b>: ${o.category}</p>
				<p class="card-title"><b>Equipments</b>: ${o.equipments}</p>
				<p class="card-text">${o.description}</p>
				<a href="/detail-data.html?productId=${o.id}" class="btn btn-primary">Buy now</a>
			</div>
		</div>
	</div>
	`;
	});

	// gán chuỗi vào html
	listProductWrapper.innerHTML = str || `<h2>Sorry, we have no products yet</h2>`;
};
renderListProduct();
