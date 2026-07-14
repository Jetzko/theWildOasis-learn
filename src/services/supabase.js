import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ptjkkbxlrsitofjrwjia.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0amtrYnhscnNpdG9manJ3amlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0MDUwOTAsImV4cCI6MjA5Nzk4MTA5MH0.neQC7dARdPfuda_aHVD0uoz0cxydz3Ij59Z5TXgdiHA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
