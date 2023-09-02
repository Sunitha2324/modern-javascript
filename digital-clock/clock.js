const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const html = `<spna>${h}<span> : 
                <spna>${m} </span> : 
                <spna>${s}<span>`;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
