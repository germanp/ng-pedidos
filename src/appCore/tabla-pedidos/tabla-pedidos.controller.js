(function(angular) {
    'use strict';

    angular.module('ngPedidos').controller('TablaPedidosCtrl', TablaPedidosCtrl);

    function TablaPedidosCtrl($scope, productosService) {
        var vm = this;

        vm.nuevo = {
            'producto': '',
	        'cantidad': 0,
	        'cambios': 0,
        };
        vm.pedidos = [];
        vm.productos = null;
        vm.totalCantidad = 0;
        vm.totalCambios = 0;

        vm.calcularTotalCantidad = calcularTotalCantidad;
        vm.calcularTotalCambios = calcularTotalCambios;
        vm.borrarProducto = borrarProducto;
        vm.agregarProducto = agregarProducto;

        init();

        function init() {
            vm.calcularTotalCambios();
            vm.calcularTotalCantidad();

            var queryProductos = productosService.query(function(productos){
                vm.productos = productos;
            });
        }

        function calcularTotalCantidad () {
            vm.totalCantidad = _.reduce(vm.pedidos, function(memo, producto){
	            return memo + producto.cantidad;
            }, 0);
        }

        function calcularTotalCambios(){
            vm.totalCambios = _.reduce(vm.pedidos, function(memo, producto){
	            return memo + producto.cambios;
            }, 0);
        }

        function borrarProducto(index) {
            vm.totalCantidad -= vm.pedidos[index].cantidad;
            vm.totalCambios -= vm.pedidos[index].cambios;
            vm.pedidos.splice(index, 1);
        }

        function agregarProducto(){
            if ( $scope.nuevoPedido.$valid ){
                vm.totalCantidad += vm.nuevo.cantidad;
                vm.totalCambios += vm.nuevo.cambios;
                vm.pedidos.push(angular.copy(vm.nuevo));
            }
        }
    }
})(angular);
