var express = require('express');
var router = express.Router();
const userModel=require("./users");
const postModel=require("./post")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/createuser', async function(req, res, next) {
    let createdUser = await userModel.create({
      username: "vishu",
      password: "vishub",
      email: "vishu@mail.com",
      fullname: "vishu bhandari boss"
    });
    res.send(createdUser);

});


router.get('/createpost', async function(req, res) {
  try {
    let createdPost = await postModel.create({
      postText: "hello everyone"
    });
    res.send(createdPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send("Error creating post");
  }
});


module.exports = router;
