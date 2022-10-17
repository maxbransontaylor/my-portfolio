export function showPage(index) {
  var sheet = document.styleSheets[2];
  var rules = sheet.cssRules || sheet.rules;

  rules[index].style.opacity = "1";
}
export function hidePage(index) {
  var sheet = document.styleSheets[2];
  var rules = sheet.cssRules || sheet.rules;

  rules[index].style.opacity = "0";
}
export function validateEmail(email) {
  var regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
