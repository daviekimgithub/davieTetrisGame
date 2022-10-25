//this is the main javascript for the tetris game 
// this page has been created by DavieKim

// var hasPageOnloaded = false;
// if(!hasPageOnloaded){
//     document.write("please wait for the page to load first")
// }

const field = document.getElementById("mainBricksShadow");
for(let i = 0; i < (16*16); i++){
   createAndAppendElements("div", field);
}

 window.onload = (e) => {
    // hasPageOnloaded = true;
    const field = document.getElementById("mainBricksShadow");
    for(let i = 0; i < (16*16); i++){
       createAndAppendElements("div", field);
    }

    const boxes = document.querySelectorAll(".main-boxes");

    const row = 16;
    const column = 1;
    var isplay = true;

    const shape1 = 
        [
            [row, column],
            [(2*row), column],
            [(3*row), column],
            [(4*row), column]
        ];
    const shapeL = 
        [
            [row, column],
            [(2*row), column],
            [(3*row), column],
            [(3*row), column+1]
        ];
    const shapeOpL = 
        [
            [row, column],
            [(2*row), column],
            [(3*row), column],
            [(3*row), column-1]
        ];
    const shapeZ = 
        [
            [row, column-1],
            [(row), column],
            [(2*row), column],
            [(2*row), column+1]
        ];
    const shapeOpZ = 
        [
            [row, column+1],
            [(row), column],
            [(2*row), column],
            [(2*row), column-1]
        ];
    const shapeT = 
        [
            [row, column],
            [(2*row), column],
            [(2*row), column+1],
            [(3*row), column]
        ];
    const shape0 = 
        [
            [row, column],
            [(row), column+1],
            [(2*row), column+1],
            [(2*row), column]
        ];

    const shapesList = [shape1, shapeL, shapeOpL, shapeZ, shapeOpZ, shapeT, shape0]
    
    var rand = Math.floor(Math.random() * 7)

    // while(isPlay){
        isPlay = false;
        for(let i = 0; i < 4; i++){
            let x = shapesList[rand][i][0];
            let y = shapesList[rand][i][1];
            let pos = x + y;
            // alert(x + y + pos)
            boxes[pos].style.backgroundColor = "blue";
            // setTimeout(move, 100);
            // if(pos > 85) isPlay = false;
        }
        // setTimeout(move(shapesList[rand], boxes), 100);
        moveBtn = document.getElementById("moveBtn");
        moveBtn.addEventListener("click", function(){
            move(shapesList[rand], boxes);
        })
        // moveBtn.onclick = alert("hello and how are")
        //  move(shapesList[rand])
        
        // }
        
        
        
    };
    
    // let newpos = pos;
    // let x = shapesList[rand][i][0];
    //         let y = shapesList[rand][i][1];
    //         let newpos = x + y;
    function move(shape, boxes){
        
        // left
        let oldBox = []
        let newBox = []
        for(let i = 0; i < 4; i++){
            let x = shape[i][0];
            let y = shape[i][1];
            let newpos = x + y;
            oldBox.push(newpos)
            newpos += 16;
            newBox.push(newpos)
            // x += 1;
        }
        for(let i = 0; i < oldBox.length; i++){
            boxes[oldBox[i]].style.backgroundColor = "yellow";
        }
        for(let i = 0; i < newBox.length; i++){
            boxes[newBox[i]].style.backgroundColor = "blue";
        }
        alert("this is the thing")
        // let pos = x + y;
        // alert(x + y + pos)
            // setTimeout(move, 100);
            // if(pos > 85) isPlay = false;
    }

function createAndAppendElements(newElement, parentElement){
    let createEl = document.createElement(newElement);
    createEl.classList.add("main-boxes");
    createEl.style.backgroundColor = "yellow";
    parentElement.appendChild(createEl);
}