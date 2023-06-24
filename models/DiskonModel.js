const mongoose = require('mongoose');

const diskonSchema = mongoose.Schema(
    {
        userId: {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Customer'
        },

        tipe_diskon: {
            type : string,
            required : true
        }
        
    },
    {
        timestamps : true
    }
)

const diskon = mongoose.model('Diskon', diskonSchema);

module.exports = Diskon;