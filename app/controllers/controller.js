angular.module('app')
  .controller('contactCtrl', ['$scope', function($scope){
    $scope.listOfContacts = [];
    $scope.name = '';
    $scope.email = '';
    $scope.message = '';
    $scope.submit = function(contact) {
        if ($scope.name || $scope.email || $scope.message) {
            $scope.listOfContact.push({ name: $scope.name, email: $scope.email, message: $scope.message});
            console.log($scope.listOfContact);
            $scope.name = '';
            $scope.email = '';
            $scope.message = '';
            console.log($scope.listOfContacts);
        }
    }
  
}]);


angular.module('app').controller('aboutCtrl', function($scope){
    $scope.home = "this is home scope"
});


angular.module('app').controller('homeCtrl', function($scope){
    $scope.home = "This is few problems Im struggling"
});


angular.module('app').controller('myBlogCtrl', function($scope){
   
  var posts = [
  { title:"UX / UI Design" ,postImage: 'Artboard5@2x.png', postAuthor:'Lukasz Kaczmarek', postCaption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.'},
  { title: "ACCESSIBILITY", postImage: 'Artboard6@2x.png', postAuthor:'Lukasz Kaczmarek', postCaption: "Without argument, one of the most important things to consider when creating a website is that it be accessible to everyone who wants to view it. Does your website play nice with screen readers?"},
  { title: "ANALYTICS", postImage: 'Artboard7@2x.png', postAuthor:'Lukasz Kaczmarek', postCaption: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham"}
  ];
  $scope.addPost = function () {
  var newPost = 
    { 
      title: $scope.post.title ,
      postImage: $scope.post.postImage , 
      postAuthor: $scope.post.postAuthor , 
      postCaption: $scope.post.postCaption 
    };
    $scope.posts.push(newPost);
    console.log(newPost);
    console.log(posts);
    return(newPost);
    $scope.post = {};
  }
  $scope.posts = posts;
});


