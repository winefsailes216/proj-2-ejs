
//import
const express = require('express')
const deleteRouter = express.Router()
const connection = require('../lib/connection.js')
const bodyParser = require('body-parser')

input = bodyParser.urlencoded({ extended: false })
var getId
deleteRouter.use(bodyParser.json())
deleteRouter.use(bodyParser.urlencoded({ extended: false }))

deleteRouter.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    let sql = `DELETE FROM records where id = ${id}`
    let query = connection.query(sql, (err, records) => {
        if (err) throw err;
        res.render('deleted', {
            records: records[0],
            header: 'Deleted Record.'
        })
    })
    getId = id
})

module.exports = deleteRouter
//delete records
