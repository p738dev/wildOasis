import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constans";
import { getToday } from "../utils/helpers";

export const getBookings = async ({ page }) => {
  let query = supabase
    .from("bookings")
    .select("*, cabins(name), guests(full_name, email)", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Błąd ładowania danych.");
  }

  return { data, count };
};

export const getBooking = async (id) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Nie znaleziono rezerwacji.");
  }

  return data;
};

export const getBookingsAfterDate = async (date) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, total_price, extras_price")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    throw new Error("Dane rezerwacji nie mogą zostać załadowane.");
  }

  return data;
};

export const getStatysticsAfterDate = async (date) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(full_name)")
    .gte("start_date", date)
    .lte("end_date", getToday());

  if (error) {
    throw new Error("Dane rezerwacji nie mogą zostać załadowane.");
  }

  return data;
};

export const deleteBook = async (id) => {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    throw new Error("Błąd usuwania rezerwacji.");
  }
  return data;
};
