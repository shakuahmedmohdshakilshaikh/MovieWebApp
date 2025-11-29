import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWIzMGMwOGI1OGE1YjRiNTE2NzBmOWYwNjY3MDU1MCIsIm5iZiI6MTc2NDM0ODA3Ni41NDMsInN1YiI6IjY5MjlkMGFjZmVmYjcwNTAxNDI2YzkzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8Gsi47P2EDOvfBmXcQFc9jp-0XtAgX7R-JNAa25Y6eA'
  }
});

export default instance;