fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response);
    const data = response.json();
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// async and await promise
const getDetails = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/2`);
  const data = await response.json();
  return data;
};

getDetails()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err.message));

// Post method
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// PUT method
const putRequest = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

putRequest();

// get request

const getThrow = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  if (!response.statusCode === 200) {
    throw new Error(`Can't fetch the details`);
  }
  const data = await response.json();
  return data;
};

getThrow()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
