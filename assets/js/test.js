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
      },
    ],
  
    volume: 40
  }
};

// Load particles with the provided configuration
loadParticles(particleConfigs);



// // Function to add particles, text, and images dynamically
// async function addParticlesAndText(swiper, imageNames, slideText) {
//   // Create a new swiper slide
//   const newSlide = document.createElement('div');
//   newSlide.classList.add('swiper-slide');
//   newSlide.style.position = 'relative'; // Set relative positioning on the slide

//   // Create particle container for the new slide
//   const particleContainer = document.createElement('div');
//   particleContainer.classList.add('particle-container');

//   // Add images to the new slide from the assets/img directory
//   imageNames.forEach((imageName, index) => {
//     const imageUrl = `./assets/img/${imageName}`;

//     // Create image element
//     const imageElement = document.createElement('img');
//     imageElement.src = imageUrl;
//     imageElement.classList.add('swiper-image');
//     imageElement.style.width = '100%'; // Set width to 100%
//     imageElement.style.height = 'auto'; // Maintain the original aspect ratio
//     imageElement.style.position = 'absolute'; // Set absolute positioning

//     // Calculate the translation for each image based on its index
//     const translation = index * 100;
//     imageElement.style.transform = `translateX(${translation}%)`;

//     newSlide.appendChild(imageElement);
//   });

//   // Add overlay text to the new slide
//   const overlayText = document.createElement('div');
//   overlayText.classList.add('overlay-text');
//   overlayText.textContent = slideText || 'Default Text';
//   overlayText.style.position = 'absolute'; // Set absolute positioning
//   overlayText.style.bottom = '10px'; // Adjust the bottom value as needed
//   overlayText.style.left = '50%'; // Center horizontally
//   overlayText.style.transform = 'translateX(-50%)'; // Center horizontally
//   overlayText.style.zIndex = '1'; // Ensure text appears above images

//   particleContainer.appendChild(overlayText);

//   // Append the particle container to the new slide
//   newSlide.appendChild(particleContainer);

//   // Append the new slide to the swiper wrapper
//   swiper.appendSlide(newSlide);
// }
// Function to add particles, text, and images dynamically

// Function to add particles, text, and images dynamically
async function addParticlesAndText(swiper, imageNames, slideText) {
  // Create a new swiper slide
  const newSlide = document.createElement('div');
  newSlide.classList.add('swiper-slide');
  newSlide.style.position = 'relative'; // Set relative positioning on the slide
  newSlide.style.overflow = 'hidden'; // Hide overflow to prevent images from overlapping

  // Create particle container for the new slide
  const particleContainer = document.createElement('div');
  particleContainer.classList.add('particle-container');

  // Track the total width for all images
  let totalImageWidth = 0;

  // Add images to the new slide from the assets/img directory
  imageNames.forEach((imageName, index) => {
    const imageUrl = `./assets/img/${imageName}`;

    // Create image element
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.classList.add('swiper-image');
    imageElement.style.width = '100%'; // Set width to 100%
    imageElement.style.height = 'auto'; // Maintain the original aspect ratio
    imageElement.style.position = 'absolute'; // Set absolute positioning

    // Add the image to the slide
    newSlide.appendChild(imageElement);

    // Update the total width for the translation calculation
    totalImageWidth += imageElement.clientWidth;

    // Calculate the translation for each image based on its index
    const translation = index * 100;
    imageElement.style.transform = `translateX(${totalImageWidth - translation}px)`;

    // Set z-index to ensure proper layering
    imageElement.style.zIndex = index + 1;
  });

  // Add overlay text to the new slide
  const overlayText = document.createElement('div');
  overlayText.classList.add('overlay-text');
  overlayText.textContent = slideText || 'Default Text';
  overlayText.style.position = 'absolute'; // Set absolute positioning
  overlayText.style.bottom = '10px'; // Adjust the bottom value as needed
  overlayText.style.left = '50%'; // Center horizontally
  overlayText.style.transform = 'translateX(-50%)'; // Center horizontally
  overlayText.style.zIndex = '999'; // Ensure text appears above images

  particleContainer.appendChild(overlayText);

  // Append the particle container to the new slide
  newSlide.appendChild(particleContainer);

  // Append the new slide to the swiper wrapper
  swiper.appendSlide(newSlide);
}


// ...

// Initialize Swiper
document.addEventListener('DOMContentLoaded', async function () {
  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade', // or 'slide' or other effects
    speed: 800, // Adjust the speed as needed (in milliseconds)
  });

  // Define image names and text for each slide
  const slideData = [
    { images: ['Family.jpg'], text: 'Happy Newyear 2023' },
    // { images: ['Family..jpg', 'volvo.jpg'], text: 'Slide 2 Text' },
    { images: ['MigOgMarieOgSpun.jpg'], text: 'Qujanaq ukiumut qaangiutilersumut' },
    { images: ['Family2.jpg'], text: 'Ukiumut nutaamut iserluarisi' },
    { images: ['oorl.jpg'], text: 'Slide 3 Text' },
    // Add more slide data as needed
  ];

  // Loop through the slide data and add each slide dynamically
  for (const data of slideData) {
    await addParticlesAndText(swiper, data.images, data.text);
  }

  // Get the button element
  const toggleButton = document.getElementById('toggleButton');

  // Add a click event listener to toggle pause/play
  toggleButton.addEventListener('click', function () {
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      toggleButton.textContent = 'Pause';
    } else {
      backgroundMusic.pause();
      toggleButton.textContent = 'Play';
    }
  });
});

  // Play background music on page load
  const backgroundMusic = document.getElementById('backgroundMusic');
  backgroundMusic.play();

  // Trigger fireworks sounds on page load
  tsParticles.events.addEventListeners({
    render: () => {
      tsParticles.container("tsparticles").playSound("explodeSoundCheck");
    },
  });



