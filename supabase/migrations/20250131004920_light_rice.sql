/*
  # Create contact form submissions table

  1. New Tables
    - `contact_form_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `contact_form_submissions` table
    - Add policy for anonymous submissions
*/

CREATE TABLE IF NOT EXISTS contact_form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous submissions
CREATE POLICY "Allow anonymous submissions" ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);