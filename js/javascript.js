function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(),

    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),

    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),


    seconds = time.getSeconds();

document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);


var feed = new Instafeed({
  get: 'user',
  userId: '1524261252',
  accessToken: '1524261252.1677ed0.e4be252cc97e4c26baf9b28681764cb4',
  filter: function(image) {
  var MAX_LENGTH = 40;

  // here we create a property called "short_caption"
  // on the image object, using the original caption
  if (image.caption && image.caption.text) {
    image.short_caption = image.caption.text.slice(0, MAX_LENGTH);
  } else {
    image.short_caption = "";
  }

  // ensure the filter doesn't reject any images
  return true;
},
  template: '<div class="col-md-4"><img class="w-100" src={{image}}><hr><p>{{model.short_caption}}...<a href="{{link}}" target="_blank">Read More</a></p></div>'
});
feed.run();
