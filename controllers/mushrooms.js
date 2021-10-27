// Dependencies
const express = require('express')
const router = express.Router()
const Mushrooms = require('../models/mushrooms.js')
const Seed = require('../models/seed.js')
// const Recipes = require('../models/recipes.js');

//
// Routes
//___________________

// Put
router.put('/:id', (req, res)=>{
    Mushrooms.findByIdAndUpdate(req.params.id, req.body, (err, updatedMushroom)=>{
      res.redirect('/mushrooms')
  })
})

// Edit
router.get('/:id/edit', (req, res)=>{
    Mushrooms.findById(req.params.id, (err, foundMushroom)=>{
        res.render(
    		'mushrooms/edit.ejs',
    		{
    			mushroom: foundMushroom
    		}
    	)
    })
})



// Delete
router.delete('/:id', (req, res) => {
  Mushrooms.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/mushrooms')
  })
})


// New
router.get('/new', (req, res) => {
  res.render(
    'mushrooms/new.ejs'
  )
})

// seed
router.get('/seed', (req, res)=>{
    Mushrooms.create(
      Seed, (error, data) => {
        res.redirect('/mushrooms')
      }
    )
})



// Index
router.get('/', (req, res) => {
  Mushrooms.find({}, (error, data) => {
    res.render('mushrooms/index.ejs', {
      allMushrooms: data
    });
  })
})

// Show
router.get('/:id', (req, res) => {
  Mushrooms.findById(req.params.id, (error, foundMushrooms) => {
    console.log('mushroom', foundMushrooms);
    res.render('mushrooms/mushrooms_show.ejs', {
      mushroom: foundMushrooms
    })
  })
})


// Post
router.post('/', (req, res) => {
  Mushrooms.create(req.body, (error, createdMushroom) => {
  })
  // Mushrooms.push(newMushroom);
  res.redirect('/mushrooms');
})



module.exports = router
