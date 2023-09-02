const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("Error while fetching");
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

// creat the same in callback

getCallback = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);

      // JSON.parse = > takes JSON string and converts into Javscript Array of Object
      const data = JSON.parse(request.responseText);
      // callback(undefined, request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // console.log("error");
      callback("caught error", undefined);
    }
  });
  request.open("GET", resource);
  request.send();
};

getCallback("https://jsonplaceholder.typicode.com/todos", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
