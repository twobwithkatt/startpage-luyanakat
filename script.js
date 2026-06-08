// open link
function go(url) {
  window.location.href = url;
}

// search (enter để search google)
document.getElementById("search").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const query = this.value;
    window.location.href = "https://www.google.com/search?q=" + query;
  }
});

// dynamic greeting
function setGreeting() {
  const hour = new Date().getHours();
  let text = "Hello";

  if (hour < 12) text = "Good morning ><";
  else if (hour < 18) text = "Good afternoon >><<";
  else text = "Good evening!!";

  document.getElementById("greeting").innerText = text;
}

setGreeting();