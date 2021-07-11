const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    order: [['id']],
    include: [
      {
        //since we're using an alias in the index, we need to use it here. Hence the as: 'assoc_products'
        model: Product, as: "assoc_products",
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }
    ]
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product, as: "assoc_products",
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }
    ]
  })
  .then(dbData => {
    if(!dbData){
      res.status(404).json({ message: 'No tag found with this id.' });
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  // Request body should look like
  // {
  //   "tag_name": "newTag"
  // }
  Tag.create(req.body)
    .then((tag) => res.json(tag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where:{
        id: req.params.id
      }
    }
  )
  .then(dbData => {
    if(!dbData){
      res.status(404).json({ message: 'No tag found with this id.' });
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbData => {
    if(!dbData){
      res.status(404).json({ message: 'No tag found with this id.' });
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
