const mongoose = require('mongoose');
const Customer = require('./CustomerModel');

const salesSchema = mongoose.Schema(
    {
        kode_transaksi :{
            type : String,
            required : true,
        },

        tanngal_transaksi:{
            type : Date,
            required : true,
        },

        customer: Customer,

        item:{
            type : String,
            required : true,
        },

        kuantitas :{
            type : String,
            required : true,
        },

        total_diskon : {
            type : Number,
            required : false
        },
        
        total_harga : {
            type : Number,
            required : true
        },

        total_bayar : {
            type : Number,
            required : true
        },

    })