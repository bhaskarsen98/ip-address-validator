


function ipclass(){
  let ip = document.getElementById("ipadd").value;
  alert(ip);
  let clas = ['','','','',''];
 
  let j = 0;

  for(let i = 0;i<ip.length;i++){
    
    if(ip[i] == '.' || ip[i]=='/'){
      j++;
      continue;
    }
    clas[j] += ip[i];
  }

  if(j<3 || j>=5){
    alert('wrong ip');
    return;
  }



  // console.log(clas)
  // console.log(clas[0] > 255 && clas[0] <0) 
  // console.log(clas[1] > 255 && clas[1] <0) 
  // console.log(clas[2] > 255 && clas[2] <0) 
  // console.log(clas[3] > 255 && clas[3] <0)
  if((clas[0] > 255 || clas[0] < 0) 
  || (clas[1] > 255 || clas[1] < 0) 
  || (clas[2] > 255 || clas[2] < 0) 
  || (clas[3] > 255 || clas[3] < 0)){

    alert('Invalid IP address');
  
  }else{
    if(clas[0] > 0 && clas[0] < 128){
      alert('class A');
    }else if(clas[0] >= 0 && clas[0] < 128){
      alert('class B');
    }else if(clas[0] >= 128 && clas[0] < 192){
      alert('class C');
    }else if(clas[0] >= 192 && clas[0] < 224){
      alert('class D');
    }else if(clas[0] >= 224 && clas[0] <= 255){
      alert('class E');
    }else{
      alert('Invalid ip')
    }
  }



}
function ipmask(){

}