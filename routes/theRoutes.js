
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MembR = mongoose.model("MembR");

router.use('/', function (req, rs, next){
  console.log('Hit the router');
next();
});


router.param('id', function(req, res, next, id){
  MembR.findOne({
    _id: id
  }, function (err, result) {
    if (err) return next (err);
    if (!result) return next({
      err: "Could not find that specific member"
    });
    req.whatever = result;
    next();
  });
});

router.get('/', function(req, res, next) {
MembR.find({}, function(err, result){
  if (err) return nrxt(err);
  res.send(result);
  });
});

router.post('/', function(req, res, next) {
  var memb = new MembR(req.body);
  memb.deactiv = null;
  memb.activ = new Date();
  memb.save(function(err, result){
    if(err) return next(err);
    console.log(result);
    res.send(result);
  });
});

router.put('/:id', function (req, res, next) {
  MembR.update({
    _id: req.whatever._id
      }, {
        $set: {
          deactiv: new Date()
        }
      },
      function(err, result) {
        if (err) return next(err);
        res.send(result);
      });
  });

router.patch('/:id', function(req, res, next) {
    req.whatever.deactiv = null;
    req.whatever.save(function(err, result) {
      if (err) return next(err);
      console.log(result);
      res.send(result);
    });
  });

  router.delete('/:id', function(req, res, next) {
    MembR.remove({
      _id: req.whatever.id
    }, function(err, result) {
      if (err) return next(err);
      console.log(result);
      res.send();
    });
  });


module.exports = router;
