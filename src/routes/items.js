import { Router } from 'express'
import models from '../models'

const ObjectId = require('mongodb').ObjectID

const router = Router()

// Get all items in db
router.get('/:filterCriteria', (req, res) => {
    let filterQuery = {}
    console.log(req.params.filterCriteria)
    switch(Number(req.params.filterCriteria))
    {
        case 0:
            filterQuery["price"] = 'asc'
            break;
        case 1:
            filterQuery["clicks"] = 'desc'
            break;
        case 2:
            filterQuery["price"] = 'asc'
            break;
        case 3:
            filterQuery["price"] = 'desc'
            break;
    }
    console.log(filterQuery)

    models.Item
        .find().sort(filterQuery)
        .then(docs => {
            //console.log(docs)
            return res.send(docs)
        })
        .catch(err => {
            console.log(err)
            return res.send(err)
        })
    
})

// Get item with specific name
router.get('/:simpleSearchQuery', (req, res) => {
    models.Item
        .find(
            { name: { "$regex": req.params.simpleSearchQuery, "$options": "i" }}
        )
        .then(docs => {
            console.log(docs)
            return res.send(docs)
        })
        .catch(err => {
            console.log(err)
            return res.send(err)
        })
})

// Insert item into db
router.post('/insert', (req, res) => {

    let newItem = new models.Item({
        title: req.body.title,
        imageURL: req.body.imageURL,
    })

    newItem.save()
        .then(doc => {
            console.log(doc)
            return res.send(doc)
        })
        .catch(err => {
            console.error(err)
            return res.send(err)
        })
})


// Get item by id
router.get('/getById/:_id', (req, res) => {
    models.Item
        .find(
            { _id: ObjectId(req.params._id) }
        )
        .then(docs => {
            console.log(docs)
            return res.send(docs)
        })
        .catch(err => {
            console.log(err)
            return res.send(err)
        })
})

export default router