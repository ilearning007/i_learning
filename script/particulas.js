/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */
 
/* config dom id (optional) + config particles params */


particlesJS('particles-js', {
  particles: {
    color: '#42A5F5', // Color del vertice
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle" // Establecemos cual de las 3 figuras queremos para vertice
    opacity: {
      opacity: 2, // Opacidad del vertice
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0,
        sync: true
      }
    },
    size: 4,
    size_random: true,
    nb: 150,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#757575', // Color de la arista
      opacity: 1, // Opacidad de la arista
      width: 3,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 2 // Velocidad a la que se mueven las aristas
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'window', // "canvas" or "window"
    mode: 'grab', // "grab" of false
    line_linked: {
      opacity: .8
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      },
      onresize: {
        enable: true,
        mode: 'out', // "out" or "bounce"
        density_auto: false,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});
