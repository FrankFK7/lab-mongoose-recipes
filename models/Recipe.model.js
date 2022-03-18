const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import model recipe
const recipeSchema = new Schema({
  title:{
    type: String,
    required:true, 
    unique:true
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "Ultra Pro Chef"]
  },
  ingredients: [String],
ingredients: {
type: [String]
}
cuisine: {
  type: String,
  required: true 
},
dishtype: {
  type: String,
 enum: ["breakfast", "mainCourse", "soup", "snack", "drink", "dessert", "other"]
},
Image: {
  type: String,
  default: "https://images.media-allrecipes.com/images/75131.jpg"
},
duration: {
  type: Number,
  min: 0
},
creator: String,
created: {
  type: Date,
  default: Date.now
}
  // TODO: write the schema
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
