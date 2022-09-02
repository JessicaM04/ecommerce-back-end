const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: "category_id"
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag
});
// Tags belongToMany Products (through ProductTag)
// TODO: this through method may not work....may need to be removed
Tag.belongsToMany(Product, {
  through: ProductTag
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
