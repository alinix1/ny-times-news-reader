import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export const formatDate = (date) => {
  return dayjs(date).format("MMM D, YYYY h:mm A");
};
