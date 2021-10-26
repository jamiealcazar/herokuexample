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


// Edit
// app.get('/:id/edit', (req, res) => {
//   // Mushrooms.findById(req.params.id, (error, data) => {
//     res.render(
//       'mushrooms/edit.ejs',
//       {
//         mushrooms: Mushrooms[req.params.id],
//         index: req.params.id
//       }
//     )
//   })
// // })



// Delete
// app.delete('/:id', (res, req) => {
//   Mushrooms.splice(req.params.id, 1)
//   res.redirect('/mushrooms')
// })

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
  // console.log(req.body);
  // const newMushroom = {
  //   name: req.body.name,
  //   description: req.body.description,
  //   img: req.body.img,
  //   location: req.body.location
  //   }
  Mushrooms.create(req.body, (error, createdMushroom) => {
  })
  // Mushrooms.push(newMushroom);
  res.redirect('/mushrooms');
})



module.exports = router
