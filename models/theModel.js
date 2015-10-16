var mongoose = require('mongoose');
var MembSchema = new mongoose.Schema ({
  name: {required: true, type:String},
  last: {required: true, type: String},
  activ: Date,
  deactiv: Date
});

mongoose.model('MembR', MembSchema);
