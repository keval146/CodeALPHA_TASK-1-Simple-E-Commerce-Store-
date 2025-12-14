const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- FAKE DATABASE (Memory Only) ---
// This keeps things simple so you don't need to install MongoDB
const products = [
    { name: "Gaming Laptop", price: 1200, image: "💻" },
    { name: "Smartphone", price: 800, image: "📱" },
    { name: "Headphones", price: 150, image: "🎧" },
    { name: "Smart Watch", price: 250, image: "⌚" }
];
const orders = [];

// --- API ROUTES ---

// 1. Get All Products
app.get('/products', (req, res) => {
    res.json(products);
});

// 2. Place an Order
app.post('/order', (req, res) => {
    const order = req.body;
    orders.push(order);
    console.log("🎉 New Order Received!");
    console.log("Total: $" + order.total);
    console.log("Items:", order.items);
    res.json({ message: "Order placed successfully! Check the server console." });
});

// --- START SERVER ---
app.listen(3000, () => {
    console.log('🚀 Server is running on http://localhost:3000');
});