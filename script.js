function beforesubmit() {
  let inputdate = document.querySelector(".inputdate");
  let outputdate = document.querySelector(".outputdate");
  
  let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formattedDate;
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
      var captchaSettingsElement = document.getElementsByName("captcha_settings")[0];
      if (captchaSettingsElement && captchaSettingsElement.value) {
          var elems = JSON.parse(captchaSettingsElement.value);
          elems["ts"] = JSON.stringify(new Date().getTime());
          captchaSettingsElement.value = JSON.stringify(elems);
      } else {
          console.log("Captcha settings element is missing or invalid.");
      }
  }
}
setInterval(timestamp, 500);
