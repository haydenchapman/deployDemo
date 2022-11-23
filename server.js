//yo server stuff
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/public`))

app.listen(4000,
   () => console.log(`Docked at PORT: 4000`)
)

const getCat = () => {
    axios.get('http://localhost:4000/api/cat')
    .then(res => {
        alert(res.data)
    })
    .catch(arr => {
        console.log(arr)
    })
}

app.get('/api/cat', (req, res) => {
    res.status(200).send('Macy')
})


