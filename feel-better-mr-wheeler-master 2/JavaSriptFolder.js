function GetValue(){
    var myarray= new Array("What do you call Santa's brothers and sisters? Relative clauses","The past, the present, and the future all walked into a bar. It was tense","Q: What’s the difference between a cat and a comma? A: One has claws at the end of its paws, and the other is a pause at the end of a clause.", "What does an English teacher eat for breakfast? Synonym buns", "Just finished this book on mount everest. It was a real cliffhanger", "Why are writers always cold? Theyre surrounded by drafts","What does a book do to get thinner? Have its appendix removed");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
}
document.getElementById('play').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('audio').play();
  });
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);


  $(".btn-off").hide();
  $('.btn-on').click(function() {

    $("#needle").addClass("needle-on");
    $(".shadow").addClass("shadow-rotate");
    $("p").hide();
    $("#needle").css("background", "transparent");
    $('.btn-on').hide();

    setTimeout(function() {
      $("#needle").addClass("needle-shake");
      $(".shadow").addClass("shadow-shake");
      $('#record').addClass("spin").css("-webkit-animation-play-state", "running");
      $('.play-1').trigger("play");
    }, 1000);
    setTimeout(function() {
      $('.play-2').trigger("play");
      $('.btn-off').show();
    }, 2000);

  });

  $(".btn-off").click(function() {

    $("#needle").removeClass("needle-shake");
    $(".shadow").removeClass("shadow-shake");
    $('.btn-off').hide();

    setTimeout(function() {
      $("#needle").removeClass("needle-on");
      $(".shadow").removeClass("shadow-rotate");
      $('.play-2').trigger("pause");
    }, 10);
    setTimeout(function() {
      $('.play-1').trigger("pause");
      $('.spin').css("-webkit-animation-play-state", "paused");

      $('.btn-on').show();
    }, 1000);

  });