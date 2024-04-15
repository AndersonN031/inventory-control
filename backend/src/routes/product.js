const express = require('express')

const router = express.Router();

const Product = require('../models/products');

router.get('/', async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json(products);
        console.log(products)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos do banco de dados.' });
    }
});

router.post('/', async (req, res) => {
    try {
        let products = new Product(req.body);
        await products.save()
        res.status(201).json(products)
        console.log(products)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adiconar produto ao banco de dados.' })
    }

})

router.get('/:id', async (req, res) => {
    try {
        let products = await Product.findById(req.params.id)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao procurar informações do produto no banco de dados.' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        let { name, quantity, price, description } = req.body
        let products = await Product.findByIdAndUpdate(req.params.id, { name, quantity, price, description }, { new: true });

        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar informações do produto no banco de dados.' })
    }
})


module.exports = router;