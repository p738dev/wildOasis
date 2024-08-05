import supabase from "./supabase";

export const getSettings = async () => {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    throw new Error("Ustawienia nie zostały załadowane.");
  }
  return data;
};

export const updateSetting = async (newSetting) => {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    throw new Error("Ustawienia nie zostały zmienione.");
  }
  return data;
};
