/*
  # Create contact form table

  1. New Tables
    - `contact_form_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
      - `status` (text) - For tracking submission status
      
  2. Security
    - Enable RLS on `contact_form_submissions` table
    - Add policy for inserting new submissions
    - Add policy for reading own submissions
*/

CREATE TABLE IF NOT EXISTS contact_form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow users to read their own submissions (by email)
CREATE POLICY "Users can read own submissions"
  ON contact_form_submissions
  FOR SELECT
  TO anon
  USING (email = current_user);