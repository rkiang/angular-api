var app = angular.module('myApp', []);

app.controller('SwapiController', ['$http', function ($http) {
    console.log('controller loaded');

    var self = this;

    var giphyAPIKey = '55dfdef0b688403e8b2ced767be3788d';

    self.getSpecies = function (id) {

        $http.get('https://swapi.co/api/species/' + id).then(function (response) {
            console.log('response.data', response.data);
            self.speciesResult = response.data;
            $http.get(self.speciesResult.films[0]).then(function (response) {
                console.log('film data:', response.data);
                self.filmResult = response.data;
            });
        });
    };

    // self.getTrendingGiphy = function() {
    //     var baseUrl = 'http://api.giphy.com/v1/gifs/trending?';
    //     baseUrl += 'api_key=' + giphyAPIKey; // API key
    //     baseUrl += '&limit=5'; // limit
    //     baseUrl += '&rating=g'; // rating

    //     console.log('baseUrl:', baseUrl);
        
    //     $http.get(baseUrl).then(function (response) {
    //         console.log('trending giphys:', response.data);
            
    //     });
    // };
    // self.getTrendingGiphy();

    self.getRandomGiphy = function () {
        var baseUrl = 'http://api.giphy.com/v1/gifs/random?';
        baseUrl += 'api_key=' + giphyAPIKey;
        baseUrl += '&limit=1';
        baseUrl += '$rating=g';
        console.log('baseUrl:', baseUrl);

        $http.get(baseUrl).then(function (response) {
            console.log('random giphys:', response.data);
            self.randomGiphy = response.data;
        });
        
    };
    self.getRandomGiphy();


    // example request:
    // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
    self.searchGiphy = function (input) {
        var baseUrl = 'http://api.giphy.com/v1/gifs/search?';
        baseUrl += 'q=' + input;
        baseUrl += '&api_key=' + giphyAPIKey;
        baseUrl += '&limit=3';
    
        console.log('baseUrl:', baseUrl);

        $http.get(baseUrl).then(function (response) {
            console.log('search giphys:', response.data.data);
            self.searchGif = response.data.data;
        });
    }
}]);
