function CarService ($http, PARSE) {

  this.getCars = function () {
    return $http.get(PARSE.URL + 'classes/car', PARSE.CONFIG);
  };

  this.addCar = function (car) {
    return $http.post(PARSE.URL + 'classes/car', car, PARSE.CONFIG);
  };

}

CarService.$inject = ['$http', 'PARSE'];

export default CarService;