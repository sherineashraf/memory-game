let blocksContainer = document.querySelector(".blocks");
let block = document.querySelector(".blocks .block");





document.querySelector(".splash span").onclick = function(){
    let yourName = prompt("what is your name");
    if (yourName === null || yourName === ""){
        document.querySelector(".info span").innerHTML = "unknown";
    } else{
        document.querySelector(".info span").innerHTML = yourName;
    }
    document.querySelector(".splash").remove();
    openAll();
  

}

let duration = 1000;
let blocks = Array.from(blocksContainer.children);


let orderRange = [...Array (blocks.length).keys()];
shuffle(orderRange);
blocks.forEach((block, index)=>{
    block.style.order = orderRange[index];
    block.addEventListener('click', function () {
        flipBlock(block);
    });

});





function flipBlock (selectedBlock){
    selectedBlock.classList.add('is-flipped');
    let allFlipped = blocks.filter(flippedBlocks => flippedBlocks.classList.contains('is-flipped'));
 
    if (allFlipped.length === 2){
        stopClicking();
        checkMatched(allFlipped[0], allFlipped[1]);
        done();
       
       }

    }

function checkMatched (first, second){
    if (first.dataset.social === second.dataset.social){
        first.classList.remove('is-flipped');
        second.classList.remove('is-flipped');
        first.classList.add('has-matched');
        second.classList.add('has-matched');
        document.getElementById('success').play();
      
        
        
    } else{
        document.querySelector('.tries span').innerHTML = parseInt(document.querySelector('.tries span').innerHTML)+1;
        setTimeout(()=>{
            first.classList.remove('is-flipped');
            second.classList.remove('is-flipped');
        }, duration)
        document.getElementById('fail').play();
        
    }
}

function stopClicking(){
    blocksContainer.classList.add('no-clicking')
    setTimeout(()=>{
        blocksContainer.classList.remove('no-clicking')

    }, duration)

}


function shuffle (array){
    let current = array.length,
    temp,
    random;
    while(current > 0){
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;

}
function openAll (){
    blocks.forEach((block)=>{
        block.classList.add('is-flipped');
        setTimeout(()=>{
            block.classList.remove('is-flipped');

        }, 2000)

    })
}
function done(){
let al = array.from(blocksContainer.children.classList.contains('has-matched'));
console.log(al)



  }
 
      
        
    
   
    

    
    
