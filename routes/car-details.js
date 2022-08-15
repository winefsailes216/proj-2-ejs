//import
const express = require('express')
const cardetailsRouter = express.Router()
const bodyParser = require('body-parser');
const connection = require('../lib/connection.js')

const app = express()

// SET MIDDLE WARE AND VIEWS
cardetailsRouter.use(bodyParser.json())
cardetailsRouter.use(bodyParser.urlencoded({extended: false}))

//GET all records
cardetailsRouter.get('/car-details', (req, res)=>{
    let sql = 'SELECT * from records'
    let query = connection.query(sql, (err, records) => {
        // if (err) throw err
        // res.render('index', {
        //     header: 'Records',
        //     records: records
        // })
        try {
            res.render('car-details', {
                header: 'CAR DETAILS',
                records: records
            })
            // res.json(records)
        } catch (error) {
            console.log('Error Routes')
        }
    })
})
module.exports = cardetailsRouter