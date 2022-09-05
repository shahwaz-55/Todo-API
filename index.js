const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (req, res) => res.json({'message': 'Server is running' }));

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));