const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
    {
        nama : {
            type: String,
            required: true
        },
        contact : {
            type: String,
            required: true
        },
        email : {
            type: String,
            required: true
        },
        alamat : {
            type: String,
            required: true
        },
        tipe_diskon : {
            type : mongoose.Schema.type.ObjectId,
            ref : 'Diskon',
            required : false,
        },
        ktp : {
            type : String,
            reqiured : false,
        }
    },
    {
        timestamps : true
    }
)

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
