let times = 0;
let hasBalloon = false;

function changeAntero() {
  const face = document.getElementById('antero');
  const link = document.getElementById('link');
  const balloon = document.getElementById('balloon');
  const audio = document.getElementById('audio');
  const audio1 = document.getElementById('audio1');
  const audio2 = document.getElementById('audio2');

  if (hasBalloon) {
    balloon.style.left = '100%';
    setTimeout(() => balloon.style.left = '78%', 400)
  } else {
    balloon.style.left = '78%';
  }

  const array = [
    { audio: audio, timeout: 600 },
    { audio: audio1, timeout: 1650 },
    { audio: audio2, timeout: 2350 }
  ];

  const item = array[Math.floor(Math.random() * array.length)];

  times++;
  const random = Math.floor(Math.random() * 5);

  hasBalloon = true;
  if (times === 8) {
    link.classList.toggle('disabled');

    times = 0;
    face.style.backgroundImage="url(img/fechada.png)";

    if (random === 1) {
      item.audio.play();
      face.style.backgroundImage="url(img/aberta.png)";

      setTimeout(() => {
          face.style.backgroundImage="url(img/fechada.png)"
          setTimeout(() => face.style.backgroundImage="url(img/antero_off.png)", 150)
        },
        item.timeout
      );

      return setTimeout(() => {
        balloon.style.left = '100%';
        link.classList.toggle('disabled');
      }, 1000);
    }

    audio.play();
    face.style.backgroundImage="url(img/aberta.png)";

    setTimeout(() => {
      face.style.backgroundImage="url(img/fechada.png)"
      setTimeout(() => face.style.backgroundImage="url(img/antero_off.png)", 150)
    }, 500);

    setTimeout(() => {
      balloon.style.left = '100%';
      link.classList.toggle('disabled');
    }, 1300);

    // link.classList.toggle('disabled');
  }
}
