const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const services = {
    restaurants: 'http://localhost:5001',
    orders: 'http://localhost:8000',
    users: 'http://localhost:5002',
    delivery: 'http://localhost:5003'
};

app.all('/:service/*', async (req, res) => {
    const { service } = req.params;
    const serviceUrl = services[service];
    
    if (!serviceUrl) {
        return res.status(404).send('Service not found');
    }
    
    try {
        const response = await axios({
            method: req.method,
            url: `${serviceUrl}/${req.params[0]}`,
            data: req.body,
            headers: { 'Authorization': req.headers.authorization }
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.listen(3000, () => {
    console.log('API Gateway running on port 3000');
});

