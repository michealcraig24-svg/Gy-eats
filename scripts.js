// scripts.js

// Sample restaurant data
const restaurants = [
    { id: 1, name: 'Restaurant A', type: 'Italian', price: '$$', menu: ['Pasta', 'Pizza'] },
    { id: 2, name: 'Restaurant B', type: 'Mexican', price: '$', menu: ['Tacos', 'Burritos'] },
    { id: 3, name: 'Restaurant C', type: 'Japanese', price: '$$$', menu: ['Sushi', 'Ramen'] },
];

// Search and filter functionality
function searchRestaurants(query) {
    return restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(query.toLowerCase()));
}

function filterByType(type) {
    return restaurants.filter(restaurant => restaurant.type === type);
}

function filterByPrice(priceRange) {
    return restaurants.filter(restaurant => restaurant.price === priceRange);
}

// View menu functionality
function viewMenu(restaurantId) {
    const restaurant = restaurants.find(res => res.id === restaurantId);
    return restaurant ? restaurant.menu : [];
}

// Real-time search
document.getElementById('search').addEventListener('input', (e) => {
    const results = searchRestaurants(e.target.value);
    console.log(results); // This can be replaced with rendering results on the UI
});

// Example usage
console.log(searchRestaurants('A')); // Searching for restaurants that include 'A'
console.log(filterByType('Italian')); // Filtering Italian restaurants
console.log(viewMenu(1)); // Viewing menu for Restaurant A