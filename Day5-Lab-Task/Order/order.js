// 1. Local Data
const orders = [

    {
        id: 101,
        customer: "Baraah",
        status: "Shipped",
        date: "2026-08-01",
        items: [
            { product: "Notebook", price: 5, quantity: 2 },
            { product: "Backpack", price: 25, quantity: 1 }
        ]
    },

    {
        id: 102,
        customer: "Hidaya",
        status: "Pending",
        date: "2026-08-02",
        items: [
            { product: "Desk Chair", price: 70, quantity: 2 },
            { product: "Lamp", price: 20, quantity: 1 }
        ]
    },

    {
        id: 103,
        customer: "Rahaf",
        status: "Cancelled",
        date: "2026-08-03",
        items: [
            { product: "Coffee Mug", price: 8, quantity: 3 }
        ]
    },

    {
        id: 104,
        customer: "Wejdan",
        status: "Shipped",
        date: "2026-08-04",
        items: [
            { product: "Office Table", price: 110, quantity: 1 },
            { product: "Chair", price: 55, quantity: 2 }
        ]
    },

    {
        id: 105,
        customer: "Noor",
        status: "Pending",
        date: "2026-08-05",
        items: [
            { product: "Water Bottle", price: 7, quantity: 4 },
            { product: "Lunch Box", price: 12, quantity: 2 }
        ]
    },

    {
        id: 106,
        customer: "Salwa",
        status: "Shipped",
        date: "2026-08-06",
        items: [
            { product: "Running Shoes", price: 45, quantity: 2 },
            { product: "Sports Bag", price: 30, quantity: 1 }
        ]
    },

    {
        id: 107,
        customer: "Asila",
        status: "Cancelled",
        date: "2026-08-07",
        items: [
            { product: "Sunglasses", price: 25, quantity: 2 }
        ]
    },

    {
        id: 108,
        customer: "Alzulaikha",
        status: "Pending",
        date: "2026-08-08",
        items: [
            { product: "Book Set", price: 40, quantity: 3 },
            { product: "Pen Set", price: 10, quantity: 2 }
        ]
    },

    {
        id: 109,
        customer: "Fatma",
        status: "Shipped",
        date: "2026-08-09",
        items: [
            { product: "Dining Chair", price: 60, quantity: 3 }
        ]
    },

    {
        id: 110,
        customer: "Mona",
        status: "Pending",
        date: "2026-08-10",
        items: [
            { product: "Notebook", price: 6, quantity: 5 },
            { product: "Folder", price: 4, quantity: 3 }
        ]
    },

    {
        id: 111,
        customer: "Huda",
        status: "Shipped",
        date: "2026-08-11",
        items: [
            { product: "Handbag", price: 55, quantity: 2 },
            { product: "Wallet", price: 20, quantity: 1 }
        ]
    },

    {
        id: 112,
        customer: "sarah",
        status: "Cancelled",
        date: "2026-08-12",
        items: [
            { product: "Jacket", price: 60, quantity: 1 }
        ]
    },

    {
        id: 113,
        customer: "Salma",
        status: "Pending",
        date: "2026-08-13",
        items: [
            { product: "Dress", price: 75, quantity: 2 }
        ]
    },

    {
        id: 114,
        customer: "yara",
        status: "Shipped",
        date: "2026-08-14",
        items: [
            { product: "Study Desk", price: 100, quantity: 2 },
            { product: "Book Shelf", price: 80, quantity: 1 }
        ]
    },

    {
        id: 115,
        customer: "Sara",
        status: "Shipped",
        date: "2026-08-15",
        items: [
            { product: "Travel Bag", price: 65, quantity: 3 }
        ]
    }

];


// 2. Per Order Total
function calculateOrderTotal(order) {
    return order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}


// 3. Summary
function renderSummary(orderList) {

    const totalRevenue = orderList.reduce((sum, order) => sum + calculateOrderTotal(order), 0);
    document.getElementById("totalRevenue").textContent = `${totalRevenue.toFixed(2)} OMR`;

    const pendingCount = orderList.filter(order => order.status === "Pending").length;
    const shippedCount = orderList.filter(order => order.status === "Shipped").length;
    const cancelledCount = orderList.filter(order => order.status === "Cancelled").length;

    document.getElementById("pendingCount").textContent = pendingCount;
    document.getElementById("shippedCount").textContent = shippedCount;
    document.getElementById("cancelledCount").textContent = cancelledCount;

    if (orderList.length > 0) {
        const highestOrder = [...orderList].sort((a, b) => calculateOrderTotal(b) - calculateOrderTotal(a))[0];
            
        

        document.getElementById("highestOrder").textContent =`${highestOrder.customer} - ${calculateOrderTotal(highestOrder).toFixed(2)} OMR`;
            
    } else {
        document.getElementById("highestOrder").textContent = "No orders";
    }

    const allHaveItems = orderList.every(order => order.items.length > 0);

    document.getElementById("allHaveItems").textContent =allHaveItems ? "Yes" : "No";
        
}


// 4. Top Orders
function renderTopOrders(orderList) {

    const topOrders = [...orderList].sort((a, b) => calculateOrderTotal(b) - calculateOrderTotal(a)).slice(0, 3);
        
        

    document.getElementById("topOrders").innerHTML =
        topOrders
            .map(order =>
                `<li>${order.customer} - ${calculateOrderTotal(order).toFixed(2)} OMR</li>`
            )
            .join("");
}


// Unique Customers Over 150 OMR
function renderHighValueCustomers(orderList) {

    const names = orderList.filter(order => calculateOrderTotal(order) > 150).map(order => order.customer);

        
        
    const uniqueNames = [...new Set(names)];

    document.getElementById("highValueCustomers").innerHTML =uniqueNames.map(name => `<li>${name}</li>`).join("");

}


// 5. Render Order Card
const renderOrderCard = ({ id, customer, status, date, items }) => {

    const orderForTotal = { id, customer, status, date, items };

    const total = calculateOrderTotal(orderForTotal);

    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body">

                    <h5 class="card-title">
                        Order #${id}
                    </h5>

                    <p class="card-text">
                        <strong>Customer:</strong> ${customer}
                    </p>

                    <p class="card-text">
                        <strong>Status:</strong> ${status}
                    </p>

                    <p class="card-text">
                        <strong>Date:</strong> ${date}
                    </p>

                    <p class="card-text">
                        <strong>Items:</strong> ${items.length}
                    </p>

                    <p class="card-text">
                        <strong>Total:</strong> ${total.toFixed(2)} OMR
                    </p>

                </div>
            </div>
        </div>
    `;
};


function renderOrders(orderList) {

    document.getElementById("orderList").innerHTML =orderList.map(renderOrderCard).join("");
        
            
            
}


// 6. Discount Preview
function renderDiscountOrders() {

    return orders.map(order => {

        return {
            ...order,

            items: order.items.map(item => {

                return {
                    ...item,
                    price: item.price * 0.85
                };

            })
        };

    });
}


// Filter State
let selectedStatus = "All";
let searchText = "";
let discountEnabled = false;


// Apply Filters
function applyFilters() {

    const dashboardOrders = discountEnabled? renderDiscountOrders(): orders;
       
            
            


    const currentOrders = dashboardOrders.filter(order => {

        const statusMatch =selectedStatus === "All" ||order.status === selectedStatus;

        const searchMatch =order.customer.toLowerCase().includes(searchText.toLowerCase());

        return statusMatch && searchMatch;
    });


    // Only visible cards are filtered
    renderOrders(currentOrders);

    // Dashboard calculations use all orders
    renderSummary(dashboardOrders);
    renderTopOrders(dashboardOrders);
    renderHighValueCustomers(dashboardOrders);
}


// Status Filter
document.getElementById("statusFilter").addEventListener("change", function () {

    selectedStatus = this.value;

    applyFilters();
});


// Customer Search
document.getElementById("customerSearch").addEventListener("input", function () {

    searchText = this.value;

    applyFilters();
});


// Discount Toggle
document.getElementById("discountToggle").addEventListener("click", function () {

    discountEnabled = !discountEnabled;

    this.textContent =  discountEnabled? "Remove 15% Discount Preview"  : "Preview 15% Off Everything";
            
    applyFilters();
});


applyFilters();