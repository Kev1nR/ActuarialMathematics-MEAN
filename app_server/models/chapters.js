var mongoose = require( 'mongoose' );

var survivalModelsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: String,
    colour: { type: String, default: 'black' }
});

var chapterSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    colour: { type: String, default: 'black' },
    models: [survivalModelsSchema]
});

mongoose.model('Chapter', chapterSchema);   