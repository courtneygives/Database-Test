var express = require('express');
var router = express.Router();
var path = require('path');
var Assignment = require('../../models/assignments');

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/all', function(request, response){
  Assignment.find({}, function(err, assignments){
    if(err){
      console.log(err);
    } else {
      console.log('GET went through');
      response.send(assignments);
    }
  });
});


router.post('/add', function(request, response){
  var data = request.body;

  var assignment = new Assignment({
    assignmentNum: data.assignmentNum,
    studentName: data.studentName,
    score: data.score,
    dateComplete: data.dateComplete
  });

});

module.exports = router;
