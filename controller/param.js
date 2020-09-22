const Param = require('../model/param');
const Project = require('../model/project');

exports.getAddParam = (req, res, next) => {
  res.render('param', {
    pageTitle: 'Add Param',
    path: '/param'
  });
};

exports.postParam = (req, res, next) => {
  const paramCategory = req.body.category;
  const paramTitle = req.body.title;
  const paramPrice = req.body.price;


  const param = new Param({
    paramCategory,
    paramTitle,
    paramPrice
  });
  console.log(param);
  param.save()
    .then(result => {
      //console.log('Created Product');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};



exports.postOrder = (req, res, next) => {
  Project.findOne({
    _id: req.body.order
  })
  .then((project) => {
    if(!project){
      console.log('no project');
      return;
    }
    project
    .populate('typeOfService')
    .populate('  typeofPaper')
    .populate('subject')
    .populate(' academicLevel')
    .execPopulate()
    .then(project => {
      console.log('hello');
      console.log(project.numberOfPages);
    });
  })
  .catch((err) => {

  })

  
}
// req.user
// .populate('cart.items.productId')
// .execPopulate()
// .then(user => {
//const products = user.cart.item