const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const styleBg = document.querySelector("body")

const bgChange = () => {
  console.log("Changing background");
  styleBg.style.background = "url('https://img1.picmix.com/output/stamp/normal/4/6/2/4/2354264_59fd3.gif')";
  styleBg.style.backgroundSize = "cover";
};


yesBtn.addEventListener("click", () => {
  playSound(); 
  bgChange();
  question.innerHTML = "Yay, see you on the 14th!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


const playSound = () => {
  let audio = new Audio("videoplayback.mp3");
  audio.play();
};
