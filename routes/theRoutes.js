var express = require('express');

var router = express.Router();
var uuid = require('uuid');
var members = [];

function Member(name, last){
  this.name = name;
  this.last = last;
  this.activ = new Date();
  this.deactiv = null;
  this.id = uuid.v4();
}

members.push(new Member("Tim", "Turner"), new Member("Adam", "Smith"), new Member("Mark", "Burns"));

router.param('id', function(req, res, next, id){
  for (var i=0; i < members.length; i++){
    if(id === members[i].id){
      req.whatever = members[i];
      return next();
    }
  }
  next({err: "The requested member could not be found"});
});

router.get('/', function(req, res){
  res.send(members);
});

router.post('/', function(req, res){
  var memb = new Member(req.body.name, req.body.last);
  members.push(memb);
  res.send(memb);
});

router.delete('/:id', function(req, res){
  members.splice(members.indexOf(req.whatever), 1);
  res.send();
});

router.put('/:id', function (req, res){
  req.whatever.deactiv = new Date();
  res.send();
});

router.patch('/:id', function (req, res){
  req.whatever.deactiv = null;
  res.send();
});


module.exports = router;
