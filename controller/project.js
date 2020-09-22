const Project = require('../model/project');
const Param = require('../model/param');

exports.getProjects = (req, res, next) => {
    Param.find()
        .then(products => {
            // console.log(products);
            res.render("product", {
                prods: products,
                pageTitle: "My products",
                path: '/product'
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postProjects = async (req, res, next) => {
   
    const service = await Param.findOne({
        paramTitle: req.body.service
    });
    const paper = await Param.findOne({
        paramTitle: req.body.paper
    });
    const academicLevel = await Param.findOne({
        paramTitle: req.body.academicLevel
    });
    const subject = await Param.findOne({
        paramTitle: req.body.subject
    });

    const topic = req.body.topic;
    const additionalInformation = req.body.additionalInformation;
    const documentStyle = req.body.documentStyle;
    const urgency = req.body.urgency;
    const numberOfSources = req.body.numberOfSources;
    const numberOfPages = req.body.numberOfPages;
    const project = new Project({
        typeOfService: service._id,
        typeofPaper: paper._id,
        subject: subject._id,
        topic,
        additionalInformation,
        documentStyle,
        urgency,
        numberOfSources,
        academicLevel: academicLevel._id,
        numberOfPages
    });
     return project.save()
        .then(project => {
            console.log(project);
            res.render('done',{
                order:project._id
            });
            
        })
         
        .catch(err => {
            console.log(err);
        });

};




// // const cars = req.body.cars;

// //   console.log(cars);