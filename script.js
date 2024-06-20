document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const productList = document.getElementById('product-list');
    const productForm = document.getElementById('product-form');
    const newProductBtn = document.getElementById('new-product-btn');
    const productTbody = document.getElementById('product-tbody');

    let products = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const price = parseFloat(document.getElementById('price').value);
        const available = document.getElementById('available').value;

        const product = { name, description, price, available };
        products.push(product);

        products.sort((a, b) => a.price - b.price);
        displayProducts();

        form.reset();
        toggleView();
    });

    newProductBtn.addEventListener('click', function() {
        toggleView();
    });

    function displayProducts() {
        productTbody.innerHTML = '';

        products.forEach(product => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = product.name;
            row.appendChild(nameCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = product.price.toFixed(2);
            row.appendChild(priceCell);

            productTbody.appendChild(row);
        });
    }

    function toggleView() {
        if (productForm.style.display === 'none') {
            productForm.style.display = 'block';
            productList.style.display = 'none';
        } else {
            productForm.style.display = 'none';
            productList.style.display = 'block';
        }
    }

    // Inicialmente, mostra o formulário de cadastro
    toggleView();
});
