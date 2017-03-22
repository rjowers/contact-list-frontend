const SERVER_URL = "https://ancient-stream-35750.herokuapp.com";

function SingleContactController ($scope, $http, $state) {
  $http.get(`${SERVER_URL}/contacts`).then(resp => {

        $scope.contact = resp.data;
        // console.log(resp.data[]);


});
}
SingleContactController.$inject = ['$scope', '$http', '$state'];

 export default SingleContactController;
