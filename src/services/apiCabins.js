import supabase from "./supabase";

export const getCabins = async () => {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("Nie załadowano danych.");
  }
  return data;
};

export const createEditCabin = async (newCabin, id) => {
  // const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // const imageName = `${newCabin.image.name}`;
  //const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");
  //Create

  if (!id) query = query.insert([{ ...newCabin }]);

  //Edit
  if (id) query = query.update({ ...newCabin }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Błąd edytowania mieszkania.");
  }

  // const { error: storageError } = await supabase.storage
  //   .from("cabin-images")
  //   .upload(newCabin.image);

  // if (storageError) {
  //   await supabase.from("cabins").delete().eq("id", data.id);
  //   throw new Error("Zdjęcie mieszkania nie zostało załadowane.");
  // }

  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Błąd usuwania mieszkania.");
  }
  return data;
};
