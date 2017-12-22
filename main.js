 var imageList = [
   "img/IMG_3273.JPG",
   "img/IMG_5346.jpg",
   "img/IMG_5758.jpg",
   "img/IMG_5759.jpg",
   "img/IMG_6112.jpg",
   "img/IMG_6265.JPG",
   "img/IMG_6500.jpg"
 ];

function choose() {
  var index = Math.floor(Math.random() * imageList.length);
  console.log(index);
  return imageList[index];
}

function set(src, elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.backgroundImage = 'url(' + src + ')';
  }
}

function load(elements) {
  set(choose(), elements);
}

var elements = document.getElementsByClassName('edit-background');
load(elements);
