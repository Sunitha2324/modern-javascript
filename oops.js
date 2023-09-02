class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  //   login() {
  //     console.log("login", this.name);
  //   }
  //   logout() {
  //     console.log("logout", this.email);
  //   }

  login() {
    console.log("login", this.name);
    // if you want to chain the methods then use the below code else no need to return this
    return this;
  }
  logout() {
    console.log("logout", this.email);
    // if you want to chain the method then use the below code else no need to return this
    return this;
  }
}
// Same Function as above class
function UserX(name, email) {
  this.name = name;
  this.email = email;
  login = function () {
    console.log("login", this.name, this.email);
  };
  logout = function () {
    console.log("logout", this.name, this.email);
  };
}

const useOne = new User("hh", "kk#@gmail.com");
const useTwo = new User("kk", "kk#@gmail.com");

class Admin extends User {
  deleteUser(user) {
    userList = userList.filter((u) => u.name !== user.name);
  }
}
console.log("useOne", useOne);
const userThree = new Admin("mm", "mm#@gmail.com");
/// if we try to chain the value without return then it will not work
useOne.login().logout();

let userList = [useOne, useTwo, userThree];
console.log("userList", userList);

userThree.deleteUser(useTwo);

/// if we try to chain the value function must have  returned the value then it will  work
useOne.login().logout();
console.log("userThree", userThree);
console.log("userList", userList);

// To get the parent class properties while adding addtional props to children, need to use super() eg:
class AdminOne extends User {
  constructor(name, email, title) {
    super(name, email);
    this.title = title;
  }
  Display(user) {
    userList.map((u) => u.name);
  }
}

const userFour = new AdminOne("Title", "gg@hh.com", "title");

console.log("AdminOne", userFour);
userFour.Display(AdminOne);
