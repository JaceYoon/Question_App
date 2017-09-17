app.controller('answerController',['$scope','answerFactory',"$routeParams", function($scope, answerFactory,$routeParams){

  $scope.errors = []
  $scope.answers = []

  var index = function() {
    if($routeParams.id) {
      answerFactory.getAnswers(function(returnedData){
        $scope.answers = returnedData;
        for(answer in $scope.answers) {
          if ($scope.answers[answer]['_id'] == $routeParams.id) {
            $scope.answer = $scope.answers[answer]
          }
        }
      })
    }else {
      answerFactory.getAnswers(function(data){
        $scope.answers = data
      })
    }
  }

    index()

  $scope.answer_create = function(id){
    $scope.errors = []
    if(!$scope.answer || !$scope.answer.answer){
      $scope.errors.push('Please put the answer')
    }
    else if($scope.answer.answer.length < 5){
      $scope.errors.push('Answer should be at least 5')
    }
    else{
      answerFactory.create($scope.answer,id)
    }
  }

  $scope.like = function(id){
    answerFactory.like(id)
  }

}])
