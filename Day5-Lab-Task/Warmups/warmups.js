// 2.1 Arrays: The Basics


const cities = [
    "Muscat",
    "Ibri",
    "Salalah",
    "Sur",
    "Nizwa", 
    "Sohar"
];
console.log(cities);



// push => its push to the end of the array
cities.push("Barka");
console.log("after push:");
console.log(cities);

// pop => its pop from the end of the array
cities.pop();
console.log("after pop:");
console.log(cities);



// shift => its remove from the beginning of the array
cities.shift();
console.log("after shift:");
console.log(cities);




// unshift =>> its add to the beginning of the array
cities.unshift("Muscat");
console.log("after unshift:");
console.log(cities);


// length before duplicate 
console.log("length before duplicate:", cities.length);

cities.push("Muscat");


console.log("length after duplicate:", cities.length);



// Classic for loop
console.log("Classic for loop:");

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}




// for...of
console.log("for...of:");

for (const city of cities) {
    console.log(city);
}


// 2.2 Destructuring

const order = {
    id: 101,
    customer: "Sara Ahmed",
    total: 249.99,
    status: "Shipped"
};


// Object destructuring
const { customer, total } = order;
console.log(customer);
console.log(total);

// Array destructuring + rest
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining);


// Destructuring directly in function parameter
function printorder({ id, customer, total, status }) {return `Order ${id} - ${customer} - ${total}  - ${status}`;}

console.log(printorder(order));


// 2.3 Spread & Rest

const onlineOrders = [111, 122, 133];
const storeOrders = [144, 155, 166];

const allOrderIds = [
    ...onlineOrders,
    ...storeOrders
];

console.log(allOrderIds);


// Object spread
const originalOrder = {
    id: 201,
    customer: "Baraah",
    total: 55,
    status: "Pending"
};

//change status to "Cancelled" using object spread
const cancelledOrder = {
    ...originalOrder,
    status: "Cancelled"
};
console.log("Original:");
console.log(originalOrder);

console.log("Copy:");
console.log(cancelledOrder);

// 2.4 Array Methods
//Write	a	function	using	a	rest	parameter	that	accepts	any	number	of	order	totals	and	returns	them	as	an	array	(no	summing	yet	)


const orders = [

    {
        id: 1,
        customer: "Baraah",
        total: 120,
        status: "Shipped"
    },

    {
        id: 2,
        customer: "Hafisa",
        total: 250,
        status: "Pending"
    },

    {
        id: 3,
        customer: "Rahaf",
        total: 85,
        status: "Cancelled"
    },

    {
        id: 4,
        customer: "Hidaya",
        total: 310,
        status: "Shipped"
    },

    {
        id: 5,
        customer: "Wejdan",
        total: 60,
        status: "Pending"
    },

    {
        id: 6,
        customer: "Noor",
        total: 180,
        status: "Shipped"
    },

    {
        id: 7,
        customer: "Salwa",
        total: 90,
        status: "Pending"
    },

    {
        id: 8,
        customer: "Asila",
        total: 220,
        status: "Cancelled"
    }

];



// using reduce
const OTotal = orders.reduce( (sum, order) => sum + order.total,0);
   

console.log("ordrs total:", OTotal);



// using filter
const shippedOrders = orders.filter(order => order.status === "Shipped");
    

console.log("Shipped orders:");
console.log(shippedOrders);


//using map
const customerNames = orders.map(  order => order.customer);
  
console.log("Customers:");
console.log(customerNames);


//using find
const findOrder = orders.find(order => order.total > 200);
    
console.log("First order > 200$:");
console.log(findOrder);


//using some => true if any order is cancelled
const CancelledOrder = orders.some(order => order.status === "Cancelled");
    

console.log("Any cancelled order:",CancelledOrder);





//using every => true if all orders have total greater than 0
const allTotalsOrder = orders.every( order => order.total > 0);

console.log("All totals greater than 0:",allTotalsOrder);
    
    

// using sort => highest to lowest
const sortedOrders = [...orders].sort((a, b) => b.total - a.total);


console.log("Highest to lowest:");
console.log(sortedOrders);


// using filter & map 
const shippedCustomers = orders.filter(order => order.status === "Shipped").map(order => order.customer);
    

console.log("Shipped customers:");
console.log(shippedCustomers);



    
    

