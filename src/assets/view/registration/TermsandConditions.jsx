import React from "react";
import { Helmet } from "react-helmet";

const TermsandConditions = () => {
  return (
    <section className="font-sans antialiased bg-gray-50 py-8 md:py-12">
      <Helmet>
        <title>Conference Policies | Terms & Conditions | ICLSMHA 2026</title>
        <meta
          name="description"
          content="Review ICLSMHA 2026 conference policies including terms and conditions, privacy policy, cancellation & refund rules, visa information, and venue details for delegates."
        />
        <meta
          name="keywords"
          content="conference terms and conditions, conference privacy policy, conference cancellation policy, international conference refund policy, visa information for conference, conference venue details, ICLSMHA 2026 policies"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/terms-and-conditions" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet>

      <div className="w-full px-4">
        {/* Main Title */}
        <h1 className="text-center text-3xl md:text4xl font-bold text-cyan-600 mb-12 leading-tight">
          Conference Policies & Information
        </h1>

        {/* Terms and Conditions Section */}
        <div className="mb-16 bg-slate-100 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 border-b-2 pb-3 border-blue-200">
            Terms and Conditions
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700 leading-relaxed">
            <li>
              By registering for the conference, you hereby agree with the terms
              and conditions.
            </li>
            <li>
              The organization reserves the right to make alterations to the
              program, date and/or venue at any time without prior notice.
            </li>
            <li>
              The organization is not responsible for any loss or damage as a
              result of substitution, alteration, postponement or cancellation
              of an event due to causes beyond its control including without
              limitation, force majeure, natural disasters, sabotage, accident,
              trade or industrial disputes, terrorism, strikes or hostilities.
            </li>
            <li>
              The organization reserves the right and holds the sole discretion
              to cancel any conference at any time in case of any unavoidable
              and unforeseeable circumstances. The organizer will have no
              further liability to the client.
            </li>
            <li>
              Registrations remain valid for the event with new dates or for
              future editions if the conference has to be postponed by causes
              beyond organizer control. The refund policy is not applicable to
              this condition.
            </li>
            <li>
              In the event of cancellation, the organization will use reasonable
              and suitable alternative arrangements such as posting the news of
              cancellation on the appropriate event website to alert those who
              have booked or purchased tickets to attend the event.
            </li>
            <li>
              Delegates are responsible for checking this information prior to
              the event. We advised you to keep checking the website for updates
              of our conference.
            </li>
            <li>
              The organizers will not accept any liability for personal injuries
              or for loss or damage to property belonging to the delegates,
              either during, or as a result of the conference.
            </li>
          </ul>
        </div>

        {/* Privacy Policy Section */}
        <div className="mb-16 bg-slate-100 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 border-b-2 pb-3 border-blue-200">
            Privacy Policy
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                1. Information
              </h3>
              <p className="mb-2">
                We collect personal information that you voluntarily provide to
                us when registering for conferences, subscribing to newsletters,
                submitting inquiries, or participating in surveys or forums on{" "}
                <a
                  href="https://iclsmha.cerada.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-200"
                >
                  https://iclsmha.cerada.in/
                </a>
              </p>
              <p>This information may include:</p>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Contact number</li>
                <li>Mailing address</li>
                <li>Payment information</li>
                <li>Any other information you provide voluntarily</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                2. How We Use Your Information
              </h3>
              <p className="mb-2">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>To process registrations for events and conferences</li>
                <li>
                  To communicate with you regarding updates, announcements and
                  relevant event information
                </li>
                <li>To respond to inquiries or provide customer support</li>
                <li>To manage website operations and improve our services</li>
                <li>
                  To process payments and billing for conference participation
                  or services
                </li>
                <li>
                  For marketing purposes (only if you have given explicit
                  consent)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                3. Sharing of Information
              </h3>
              <p className="mb-2">
                We do not sell, trade or rent your personal information to third
                parties. However, we may share your information with:
              </p>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>
                  Service providers and vendors assisting us with conference
                  logistics, payment processing and website management.
                </li>
                <li>
                  Law enforcement agencies or governmental bodies when required
                  by law.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                4. Your Rights
              </h3>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>Access, update or delete your personal information.</li>
                <li>Opt-out of marketing communications.</li>
                <li>
                  Request the restriction of processing of your data in certain
                  circumstances.
                </li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:info@cerada.in"
                  className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-200"
                >
                  info@cerada.in
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                5. Changes to This Privacy Policy
              </h3>
              <p>
                We reserve the right to update this Privacy Policy at any time.
                Any changes will be posted on this page and we encourage you to
                review this page regularly to stay informed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                6. Contact Us
              </h3>
              <p className="mb-2">
                If you have any questions about this Privacy Policy or how we
                handle your personal information, please contact us at:
              </p>
              <ul className="list-disc pl-8 mt-2 space-y-1">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@cerada.in"
                    className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-200"
                  >
                    info@cerada.in
                  </a>
                </li>
                <li>Phone: +91 8072381719</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cancellation Policy Section */}
        <div className="mb-16 bg-slate-100 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 border-b-2 pb-3 border-blue-200">
            Cancellation Policy
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If the registrant is unable to attend, please note the following
            cancellation policy, which takes into account advance payments made
            for venue, printing, shipping, hotels and other overheads:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed font-semibold">
            <li>50 Days Before Conference: 40% refundable</li>
            <li>30-40 Days Before Conference: 35% refundable</li>
            <li>
              Less Than 30 Days Before Conference: No refunds will be issued
            </li>
          </ul>
        </div>

        {/* Refund Policy Section */}
        <div className="mb-16 bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 border-b-2 pb-3 border-blue-200">
            Refund Policy
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Transfer of Registration: Registration can be transferred to another
            event organized by the same organization of the registrant’s choice.
          </p>
          <p className="text-orange-600 font-semibold leading-relaxed p-4 bg-orange-50 rounded-lg border border-orange-200">
            <span className="font-extrabold text-lg">Note:</span> Refunds will
            be processed 2-4 weeks after the conference, excluding transaction
            charges. Refund/Cancellation Policy is not applicable if the
            conference is postponed due to natural disasters or unpredictable
            activities beyond organizers control including without limitation,
            force majeure, natural disasters, sabotage, accident, trade or
            industrial disputes, terrorism, strikes or hostilities.
          </p>
        </div>

        {/* VISA Information Section */}
        <div className="mb-16 bg-slate-100 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 border-b-2 pb-3 border-blue-200">
            VISA Information
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700 leading-relaxed">
            <li>
              Confworld Educational Research and Development Association
              (CERADA) will not directly contact embassies and consulates on
              behalf of visa applicants. All delegates or invitees should apply
              for a Business Visa only.
            </li>
            <li>
              Visa issues, including the inability to obtain a visa, do not fall
              under the consideration of the cancellation policy of the
              Confworld Educational Research and Development Association
              (CERADA).
            </li>
          </ul>
        </div>

        {/* Venue Information Section */}
        <div className="mb-16 bg-slate-100 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 border-b-2 pb-3 border-blue-200">
            Venue
          </h2>
          <p className="text-gray-700 leading-relaxed text-xl font-semibold">
            The conference will be held at{" "}
            <span className="text-indigo-600">Manila, Philippines</span>.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="bg-slate-100 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 border-b-2 pb-3 border-green-200">
            Conference Inquiries
          </h2>
          <p className="text-gray-800 text-lg mb-4">
            For conference registration and paper submission inquiries, please
            contact:
          </p>
          <p className="text-gray-900 text-xl font-bold mb-2">Ms. Malathy G</p>
          <p className="text-gray-700 text-lg mb-2">
            Mobile:{" "}
            <a
              href="tel:+916383055014"
              className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-200"
            >
              +91 6383055014
            </a>
          </p>
          <p className="text-gray-700 text-lg">
            E-mail:{" "}
            <a
              href="mailto:info@cerada.in"
              className="text-indigo-600 hover:text-indigo-800 underline transition-colors duration-200"
            >
              info@cerada.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsandConditions;
