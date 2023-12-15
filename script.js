const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  playSound();  // Play the sound first
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
  let audio = new Audio();
  audio.src = "https://rr2---sn-bxuovgf5t-vna6.googlevideo.com/videoplayback?expire=1702688292&ei=xKF8ZYDrHYTAsfIPjK6JmAU&ip=102.129.252.234&id=o-AOKwFkkNs8tVNTX33gGBpmOcjjSJRPSnCTdi7Mh78i4V&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9fx3LvydnpnY-FyRBAGsC67nwSSo&vprv=1&svpuc=1&mime=audio%2Fwebm&gir=yes&clen=649905&dur=39.081&lmt=1684122175284827&keepalive=yes&fexp=24007246&c=ANDROID&txp=5318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAJukWuMFRRjb8eHHZ5zd6GH5oFV5mo-Ry7CDFaIaeB8QAiEAylzQndvuPbmV9A7EWRNQSTaafMeCXTLVmjb6pYvwqeQ%3D&redirect_counter=1&rm=sn-n4vld7z&req_id=1b31fa00cad4a3ee&cms_redirect=yes&ipbypass=yes&mh=WX&mip=84.215.71.120&mm=31&mn=sn-bxuovgf5t-vna6&ms=au&mt=1702666670&mv=m&mvi=2&pl=21&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgCfJIfnGJVOj-CVg_Sk0BmhcLPFbdrJC3dYSo47NEG90CIGDO8c1JY7RK2wc2QNVR1hy-jEDJJ8_UTvwUSZmdZ02h";
  audio.play();
};


