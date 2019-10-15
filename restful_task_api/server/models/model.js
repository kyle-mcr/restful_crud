const mongoose = require('mongoose');

const PrimaryObjectSchema = new mongoose.Schema({
    title: { type: String, required: [true, "A title is required"] },
    description: { type: String, required: [true, "A description is required"] },
    completed: { type: Boolean, default: false, required: [true, "A confirmation is required"] },
}, { timestamps: true })

mongoose.model('PrimaryObject', PrimaryObjectSchema);