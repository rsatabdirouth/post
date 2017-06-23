angular.module('mainApp')
    .controller('homeCtrl', function($scope, appService){
    var vm = this;
    
    vm.posts = [];
    
    vm.title = "test text";
   
    function activate(){
        appService.getpost().then(function(res){
            vm.posts = res.data;
        })
    }
    activate();
});