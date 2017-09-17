app.controller('questionController',['$scope','questionFactory',"$routeParams", function($scope, questionFactory,$routeParams){

  $scope.errors = []
  $scope.questions = []

  var index = function() {
    if($routeParams.id) {
      questionFactory.getQuestions(function(returnedData){
        $scope.questions = returnedData;
        for(question in $scope.questions) {
          if ($scope.questions[question]['_id'] == $routeParams.id) {
            $scope.question = $scope.questions[question]
          }
        }
      })
    }else {
      questionFactory.getQuestions(function(data){
        $scope.questions = data
      })
    }
  }

    index()

    $scope.create = function(){
      $scope.errors = []
      if(!$scope.question || !$scope.question.title){
        $scope.errors.push('Please put the title')
      }
      else if($scope.question.title.length < 10){
        $scope.errors.push('Question should be at least 10')
      }
      else{
        questionFactory.create($scope.question)
      }
    }

    // $scope.vote_one = function(){
    //   // console.log($routeParams)
    //   // console.log($routeParams.id)
    //   questionFactory.vote_one($routeParams.id)
    // }
    //
    // $scope.vote_two = function(){
    //   questionFactory.vote_two($routeParams.id)
    // }
    //
    // $scope.vote_three = function(){
    //   questionFactory.vote_three($routeParams.id)
    // }
    //
    // $scope.vote_four = function(){
    //   questionFactory.vote_four($routeParams.id)
    // }


}])
