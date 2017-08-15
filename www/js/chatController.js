var app = angular.module('myApp', ['onsen']);
    app.controller('urgentController', function($scope, $http) {
      this.world = 'World';
      this.robot = 'bibi';
      this.msg = 'e';

      $scope.submit = function(message) {
        var data = {
             message: message
        };

      var accessToken = "3eb39c392d9443c2a348d6ec9ecc15d9",
      baseUrl = "https://api.api.ai/v1/";
      messageInternalError = "Oh no, there has been an internal server error",
      messageSorry = "I'm sorry, I don't have the answer to that yet.";

      var request=$http({
           method:"post",
           url: baseUrl + "query",
           headers:{
            'Content-Type':'application/json; charset=utf-8',
            "Authorization": "Bearer " + accessToken,
            // "ocp-apim-subscription-key": subscriptionKey
          },
           data: JSON.stringify({query: data.message, lang: "en", sessionId: "yaydevdiner", fulfillment:""})

       });

       request.success(function(data){
          console.log(data);
       });
       request.error(function(data){
           console.log(messageInternalError);
       });


        console.log(data);
        $('.messages-section').append('<div class="send message animated fadeIn">' + data.message + '</div>');
        this.msg = 'f';
      };
    });

    ons.ready(function() {
      console.log("working");
    });