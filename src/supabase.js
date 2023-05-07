import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zkjasonpoplzxkevvafj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpramFzb25wb3BsenhrZXZ2YWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2Mzc3ODAsImV4cCI6MTk5MjIxMzc4MH0.os4sz2d14lVSj1u9ZMteKo7Ks9V6hmRnV0OgGp9-vP8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
