const mongoose = require('mongoose')

const itemSchema = mongoose.Schema(
    {
        nama_item: { 
            type : String,
            required: [true, "tolong masukan nama item"]
        },
        unit: { 
            type : String,
            required: [false],
            default: "Kg/Pcs"

        },
        stok: {
            type : Number,
            required: [true],
            default: 0

        },
        harga_satuan: { 
            type : Number,
            required: [true]
        },
        barang: {
            type : String,
            required : [false]
        }
    },
    {
        timestamps : true
    }
)


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;