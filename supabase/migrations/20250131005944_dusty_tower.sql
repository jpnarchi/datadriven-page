/*
  # Contact Form Setup

  1. New Tables
    - `contact_form_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)
      
  2. Security
    - Enable RLS
    - Add policy for anonymous submissions
    - Add policy for reading own submissions
*/

-- Drop if exists to ensure clean state
DROP TABLE IF EXISTS contact_form_submissions;

-- Create the contact form submissions table
CREATE TABLE contact_form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(trim(name)) > 0),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text,
  subject text NOT NULL CHECK (length(trim(subject)) > 0),
  message text NOT NULL CHECK (length(trim(message)) > 0),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous submissions
CREATE POLICY "Allow anonymous submissions"
  ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow users to read their own submissions
CREATE POLICY "Users can read own submissions"
  ON contact_form_submissions
  FOR SELECT
  TO anon
  USING (email = current_user);