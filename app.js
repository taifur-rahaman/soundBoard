const sounds = ["retro", "woosh", "alram"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const soundStop = document.getElementById(sound);
    soundStop.pause();
    soundStop.currentTime = 0;
  });
}
