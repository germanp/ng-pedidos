describe('TablaPedidosCtrl', function() {

    beforeEach(module('ngPedidos'));

    var $scope, vm;

    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $scope = _$rootScope_.$new();
        vm = _$controller_('TablaPedidosCtrl', {$scope: $scope});
    }));

    it('should ...', function() {
        //expect(vm.myModel).toEqual();
        expect(1).toEqual(1);

    });

});
