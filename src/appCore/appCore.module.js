(function () {
    'use strict';

    angular
        .module('appCore', [
            'ngAnimate',
            'ngSanitize',
            'ngResource',
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            'ui.router',
            'ui.bootstrap'
        ]);
})(angular);
