'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function ContactUs() {
  return (
    <div className="">
      <Navbar />
      <ContactForm />

      <Footer />
    </div>
  );
}
