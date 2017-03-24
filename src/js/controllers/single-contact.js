const SERVER_URL = "https://ancient-stream-35750.herokuapp.com";

function SingleContactController ($scope, $http, $stateParams) {

var contactid = $stateParams.id;

  $http.get(`${SERVER_URL}/contacts/${contactid}`).then(resp => {
        // for (i = 0; i < data.length; i++)
        $scope.contact = resp.data;
        console.log(resp.data);



});
}
SingleContactController.$inject = ['$scope', '$http', '$stateParams'];

 export default SingleContactController;
