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
  const list = await fs.readFile(filePath);
  const parsed = JSON.parse(list);
  return parsed.find((item) => item.id === productId);
};

const removeProduct = async (contactId) => {};

const addProduct = async (body) => {
  const list = await fs.readFile(filePath);
  const parsed = JSON.parse(list);
  const newProduct = {
    id: nanoid(),
  ...body
  }
  parsed.push(newProduct);
 await products(parsed);
  return newProduct;
};

const updateProduct = async (contactId, body) => {};

module.exports = {
  listProducts,
  getProductById,
  removeProduct,
  addProduct,
  updateProduct,
};
