const SERVER_URL = "https://ancient-stream-35750.herokuapp.com";
function ContactAddController ($scope, $http, $state){
  $scope.addContact = function (data){
    var url = `${SERVER_URL}/contacts`
    $http.post(url, data).then(resp => {
      $state.go('home');
    });
  }
}



ContactAddController.$inject = ['$scope', '$http', '$state'];
export default ContactAddController;
