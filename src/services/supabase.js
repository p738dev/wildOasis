import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://obzhqqwohpopcltfcixq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iemhxcXdvaHBvcGNsdGZjaXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExMjk4MjIsImV4cCI6MjAzNjcwNTgyMn0._pqzUyCtQyhAxY5TJMJKYzd0ZDHUDoL13l0bH0kbEpQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
