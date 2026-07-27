import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // No lanzamos error para no dejar la página en blanco; el formulario fallará con aviso.
  console.error('Missing Supabase environment variables (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY)');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'public-anon-placeholder'
);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  service_type?: string;
  address?: string;
  preferred_contact_method?: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  const { data, error } = await supabase
    .from('contacts')
    .insert([formData])
    .select();

  if (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }

  return data;
};