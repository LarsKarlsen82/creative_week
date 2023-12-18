import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.0/+esm";

async function loadParticles(options) {
  await loadAll(tsParticles);

  await tsParticles.load({ id: "tsparticles", options });
}

const particleConfigs  = {
  name: "Fireworks Mask",
  fullScreen: {
    enable: true
  },
  background: {
    color: "#000000",
    image: "url('https://particles.js.org/images/background3.jpg')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
  backgroundMask: {
    enable: true,
    cover: {
      color: "#000"
    }
  },
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.1
    },
    rate: {
      delay: 0.15,
      quantity: 1
    },
    size: {
      width: 100,
      height: 0
    },
    position: {
      y: 100,
      x: 50
    }
  },
  particles: {
    color: {
      value: "#fff"
    },
    number: {
      value: 0
    },
    destroy: {
      bounds: {
        top: 30
      },
      mode: "split",
      split: {
        count: 1,
        factor: {
          value: 0.333333
        },
        rate: {
          value: 100
        },
        particles: {
          stroke: {
            width: 0
          },
          color: {
            value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]
          },
          number: {
            value: 0
          },
          collisions: {
            enable: false
          },
          destroy: {
            bounds: {
              top: 0
            }
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1
            },
            animation: {
              enable: true,
              speed: 0.7,
              sync: false,
              startValue: "max",
              destroy: "min"
            }
          },
          effect: {
            type: "trail",
            options: {
              trail: {
                length: {
                  min: 5,
                  max: 10
                }
              }
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 2,
            animation: {
              enable: false
            }
          },
          life: {
            count: 1,
            duration: {
              value: {
                min: 1,
                max: 2
              }
            }
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 9.81,
              inverse: false
            },
            decay: 0.1,
            speed: {
              min: 10,
              max: 25
            },
            direction: "outside",
            outModes: "destroy"
          }
        }
      }
    },
    life: {
      count: 1
    },
    effect: {
      type: "trail",
      options: {
        trail: {
          length: {
            min: 10,
            max: 30
          },
          minWidth: 1,
          maxWidth: 1
        }
      }
    },
    rotate: {
      path: true
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 1
    },
    move: {
      enable: true,
      gravity: {
        acceleration: 15,
        enable: true,
        inverse: true,
        maxSpeed: 100
      },
      speed: {
        min: 10,
        max: 20
      },
      outModes: {
        default: "destroy",
        top: "none"
      }
    }
  },
  sounds: {
    enable: true,
    events: [
      {
        event: "particleRemoved",
        filter: "explodeSoundCheck",
        audio: [
          "https://particles.js.org/audio/explosion0.mp3",
          "https://particles.js.org/audio/explosion1.mp3",
          "https://particles.js.org/audio/explosion2.mp3"
        ]
      }
    ],
    volume: 50
  }
};

// Load particles with the provided configuration
loadParticles(particleConfigs);

// Function to add particles, text, and images dynamically
async function addParticlesAndText(swiper) {
  // Create a new swiper slide
  const newSlide = document.createElement('div');
  newSlide.classList.add('swiper-slide');

  // Create particle container for the new slide
  const particleContainer = document.createElement('div');
  particleContainer.classList.add('particle-container');

  // Add particles to the container (assuming tsParticles is loaded)
  const particlesDiv = document.createElement('div');
  particlesDiv.id = 'tsparticles'; // Assuming this is where particles should be rendered
  particleContainer.appendChild(particlesDiv);

  // Add overlay text to the new slide
  const overlayText = document.createElement('div');
  overlayText.classList.add('overlay-text');
  overlayText.textContent = 'Happy New Year 2023';
  particleContainer.appendChild(overlayText);

  // Add images to the new slide from the assets/img directory
  const imageNames = [

    // Add more image names as needed
  ];

  imageNames.forEach((imageName) => {
    const imageUrl = `./assets/img/${imageName}`;
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    newSlide.appendChild(imageElement);
  });

  // Append the particle container to the new slide
  newSlide.appendChild(particleContainer);

  // Append the new slide to the swiper wrapper
  swiper.appendSlide(newSlide);
}

    // Initialize Swiper
    document.addEventListener('DOMContentLoaded', async function () {
        const swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // Call the function to add particles, text, and images dynamically
        await addParticlesAndText(swiper);
    });

            // Get the audio element
            const backgroundMusic = document.getElementById('backgroundMusic');

            // Play button
            const playButton = document.getElementById('playButton');
            playButton.addEventListener('click', function () {
                backgroundMusic.play();
            });
    
            // Pause button
            const pauseButton = document.getElementById('pauseButton');
            pauseButton.addEventListener('click', function () {
                backgroundMusic.pause();
            });