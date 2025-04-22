"use client";
import * as React from "react";
import { PricingHeader } from "./PricingHeader";
import { PricingCard } from "./PricingCard";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const basicFeatures = [
  { name: "Max Active Employees", value: "5" },
  { name: "File Storage", value: "5GB" },
  { name: "Clients" },
  { name: "Employees" },
  { name: "Projects" },
  { name: "Attendance" },
  { name: "Tasks" },
  { name: "Estimates" },
  { name: "Invoices" },
  { name: "Payments" },
  { name: "Time Logs" },
  { name: "Tickets" },
  { name: "Events" },
  { name: "Leads" },
  { name: "Holidays" },
  { name: "Products" },
  { name: "Expenses" },
  { name: "Contracts" },
  { name: "Reports" },
  { name: "Orders" },
  { name: "Knowledge Base" },
  { name: "Bank Account" },
  { name: "Messages" },
  { name: "Zoom" },
  { name: "Payroll" },
  { name: "Letter" },
  { name: "Recruit" },
  { name: "Purchase" },
  { name: "Assets" },
];

const professionalFeatures = [
  { name: "Max Active Employees", value: "20" },
  { name: "File Storage", value: "10GB" },
  ...basicFeatures.slice(2),
];

const enterpriseFeatures = [
  { name: "Max Active Employees", value: "500" },
  { name: "File Storage", value: "100GB" },
  ...basicFeatures.slice(2),
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <main className="flex flex-col 
    pt-8 bg-white">
      <Navbar />
      <div className="grid place-items-center pb-32 md:pb-24">
        <PricingHeader
          isOn={isAnnual}
          onToggle={() => setIsAnnual(!isAnnual)}
        />
        <section className="w-[90%]  flex m-auto flex-wrap  gap-8 mt-16 max-w-full leading-tight text-rose-950 max-md:mt-10">
          <PricingCard
            title="Basic Plan"
            description="Small businesses"
            monthlyPrice={50.0}
            isAnnual={isAnnual}
            features={basicFeatures}
          />
          <PricingCard
            title="Professional Plan"
            description="Medium-sized businesses"
            monthlyPrice={98}
            features={professionalFeatures}
            variant="highlighted"
            isAnnual={isAnnual}
          />
          <PricingCard
            title="Enterprise Plan"
            description="Large enterprises"
            monthlyPrice={500}
            features={enterpriseFeatures}
            variant="enterprise"
            isAnnual={isAnnual}
          />
        </section>
      </div>
      <Footer />
    </main>
  );
}
