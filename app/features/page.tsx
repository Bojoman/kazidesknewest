"use client";
import AppHeader from "../../components/Navbar";
import AppFooter from "../../components/Footer";
import { FeatureSection } from "../features/FeatureSection";
import Hero from "../../components/FeatureHero";

const featurePairs = [
  {
    title1: "Customer and Lead Management",
    description1: `Manage customer and lead information in a centralized database.
Key Features:
Import/export data from various sources.
Lead tracking, scoring, and nurturing.
Sales pipeline management with customizable stages.
Automated lead assignment and follow-up reminders.`,
    image1: "/Boy2.png",
    title2: "Contract Management",
    description2: `Create, store, and manage contracts efficiently.
Key Features:
Contract creation with version control.
Clause library and templates.
Automated reminders for renewals and expirations.
Digital signatures and approval workflows.
Contract analytics and reporting.`,
    image2: "/Boy.png",
  },
  {
    title1: "Project Management",
    description1: `Plan, track, and execute projects seamlessly.
Key Features:
Gantt charts for scheduling and timeline visualization.
Kanban boards for task management.
Task assignments, deadlines, and progress tracking.
File sharing and team collaboration tools.
Project reports and analytics.`,
    image1: "/Boy2.png",
    title2: "Financial Management",
    description2: `Handle invoicing, expenses, and financial reporting.
Key Features:
Invoice management with customizable templates.
Expense tracking and categorization.
Financial reports and analytics.
Integration with payment gateways like Stripe and PayPal.`,
    image2: "/Boy.png",
  },
  {
    title1: "Human Resource Management",
    description1: `Streamline employee management and HR processes.
Key Features:
Employee records and profiles.
Leave and attendance management.
Performance appraisals and recruitment tools.
Automated onboarding workflows.`,
    image1: "/Boy2.png",
    title2: "Procurement Management",
    description2: `Simplify procurement processes from requisition to invoice.
Key Features:
Purchase requisitions and orders.
Approval workflows for spending control.
Centralized vendor database.
Order tracking and invoice management.`,
    image2: "/Boy.png",
  },
  {
    title1: "Payroll Management",
    description1: `Automate payroll processing and statutory deductions.
Key Features:
Automated salary processing with bulk support.
Statutory compliance for PAYE, NHIF, NSSF.
Employee self-service portal for payslips and tax reports.
Real-time payroll reports and exports.`,
    image1: "/Boy2.png",
    title2: "Asset Management",
    description2: `Track and manage company assets effectively.
Key Features:
Centralized asset registry.
Track asset location, assigned users, and warranty details.
Maintenance scheduling and logging.
Check-in/check-out processes for shared equipment.`,
    image2: "/Boy.png",
  },
  {
    title1: "Product Management",
    description1: `Manage product catalogs, inventory, and sales orders.
Key Features:
Centralized product catalog with detailed information.
Inventory management with stock level tracking.
Sales order processing and fulfillment.
Vendor and supplier management with purchase order tracking.`,
    image1: "/Boy2.png",
    title2: "Communication & Customer Support",
    description2: `Enhance internal and customer communication.
Key Features:
Ticketing system for issue tracking.
Instant messaging with Slack integration.
Alerts for tasks, deadlines, and updates.
Knowledge base for common issues.`,
    image2: "/Boy.png",
  },
  {
    title1: "Zoom Teams & Google Meet Integration",
    description1: `Host virtual meetings directly within KaziDesk.
Key Features:
High-quality video and audio.
Screen sharing and real-time chat.
End-to-end encryption for secure discussions.
One-click meeting access for internal and external collaboration.`,
    image1: "/Boy2.png",
    title2: "Role and Permission Management",
    description2: `Control user access based on roles and permissions.
Key Features:
User roles based on job functions.
Granular permissions for data access.
Audit trails and activity logs for monitoring.`,
    image2: "/Boy.png",
  },
  {
    title1: "Reporting and Analytics",
    description1: `Gain insights into business performance with customizable reports.
Key Features:
Customizable dashboards with drill-down capabilities.
Financial metrics like revenue and cash flow.
Project status and employee productivity insights.`,
    image1: "/Boy2.png",
    title2: "Configurable Options",
    description2: `Customize KaziDesk to fit your business processes.
Key Features:
Customizable fields and forms.
Tailored notifications based on specific events.
Adaptable workflows to align with organizational needs.`,
    image2: "/Boy.png",
  },
];

export default function FeaturesPage() {
  return (
    <main className="pt-1 bg-white">
      <div className="mt-[1px]">
        <AppHeader />
      </div>
      <div className="flex w-[90%] max-md:pb-24 flex-col mt-6 m-auto max-md:mt-10 max-md:max-w-full">
        <Hero />
        <div className="mt-6 w-full max-md:mt-10 max-md:max-w-full">
          {featurePairs.map((pair, index) => (
            <FeatureSection key={index} features={pair} />
          ))}
        </div>
      </div>
      <AppFooter />
    </main>
  );
}
