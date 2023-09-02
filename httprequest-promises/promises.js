const getPromises = () => {
  return new Promise((resolve, reject) => {
    // resolve("Success");
    reject("Rejected");
  });
};

//.then(resolve callback, reject callback)
getPromises().then(
  // resolve
  (data) => {
    console.log(data);
  },
  //Reject
  (error) => {
    console.log(error);
  }
);

// Promises with catch

getPromises()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Calling API with promises

const getApiCall = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Error");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getApiCall("https://jsonplaceholder.typicode.com/todos")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Promises chaining
getApiCall("https://jsonplaceholder.typicode.com/todos")
  .then((data) => {
    console.log("data : 1", data);
    return getApiCall("https://jsonplaceholder.typicode.com/todos");
  })
  .then((data) => {
    console.log("data : 2", data);
    return getApiCall("https://jsonplaceholder.typicode.com/todos");
  })
  .then((data) => {
    console.log("data : 3", data);
    return getApiCall("https://jsonplaceholder.typicode.com/todos");
  })
  .catch((err) => {
    console.log(err);
  });
