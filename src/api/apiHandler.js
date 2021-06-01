import axios from "axios";

const service = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/yuuumiao/time-tracking-json-server",
  //process.env.REACT_APP_BACKEND_URL
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response) {
    console.log(error.response.data.message);
    throw error.response.data;
  }
  throw error;
}

const apiHandler = {
  service,

  getAllTimers() {
    return service
      .get("/timers")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createOneTimer(timer) {
    return service
      .post("/timers", timer)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateOneTimer(id, timer) {
    return service
      .patch(`/timers/${id}`, timer)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteOneTimer(id) {
    return service
      .delete(`/timers/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default apiHandler;
