const canvas = document.querySelector('canvas')!;
window.onresize = scaleCanvasToWindow;
scaleCanvasToWindow();

const ctx = canvas.getContext("2d")!;

// Create player
const player = new Player(50, 50, 30, 30);
// Update and draw player
pushUpdate(player);
pushDraw(player);

// Start update loop
update(canvas, ctx);