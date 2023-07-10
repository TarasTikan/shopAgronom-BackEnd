const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const filePath = path.join(__dirname, "plantsProtect.json");
const products = async (product) =>
  fs.writeFile(filePath, JSON.stringify(product, null, 2));
const listProducts = async () => {
  try {
    const list = await fs.readFile(filePath);
    return JSON.parse(list);
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (productId) => {
 const list = await listProducts();
  return list.find((item) => item.id === productId);
};

const removeProduct = async (productId) => {
 const list = await listProducts();
   const removeProduct = list.filter((item) => item.id !== productId);
   await products(removeProduct)
   return {message: 'Product removed successfully'}
};

const addProduct = async (body) => {
 const list = await listProducts();
  const newProduct = {
    id: nanoid(),
  ...body
  }
  list.push(newProduct);
 await products(list);
  return newProduct;
};

const updateProduct = async (productId, body) => {
 const list = await listProducts();
       const indexProduct = list.findIndex((item) => item.id === productId);
       if (indexProduct === -1) {
         return null;
       }
   list[indexProduct] = { id: productId, ...body };
    await products(list);
    return list[indexProduct];
};

module.exports = {
  listProducts,
  getProductById,
  removeProduct,
  addProduct,
  updateProduct,
};
