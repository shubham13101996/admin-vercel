const mongoose = require("mongoose");

const feeheadSchema =  mongoose.Schema({
    dues:{},
    payments:{},
    student:{},
    school:{},
    fine_days:{},
    fine_amount:{},
    fee_total:{},
    fee_breakup:{},
    status:{},
    
    

},{
    timestamps: true
})

const feeHead = mongoose.model('feeHead',feeheadSchema)
module.exports = feeHead;