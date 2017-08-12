


var handlers = {

  usernames: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
              "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],

  counter: 1,


  testIt: ()=>{
    var url = 'https://wind-bow.gomix.me/twitch-api/';
    // /users/:user, /channels/:channel, and /streams/:stream
    handlers.usernames.forEach((name)=>{
      $.ajax({
        url: url + '/users/' + name,
        success: (res)=>{
            console.log("SUCCESS!!! This is /users/ for - " + name);
            console.log(res);
            $('.names').append(handlers.counter + ": " + res.display_name + '<br>');
            handlers.counter++;
        }//success
      })//ajax
      .then(()=>{
        $.ajax({
          url: url + '/channels/' + name,
          success: (res)=>{
              console.log("SUCCESS!!! This is /channels/ for - " + name);
              console.log(res);
              $('.names').append(handlers.counter + ": " + "test channels <br>");
              handlers.counter++;
          }//success
        })//ajax
        .then(function() {
           console.log("worked?");
        }, function() {
           console.log("didn't work");
        });
      })








    });// forEach


  }//testIt


}
