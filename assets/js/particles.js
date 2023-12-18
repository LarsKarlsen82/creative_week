// const myCanvas = document.getElementById('myCanvas');

// myCanvas.width = window.innerWidth;
// myCanvas.height = window.innerHeight;

// const ctx = myCanvas.getContext('2d');
// console.log(ctx);

// ctx.fillStyle = 'red';
// ctx.lineWidth = 5;

// ctx.fillRect(30, 190, 40, 60);

// ctx.fillStyle = 'blue';
// ctx.fillRect(300, 20, 100, 300);

// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 150, 70, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.fillStyle = 'yellow';
// ctx.font = "30px Arial";

// // Change the stroke text color to orange
// ctx.strokeStyle = 'orange';

// ctx.strokeText("Hello World", 10, 50);


// // Create gradient
// let grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");

// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(80, 300, 150, 80);


// class MyRect {
//     // Konstruktør, der tager imod ID'en for canvasId, bredden og højden
//     constructor(canvasId, width, height) {
//     // Finder canvasId ved hjælp af den givne ID
//       this.canvas = document.getElementById(canvasId);
//       // Henter konteksten (context) for at tegne på lærredet
//       this.ctx = this.canvas.getContext('2d');
//       // Sætter bredden og højden på lærredet
//       this.canvas.width = width;
//       this.canvas.height = height;
//     }
//     // Metode til at tegne en kant omkring lærredet
//     drawBorder() {
//       this.ctx.strokeStyle = 'black';
//       this.ctx.lineWidth = 5;
//       this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
//     }
  
//     // Metode til at tegne det danske flag
//     drawDanishFlag() {
//       this.ctx.fillStyle = 'red';
//       this.ctx.fillRect(5, 5, this.canvas.width - 10, this.canvas.height - 10);
  
//       this.ctx.fillStyle = 'white';
//       this.ctx.fillRect(this.canvas.width / 2 - 100, 5, 20, this.canvas.height - 10);
  
//       this.ctx.fillRect(5, this.canvas.height / 2 - 10, this.canvas.width - 10, 20);
//     }
  
//     // Metode til at tegne tekst på lærredet
//     drawText() {
//       this.ctx.font = "lighter 45px Times New Roman";
//       this.ctx.shadowOffsetX = 3;
//       this.ctx.shadowOffsetY = 3;
//       this.ctx.shadowBlur = 5;
//       this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
//       this.ctx.strokeStyle = 'brown';
//       this.ctx.strokeText("Hej Danmark", 20, 70, 160);
//     }
  
//     // Metode til at tegne alle komponenter
//     draw() {
//       this.drawBorder();
//       this.drawDanishFlag();
//       this.drawText();
//     }
//   }
  
//   // Usage
//   const myRect = new MyRect('myCanvas', 700, 400);
//   myRect.draw();
  


// -------------------TEST 2 ---------------------------------
// class MyRect {
//     // Konstruktør, der tager imod ID'en for canvasId, bredden og højden
//     constructor(canvasId, width, height) {
//       // Finder canvasId ved hjælp af den givne ID
//       this.canvas = document.getElementById(canvasId);
//       // Henter konteksten (context) for at tegne på lærredet
//       this.ctx = this.canvas.getContext('2d');
//       // Sætter bredden og højden på lærredet
//       this.canvas.width = width;
//       this.canvas.height = height;
  
//       // Variable til at styre flagets kurveeffekt
//       this.curveOffset = 0;
//     }
  
//     // Metode til at tegne en kant omkring lærredet
//     drawBorder() {
//       this.ctx.strokeStyle = 'black';
//       this.ctx.lineWidth = 5;
//       this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
//     }
  
//     // Metode til at tegne det danske flag med en kurveeffekt
//     drawDanishFlag() {
//       this.ctx.fillStyle = 'red';
//       this.ctx.fillRect(5, 5, this.canvas.width - 10, this.canvas.height - 10);
  
//       this.ctx.fillStyle = 'white';
  
//       // Simulerer kurveeffekten ved at tilføje en offset til kurveparametret
//       const curveHeight = 50;
//       const curveSpeed = 0.02;
//       const curveParam = this.curveOffset;
  
//       // Bruger en Bezier curve til at skabe en kurveeffekt
//       this.ctx.beginPath();
//       this.ctx.moveTo(5, 5);
  
//       // Control point 1 for the curve
//       const control1X = this.canvas.width / 4;
//       const control1Y = this.canvas.height / 2 - curveHeight;
  
//       // Control point 2 for the curve
//       const control2X = this.canvas.width / 2;
//       const control2Y = this.canvas.height / 2 + curveHeight;
  
//       // Endpoint of the curve
//       const endX = this.canvas.width - 5;
//       const endY = this.canvas.height - 5;
  
//       this.ctx.bezierCurveTo(control1X, control1Y, control2X, control2Y, endX, endY);
//       this.ctx.lineTo(5, this.canvas.height - 5);
//       this.ctx.fill();
  
//       // Opdaterer offset for næste frame
//       this.curveOffset += curveSpeed;
//     }
  
//     // Metode til at tegne tekst på lærredet
//     drawText() {
//       this.ctx.font = 'lighter 45px Times New Roman';
//       this.ctx.shadowOffsetX = 3;
//       this.ctx.shadowOffsetY = 3;
//       this.ctx.shadowBlur = 5;
//       this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
//       this.ctx.strokeStyle = 'brown';
//       this.ctx.strokeText('Hej Danmark', 20, 70, 160);
//     }
  
//     // Metode til at tegne alle komponenter
//     draw() {
//       this.drawBorder();
//       this.drawDanishFlag();
//       this.drawText();
  
//       // Anmoder om næste animation frame
//       requestAnimationFrame(() => this.draw());
//     }
//   }
  
//   // Usage
//   const myRect = new MyRect('myCanvas', 700, 400);
//   myRect.draw();
  

// ------------------------- Test 3 --------------------------
class MyRect {
    // Konstruktør, der tager imod ID'en for canvasId, bredden og højden
    constructor(canvasId, width, height) {
      // Finder canvasId ved hjælp af den givne ID
      this.canvas = document.getElementById(canvasId);
      // Henter konteksten (context) for at tegne på lærredet
      this.ctx = this.canvas.getContext('2d');
      // Sætter bredden og højden på lærredet
      this.canvas.width = width;
      this.canvas.height = height;
  
      // Variable til at styre flagets bølgeeffekt
      this.waveOffsetX = 0;
      this.waveOffsetY = 0;
    }
  
    // Metode til at tegne en kant omkring lærredet
    drawBorder() {
      this.ctx.strokeStyle = 'black';
      this.ctx.lineWidth = 5;
      this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    // Metode til at tegne det danske flag med en bølgeeffekt
    drawDanishFlag() {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(5, 5, this.canvas.width - 10, this.canvas.height - 10);
  
      this.ctx.fillStyle = 'white';
  
      const waveHeight = 10;
      const waveWidth = 30;
      const waveSpeed = 0.05;
  
      for (let x = 5; x < this.canvas.width - 10; x += waveWidth) {
        const yOffset = Math.sin(this.waveOffsetX + x / waveWidth) * waveHeight;
  
        this.ctx.fillRect(x, 5 + yOffset, waveWidth, this.canvas.height - 10);
      }
  
      for (let y = 5; y < this.canvas.height - 10; y += waveWidth) {
        const xOffset = Math.cos(this.waveOffsetY + y / waveWidth) * waveHeight;
  
        this.ctx.fillRect(5 + xOffset, y, this.canvas.width - 10, waveWidth);
      }
  
      // Opdaterer offset for næste frame
      this.waveOffsetX += waveSpeed;
      this.waveOffsetY += waveSpeed;
    }
  
    // Metode til at tegne tekst på lærredet
    drawText() {
      this.ctx.font = 'lighter 45px Times New Roman';
      this.ctx.shadowOffsetX = 3;
      this.ctx.shadowOffsetY = 3;
      this.ctx.shadowBlur = 5;
      this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      this.ctx.strokeStyle = 'brown';
      this.ctx.strokeText('Hej Danmark', 20, 70, 160);
    }
  
    // Metode til at tegne alle komponenter
    draw() {
      this.drawBorder();
      this.drawDanishFlag();
      this.drawText();
  
      // Anmoder om næste animation frame
      requestAnimationFrame(() => this.draw());
    }
  }
  
  // Usage
  const myRect = new MyRect('myCanvas', 700, 400);
  myRect.draw();
  
  
  



