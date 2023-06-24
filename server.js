const express = require('express')
const mongoose = require('mongoose')
const Item = require("./models/ItemModel")
const Customer = require("./models/CustomerModel")
const Diskon = require("./models/DiskonModel")
const Sales = require("./models/SalesModel")
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// EndPoint items

app.get("/items", async (req, res)=> {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get("/items/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const item = await Item.findById(id);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/items', async(req, res)=> {
    try {
        const item = await Item.create(req.body)
        res.status(200).json(item);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.put('/items/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate(id, req.body);
        // cannot find item in database
        if(!item) {
            return res.status(404).json({message: 'item not found'})
        }
        const updateditem = await Item.findById(id);
        res.status(200).json(updateditem);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.delete('/items/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findByIdAndDelete(id);
        if(!item) {
            return res.status(404).json({message: 'Item not found'});
        }
        res.status(200).json(item);        

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Endpoint Customer
app.get("/customers", async (req, res)=> {
    try {
        const customer = await Customer.find({});
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get("/customers/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const customer = await Customer.findById(id);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/customers', async(req, res)=> {
    try {
        const customer = await Customer.create(req.body)
        res.status(200).json(customer);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.put('/customers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findByIdAndUpdate(id, req.body);
        // cannot find item in database
        if(!customer) {
            return res.status(404).json({message: 'Customer not found'})
        }
        const updatedcustomer = await Customer.findById(id);
        res.status(200).json(updatedcustomer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.delete('/customers/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findByIdAndDelete(id);
        if(!costumer) {
            return res.status(404).json({message: 'Customer not found'});
        }
        res.status(200).json(customer);        

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Endpoint Diskon
app.get("/diskon", async (req, res)=> {
    try {
        const diskon = await Diskon.find({});
        res.status(200).json(diskon);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get("/diskon/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const diskon = await Diskon.findById(id);
        res.status(200).json(diskon);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/diskon', async(req, res)=> {
    try {
        const diskon = await Diskon.create(req.body)
        res.status(200).json(diskon);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.put('/diskon/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const diskon = await Diskon.findByIdAndUpdate(id, req.body);
        // cannot find item in database
        if(!diskon) {
            return res.status(404).json({message: 'Customer not found'})
        }
        const updateddiskon = await Diskon.findById(id);
        res.status(200).json(updateddiskon);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.delete('/diskon/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const diskon = await Diskon.findByIdAndDelete(id);
        if(!diskon) {
            return res.status(404).json({message: 'Customer not found'});
        }
        res.status(200).json(diskon);        

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//Endpoint Sales
app.get("/sales", async (req, res)=> {
    try {
        const sales = await Sales.find({});
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get("/sales/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const sales = await Sales.findById(id);
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/sales', async(req, res)=> {
    try {
        const sales = await Sales.create(req.body)
        res.status(200).json(sales);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

app.put('/sales/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const sales = await Sales.findByIdAndUpdate(id, req.body);
        // cannot find item in database
        if(!sales) {
            return res.status(404).json({message: 'Customer not found'})
        }
        const updatedsales = await Sales.findById(id);
        res.status(200).json(updatedsales);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.delete('/sales/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const sales = await Sales.findByIdAndDelete(id);
        if(!sales) {
            return res.status(404).json({message: 'Customer not found'});
        }
        res.status(200).json(sales);        

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

mongoose.
connect('mongodb+srv://lenqeng:taufiq2001@cluster0.xcn6p6b.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to database server')
    app.listen (3000, ()=> {
        console.log('listening on port 3000')
    })
    
}).catch ((error) => {
    console.log(error)
})