angular.module('widgets', []);

var gompertzResults = function ($scope){
    $scope.results = {
                data:{
                    age:40, 
                    SurvivalData:[
                        {t:1, mortality:1.2345}, 
                        {t:2, mortality:2.3456}
                        ]}, 
                error:''};
};

angular
    .module('widgets')
    .controller('gompertzResults', gompertzResults);