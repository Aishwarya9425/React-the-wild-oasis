import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cipyjnxhnwnsqlyjwmnq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpcHlqbnhobnduc3FseWp3bW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMjU3NzIsImV4cCI6MjAxMDcwMTc3Mn0.krEvN72VcKs6lR1toEL0RLPJWjR77HGMZ3uBIAt6h9o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
