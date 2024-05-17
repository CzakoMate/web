const url = "https://vvri.pythonanywhere.com/api/courses"
  async function fetchData(){
    try{
        const response=await fetch(url,{
            method:"GET",
        })
        const data=await response.json()
        if(data){
            data.forEach(element=>{
                console.log(element)
            })
        }
    }catch(error){
        console.log("Hiba történt: "+ error)
    }
  }
  fetchData();
let matrix=[];
let valt=10;
let kezd=0;

async function fetchData2(){
    try{
        const response=await fetch(url,{
            method:"GET",
        })
        const data=await response.json()
        if(data){
            data.forEach(todo => {
                matrix.push(tomb=[])
                    tomb[0]=todo.id
                    tomb[1]=todo.name
                    tomb[2]=todo.students
            });
            kiir();
        }
    }catch(error){
        console.log("Hiba történt: "+ error)
    }
  }
  fetchData2();


function kiir(){
    let ki=""
    if(valt>matrix.length)
        {
            for(let i=kezd;i<matrix.length;i++)
                {
                    ki+="<div id='kurzus'  class='"+matrix[i][0]+"'>"+matrix[i][0]+"<br>"+matrix[i][1]+"<br>";
                    for(let j=0;j<matrix[i][2].length;j++){ki+=matrix[i][2][j].name+" "};
                    ki+= "</div><br>";
                    kezd++;
                }
                
            document.getElementById("users").innerHTML = ki;
            document.getElementById("elore").style.display='none';
            document.getElementById("hatra").style.display='inline';
        }
    else if(valt<=10){
        for(let i=kezd;i<valt;i++)
            {
                ki+="<div id='kurzus'  class='"+matrix[i][0]+"'>"+matrix[i][0]+"<br>"+matrix[i][1]+"<br>";
                    for(let j=0;j<matrix[i][2].length;j++){ki+=matrix[i][2][j].name+" "};
                    ki+= "</div><br>";
                kezd++;
            }
        document.getElementById("users").innerHTML = ki;
        document.getElementById("hatra").style.display='none';
    }
    else{
            for(let i=kezd;i<valt;i++)
                {
                    ki+="<div id='kurzus'  class='"+matrix[i][0]+"'>"+matrix[i][0]+"<br>"+matrix[i][1]+"<br>";
                    for(let j=0;j<matrix[i][2].length;j++){ki+=matrix[i][2][j].name+" "};
                    ki+= "</div><br>";
                    kezd++;
                }
            document.getElementById("users").innerHTML = ki;
            document.getElementById("hatra").style.display='inline';
    } 
}
function viszir(){
    let ki=""
    if(valt>matrix.length)
        {
            for(let i=(matrix.length-(matrix.length%10));i<matrix.length;i++)
                {
                    ki+="<div id='kurzus'  class='"+matrix[i][0]+"'>"+matrix[i][0]+"<br>"+matrix[i][1]+"<br>"
                    for(let j=0;j<matrix[i][2].length;j++){ki+=matrix[i][2][j].name+" "}
                    ki+= "</div><br>";
                }
            document.getElementById("users").innerHTML = ki;
            document.getElementById("elore").style.display='none';
        }
    else if(valt<=10){
        kezd=0;
        for(let i=kezd;i<valt;i++)
            {
                ki+="<div id='kurzus'  class='"+matrix[i][0]+"'>"+matrix[i][0]+"<br>"+matrix[i][1]+"<br>"
                    for(let j=0;j<matrix[i][2].length;j++){ki+=matrix[i][2][j].name+" "}
                    ki+= "</div><br>";
                kezd++;
            }
        document.getElementById("users").innerHTML = ki;
        document.getElementById("hatra").style.display='none';
        document.getElementById("elore").style.display='inline';
    }
    else{
        if(kezd>=10){
            kezd=kezd-10;
        }
        else{
            kezd=0;
        }
            for(let i=kezd;i<valt;i++)
                {
                    ki+="<div id='kurzus'  class='"+matrix[i][0]+"'>"+matrix[i][0]+"<br>"+matrix[i][1]+"<br>"
                    for(let j=0;j<matrix[i][2].length;j++){ki+=matrix[i][2][j].name+" "}
                    ki+= "</div><br>";
                    kezd++;
                }
            document.getElementById("users").innerHTML = ki;
            document.getElementById("hatra").style.display='inline';
            document.getElementById("elore").style.display='inline';
            
    } 
}


function lapoz(){
    document.getElementById("users").remove();
    const dbz=document.createElement("div");
    dbz.id="users";
    document.getElementById("megj").appendChild(dbz);
    valt+=10;
    kiir();
}
function lapozvissza(){
    document.getElementById("users").remove();
    const dbz2=document.createElement("div");
    dbz2.id="users";
    document.getElementById("megj").appendChild(dbz2);
    valt=valt-10;
    viszir();
}

async function HozzaAd(){
    try{
        const response=await fetch(url,{
            method:"POST",
            body: JSON.stringify({
                "name": document.getElementById("Hozzavalo").value.toString()
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        const data=await response.json()
        if(data){
            document.getElementById("Hozzavalo").value='';
        }
    }catch(error){
        console.log("Hiba történt: "+ error)
    }
  }
