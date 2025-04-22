'use client';

import { motion } from 'framer-motion';

const partnerLogos = [
  { name: 'Safaricom', logo: '/logos/Saf Logo 1.png' },
  { name: 'M-PESA', logo: '/logos/M-PESA_LOGO-01.svg 1.png' },
  { name: 'Google', logo: '/logos/Google Logo 1.png' },
  { name: 'Microsoft', logo: '/logos/microsoft logo  1.png' },
  { name: 'Aws', logo: '/logos/aws logo 1.png' },
  { name: 'Meat soko', logo: '/logos/Clip path group.png' },
  { name: 'Onfon', logo: '/logos/Onfon Logo 1.png' },
  { name: 'Slack', logo: '/logos/Slack-Logo 1.png' },
  { name: 'I&M', logo: '/logos/I & M logo 1.png' },
];

const logosForMarquee = [...partnerLogos, ...partnerLogos, ...partnerLogos];

export default function Partners() {
  return (
    <section className="px-4 py-8 bg-white text-center">
      <h2 className="text-[38px] leading-[1.2] text-gray-800 font-[400] font-inter mb-8">
        <span>
          <span className="text-[#B3443D]">Partnered</span> with the Best for{' '}
          <span className="text-[#B3443D]">Reliable</span>
        </span>
        <br />
        <span className="text-[38px] text-gray-800">Services</span>
      </h2>

      <div className="w-full overflow-hidden bg-[#FFFCF5] py-6">
        <motion.div
          className="inline-flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {logosForMarquee.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-32 h-16 mx-6 flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
