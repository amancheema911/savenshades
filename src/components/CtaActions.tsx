import { contactInfo } from "@/lib/config";
import Link from "next/link";

export default function CtaActions() {
  const { phone } = contactInfo;
  const phoneHref = `${phone.replace(/[^+\d]/g, "")}`;

  return (
    <div className="container mx-auto relative">
      <div className="
          fixed bottom-4 left-0 right-0 z-[10] sm:left-auto sm:right-6
          flex justify-around sm:justify-center items-center gap-6
          bg-gradient-to-r from-[var(--brand-color)] to-[var(--brand-color-deep)] shadow-xl rounded-2xl
          px-4 py-3
          mx-3 sm:mx-auto
          sm:w-auto md:w-auto lg:w-auto
          sm:bottom-6
          transition-all duration-300 hover:shadow-2xl
        ">
        {/* WhatsApp Chat */}
        <Link href={`https://wa.me/${phoneHref}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-1">
          <div className="relative bg-white p-2 rounded-full shadow group-hover:bg-green-200 transition">
            <svg viewBox="0 0 48 48" className="w-6 h-6 text-emerald-600" fill="currentColor">
              <path d="M24 4C13 4 4 13 4 24c0 4.19 1.15 8.13 3.33 11.61L6 44l8.73-2.27A19.76 19.76 0 0 0 24 44c11 0 20-9 20-20S35 4 24 4zm0 36a16.02 16.02 0 0 1-8.51-2.39l-.61-.36-5.18 1.35 1.38-5.05-.33-.52A16.03 16.03 0 1 1 24 40zm8.69-11.18c-.48-.24-2.83-1.39-3.27-1.55s-.76-.24-1.08.24c-.32.48-1.24 1.55-1.52 1.87-.28.32-.56.36-1.04.12-.48-.24-2.02-.74-3.85-2.36a14.24 14.24 0 0 1-2.64-3.26c-.28-.48 0-.72.21-.96.21-.21.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84s-1.08-2.59-1.48-3.54c-.39-.96-.8-.83-1.08-.84h-.92c-.32 0-.84.12-1.28.6s-1.68 1.64-1.68 4c0 2.36 1.72 4.64 1.96 4.96.24.32 3.36 5.28 8.16 7.4 4.8 2.12 4.8 1.4 5.68 1.32.88-.08 2.83-1.15 3.23-2.27.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z"/>
            </svg>
          </div>
          <span className="text-sm font-medium">Chat</span>
        </Link>

        {/* Consult */}
        <Link href="/contact-us" target="_blank" className="group flex flex-col items-center space-y-1">
          <div className="bg-white p-2 rounded-full shadow group-hover:bg-blue-200 transition">
            <svg viewBox="0 0 48 48" className="w-6 h-6 text-indigo-600" fill="currentColor">
              <circle cx="24" cy="14" r="6"/>
              <path opacity="0.8" d="M10 38c0-6 5.37-10 14-10s14 4 14 10v2H10v-2z"/>
              <path opacity="0.4" d="M36 8h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4l-4 3v-3h-2a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z"/>
            </svg>
          </div>
          <span className="text-sm font-medium">Consult</span>
        </Link>

        {/* Call */}
        <Link href={`tel:${phoneHref}`} className="group flex flex-col items-center space-y-1">
          <div className="bg-white p-2 rounded-full shadow group-hover:bg-green-200 transition">
            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 503.32 503.32" fill="currentColor">
              <path d="M228.299,452.905c12.088,12.132,25.531,22.971,40.535,31.223c50.419,27.726,102.374,28.707,150.129-19.039l22.007-22.016
                c10.596-10.596,13.043-26.858,6.04-40.101c-16.479-31.128-77.225-66.734-77.225-66.734c-13.746-7.845-30.338-8.713-38.183,5.259
                c0,0-19.734,23.674-24.758,27.075c-22.936,15.542-44.18,14.935-65.623-6.508l-49.846-49.846l-49.838-49.838
                c-21.443-21.443-22.051-42.687-6.508-65.623c3.402-5.025,27.075-24.758,27.075-24.758c13.972-7.854,13.095-24.437,5.259-38.183
                c0,0-35.606-60.746-66.734-77.225c-13.243-7.003-29.505-4.556-40.101,6.04L38.512,84.638c-44.206,44.214-46.644,92.03-24.758,138.891
                c8.878,19.005,21.704,35.892,36.508,50.749L228.299,452.905z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium">Call</span>
        </Link>
      </div>
    </div>
  );
}