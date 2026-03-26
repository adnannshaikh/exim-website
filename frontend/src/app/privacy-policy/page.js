export const metadata = {
  title: "Privacy Policy | ZASH Organic Exports",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 bg-lightsection">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-semibold text-primary mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-primary/70 text-sm leading-relaxed">

          <p>
            ZASH Organic Exports values your privacy and is committed to protecting
            your personal and business information shared with us.
          </p>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Information We Collect
            </h2>
            <p>
              We may collect basic information such as your name, company details,
              email address, phone number, and trade inquiry details when you
              contact us or submit a form.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              How We Use Information
            </h2>
            <p>
              The information collected is used strictly for business communication,
              responding to inquiries, processing trade requests, and improving our
              services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Data Protection
            </h2>
            <p>
              We do not sell, rent, or share your information with third parties
              except where required for fulfilling trade operations or legal
              obligations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Communication
            </h2>
            <p>
              By contacting us, you agree to receive communication regarding your
              inquiry or business engagement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-primary mb-2">
              Updates
            </h2>
            <p>
              This policy may be updated periodically. Continued use of our services
              implies acceptance of the updated policy.
            </p>
          </div>

          <p className="text-primary/40 text-xs pt-6">
            Last updated: {new Date().getFullYear()}
          </p>

        </div>
      </div>
    </main>
  );
}