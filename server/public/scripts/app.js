//count will be used to track click evetns + for next and - for prev
  var count= 0;
  //dataArray storing appended info from json to use for the display in div // cannot append from .peopleHear and empty
  var dataArray = [];
  //counter for appened div ids
  var idcount = 0;
$(document).ready(function(){
  count = 0;

    $.ajax({
      //requests data from server
      type: "GET",
      url: "/data",
      success: function(data){
        // console.log("THis is the data", data.omicron[3]);
        //  console.log(data.omicron);
         //for loop goes throught the omicorn json object and creates a dataArray
         //could switch for loop to a forEach
        for(var i = 0; i <= 17; i++){
          dataArray.push(data.omicron[i]);
        }
            console.log(dataArray);
            console.log("data arrayd",dataArray);
          data.omicron.forEach(function(person, index){
          idcount++;
          // console.log('count', count);
          // console.log("forEach", data.omicron);
          $(".peopleHere").append('<div class="person"id="'+idcount+'"></div>');
          $el = $(".peopleHere").children().last().last();
          //need to use the paramter from the forEach PERSON
          //$el is appending the values into the $el div that was created as it goes through the forEach
          $el.append('<p>' + person.name + '</p>');
          $el.append('<p>' + person.git_username +  '</p>');
          $el.append('<p>' + person.shoutout + '</p>');
        });
      }})

      $('#next').on('click', function () {

          count ++;
          console.log("next");
          console.log(count);
//conditional to set numbers to reset count. if 18 needs to go back to 0
          if(count >= 18) {
             count = 0;
          }
          //Switch statement based on curent count after click
          //case will empty div, append info from created dataArray and change div colors
          switch (count) {
            case 1:
            $("#peopleContainer").empty().append('<div> <h3>' + dataArray[0].name +  '<h/3>'+ '<h5>' + dataArray[0].git_username + '</h5>' + '<h5>' + dataArray[0].shoutout + '<div>').fadeIn("slow");
            $('#17').css("background-color", "green");
            $('#1').css("background-color", "red");
            break;
            case 2:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[1].name +  '<h/3>'+ '<h5>' + dataArray[1].git_username + '</h5>' + '<h5>' + dataArray[1].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
            $('#1').css("background-color", "green");
            $('#2').css("background-color", "red");
            break;
            case 3:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[2].name +  '<h/3>'+ '<h5>' + dataArray[2].git_username + '</h5>' + '<h5>' + dataArray[2].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#2').css("background-color", "green");
           $('#3').css("background-color", "red");
            break;
            case 4:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[3].name +  '<h/3>'+ '<h5>' + dataArray[3].git_username + '</h5>' + '<h5>' + dataArray[3].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#3').css("background-color", "green");
           $('#4').css("background-color", "red");
            break;
            case 5:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[4].name +  '<h/3>'+ '<h5>' + dataArray[4].git_username + '</h5>' + '<h5>' + dataArray[4].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#4').css("background-color", "green");
           $('#5').css("background-color", "red");
            break;
            case 6:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[5].name +  '<h/3>'+ '<h5>' + dataArray[5].git_username + '</h5>' + '<h5>' + dataArray[5].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#5').css("background-color", "green");
           $('#6').css("background-color", "red");
            break;
            case 7:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[6].name +  '<h/3>'+ '<h5>' + dataArray[6].git_username + '</h5>' + '<h5>' + dataArray[6].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#6').css("background-color", "green");
           $('#7').css("background-color", "red");
            break;
            case 8:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[7].name +  '<h/3>'+ '<h5>' + dataArray[7].git_username + '</h5>' + '<h5>' + dataArray[7].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#7').css("background-color", "green");
           $('#8').css("background-color", "red");
            break;
            case 9:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[8].name +  '<h/3>'+ '<h5>' + dataArray[8].git_username + '</h5>' + '<h5>' + dataArray[8].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#8').css("background-color", "green");
           $('#9').css("background-color", "red");
            break;
            case 10:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[9].name +  '<h/3>'+ '<h5>' + dataArray[9].git_username + '</h5>' + '<h5>' + dataArray[9].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#9').css("background-color", "green");
           $('#10').css("background-color", "red");
            break;
            case 11:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[10].name +  '<h/3>'+ '<h5>' + dataArray[10].git_username + '</h5>' + '<h5>' + dataArray[10].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#10').css("background-color", "green");
           $('#11').css("background-color", "red");
            break;
            case 12:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[11].name +  '<h/3>'+ '<h5>' + dataArray[11].git_username + '</h5>' + '<h5>' + dataArray[11].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#11').css("background-color", "green");
           $('#12').css("background-color", "red");
            break;
            case 13:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[12].name +  '<h/3>'+ '<h5>' + dataArray[12].git_username + '</h5>' + '<h5>' + dataArray[12].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#12').css("background-color", "green");
           $('#13').css("background-color", "red");
            break;
            case 14:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[13].name +  '<h/3>'+ '<h5>' + dataArray[13].git_username + '</h5>' + '<h5>' + dataArray[13].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#13').css("background-color", "green");
           $('#14').css("background-color", "red");
            break;
            case 15:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[14].name +  '<h/3>'+ '<h5>' + dataArray[14].git_username + '</h5>' + '<h5>' + dataArray[14].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#14').css("background-color", "green");
           $('#15').css("background-color", "red");
            break;
            case 16:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[15].name +  '<h/3>'+ '<h5>' + dataArray[15].git_username + '</h5>' + '<h5>' + dataArray[15].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#15').css("background-color", "green");
           $('#16').css("background-color", "red");
            break;
            case 17:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[16].name +  '<h/3>'+ '<h5>' + dataArray[16].git_username + '</h5>' + '<h5>' + dataArray[16].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#16').css("background-color", "green");
           $('#17').css("background-color", "red");
            break;
            case 18:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[17].name +  '<h/3>'+ '<h5>' + dataArray[17].git_username + '</h5>' + '<h5>' + dataArray[17].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#17').css("background-color", "green");
           $('#18').css("background-color", "red");
            break;

          }

         // next function close
        });

        $('#prev').on('click', function () {
          count --;
          console.log("previous");
          console.log(count);
//number reset conditional resets number if previouse is hit to go to case 18
          if(count === 0) {
             count = 18;
          }
          //Switch statement based on curent count after click
          //case will empty div, append info from created dataArray and change div colors
          switch (count) {
            case 1:
            $("#peopleContainer").empty().append('<div> <h3>' + dataArray[0].name +  '<h/3>'+ '<h5>' + dataArray[0].git_username + '</h5>' + '<h5>' + dataArray[0].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
            $('#2').css("background-color", "green");
            $('#1').css("background-color", "red");
            break;
            case 2:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[1].name +  '<h/3>'+ '<h5>' + dataArray[1].git_username + '</h5>' + '<h5>' + dataArray[1].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
            $('#3').css("background-color", "green");
            $('#2').css("background-color", "red");
            break;
            case 3:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[2].name +  '<h/3>'+ '<h5>' + dataArray[2].git_username + '</h5>' + '<h5>' + dataArray[2].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#4').css("background-color", "green");
           $('#3').css("background-color", "red");
            break;
            case 4:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[3].name +  '<h/3>'+ '<h5>' + dataArray[3].git_username + '</h5>' + '<h5>' + dataArray[3].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#5').css("background-color", "green");
           $('#4').css("background-color", "red");
            break;
            case 5:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[4].name +  '<h/3>'+ '<h5>' + dataArray[4].git_username + '</h5>' + '<h5>' + dataArray[4].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#6').css("background-color", "green");
           $('#5').css("background-color", "red");
            break;
            case 6:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[5].name +  '<h/3>'+ '<h5>' + dataArray[5].git_username + '</h5>' + '<h5>' + dataArray[5].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#7').css("background-color", "green");
           $('#6').css("background-color", "red");
            break;
            case 7:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[6].name +  '<h/3>'+ '<h5>' + dataArray[6].git_username + '</h5>' + '<h5>' + dataArray[6].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#8').css("background-color", "green");
           $('#7').css("background-color", "red");
            break;
            case 8:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[7].name +  '<h/3>'+ '<h5>' + dataArray[7].git_username + '</h5>' + '<h5>' + dataArray[7].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#9').css("background-color", "green");
           $('#8').css("background-color", "red");
            break;
            case 9:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[8].name +  '<h/3>'+ '<h5>' + dataArray[8].git_username + '</h5>' + '<h5>' + dataArray[8].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#10').css("background-color", "green");
           $('#9').css("background-color", "red");
            break;
            case 10:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[9].name +  '<h/3>'+ '<h5>' + dataArray[9].git_username + '</h5>' + '<h5>' + dataArray[9].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#11').css("background-color", "green");
           $('#10').css("background-color", "red");
            break;
            case 11:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[10].name +  '<h/3>'+ '<h5>' + dataArray[10].git_username + '</h5>' + '<h5>' + dataArray[10].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#12').css("background-color", "green");
           $('#11').css("background-color", "red");
            break;
            case 12:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[11].name +  '<h/3>'+ '<h5>' + dataArray[11].git_username + '</h5>' + '<h5>' + dataArray[11].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#13').css("background-color", "green");
           $('#12').css("background-color", "red");
            break;
            case 13:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[12].name +  '<h/3>'+ '<h5>' + dataArray[12].git_username + '</h5>' + '<h5>' + dataArray[12].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#14').css("background-color", "green");
           $('#13').css("background-color", "red");
            break;
            case 14:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[13].name +  '<h/3>'+ '<h5>' + dataArray[13].git_username + '</h5>' + '<h5>' + dataArray[13].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#15').css("background-color", "green");
           $('#14').css("background-color", "red");
            break;
            case 15:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[14].name +  '<h/3>'+ '<h5>' + dataArray[14].git_username + '</h5>' + '<h5>' + dataArray[14].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#16').css("background-color", "green");
           $('#15').css("background-color", "red");
            break;
            case 16:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[15].name +  '<h/3>'+ '<h5>' + dataArray[15].git_username + '</h5>' + '<h5>' + dataArray[15].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#17').css("background-color", "green");
           $('#16').css("background-color", "red");
            break;
            case 17:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[16].name +  '<h/3>'+ '<h5>' + dataArray[16].git_username + '</h5>' + '<h5>' + dataArray[16].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#18').css("background-color", "green");
           $('#17').css("background-color", "red");
            break;
            case 18:
           $("#peopleContainer").empty().append('<div> <h3>' + dataArray[17].name +  '<h/3>'+ '<h5>' + dataArray[17].git_username + '</h5>' + '<h5>' + dataArray[17].shoutout + '<div>').fadeOut("slow").fadeIn("slow");
           $('#1').css("background-color", "green");
           $('#18').css("background-color", "red");
            break;

          }
    //prev funciton close
    });


  //document ready cloing
    });
