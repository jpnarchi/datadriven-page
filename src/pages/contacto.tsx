import { ContactHero } from '../components/contact/contact-hero';
import { ContactForm } from '../components/contact/contact-form';
import { ContactInfo } from '../components/contact/contact-info';
import { CTA } from '../components/sections/cta';

export function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <CTA />
    </main>
  );
}