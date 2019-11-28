var validation = document.getElementById('ok1');
validation.addEventListener('click', ShowMsg);
function ShowMsg() {
  var age = document.getElementById('Uno').value;
    if (Uno<= 18) {
      alert('Vous n\'avais point l\'age requis') ;
    }else{
      alert('Welcome') ;
    }
}
