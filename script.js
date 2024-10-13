let captchachecked =false;
if(captchachecked){

  function beforesubmit(event) {

      let inputdate = document.querySelector(".inputdate");
      let outputdate = document.querySelector(".outputdate");
      console.log("input value=", inputdate.value);

      let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
      outputdate.value = formattedDate;
  }
}
else{

  alert("please check recaptcha before submit the form");
  event.preventDefault();//to stop form submitting if we don't click on captcha.
}
function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchasuccess(){

  captchachecked =true;
}