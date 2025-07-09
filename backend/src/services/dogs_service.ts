import axios from "axios";
import { Dog } from "../types/interface";

const API_URL = "https://random.dog";

const likes: Record<string, number> = {};

// определяем тип файла (картинка или видео)
const getFileType = (filename: string): "image" | "video" => {
  const ext = filename.split(".").pop()?.toLowerCase() || "";
  return ["mp4", "webm"].includes(ext) ? "video" : "image";
};

// Получаем список всех собак из API
export const fetchDogs = async (): Promise<Dog[]> => {
  try {
    const { data: filenames } = await axios.get<string[]>(`${API_URL}/doggos`);

    const validFiles = filenames.filter((filename) => {
      const ext = filename.split(".").pop()?.toLowerCase();
      return ["jpg", "jpeg", "png", "gif", "mp4", "webm"].includes(ext || "");
    });

    const dogs = validFiles.map((filename) => ({
      filename,
      url: `${API_URL}/${filename}`,
      likes: likes[filename] || 0,
      fileType: getFileType(filename),
    }));

    return dogs;
  } catch (error) {
    console.error("Error fetching dogs:", error);
    return [];
  }
};

// Ставим лайк собаке
export const likeDog = (dogId: string): number => {
  likes[dogId] = (likes[dogId] || 0) + 1;
  return likes[dogId];
};

export const unlikeDog = (dogId: string): number => {
  likes[dogId] = Math.max((likes[dogId] || 0) - 1, 0);
  return likes[dogId];
};
