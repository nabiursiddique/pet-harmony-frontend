import { format } from "date-fns";

export const formatDate = (dateString: string) => {
  return format(new Date(dateString), "PPpp"); // Oct 3, 2024, 6:06 AM
};
