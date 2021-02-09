import moment from "moment";

export const hourMonth = (date) => {
  return moment(date).format("HH:mm a | MMMM Do");
};
