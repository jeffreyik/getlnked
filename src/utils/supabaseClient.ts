import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl:string | undefined = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey: string | undefined = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl ?? '', supabaseKey ?? '')