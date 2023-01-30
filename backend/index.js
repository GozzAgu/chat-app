const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('142763211804-15egs1mvk2cbc4gct17h2iglnp1sekmp.apps.googleusercontent.com')

app.use(bodyParser.json());
app.use(cors());
app.post('/api/google-login', async (req, res) => {
    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
    })

    res.status(200).json(ticket.getPayload())
})

app.listen(4001, () => {
    console.log('server is ready at http://localhost:4001')
})