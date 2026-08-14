import type { ReactNode } from "react";
import Link from "next/link";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import Heading from "@/components/Heading";

const { email, phone, address } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
const emailHref = `mailto:${email}`;
const effectiveDate = "August 12, 2026";

type PolicySectionProps = {
  title: string;
  children: ReactNode;
};

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-[var(--black)] sm:text-2xl">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-black/70">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>

      <section className="bg-gray-50 py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-5xl space-y-10 rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
            <Heading
              tag="h2"
              size="section"
              tone="dark"
              title={<>Privacy <span className="text-[var(--brand-color)]">Policy.</span></>}
              description="How Seven Shades handles your information when you browse our site, request a quote, or get in touch about epoxy flooring."
            />
            <p>Effective date: {effectiveDate}</p>

            <PolicySection title="1. Who we are">
              <p>
                This Privacy Policy describes how{" "}
                <strong className="font-semibold text-[var(--black)]">{APP_NAME}</strong>{" "}
                (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses,
                and protects personal information through our website at{" "}
                <Link href="/" className="font-medium text-[var(--brand-color)] hover:underline">
                  {BASE_URL.replace(/^https?:\/\//, "")}
                </Link>
                .
              </p>
              <p>
                We provide epoxy flooring installation and related services for residential
                and commercial customers in Surrey, BC and the surrounding Lower Mainland.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="font-semibold text-[var(--black)]">Business name:</strong>{" "}
                  {APP_NAME}
                </li>
                <li>
                  <strong className="font-semibold text-[var(--black)]">Address:</strong>{" "}
                  {address}
                </li>
                <li>
                  <strong className="font-semibold text-[var(--black)]">Phone:</strong>{" "}
                  <Link href={phoneHref} className="text-[var(--brand-color)] hover:underline">
                    {phone}
                  </Link>
                </li>
                <li>
                  <strong className="font-semibold text-[var(--black)]">Email:</strong>{" "}
                  <Link href={emailHref} className="text-[var(--brand-color)] hover:underline">
                    {email}
                  </Link>
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="2. Information we collect">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="font-semibold text-[var(--black)]">
                    Quote and contact form details:
                  </strong>{" "}
                  name, email address, phone number, project type, approximate floor size,
                  and postal code when you submit our flooring quote form on the homepage or
                  contact page.
                </li>
                <li>
                  <strong className="font-semibold text-[var(--black)]">
                    Direct communications:
                  </strong>{" "}
                  information you provide when you call, email, or visit us — such as project
                  details, property address, scheduling preferences, or photos you choose to
                  share.
                </li>
                <li>
                  <strong className="font-semibold text-[var(--black)]">
                    Technical and usage data:
                  </strong>{" "}
                  IP address, browser type, device information, pages visited, and referring
                  URLs. This data may be collected automatically by our hosting provider and
                  server logs to keep the site secure and functioning properly.
                </li>
              </ul>
              <p>
                We do not intentionally collect sensitive personal information through our
                website. Please do not submit payment card numbers or government ID numbers
                through our online forms.
              </p>
            </PolicySection>

            <PolicySection title="3. How we use your information">
              <p>We use personal information to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to quote requests and contact inquiries</li>
                <li>Schedule site visits, estimates, and installation consultations</li>
                <li>Prepare project scopes, pricing, and follow-up communications</li>
                <li>Operate, maintain, and improve our website and services</li>
                <li>Protect against fraud, abuse, and unauthorized access</li>
                <li>Comply with applicable legal and regulatory obligations</li>
              </ul>
            </PolicySection>

            <PolicySection title="4. How we share information">
              <p>
                We do not sell or rent your personal information. We may share information
                only in these limited circumstances:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="font-semibold text-[var(--black)]">Service providers:</strong>{" "}
                  trusted vendors that help us operate our business — for example, email
                  delivery (SMTP) providers used to send quote notifications to our team.
                </li>
                <li>
                  <strong className="font-semibold text-[var(--black)]">Legal requirements:</strong>{" "}
                  when required by law, court order, or to protect our rights, customers, or
                  staff.
                </li>
                <li>
                  <strong className="font-semibold text-[var(--black)]">Business transfers:</strong>{" "}
                  in connection with a merger, acquisition, or sale of business assets, subject
                  to appropriate confidentiality protections.
                </li>
              </ul>
              <p>
                Quote form submissions are transmitted to our internal email inbox so our
                team can follow up with you directly.
              </p>
            </PolicySection>

            <PolicySection title="5. Cookies and tracking">
              <p>
                Our website does not currently use advertising cookies or third-party
                analytics trackers. Standard server and hosting logs may still record basic
                technical information when you visit our pages.
              </p>
              <p>
                If we introduce analytics, marketing pixels, or similar tools in the future,
                we will update this policy and describe any choices available to you.
              </p>
            </PolicySection>

            <PolicySection title="6. Data retention">
              <p>
                We retain personal information only as long as needed to respond to your
                inquiry, manage an active or prospective project, meet warranty or service
                obligations, and satisfy legal, accounting, or record-keeping requirements.
              </p>
              <p>
                When information is no longer required, we take reasonable steps to delete
                or anonymize it.
              </p>
            </PolicySection>

            <PolicySection title="7. Security">
              <p>
                We use reasonable administrative, technical, and organizational safeguards
                to protect personal information. However, no method of transmission over the
                internet or electronic storage is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </PolicySection>

            <PolicySection title="8. Your privacy rights">
              <p>
                Depending on applicable law — including Canadian privacy legislation such as
                PIPEDA — you may have the right to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Request access to personal information we hold about you</li>
                <li>Ask us to correct inaccurate or incomplete information</li>
                <li>Request deletion of information, subject to legal exceptions</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise these rights, contact us using the details below. We may need to
                verify your identity before responding.
              </p>
            </PolicySection>

            <PolicySection title="9. Third-party links">
              <p>
                Our site may link to third-party websites such as social media platforms.
                Those sites have their own privacy policies, and we are not responsible for
                their practices. Review their policies before providing personal information.
              </p>
            </PolicySection>

            <PolicySection title="10. Children&apos;s privacy">
              <p>
                Our services are directed to adults seeking flooring installation. We do not
                knowingly collect personal information from children under 13. If you believe
                a child has provided us information, please contact us so we can remove it.
              </p>
            </PolicySection>

            <PolicySection title="11. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will
                revise the effective date at the top of this page. Material changes may also
                be communicated through our website or by other appropriate means.
              </p>
            </PolicySection>

            <PolicySection title="12. Contact us">
              <p>
                For privacy questions, requests, or concerns, contact {APP_NAME}:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Email:{" "}
                  <Link href={emailHref} className="text-[var(--brand-color)] hover:underline">
                    {email}
                  </Link>
                </li>
                <li>
                  Phone:{" "}
                  <Link href={phoneHref} className="text-[var(--brand-color)] hover:underline">
                    {phone}
                  </Link>
                </li>
                <li>Mail: {address}</li>
              </ul>
              <p>
                You may also use our{" "}
                <Link href="/contact-us" className="font-medium text-[var(--brand-color)] hover:underline">
                  contact page
                </Link>{" "}
                to reach our team.
              </p>
            </PolicySection>
          </article>
        </div>
      </section>
    </>
  );
}
