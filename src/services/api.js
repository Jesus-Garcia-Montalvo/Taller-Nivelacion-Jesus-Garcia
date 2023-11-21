import axios from "axios";

export const fetchCharacters = async () => {
  try {
    return await axios.get("https://taller-mini-back.onrender.com/characters");
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
