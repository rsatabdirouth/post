angular.module('mainApp')
    .service('appService', function ($http) {
        var service = this;
            service.getpost = getPost;
    
        function getPost() {
          return $http.get('https://jsonplaceholder.typicode.com/posts')               
        }
       
    });
