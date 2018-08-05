var list = [
  { type: "img", src: "img/IMG_3273.JPG" },
  { type: "img", src: "img/IMG_5346.jpg" },
  { type: "img", src: "img/IMG_5758.jpg" },
  { type: "img", src: "img/IMG_5759.jpg" },
  { type: "img", src: "img/IMG_6112.jpg" },
  { type: "img", src: "img/IMG_6265.JPG" },
  { type: "img", src: "img/IMG_6500.jpg" },
  { type: "img", src: "img/IMG_6648.jpg" },
  { type: "img", src: "img/IMG_7020.jpg" },
  { type: "heic", src: "img/IMG_6112.heic", mov: "img/IMG_6112.mov" },
	{ type: "mov", mov:"img/IMG_6265.MOV" },
	{ type: "heic", src: "img/IMG_6500.heic", mov: "img/IMG_6500.mov" },
	{ type: "heic", src: "img/IMG_6648.heic", mov: "img/IMG_6648.mov" },
	{ type: "heic", src: "img/IMG_7019.heic", mov: "img/IMG_7019.mov" },
	{ type: "heic", src: "img/IMG_7020.heic", mov: "img/IMG_7020.mov" },
	{ type: "heic", src: "img/IMG_7021.heic", mov: "img/IMG_7021.mov" },
	{ type: "heic", src: "img/IMG_7134.heic", mov: "img/IMG_7134.mov" },
	{ type: "heic", src: "img/IMG_7135.heic", mov: "img/IMG_7135.mov" },
	{ type: "heic", src: "img/IMG_7183.heic", mov: "img/IMG_7183.mov" },
	{ type: "heic", src: "img/IMG_7184.heic", mov: "img/IMG_7184.mov" },
	{ type: "heic", src: "img/IMG_7231.heic", mov: "img/IMG_7231.mov" },
	{ type: "heic", src: "img/IMG_7840.heic", mov: "img/IMG_7840.mov" },
	{ type: "heic", src: "img/IMG_7841.heic", mov: "img/IMG_7841.mov" },
	{ type: "heic", src: "img/IMG_7842.heic", mov: "img/IMG_7842.mov" },
	{ type: "heic", src: "img/IMG_8147.heic", mov: "img/IMG_8147.mov" },
	{ type: "heic", src: "img/IMG_8148.heic", mov: "img/IMG_8148.mov" },
	{ type: "heic", src: "img/IMG_8387.heic", mov: "img/IMG_8387.mov" },
	{ type: "heic", src: "img/IMG_9103.heic", mov: "img/IMG_9103.mov" },
	{ type: "heic", src: "img/IMG_9274.heic", mov: "img/IMG_9274.mov" },
	{ type: "heic", src: "img/IMG_9877.heic", mov: "img/IMG_9877.mov" }
];

const setMovieHeight = (video) => {
  const mvWidth = window.outerHeight * 1.76388889;
  const mvHeight = window.outerWidth / 1.76388889;
  const leftMargin = (mvWidth - window.outerWidth) / 2;
  if (mvHeight < window.outerHeight) {
    video.style.left = - leftMargin;
  }
};

const chooseData = () => {
  var index = Math.floor(Math.random() * list.length);
  return list[index];
};

const set = (data) => {
  const body = document.getElementById('body');
  if (data.type === "img") {
    body.style.backgroundImage = 'url(' + data.src + ')';
  } else {
    // setMovieHeight(video);
    const video = document.createElement('video');
    video.src = data.mov;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    const container = document.getElementById('video-container')
    container.appendChild(video);
    video.load();
  }
};

const load = () => {
  set(chooseData());
};

load();

window.onload = () => {
};

window.onresize = () => {
};
