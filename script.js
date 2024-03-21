const drop = document.getElementById("lab");
const inp = document.getElementById("inp");
const img = document.getElementById("im");
const cardo = document.getElementById("cardo");
const up = document.getElementById("up");
const imo = document.getElementById("imo");
const maind = document.getElementsByClassName("maind");


const cha = (e)=>{
    maind.hidden=false;
    let url = URL.createObjectURL(inp.files[0]);

        for (let index = 0; index < inp.files.length; index++) {
        let url = URL.createObjectURL(inp.files[index])
        img.style.background=`url(${url})`;
        let el = document.createElement('div');
        let str =`<ul>`;
        
        for (let e in inp.files[0]){
            if(typeof inp.files[index][e] !== 'function'){
                str +=`<li> <b>${e} </b>: ${inp.files[index][e]} \n </li>`
            }
           
        };

        el.innerHTML=`<div class="card" style="background: #f5f9fb63;">
        <img src="${url}" class="card-img-top" alt="...">
        <div class="card-body">
        <hr style="color: black;">
        <h5 class="card-title">${(inp.files[index].name).toUpperCase()}</h5>
        <hr style="color: black;">
        <p class="card-text" style="width:200px;">${str}</p>
        <hr style="color: black;">
          <a href="${url}" class="btn btn-primary" target="_blank">Click here To open in separate tab</a>
        </div>
      </div>`
        el.setAttribute("class", "sho");
        cardo.insertAdjacentElement('beforeEnd',el)
            
        }
        img.style.background=`url(${url})`;
    document.getElementById('up').style.color= 'whitesmoke';
    document.getElementById('up').innerHTML = '<i>Icon Folder</i>';
    up.hidden =true;
    imo.hidden=false;
    let o = inp.files[0].webkitRelativePath.indexOf('/');
    imo.innerHTML=`<center><b>DIRECTORY : </b> ${inp.files[0].webkitRelativePath.substr(0,o)} </center>`

    img.style.border =0
    
    };
inp.addEventListener('change',(e)=>{e.preventDefault();cha(e)})

img.addEventListener('dragover',(e)=>{
    console.log('over')
    e.preventDefault();
})
img.addEventListener('drop',(e)=>{
    e.preventDefault();
    try{
        inp.files = e.dataTransfer.files;

        cha(e)
    }catch{
        console.log(new Error('folder upload issue'))
    }
    })
    