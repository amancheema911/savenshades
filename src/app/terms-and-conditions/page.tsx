import type { ReactNode } from "react";
import Link from "next/link";
import Heading from "@/components/Heading";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";

const { email, phone, address, hours, weekends } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
const emailHref = `mailto:${email}`;
const effectiveDate = "August 12, 2026";

type TermsSectionProps = {
  title: string;
  children: ReactNode;
};

function TermsSection({ title, children }: TermsSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-[var(--black)] sm:text-2xl">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-black/70">{children}</div>
    </section>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-5xl space-y-10 rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
            <Heading
              tag="h1"
              size="section"
              tone="dark"
              title={
                <>
                  Terms & <span className="text-[var(--brand-color)]">Conditions.</span>
                </>
              }
              description="The rules and guidelines for using our website and working with Seven Shades on epoxy flooring projects."
            />
            <p>Effective date: {effectiveDate}</p>

            <TermsSection title="1. Agreement to these terms">
              <p>By accessing or using the website at{" "}<Link href="/" className="font-medium text-[var(--brand-color)] hover:underline">{BASE_URL.replace(/^https?:\/\//, "")}</Link>{" "} or by requesting a quote or service from{" "} <strong className="font-semibold text-[var(--black)]">{APP_NAME}</strong>{" "} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to these Terms &amp; Conditions. If you do not agree, please do not use our website or services.</p>
              <p>These terms apply to website visitors, quote request submissions, and customers engaging us for epoxy flooring and related surfacing work in Surrey, BC and surrounding areas.</p>
            </TermsSection>

            <TermsSection title="2. About our services">
              <p>{APP_NAME} provides professional epoxy flooring installation and related services, including but not limited to garage floors, commercial flooring, residential floors, metallic epoxy, solid epoxy, stone epoxy, and rubber surfacing.</p>
              <p>Service descriptions, photos, and project examples on this website are for general information. Actual finishes, timelines, and system specifications may vary based on slab condition, scope, product selection, and site requirements.</p>
            </TermsSection>

            <TermsSection title="3. Website use">
              <p>You agree to use our website only for lawful purposes. You must not:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Attempt to gain unauthorized access to our systems or data</li>
                <li>Submit false, misleading, or fraudulent quote or contact information</li>
                <li>Interfere with website security, performance, or availability</li>
                <li>Copy, scrape, or republish site content without our written permission</li>
                <li>Use the site in any way that violates applicable laws or regulations</li>
              </ul>
              <p>We may restrict or terminate access to the website if we reasonably believe these terms have been violated.</p>
            </TermsSection>

            <TermsSection title="4. Quotes, estimates, and proposals">
              <p>Information submitted through our online quote form — including name, email, phone, project type, floor size, and postal code — helps us prepare an initial response. Online submissions do not create a binding contract.</p>
              <p>Estimates and quotes are subject to on-site inspection, moisture testing, surface preparation requirements, and written confirmation. Pricing may change if project conditions differ from the information originally provided.</p>
              <p>A project is confirmed only when both parties agree to a written scope, schedule, and payment terms.</p>
            </TermsSection>

            <TermsSection title="5. Scheduling, access, and site conditions">
              <p>Customers are responsible for providing safe, reasonable access to the work area on scheduled dates. Please ensure the space is cleared of vehicles, stored items, debris, and obstacles unless otherwise agreed in writing.</p>
              <p> Existing concrete condition — including cracks, moisture, contamination, or previous coatings — can affect preparation, pricing, and results. We will communicate required repairs or remediation before work proceeds where possible.</p>
              <p>Weather, curing times, and product manufacturer requirements may affect install dates and return-to-service timelines. We will provide guidance at project handoff.</p>
            </TermsSection>

            <TermsSection title="6. Pricing and payment">
              <p>Payment terms, deposits, milestones, and accepted payment methods will be defined in your project agreement or invoice. Unless stated otherwise:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Deposits may be required to secure scheduling and material orders</li>
                <li>Final balances are typically due upon completion or as stated in writing</li>
                <li>Late or missed payments may delay work or warranty support</li>
              </ul>
              <p>Taxes, permits, and third-party fees are included in your quote only when explicitly stated.</p>
            </TermsSection>

            <TermsSection title="7. Warranties and workmanship">
              <p>{APP_NAME} stands behind professional installation using quality materials and industry-standard preparation practices. Applicable warranty coverage, duration, and exclusions will be provided in your project documentation.</p>
              <p>Warranties do not cover damage caused by misuse, improper cleaning chemicals, unapproved coatings applied afterward, structural slab movement, moisture issues not addressed during prep, or normal wear beyond the intended use of the system installed.</p>
            </TermsSection>

            <TermsSection title="8. Cancellations and changes">
              <p>If you need to reschedule or cancel, contact us as early as possible. Deposits may be non-refundable once materials are ordered or preparation has begun, as stated in your agreement.</p>
              <p>Change requests after work starts — including finish upgrades, added areas, or scope revisions — may affect price and schedule. We will seek approval before proceeding with material changes.</p>
            </TermsSection>

            <TermsSection title="9. Intellectual property">
              <p>All website content — including text, logos, graphics, photography, and layout — is owned by or licensed to {APP_NAME} and protected by applicable intellectual property laws.</p>
              <p>You may view and share links to our pages for personal or informational purposes. Reproduction, distribution, or commercial use of our content without permission is not permitted.</p>
            </TermsSection>

            <TermsSection title="10. Third-party links">
              <p>Our website may include links to third-party sites such as social media platforms. We do not control and are not responsible for the content, policies, or practices of third-party websites.</p>
            </TermsSection>

            <TermsSection title="11. Disclaimers">
              <p>Website content is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis for general information. While we aim to keep information accurate and current, we do not guarantee that all content is complete, error-free, or up to date at all times.</p>
              <p>Nothing on this website constitutes legal, engineering, or financial advice. Project suitability should be confirmed through a site evaluation and written proposal.</p>
            </TermsSection>

            <TermsSection title="12. Limitation of liability">
              <p>To the fullest extent permitted by law, {APP_NAME} is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of the website or services, except where liability cannot be excluded under applicable law.</p>
              <p>Our total liability for any claim relating to website use — separate from a signed service agreement — is limited to the amount you paid us, if any, for the specific service giving rise to the claim during the twelve (12) months before the claim arose.</p>
            </TermsSection>

            <TermsSection title="13. Privacy">
              <p>Our collection and use of personal information is described in our{" "}<Link href="/privacy-policy" className="font-medium text-[var(--brand-color)] hover:underline">Privacy Policy</Link>. By using our website or submitting a quote request, you acknowledge that policy.</p>
            </TermsSection>

            <TermsSection title="14. Governing law">
              <p>These Terms &amp; Conditions are governed by the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to conflict-of-law principles.</p>
              <p>Disputes will be handled in the courts or tribunals of competent jurisdiction located in British Columbia, unless otherwise required by mandatory consumer protection laws.</p>
            </TermsSection>

            <TermsSection title="15. Changes to these terms">
              <p>We may update these Terms &amp; Conditions from time to time. The effective date at the top of this page will reflect the latest version. Continued use of the website after changes are posted constitutes acceptance of the revised terms.</p>
            </TermsSection>

            <TermsSection title="16. Contact us">
              <p>For questions about these Terms &amp; Conditions, contact {APP_NAME}:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Email:{" "} <Link href={emailHref} className="text-[var(--brand-color)] hover:underline">{email}</Link>
                </li>
                <li>Phone:{" "} <Link href={phoneHref} className="text-[var(--brand-color)] hover:underline">{phone}</Link></li>
                <li>Mail: {address}</li>
                <li>Hours: {hours}; {weekends}</li>
              </ul>
              <p>You may also reach us through our{" "} <Link href="/contact-us" className="font-medium text-[var(--brand-color)] hover:underline">contact page</Link>.</p>
            </TermsSection>
          </article>
        </div>
      </section>
    </>
  );
}
