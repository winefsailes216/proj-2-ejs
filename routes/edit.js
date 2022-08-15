//import
const express = require('express')
const editRouter = express.Router()
const connection = require('../lib/connection.js')
const bodyParser = require('body-parser')

input = bodyParser.urlencoded({ extended: false })
var getId
editRouter.use(bodyParser.json())
editRouter.use(bodyParser.urlencoded({ extended: false }))
editRouter.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    let sql = `SELECT * FROM records where id = ${id}`
    let query = connection.query(sql, (err, records) => {
        if (err) throw err;
        res.render('edit', {
            records: records[0],
            header: 'Edit Details'
        })
    })
    getId = id
})
editRouter.post('/save', input, (req, res) => {
    const vehicle = req.body.vehicle
    const make_model = req.body.make_model
    const year = req.body.year
    const description = req.body.description
    const status = req.body.status
    let sql = `UPDATE records 
    SET vehicle='${vehicle}',make_model='${make_model}',year='${year}',description='${description}',status='${status}'
    WHERE id=${getId}`
    let query = connection.query(sql, (err, records) => {
        res.render('edited', {
            records: records[0],
            header: 'Updated Records'
        })
    })

})
module.exports = editRouter