
function CarController ($scope, CarService, $state) {

  CarService.getCars().then( function (response) {
    $scope.cars = response.data.results;
  });


  $scope.addCar = function (car) {
    CarService.addCar(car).then( function (data) {
      $state.go('root.home');
    });
  };

}

CarController.$inject = ['$scope', 'CarService', '$state'];

export default CarController;