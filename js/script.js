
let musica=document.getElementById("musica");
let pulo=document.getElementById("pulo");
let morte=document.getElementById("morte");
let fim=document.getElementById("somGameover");


const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

musica.play();

const jump = () => {
  mario.classList.add("jump-mario");
  pulo.play(); 

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";
    morte.play();
    musica.pause();

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);
