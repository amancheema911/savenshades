import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { contactInfo } from "@/lib/config";
import Heading from "@/components/Heading";
import FlooringQuoteForm from "@/components/FlooringQuoteForm";

const { phone, address, email, hours, weekends } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
const emailHref = `mailto:${email}`;

export const metadata: Metadata = {
  title: "Contact Us | Saven shades Premium Epoxy Flooring",
  description:
    "Request a free Saven shades epoxy flooring estimate. Call, email, or send a message — we respond within 24 hours.",
};

const promises = [
  {
    id: "estimate",
    title: "Free estimate",
    description: "No obligation quotes for residential and commercial projects.",
  },
  {
    id: "response",
    title: "24-hour reply",
    description: "We respond quickly so your project keeps moving.",
  },
  {
    id: "scope",
    title: "Clear scope",
    description: "Transparent pricing with prep, materials, and finish defined.",
  },
];

export default function ContactUsPage() {
  return (
    <>

      {/* Form + details */}
      <section className="relative bg-[#F7F8FA] py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="lg:col-span-5 xl:col-span-4 space-y-4">
              <Heading
                tag="h2"
                size="section"
                tone="dark"
                eyebrow="GET IN TOUCH"
                title={<>Prefer Direct <span className="text-[var(--brand-color)]">Contact?</span></>}
                description="Reach the Saven Shades team by phone, email, or visit — or use the form and we&apos;ll follow up with next steps."
              />

              <ul className="space-y-6">
                {/* Office Address */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--brand-color)] p-2 rounded-sm">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 384 512">
                      <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                  </div>
                  <div>
                    <strong className="block text-gray-800">Office Address:</strong>
                    <p>{address}</p>
                  </div>
                </li>

                {/* Phone Number */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--brand-color)] p-2 rounded-sm">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-gray-800">Phone Number:</strong>
                    <Link href={phoneHref} className="text-md hover:text-indigo-800">{phone}</Link>
                  </div>
                </li>

                {/* Email Address */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--brand-color)] p-2 rounded-sm">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-gray-800">Email Address:</strong>
                    <Link href={emailHref} className="text-md hover:text-indigo-800">{email}</Link>
                  </div>
                </li>

                {/* Hours */}
                <li className="flex items-start gap-4">
                  <div className="bg-[var(--brand-color)] p-2 rounded-sm">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-gray-800">Hours:</strong>
                    <div>{hours}, {weekends}</div>
                  </div>  
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 xl:col-span-8">
              <FlooringQuoteForm tone="light" className="lg:max-w-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <div className="relative z-10 container mx-auto sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              eyebrow="WHAT TO EXPECT"
              title={<>Simple Process.<span className="text-[var(--brand-color)]">Clear Answers.</span></>}
              description="High performance epoxy flooring systems..."
            />
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {promises.map((item, index) => (
              <li key={item.id} className="rounded-[1.35rem] border border-black/8 bg-white p-6 shadow-[0_8px_30px_rgba(11,17,32,0.04)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--brand-color)]/35 hover:shadow-[0_16px_40px_rgba(11,17,32,0.08)] sm:p-7 space-y-2">
                <span className=" text-3xl font-bold tracking-tight text-[var(--brand-color)]/25">{String(index + 1).padStart(2, "0")}</span>
                <h3 className=" text-lg font-bold tracking-tight text-black">{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
