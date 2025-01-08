import ky from "ky";
import { api } from "../api";

export const getCategory = async () => {
  try {
    const response = await api.get("category", { cache: "no-store" });

    /* const response = await ky.get("http://localhost:3000/api/v1/movies", {
        cache: "no-store",
      });*/

    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.log("e1 ", error);
    if (error) {
      const status = error?.response?.status;
      const responseBody = await error?.response?.json();
      console.log("HTTP error ", status, responseBody);
    } else {
      console.log("Unknown error");
    }
    return undefined;
  }
};
