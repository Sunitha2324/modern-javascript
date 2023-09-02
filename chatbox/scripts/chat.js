// Adding new chat documents

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
    this.unsub;
  }
  async addChat(message) {
    let now = new Date();

    const chat = {
      message,
      room: this.room,
      username: this.username,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    const response = await this.chats.add(chat);
    return response;
  }
  getChat(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at");
    this.chats.onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          //update the UI
          callback(change.doc.data());
        }
      });
    });
  }
  updateName(username) {
    console.log("updateName", username);
    this.username = username;
    localStorage.setItem("username", username);
  }
  updateRoom(room) {
    this.room = room;
    console.log("room updated");
    if (this.unsub) {
      this.unsub();
    }
  }
}

// const username = localStorage.username ? localStorage.username : "unknow";
// const chatroom = new Chatroom("gaming", username);

// chatroom
//   .addChat("Hello world")
//   .then(() => {
//     console.log("chatroom");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// chatroom.getChat((data) => console.log("get data", data));

// chatroom.updateRoom("gaming");

// chatroom.getChat((data) => console.log("get data", data));

// setTimeout(() => {
//   chatroom.updateRoom("General");
//   chatroom.updateName("Yoshi");
//   chatroom.getChat((data) => console.log("get data", data));
//   chatroom.addChat("New room");
// }, 3000);
