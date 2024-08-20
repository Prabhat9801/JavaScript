// https://i.pinimg.com/564x/f3/bf/95/f3bf952dcabd39e4984dcb38645349d9.jpg //

var main = document.getElementById("main");
var arr = ["https://i.pinimg.com/236x/c1/8e/89/c18e89fdba5f50bad220f2c5fdff58da.jpg",
"https://i.pinimg.com/236x/de/0a/f4/de0af4d2be800369223edcf5e156360c.jpg",
"https://i.pinimg.com/564x/f3/bf/95/f3bf952dcabd39e4984dcb38645349d9.jpg",
"https://i.pinimg.com/236x/65/b5/3d/65b53dd2bf30d0ba33cf055e021c2445.jpg",
"https://i.pinimg.com/236x/65/14/e2/6514e2ade7ba2eddff40960d1ec8f507.jpg",
"https://i.pinimg.com/236x/57/b6/87/57b6875556ec04d11e3327645707b043.jpg"];
let s = "";
for(let i = 1; i<49;i++){
    let r = Math.floor(Math.random()*6);
    s=s+`<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;

// "https://i.pinimg.com/236x/3f/72/2e/3f722e7be5a952584063a35048820e89.jpg",
// "https://i.pinimg.com/236x/de/0a/f4/de0af4d2be800369223edcf5e156360c.jpg",
// "https://i.pinimg.com/564x/f3/bf/95/f3bf952dcabd39e4984dcb38645349d9.jpg",
// "https://i.pinimg.com/236x/65/b5/3d/65b53dd2bf30d0ba33cf055e021c2445.jpg",
// "https://i.pinimg.com/236x/65/14/e2/6514e2ade7ba2eddff40960d1ec8f507.jpg",
// "https://i.pinimg.com/236x/57/b6/87/57b6875556ec04d11e3327645707b043.jpg"





// "https://i.pinimg.com/236x/c1/8e/89/c18e89fdba5f50bad220f2c5fdff58da.jpg",
// "https://i.pinimg.com/236x/de/0a/f4/de0af4d2be800369223edcf5e156360c.jpg",
// "https://i.pinimg.com/564x/f3/bf/95/f3bf952dcabd39e4984dcb38645349d9.jpg",
// "https://i.pinimg.com/236x/65/b5/3d/65b53dd2bf30d0ba33cf055e021c2445.jpg",
// "https://i.pinimg.com/236x/65/14/e2/6514e2ade7ba2eddff40960d1ec8f507.jpg",
// "https://i.pinimg.com/236x/57/b6/87/57b6875556ec04d11e3327645707b043.jpg"