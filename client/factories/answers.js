app.factory('answerFactory', function($http,$location,$route){
  var factory = {}

  factory.getAnswers = function(callback){
    $http.get('/getanswers').then(function(output){
      answers = output.data
      callback(answers)
    })
  }

  factory.create = function(answer, id){
      $http.post('/create_answer/'+ id, answer).then(function(output){
        if(output.data){
          $location.url('/dash')
        }
      })
  }

  factory.like = function(id, cb) {
    $http.post('like/' + id).then(function(){
      $route.reload()
    })
  }

  return factory
})
