const startTime = Date.now();

const hostname = document.getElementById("hostname");
const protocol = document.getElementById("protocol");
const uptime = document.getElementById("uptime");

hostname.textContent = window.location.hostname;
protocol.textContent = window.location.protocol.replace(":", "");

function updateUptime() {
  const seconds = Math.floor((Date.now() - startTime) / 1000);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  uptime.textContent =
    minutes > 0
      ? `${minutes}m ${remainingSeconds}s`
      : `${remainingSeconds}s`;
}

setInterval(updateUptime, 1000);

const toast = document.getElementById("toast");

document.getElementById("launchButton").addEventListener("click", () => {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});

document.getElementById("detailsButton").addEventListener("click", () => {
  document.getElementById("details").scrollIntoView({
    behavior: "smooth"
  });
});
