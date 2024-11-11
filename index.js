function lokiStart() {
    let bags = document.getElementById('bags')
    let bag = document.getElementById('bag');
    let neto = document.getElementById('neto');
    let sects = document.getElementById('sects')
    let sect = document.getElementById('sect');
    let secmail = document.getElementById('secmail');
    let mail  = document.getElementById("mail")
    let pasa = document.getElementById("pasa")
    let box = document.getElementById("box")
    let netos = document.getElementById("netos")
    let submit = document.getElementById('submit') 
 

    netos.addEventListener('click',()=>{  
      pasa.value = bags.value  
      console.log(bags.value);
      netos.style.display="none"
      submit.style.backgroundColor=" rgb(255, 149, 0)" 
      submit.style.padding="10px"
      submit.style.width="30%"
      submit.style.marginTop="-500px"
      submit.style.borderRadius="8px"
      })  
    secmail.style.textAlign='center';
 
    
    neto.addEventListener('click',()=>{ 
          if (bag.value) {  
            sects.style.display='block'
            sect.style.display='none' 
            console.log( bag.value); 
            secmail.innerText =bag.value  
            mail.value = bag.value  
             
          }
          else{
            bag.style.border='solid red 3px' 
          } 
    })
    bag.addEventListener('click',()=>{
        bag.style.border="rgb(255, 149, 0) solid 2px"
    })
}
lokiStart()