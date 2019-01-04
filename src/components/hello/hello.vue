<template>
  <div class="hello">
    <router-link to="/overview" class="ivu-btn ivu-btn-primary ivu-btn-circle">欢迎进入汐的世界</router-link>
  </div>
</template>

<script>
import {PerspectiveCamera, Scene, SpriteMaterial, Sprite, WebGLRenderer} from 'three';
export default {
  name: 'Hello',
  data() {
    return {
    };
  },
  mounted() {
    let SEPARATION = 100;
    let AMOUNTX = 100;
    let AMOUNTY = 70;

    let container;
    let camera, scene, renderer;

    let particles = 0;
    let particle = 0;
    let count = 0;

    let mouseX = 85;
    let mouseY = -342;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    this.init = () => {
      container = document.createElement('div');
      document.querySelector('.hello').appendChild(container);
      camera = new PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 1000;
      scene = new Scene();
      particles = [];
      let material = new SpriteMaterial({
        color: 0xe1e1e1,
        fog: true,
        lights: true
      });
      let i = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new Sprite(material);
          particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
          particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
          scene.add(particle);
        }
      }

      renderer = new WebGLRenderer({alpha: true, antialias: true});
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      this.onWindowResize = () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      this.onDocumentMouseMove = (event) => {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
      };

      document.addEventListener('mousemove', this.onDocumentMouseMove, false);
      // document.addEventListener('touchstart', onDocumentTouchStart, false);
      // document.addEventListener('touchmove', onDocumentTouchMove, false);

      window.addEventListener('resize', this.onWindowResize, false);
    };

    // function onDocumentTouchStart(event) {
    //   if (event.touches.length === 1) {
    //     event.preventDefault();
    //     mouseX = event.touches[0].pageX - windowHalfX;
    //     mouseY = event.touches[0].pageY - windowHalfY;
    //   }
    // }

    // function onDocumentTouchMove(event) {
    //   if (event.touches.length === 1) {
    //     event.preventDefault();
    //     mouseX = event.touches[0].pageX - windowHalfX;
    //     mouseY = event.touches[0].pageY - windowHalfY;
    //   }
    // }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      let i = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
          particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
        }
      }

      renderer.render(scene, camera);
      count += 0.1;
    }

    this.animate = () => {
      this.stop = requestAnimationFrame(this.animate);
      render();
    };

    this.init();
    this.animate();
  },
  destroyed() {
    document.removeEventListener('mousemove', this.onDocumentMouseMove, false);
    document.removeEventListener('resize', this.onWindowResize, false);
    cancelAnimationFrame(this.stop);
  }
};
</script>

<style lang="stylus" scoped>
  @import './index.styl';
</style>
