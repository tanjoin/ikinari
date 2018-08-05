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
  { type: "img", src: "img/IMG_6112.png" },
	{ type: "img", src: "img/IMG_6500.png" },
	{ type: "img", src: "img/IMG_6648.png" },
	{ type: "img", src: "img/IMG_7019.png" },
	{ type: "img", src: "img/IMG_7020.png" },
	{ type: "img", src: "img/IMG_7021.png" },
	{ type: "img", src: "img/IMG_7134.png" },
	{ type: "img", src: "img/IMG_7135.png" },
	{ type: "img", src: "img/IMG_7183.png" },
	{ type: "img", src: "img/IMG_7184.png" },
	{ type: "img", src: "img/IMG_7231.png" },
	{ type: "img", src: "img/IMG_7840.png" },
	{ type: "img", src: "img/IMG_7841.png" },
	{ type: "img", src: "img/IMG_7842.png" },
	{ type: "img", src: "img/IMG_8147.png" },
	{ type: "img", src: "img/IMG_8148.png" },
	{ type: "img", src: "img/IMG_8387.png" },
	{ type: "img", src: "img/IMG_9103.png" },
	{ type: "img", src: "img/IMG_9274.png" },
	{ type: "img", src: "img/IMG_9877.png" },
  { type: "mov", mov: "img/IMG_6265.mp4" },
  { type: "mov", mov: "img/IMG_6112.mp4" },
	{ type: "mov", mov: "img/IMG_6500.mp4" },
	{ type: "mov", mov: "img/IMG_6648.mp4" },
	{ type: "mov", mov: "img/IMG_7019.mp4" },
	{ type: "mov", mov: "img/IMG_7020.mp4" },
	{ type: "mov", mov: "img/IMG_7021.mp4" },
	{ type: "mov", mov: "img/IMG_7134.mp4" },
	{ type: "mov", mov: "img/IMG_7135.mp4" },
	{ type: "mov", mov: "img/IMG_7183.mp4" },
	{ type: "mov", mov: "img/IMG_7184.mp4" },
	{ type: "mov", mov: "img/IMG_7231.mp4" },
	{ type: "mov", mov: "img/IMG_7840.mp4" },
	{ type: "mov", mov: "img/IMG_7841.mp4" },
	{ type: "mov", mov: "img/IMG_7842.mp4" },
	{ type: "mov", mov: "img/IMG_8147.mp4" },
	{ type: "mov", mov: "img/IMG_8148.mp4" },
	{ type: "mov", mov: "img/IMG_8387.mp4" },
	{ type: "mov", mov: "img/IMG_9103.mp4" },
	{ type: "mov", mov: "img/IMG_9274.mp4" },
	{ type: "mov", mov: "img/IMG_9877.mp4" }
];

const chooseData = () => {
  var index = Math.floor(Math.random() * list.length);
  return list[index];
};

const set = (data) => {
  const body = document.getElementById('body');
  if (data.type === "img") {
    body.style.backgroundImage = 'url(' + data.src + ')';
  } else {
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
