class ChatUI {
  constructor(list) {
    this.list = list;
  }
  clear() {
    this.list.innerHTML = "";
  }
  render(data) {
    console.log("data", data);
    const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSuffix: true,
    });
    console.log("when", when);
    const html = `  <li class="list-group-item">
        <span class="username">${data.username}</span>
         <span class="message">${data.message}</span>
         <div class="time">${when}</div>
         </li>
         `;
    this.list.innerHTML += html;
  }
}
