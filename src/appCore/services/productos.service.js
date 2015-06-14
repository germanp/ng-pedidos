(function(angular) {
    'use strict';

    angular.module('ngPedidos').service('productosService', productosService);

    function productosService($resource) {
        return $resource('/api/productos.json');
    }

})(angular);
