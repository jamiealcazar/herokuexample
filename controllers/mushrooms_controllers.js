// Dependencies
const express = require('express')
const router = express.Router()
const Mushrooms = require('../models/mushrooms.js')

//
// Routes
//___________________

// Put



// Edit
router.get('/:id/edit', (req, res) => {
  // Mushrooms.findById(req.params.id, (error, data) => {
    res.render(
      'mushrooms/edit.ejs',
      {
        mushrooms: Mushrooms[req.params.id]
        // index: req.params.id
      }
    )
  })
// })



// Delete
router.delete('/:id', (res, req) => {
  Mushrooms.splice(req.params.id, 1)
  res.redirect('/mushrooms')
})





// Index
router.get('/', (req, res) => {
  // Mushrooms.find({}, (error, data) => {
    res.render(
        'mushrooms/index.ejs',
        {
            allMushrooms: Mushrooms
            // allRecipes: Recipes
        }
    )
  })
// })


// New
router.get('/new', (req, res) => {
  res.render(
    'mushrooms/new.ejs'
  )
})



// Show
router.get('/:id', (req, res) => {
    res.render(
        'mushrooms/mushrooms_show.ejs',
        {
          mushrooms: Mushrooms[req.params.id]
        }
    )
});

// router.get('/recipes/:id', (req, res) => {
//   res.render(
//       './recipes_show.ejs',
//       {
//           recipes: Recipes[req.params.id]
//       }
//   )
// });

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
