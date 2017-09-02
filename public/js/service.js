angular.module('RomanCalciService', [])

.factory('serviceAPI', function ($http, $q) {

    function toServer(doc2send, Url) {
        var deferred = $q.defer();
        console.log(doc2send);
        var req =
            {
                method: 'GET',
                url: Url,
                data: jQuery.param(doc2send),
                headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

        $http(req).then(function (res) {
            deferred.resolve(res);
        }, function (res) {
            console.log('error ');
            deferred.reject(res);
        });

        return deferred.promise;
    }

    return {
         toServer: toServer
    }
})