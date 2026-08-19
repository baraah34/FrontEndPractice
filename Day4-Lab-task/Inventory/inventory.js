const products = [

    {
        name: "Notebook",
        price: 2,
        stock: 5,
        category: "Stationery"
    },

    {
        name: "Water Bottle",
        price: 6,
        stock: 25,
        category: "Kitchen"
    },

    {
        name: "Backpack",
        price: 18,
        stock: 8,
        category: "Bags"
    },

    {
        name: "Desk Chair",
        price: 35,
        stock: 12,
        category: "Furniture"
    },

    {
        name: "Coffee Mug",
        price: 4,
        stock: 6,
        category: "Kitchen"
    },

    {
        name: "Running Shoes",
        price: 28,
        stock: 20,
        category: "Clothing"
    }

];


// ------------------------------------------------------------
// 2. Render One Product Card
// Arrow Function
// ------------------------------------------------------------

const renderProductCard = (product) => {

    return `

        <div class="col-12 col-md-6 col-lg-4 mb-4">

            <div class="card h-100 shadow-sm">

                <div class="card-body">

                    <h5 class="card-title">
                        ${product.name}
                    </h5>


                    <p class="card-text">

                        <strong>Category:</strong>
                        ${product.category}

                    </p>


                    <p class="card-text">

                        <strong>Price:</strong>
                        ${product.price.toFixed(2)} OMR

                    </p>


                    <p class="card-text">

                        <strong>Stock:</strong>
                        ${product.stock}

                    </p>


                </div>

            </div>

        </div>

    `;

};

