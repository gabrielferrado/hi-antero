let times = 0;

function changeAntero() {
  const face = document.getElementById('antero');
  const audio = document.getElementById('audio');
  const audio1 = document.getElementById('audio1');
  const audio2 = document.getElementById('audio2');

  const array = [
    { audio: audio, timeout: 600 },
    { audio: audio1, timeout: 1800 },
    { audio: audio2, timeout: 2500 }
  ];

  const item = array[Math.floor(Math.random() * array.length)];

  // const times = Math.floor(Math.random() * 10);
  times++;
  const random = Math.floor(Math.random() * 5);
  console.log({times, random});

  if (times === 8) {
    times = 0;
    face.style.backgroundImage="url(img/antero_on.png)";

    if (random === 1) {
      item.audio.play();
      return setTimeout(() =>
        face.style.backgroundImage="url(img/antero_off.png)",
        item.timeout
      );
    }

    audio.play();

    setTimeout(() => face.style.backgroundImage="url(img/antero_off.png)", 600);
  }
}
