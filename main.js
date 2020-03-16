function dis(val){
  document.getElementById("resultInput").value+=val;
  document.getElementById("resultInput").focus();

}

function eq(val){
  let i=document.getElementById("resultInput").value;
  let r= eval(i);
  document.getElementById("resultInput").value =r;
}

function clearfields(){
  document.getElementById("resultInput").value = "";
}
function multiplysquared(){

}
