app.factory('questionFactory', function($http,$location,$route){
  var factory = {}

  factory.getQuestions = function(callback){
    $http.get('/getquestions').then(function(output){
      questions = output.data
      callback(questions)
    })
  }

  factory.create = function(question){
      $http.post('/create', question).then(function(output){
        if(output.data){
          $location.url('/dash')
        }
      })
  }

  factory.show = function(id){
    $location.url('/show' + id)
  }

  return factory
})
