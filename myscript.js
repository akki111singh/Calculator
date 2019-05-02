
function cal(val){
  document.getElementById('dispaly').value+=val;
}
function c(){
  document.getElementById('dispaly').value="";
}
function e(){
  document.getElementById('dispaly').value=eval(document.getElementById('dispaly').value);

}
function back()
{
    document.getElementById('dispaly').value=document.getElementById('dispaly').value;
}
