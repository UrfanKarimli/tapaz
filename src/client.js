
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://foxyetokeffghgsxpaug.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZveHlldG9rZWZmZ2hnc3hwYXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMDUyODcsImV4cCI6MjA0Mzc4MTI4N30.NKx3n2zcbipZgzUTSoL5AR0PWbCQO7i5b_AlimK_jfY'
export const supabase = createClient(supabaseUrl, supabaseKey)