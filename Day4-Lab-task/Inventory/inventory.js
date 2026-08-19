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

// Render Product List
// Regular Function Declaration
// ------------------------------------------------------------

function renderProducts(list) {

    document.getElementById("productList").innerHTML = list.map(renderProductCard).join(""); 

}
// 3. Calculate Summary
// Uses plain loops as required
// ------------------------------------------------------------

function calculateSummary() {

    let totalInventoryValue = 0;

    let lowStockCount = 0;


    for (const product of products) {

        totalInventoryValue =totalInventoryValue +product.price * product.stock;
            
            


        if (product.stock < 10) {

            lowStockCount =lowStockCount + 1;
                

        }

    }


    document.getElementById("totalValue").textContent =`${totalInventoryValue.toFixed(2)} OMR`;
        


    document.getElementById("lowStockCount").textContent = lowStockCount;
       

}


// Find Low Stock Products
// ------------------------------------------------------------

function getLowStockProducts() {

    const lowStockProducts = [];


    for (const product of products) {

        if (product.stock < 10) {

            lowStockProducts.push(product);

        }

    }


    return lowStockProducts;

}


// 
// 4. Toggle Low Stock

let showingLowStock = false;


document.getElementById("toggleBtn").addEventListener("click", function () {

    


        showingLowStock = !showingLowStock;


        if (showingLowStock) {

            const lowStockProducts = getLowStockProducts();
               


            renderProducts(lowStockProducts);


            this.textContent ="Show All Products";
                

        }

        else {

            renderProducts(products);


            this.textContent = "Show Low Stock Only";
               

        }


    });



// 
// Initial Page Load

renderProducts(products);

calculateSummary();