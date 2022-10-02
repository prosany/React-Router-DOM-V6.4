export const GET_DATA = async (url) => {
  const URL = url || "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(URL);
  if (response.length < 0) {
    // eslint-disable-next-line no-throw-literal
    throw { status: 0, message: "Fail to load data" };
  }
  return response.json();
};
