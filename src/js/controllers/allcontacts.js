const SERVER_URL = "https://ancient-stream-35750.herokuapp.com";

function AllContactsController ($scope, $http, $state) {
  $http.get(`${SERVER_URL}/contacts`).then(resp => {
        $scope.contacts = resp.data;
        console.log(resp.data);


});
}
AllContactsController.$inject = ['$scope', '$http', '$state'];

 export default AllContactsController;
