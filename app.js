container=document.querySelector(".container");
result=document.querySelector(".result")
function creatediv(){
    let div=document.createElement('div');
    div.classList.add('child');
    container.appendChild(div);
    
    return div;
}
let arr=[];
var matrix=[];
let count=0;
let temp=[];
for(let i=0;i<49;i++){
    count++;
    let a=creatediv()
    
    
    arr.push(a);
    arr[i].setAttribute('data-id',i+1);
    arr[i].setAttribute('data-click',false);
    
    temp.push(arr[i]);
    if(count%7==0){
        matrix.push(temp);
        temp=[];
    }
    let array=[Math.floor(i/7),i%7]
    array=JSON.stringify(array);
    arr[i].setAttribute("data-coord",array);

    arr[i].setAttribute("data-color",undefined);
}

let i=0;
count=0;
const players=[{color:"red",class:"one"},{color:"blue",class:"two"}];
arr.forEach((ele)=>{
    ele.addEventListener('click',handler);
})
function handler(e){
        count++;
        let div=document.createElement('div');
        div.classList.add(players[i].class);
        e.target.setAttribute('data-click',true);
        e.target.setAttribute('data-color',players[i].color);
        e.target.appendChild(div);
        let array=JSON.parse(e.target.dataset.coord);
        i=(i+1)%2;
        e.target.removeEventListener('click',handler);
        checkforwin(array[0],array[1]);
        if(count==49){
            exitgame();
        }
}
function checkforwin(x,y){
    for(let a=0;a<7;a++){
        for(let b=0;b<7;b++){
    let win =true;
    for(let i=a,count=0;count<4;count++){
        
        
        
        if(i>=7 || matrix[i][b].dataset.click==false || matrix[i][b].dataset.color!=matrix[x][y].dataset.color){
            win=false;
            break;
        }
        i++;
    }
    if(win){
        exitgame(x,y);
        return;
    }
    win=true;
    for(let i=a,count=0;count<4;count++){
        
        if(i<0 ||matrix[i][b].dataset.click==false || matrix[i][b].dataset.color!=matrix[x][y].dataset.color){
            win=false;
            break;
        }
        i--;
    }
    if(win){
        exitgame(x,y);
        return;
    }
    win=true;
    for(let i=b,count=0;count<4;count++){
        if(i>=7 ||matrix[a][i].dataset.click==false || matrix[a][i].dataset.color!=matrix[x][y].dataset.color){
            win=false;
            break;
        }
        i++;
    }
    if(win){
        exitgame(x,y);
        return;
    }
    win=true;
    for(let i=b,count=0;count<4;count++){
        if(i<0 ||matrix[a][i].dataset.click==false || matrix[a][i].dataset.color!=matrix[x][y].dataset.color){
            win=false;
            break;
        }
        i--;
    }
    if(win){
        exitgame(x,y);
        return;
    }
    win=true;
    for(let i=a,j=b,count=0;count<4;count++){
        if(i>=7||j>=7 ||matrix[i][j].dataset.click==false || matrix[i][j].dataset.color!=matrix[x][y].dataset.color){
            win=false;
            break;
        }
        i++;
        j++;
    }
    if(win){
        exitgame(x,y);
        return;
    }
    win=true;
    for(let i=a,j=b,count=0;count<4;count++){
        if(i<0||j>=7 ||matrix[i][j].dataset.click==false || matrix[i][j].dataset.color!=matrix[x][y].dataset.color){
            win=false;
            break;
        }
        i--;
        j++;
    }
    if(win){
        exitgame(x,y);
        return;
    }
    win=true;
    for(let i=a,j=b,count=0;count<4;count++){
        if(i<0||j<0 ||matrix[i][j].dataset.click==false || matrix[i][j].dataset.color!=matrix[x][y].dataset.color){
            win=false;
            break;
        }
        i--;
        j--;
    }
    if(win){
        exitgame(x,y);
        return;
    }
    win=true;
    for(let i=a,j=b,count=0;count<4;count++){
        if(i>=7||j<0 ||matrix[i][j].dataset.click==false || matrix[i][j].dataset.color!=matrix[x][y].dataset.color){
            win=false;
            break;
        }
        i++;
        j--;
    }
    if(win){
        exitgame(x,y);
        return;
    }
        }
    }
}

function exitgame(x=-1,y=-1){
    
   if(matrix[x][y].dataset.color=="red"){
    result.textContent="Player One wins";
   }
   else if(matrix[x][y].dataset.color=="blue") {
    result.textContent="Player Two wins"
   }
   else if(x==-1 && y==-1){
    result.textContent="Draw";
   }
   arr.forEach((ele)=>{
    ele.removeEventListener("click",handler);
   })
}
