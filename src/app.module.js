(function(angular) {
    'use strict';

    /*
     * here is the right place to configure shared modules like app.appCore and feature-module
     * app.appCore defines the dependencies to angular and third party modules
     * any feature module should depend on app.appCore and possible other shared modules
     */

    /**
     * @ngdoc: overview
     * @name: ngPedidos
     *
     */
    angular.module('ngPedidos', ['appCore']);
    angular.module('ngPedidos').run(ngPedidosRun);

    /* @ngInject */
    function ngPedidosRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/tabla-pedidos');
    }

    function getStates() {
        return [

               {
               state: 'tabla-pedidos',
               config: {
                       url: '/tabla-pedidos',
                       templateUrl: 'appCore/tabla-pedidos/tabla-pedidos.html',
                       controller: 'TablaPedidosCtrl',
                       controllerAs: 'vm',
                       title: 'Nuevo Pedido'
              }
        },
            /* Add New States Above */


        ];
    }

})(angular);
