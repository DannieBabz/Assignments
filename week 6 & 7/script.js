const buttons = document.querySelectorAll("button");
const image = document.querySelectorAll(".img");
const left = document.querySelector(".prev");
const right = document.querySelector(".next");
let imageNumber = 0;

function reset() {
	for (let i = 0; i < image.length; i++) {
		image[i].style.display = "none";
	}
}

function Start() {
	reset();
	image[0].style.display = "block";
}

function leftSlide() {
	reset();
	image[imageNumber - 1].style.display = "block";
	imageNumber--;
}
function rightSlide() {
	reset();
	image[imageNumber + 1].style.display = "block";
	imageNumber++;
}
left.addEventListener("click", () => {
	if (imageNumber === 0) {
		imageNumber = image.length;
	}
	leftSlide();
});
right.addEventListener("click", () => {
	if (imageNumber === image.length - 1) {
		imageNumber = -1;
	}
	rightSlide();
});

Start();
