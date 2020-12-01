$(document).ready(function() {
  console.log('this page is working!')

  //click on img and make it disappear - hide() and click
  $('img').click(function(){
    console.log('The image has disappeared!');
    $(this).hide();
  });

  // $('.luna1').click(function(){
  //   console.log('The Luna image has disappeared!');
  //   $('.luna1').fadeOut("fast", function() {
  //     console.log('Fading away!')
  // });
  // });

  // $('.moonstone1').click(function(){
  //   console.log('moonstone was clicked!')
  //   $(".moonstone1").fadeOut("fast", function() {
  //     console.log('Fading away!')
  //   });
  // });

  // $('.artemis1').click(function(){
  //   console.log('The image has disappeared!');
  //   $('.artemis1').hide();
  // });

  // $('.moonicon2').click(function(){
  //   console.log('The image has disappeared!');
  //   $('.moonicon2').fadeOut("fast", function() {
  //     console.log('Fading away!')
  // });
  // });

  // $('.artemis2').click(function(){
  //   console.log('The image has disappeared!');
  //   $('.artemis2').hide();
  // });

  // $('.sailormoon-icon2').click(function(){
  //   console.log('The image has disappeared!');
  //   $('.sailormoon-icon2').hide();
  // });
  // $('.luna2').click(function(){
  //   console.log('The image has disappeared!');
  //   $('.luna2').fadeOut("fast", function() {
  //     console.log('Fading away!')
  //   });
  // });

  // click button to make images reappear
  $('button').click(function(){
    $('img').slideDown("slow");
  })
});