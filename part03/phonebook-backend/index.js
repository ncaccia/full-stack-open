const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(express.json())

// middleware to logging the request body
morgan.token('reqBody', (req) => {
    if (req.method === 'POST' || req.method === 'PUT') {
        return JSON.stringify(req.body);
    }
    return '';
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :reqBody'))


let personsData = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

app.post('/api/persons', (req, res) => {
    const body = req.body
    const isDuplicated = personsData.some(p => p.name.toLowerCase() === body.name.toLowerCase());

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'Bad request: The name or number is missing'
        })
    }
    if (isDuplicated) {
        return res.status(409).json({
            error: 'Conflict: The name already exists in the phonebook'
        })
    }
    const person = {
        id: Math.floor(Math.random() * 100000),
        name: body.name,
        number: body.number
    };
    personsData = personsData.concat(person);
    res.json(person)
})

app.get('/api/persons', (req, res) => {
    res.json(personsData);
})

app.get('/info', (req, res) => {
    const phonebookCount = personsData.length
    const timestamp = Date()
    res.send(
        `<p>
        Phonebook has info for ${phonebookCount} people<br/>
        ${timestamp}
        </p>`
    )
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = personsData.find(p => p.id === id);

    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    personsData = personsData.filter(p => p.id !== id);
    res.redirect('/api/persons')
})


const PORT = 3000;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

