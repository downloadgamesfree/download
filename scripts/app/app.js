var gameApp = angular.module('gameApp', []);
gameApp.controller('ctrlGame', function ($scope, $http) {
    $scope.gameData = [{ gameName: 'Call of Duty', description: 'download game', imageUrl: 'img/1.jpg', linkGenerated: false, downloadUrl: '', hasParts: true, parts: [{ link: 'link1' }, { link: 'link2' }] }, { gameName: 'Call of Duty', description: 'download game', imageUrl: 'img/1.jpg', linkGenerated: false, downloadUrl: '', hasParts: true, parts: [{ link: 'link1' }, { link: 'link2' }] }, { gameName: 'Call of Duty', description: 'download game', imageUrl: 'img/1.jpg', linkGenerated: false, downloadUrl: '', hasParts: true, parts: [{ link: 'link1' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }, { link: 'link2' }] }];
    console.log($scope.gameData);
    $scope.linkGenerated = false;
    $scope.showLinks = function (game) {
        console.log(game);
        game.linkGenerated = true;
        return false;
    }
	
	$scope.getLink = function (link) {
		debugger
        console.log(game);
        game.linkGenerated = true;
        return false;
    }
    //alert(1);
    //var encrypt = "";
    //var decrypt = "";
    //var url = "https\\:download.com";
    //for (i = 0; i < url.length; i++) {
    //    encrypt += url[i]+"a"+5;
    //}
    //console.log(encrypt);
    //for (i = 0; i < encrypt.length; i++) {
    //    decrypt += encrypt[i];
    //    i += 2;
    //}
    //console.log(decrypt);



    //$scope.base64 = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

    //// Define the string
    //var string = encrypt;

    //// Encode the String
    //var encodedString = $scope.base64.encode(string);
    //console.log(encodedString); //output: "am9obiBwYXVsIG9udGU="

    //// Decode the String
    //var decodedString = $scope.base64.decode(encodedString);
    //console.log(decodedString); // output: "john paul onte"

    //var dd = "";
    //for (i = 0; i < decodedString.length; i++) {
    //    dd += decodedString[i];
    //    i += 2;
    //}
    //console.log(dd);
});

$('.genButton').click(function(){
	var gameId = $(this).attr('gmId');
	$('#divDetail' + gameId).removeAttr('hidden');
});

$('.down-button').click(function(){
	var gameUrl = $(this).attr('dll');
	window.open(gameUrl);
});


//calendarApp.factory("calendarFactory", [
//"$resource",
//      function ($resource) {
//          return $resource("/api/CalendarEvent", {}, {
//              getIndex: { method: "GET", isArray: true },
//              create: { method: "POST" }
//          });
//      }
//]);


//calendarApp.controller('ctrlCreate', function ($scope, $route, $http, calendarFactory) {

//    $(function () {
//        $(".formdate").datetimepicker();
//    });


//    var hubs = $.connection.commonHub;
//    $.connection.hub.start();

//    var date = new Date();
//    var d = date.getDate();
//    var m = date.getMonth();
//    var y = date.getFullYear();

//    $scope.create = function () {
//        calendarFactory.create($scope.entity).$promise.then(function () {
//            alertify.log($scope.entity.description + " added successfully.");
//        });

//    };
//});
