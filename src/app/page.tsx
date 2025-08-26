"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import ArrowButton from '@/components/buttons/ArrowButton';

const contactForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="p-3 border rounded" required />
      <input type="email" placeholder="Your Email" className="p-3 border rounded" required />
      <textarea placeholder="Your Message" className="p-3 border rounded" required></textarea>
      <ArrowButton text="Submit" onClick={() => {}} className="w-full" />
    </form>
  );
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-[#F7F9FF] py-16">
        <CyclopsHero title="Welcome to Our Brand" subtitle="Quality services to enhance your experience" primaryButtonText="Get Started" secondaryButtonText="Learn More" onPrimaryButtonClick={() => {}} onSecondaryButtonClick={() => {}} />
      </section>
      <section id="about" className="bg-white py-16">
        <MinimalAbout description="Our mission is to provide top-notch services that drive results and foster growth." />
      </section>
      <section id="services" className="bg-white py-16">
        <SimpleKPIBento items={[{ value: 'Service One', description: 'Description of Service One' }, { value: 'Service Two', description: 'Description of Service Two' }]} className="max-w-6xl" gridClassName="grid grid-cols-1 md:grid-cols-2 gap-6" itemClassName="border rounded-lg p-4 shadow-md" valueClassName="font-bold text-lg" descriptionClassName="text-sm" />
      </section>
      <section id="benefits" className="bg-[#F7F9FF] py-16">
        <SimpleStepsBento items={[{ title: 'Benefit One', description: 'Description of Benefit One' }, { title: 'Benefit Two', description: 'Description of Benefit Two' }]} className="max-w-6xl" containerClassName="container mx-auto" stepClassName="my-4" numberClassName="font-bold" titleClassName="text-lg" descriptionClassName="text-sm" />
      </section>
      <section id="cta" className="bg-white py-16">
        <h2 className="text-center text-3xl font-bold">Join Us Today!</h2>
        <p className="text-center">Be a part of our journey. Sign up for updates.</p>
      </section>
      <section id="contact" className="bg-white py-16">
        <h2 className="text-center text-3xl font-bold">Get in Touch</h2>
        <contactForm />
      </section>
      <footer className="bg-white py-16">
        <SimpleFooter columns={[{ title: 'Support', items: [{ label: 'Contact Us', onClick: () => {} }] }] } copyrightText="© 2023 Your Brand" onPrivacyClick={() => {}} />
      </footer>
    </SiteThemeProvider>
  );
}
