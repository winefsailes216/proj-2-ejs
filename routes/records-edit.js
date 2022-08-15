//import
const express = require('express')
const recordseditRouter = express.Router()
const bodyParser = require('body-parser');
const connection = require('../lib/connection.js')

const app = express()

// SET MIDDLE WARE AND VIEWS
recordseditRouter.use(bodyParser.json())
recordseditRouter.use(bodyParser.urlencoded({extended: false}))

//GET all records
recordseditRouter.get('/records-edit', (req, res)=>{
    let sql = 'SELECT * from records'
    let query = connection.query(sql, (err, records) => {
        // if (err) throw err
        // res.render('index', {
        //     header: 'Records',
        //     records: records
        // })
        try {
            res.render('records-edit', {
                header: 'MANAGE VEHICLES',
                records: records
            })
            // res.json(records)
        } catch (error) {
            console.log('Error Routes')
        }
    })
})
module.exports = recordseditRouter