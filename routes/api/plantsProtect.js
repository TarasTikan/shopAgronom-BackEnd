const express = require('express')
const router = express.Router()
const {HttpError} = require('../../helpers')
const plantsProtect = require('../../models/plantsProtect')
router.get('/', async (req, res, next) => {
  try {
    const data = await plantsProtect.listProducts();
    res.json(data);
    
  } catch (error) {
  next(error);
  }
})

router.get("/:productId", async (req, res, next) => {
try {
  const { productId } = req.params;
  const result = await plantsProtect.getProductById(productId);
  if(!result) {
throw HttpError(404, 'Not found')
  }
  res.json(result)
} catch (error) {
  // Цей next доходить до обробника помилок, коли ми даємо об'єкт у next тоді він шукає обробник помилок а він у нас у app.js
  next(error)
}
});

router.post('/', async (req, res, next) => {
  try {
   const result = await plantsProtect.addProduct(req.body)

   res.status(201).json(result);
  } catch (error) {
      next(error);
  }
})

router.delete("/:productId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:productId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router
