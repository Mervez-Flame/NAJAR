var btnwamen = document.getElementById("btn-wamen");
var btnmen = document.getElementById("btn-men");
var btnkids = document.getElementById("btn-kids");

var men = document.getElementById("men");
var children = document.getElementById("children");
var women = document.getElementById("women");




function showWomen(){

    if (women.classList.contains("box-container-none")){
        women.classList.remove("box-container-none");
    }

    men.classList.add("box-container-none");
    children.classList.add("box-container-none"); 
    
    if (men.classList.contains("box-container-none")){
        return
    }
        
    if (children.classList.contains("box-container-none")){
        return
    }    
}


function showMen(){
       
    if (men.classList.contains("box-container-none")){
        men.classList.remove("box-container-none");
    }
    women.classList.add("box-container-none");
    children.classList.add("box-container-none");

    if (children.classList.contains("box-container-none")){
        return
    }

    if (women.classList.contains("box-container-none")){
       return
    } 
    
    
}

function showKids(){ 
        
    if (children.classList.contains("box-container-none")){
        children.classList.remove("box-container-none");
    }


    men.classList.add("box-container-none");
    women.classList.add("box-container-none");

    if (women.classList.contains("box-container-none")){
        return
    }
    
    if (men.classList.contains("box-container-none")){
        return
    }

}
  
btnwamen.addEventListener("click", showWomen);
btnmen.addEventListener("click", showMen);
btnkids.addEventListener("click", showKids);