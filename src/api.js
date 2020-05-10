export const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log("saga data: ", data)
    return data;
  } catch (e) {
    console.log(e);
  }
};
// https://jsonplaceholder.typicode.com/posts
