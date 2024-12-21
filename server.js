const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define a route to handle API requests
app.post('/api/control', async (req, res) => {
    const { endpoint, params, method } = req.body;

    try {
        const response = await axios({
            url: endpoint,
            method: method || 'GET',
            data: params || {}
        });
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:3000');
});

