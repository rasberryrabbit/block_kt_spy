var ipchecktext;

// Saves options to chrome.storage
function save_options() {
  var ipchecktext = document.getElementById('iptext').value;
  window.localStorage.setItem('AntiKT_IP',ipchecktext);
  console.log(ipchecktext);
}

function restore_options() {
  ipchecktext = window.localStorage.getItem('AntiKT_IP');
  if(ipchecktext==null) {
    ipchecktext='59.4.85.230';
  }
  document.getElementById('iptext').value=ipchecktext;
  console.log(ipchecktext);
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
