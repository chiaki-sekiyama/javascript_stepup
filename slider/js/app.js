'use strict';
/* Windows使用 */

class photoViewer {
  constructor(rootElm, images) {
    this.rootElm = rootElm;
    this.images = images;
    this.currentIndex = 0;
  }

  init() {
    const nextElm = this.rootElm.querySelector('#next');
    nextElm.addEventListener('click', () => {
      this.next();
    });

    const prevElm = this.rootElm.querySelector('#prev');
    prevElm.addEventListener('click', () => {
      this.prev();
    });

    this.updatePhoto();
  }

  updatePhoto() {
    const frameElm = this.rootElm.querySelector('.sliderList');
    const image = this.images[this.currentIndex];
    frameElm.innerHTML = `
      <div class="currentImage fade">
        <img src="${image}" />
      </div>
    `;
    this.startTimer();
  }

  next() {
    const lastIndex = this.images.length - 1;
    if (lastIndex === this.currentIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    this.updatePhoto();
  }

  prev() {
    const lastIndex = this.images.length - 1;
    if (this.currentIndex === 0) {
      this.currentIndex = lastIndex;
    } else {
      this.currentIndex--;
    }

    this.updatePhoto();
  }

  startTimer() {
    if(this.timerKey) {
      clearTimeout(this.timerKey);
    }

    this.timerKey = setTimeout(() => {
      this.next();
    }, 5000);
  }
}

const images = [
  './image/blue.png',
  './image/red.png',
  './image/green.png',
  './image/orange.png'
];
new photoViewer(document.getElementById('photoViewer'), images).init();