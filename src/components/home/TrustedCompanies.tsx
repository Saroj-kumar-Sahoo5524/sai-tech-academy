"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "NPCI",       logo: "/logos/npci.svg"       },
  { name: "TCS",        logo: "/logos/tcs.svg"        },
  { name: "Wipro",      logo: "/logos/wipro.svg"      },
  { name: "Cognizant",  logo: "/logos/cognizant.svg"  },
  { name: "HCL",        logo: "/logos/hcl.svg"        },
  { name: "Accenture",  logo: "/logos/accenture.svg"  },
  { name: "Infosys",    logo: "/logos/infosys.svg"    },
  { name: "IBM",        logo: "/logos/ibm.svg"        },
];

export default function TrustedCompanies() {
  const doubled = [...companies, ...companies];

  return (
    <section className="py-14 bg-[#0F172A] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight gradient-text"
        >
          Our Students Work At Top Companies
        </motion.h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((company, i) => (
            <div
              key={i}
              title={company.name}
              className="inline-flex items-center justify-center mx-5 px-8 py-4 rounded-xl glass-card border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-default min-w-[160px] h-[72px]"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="object-contain max-h-10 w-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
