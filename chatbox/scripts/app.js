const chatlist = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMessage = document.querySelector(".update-mssg");
const chatRooms = document.querySelector(".chat-rooms");

// class instances
const chatUI = new ChatUI(chatlist);

const username = localStorage.username ? localStorage.username : "unknow";
const chatroomOne = new Chatroom("general", username);
// const chatroom = new Chatroom("gaming", "shaun");

chatroomOne.getChat((data) => {
  console.log(data);
  chatUI.render(data);
});

newChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  console.log("message", message);
  chatroomOne
    .addChat(message)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
});

newNameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = newNameForm.name.value.trim();
  chatroomOne.updateName(name);
  newNameForm.reset();
  updateMessage.innerText = `You are updated the name ${name}`;
  setTimeout(() => {
    updateMessage.innerText = ``;
  }, 2000);

  // .then(() => {
  //   console.log("name updated");
  // })
  // .catch(() => {
  //   console.log(error);
  // });
});

// chatRooms.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     chatUI.clear();
//     const room = e.target.getAttribute("id");
//     chatroomOne.updateRoom(e.target.getAttribute("id"));
//     chatroomOne.getChat((chat) => chatUI.render(chat));
//   }
// });

// // update the chat room
chatRooms.addEventListener("click", (e) => {
  console.log(chatRooms.updateRoom);
  if (e.target.tagName === "BUTTON") {
    chatUI.clear();
    chatroomOne.updateRoom(e.target.getAttribute("id"));
    chatroomOne.getChat((chat) => console.log("chats..", chat));
  }
});
