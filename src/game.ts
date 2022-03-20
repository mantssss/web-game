let drawQueue: (Tile | null)[]  = [];
let updateQueue: (Tile | null)[]  = [];

function pushUpdate(tile: Tile)
{
    if (updateQueue.includes(null))
    {
        updateQueue[updateQueue.indexOf(null)] = tile;
    }
    else 
    {
        updateQueue.push(tile);
    }
}

function popUpdate(tile: Tile)
{
    if (updateQueue.includes(tile))
    {
        updateQueue[updateQueue.indexOf(tile)] = null;
    }
}

function update(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D)
{
    requestAnimationFrame(() => { update(canvas, ctx); });
    
    for (let i = 0; i < updateQueue.length; i++)
    {
        updateQueue[i]?.update();
    }
    
    draw(canvas, ctx);
}

function pushDraw(tile: Tile)
{
    if (drawQueue.includes(null))
    {
        drawQueue[drawQueue.indexOf(null)] = tile;
    }
    else 
    {
        drawQueue.push(tile);
    }
}

function popDraw(tile: Tile)
{
    if (drawQueue.includes(tile))
    {
        drawQueue[drawQueue.indexOf(tile)] = null;
    }
}

function draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drawQueue.length; i++)
    {
        if (drawQueue[i] != null)
        {
            drawQueue[i]?.draw(ctx);
        }
    }
}

function scaleCanvasToWindow() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}