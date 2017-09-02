// * Initially, the Tweet button and the character count button should be hidden (CSS).

// * When the user clicks on the textarea, the textarea should double in size and the
//       character count and Tweet buttons should be revealed.

// * As the user types, the character count should decrease.

// * When there are 10 or less characters, the character counter should turn red.

// * If the user puts in more than 140 characters, the tweet button should be disabled
//      (and re-enabled when there are <= 140 chars).

// * When the user successfully inputs characters and clicks the “Tweet” button, a new tweet
//      should be created and added to the tweet stream in the main column, using the user’s fake profile
//      image in the top left and username/fullname.


$(document).ready(function(){

  var maxLength = 140;

$('textarea').on('click', function(){
$('#char-count').css('display','inline-block');
$('.button').css('display','inline-block');
});


$('.tweet-compose').keydown(function(){
      var length = $(this).val().length;
      var remaining = maxLength - length;

     if(remaining <= 10){
          $("#char-count").css("color", "red");
          $("#char-count").html(remaining);
          $('#tweet-submit').on('click',function() {
              $(this).prop("disabled",false);
          });
      }
      else if(remaining > 10){
        $("#char-count").css("color", "black");
      $("#char-count").html(remaining);
      $('#tweet-submit').on('click',function() {
          $(this).prop("disabled",false);
      });
      }
      else if(remaining < 0){
          $('#tweet-submit').on('click',function() {
              $(this).prop("disabled",true);
          });
      }


});


$('#tweet-submit').on('click', function(){
  var tweetText = $(".tweet-compose").val();
  $("textarea.tweet-compose").val("");
  var date = new Date();

  var newTweet = $(".tweet:first-of-type").clone();
   newTweet.find("p.tweet-text").text(tweetText);
   newTweet.find("img.avatar").attr("src", './img/IMG_6690.jpg');
   newTweet.find(".username").text("@____a___j____");
   newTweet.find(".fullname").text("WhiteChedda");

   newTweet.find(".num-retweets, .num-favorites").text("0");
  newTweet.fadeIn();
  $("#stream").prepend(newTweet);

});






});
