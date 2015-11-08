
function RegisterController ($scope) {

  $scope.createUser = function (user) {
    console.log(user);
  };

}

RegisterController.$inject = ['$scope'];

export default RegisterController;