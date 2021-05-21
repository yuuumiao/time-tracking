import axios from "axios";

const service = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response) {
    console.log(error.response.data.message);
    throw error.response.data;
  }
  throw error;
}

export default {
  service,

  getAllTimers() {
    return service
      .get("timers")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createOneTimer(timer) {
    return service
      .post("timers", timer)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateOneTimer(id, timer) {
    return service
      .patch(`timers/${id}`, timer)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteOneTimer(id) {
    return service
      .delete(`timers/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

};
