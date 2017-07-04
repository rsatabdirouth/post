angular.module('mainApp')
    .controller('homeCtrl', function($scope, appService){
    var vm = this;
    vm.pageSize = 6;
    vm.totalItem = 0;
    vm.pagesCount = 0;
    vm.pages = [];
    vm.currentPage= 1;
    var index = 0;
    vm.pageChange = pageChange;
    vm.pagedPost = [];
    vm.showBody=showBody;
    vm.posts = [];
    vm.currentPost = null;
    
    vm.title = "the lists of statements";
   
    function activate(){    
        
        appService.getpost().then(function(res){            
            vm.posts = res.data;
            
            vm.totalItem = vm.posts.length;
            vm.pagesCount = Math.ceil(vm.totalItem/vm.pageSize);
                for(var i = 1; i<= vm.pagesCount; i++){
                    vm.pages.push(i);
                }
            pageChange(vm.pages[--vm.currentPage]);
            console.log(vm.pages);
            console.log('posts', vm.posts);
            console.log('total item', vm.totalItem);
            console.log('pagescoutn', vm.pagesCount);
        })
        
    }
    activate();
    function pageChange(page){
        console.log(page);
        vm.pagedPost = [];
        vm.currentPage = page;
        index = (page - 1) * vm.pageSize;   
        console.log(index);
        var trackIndex = 0;
            for(var i = index; i <= vm.posts.length; i++){
                vm.pagedPost.push(vm.posts[i]);
                trackIndex++;
                if(trackIndex == vm.pageSize){
                    break;
                }
        
    }
      
    }
    
    function listbody(id){
        
          function pageChange(page){
        console.log(page);
        vm.pagedPost = [];
        vm.currentPage = page;
        index = (page - 1) * vm.pageSize;   
      //  console.log(index);
        var trackIndex = 0;
            for(var i = index; i <= vm.posts.length; i++){
                if(i==id)
                vm.pagedPost.push(vm.posts[i]);
               
    }
      
    }
    }
    function showBody(id)
    {
        console.log(id);
    }
});

