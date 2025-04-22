// app/why-choose-kazi-desk/page.tsx
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FeatureSection } from '../components/FeatureSection';

const features = [
  {
    title: 'Streamlined Operations',
    description:
      'Centralize workflows and reduce manual effort with an all-in-one platform designed to improve efficiency and accelerate growth.',
    imageUrl: '/Girl.png',
    imageOnRight: true,
  },
  {
    title: 'Data-Driven Decisions',
    description:
      'Leverage real-time analytics and comprehensive reporting to gain clear insights into financial performance, project progress, and employee productivity, empowering confident and informed decision-making.',
    imageUrl: '/Girl.png',
    imageOnRight: false,
  },
  {
    title: 'Local Compliance',
    description:
      'Stay ahead of regulatory demands with automated tax management for PAYE, NHIF, and NSSF. Regular updates ensure you remain fully compliant with Kenyan laws.',
    imageUrl: '/Girl.png',
    imageOnRight: true,
  },
  {
    title: 'Enhanced Productivity',
    description:
      'Automate repetitive tasks such as payroll, invoicing, and expense tracking, freeing up your team to focus on driving business growth and innovation.',
    imageUrl: '/Girl.png',
    imageOnRight: false,
  },
  {
    title: 'Local Support',
    description:
      'Our experienced team is committed to walking with you through every stage of your journey, offering personalized support and solutions tailored to your unique needs.',
    imageUrl: '/Girl.png',
    imageOnRight: true,
  },
];

// Variants for each feature block
const itemVariants: Variants = {
  hidden: (custom: boolean) => ({
    opacity: 0,
    x: custom ? 50 : -50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function WhyChooseKaziDesk() {
  return (
    <section className="flex flex-col px-5 md:px-16 py-12 bg-[#F9DBCF]">
      <h1 className="self-center text-[28px] md:text-[48px] font-semibold leading-tight text-center text-rose-950 mb-8">
        Why Choose KaziDesk?
      </h1>

      {features.map((feat, idx) => (
        <motion.div
          key={idx}
          custom={feat.imageOnRight}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <FeatureSection
            title={feat.title}
            description={feat.description}
            imageUrl={feat.imageUrl}
            imageOnRight={feat.imageOnRight}
          />
        </motion.div>
      ))}
    </section>
  );
}
