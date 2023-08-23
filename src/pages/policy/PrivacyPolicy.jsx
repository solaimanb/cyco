import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="border border-zinc-800 p-8 mx-auto max-w-2xl shadow-md rounded-sm">
        <h1 className="text-xl text-center font-semibold mb-4">
          Privacy Policy
        </h1>

        <p className="mb-4 text-sm">
          Your privacy is important to us. It is our policy to respect your
          privacy regarding any information we may collect from you across our
          website.
        </p>

        <h2 className="text-lg font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4 text-sm">
          We may collect personal information that you voluntarily provide to us
          when you interact with our website.
        </p>

        <h2 className="text-lg font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4 text-sm">
          We may use the information we collect from you to provide, maintain,
          and improve our services.
        </p>

        <h2 className="text-lg font-semibold mb-2">Cookies</h2>
        <p className="mb-4 text-sm">
          We use cookies to improve your experience on our site.
        </p>

        <h2 className="text-lg font-semibold mb-2">Third-Party Services</h2>
        <p className="mb-4 text-sm">
          We may use third-party services to help us analyze how our site is
          used.
        </p>

        <h2 className="text-lg font-semibold mb-2">Security</h2>
        <p className="mb-4 text-sm">
          We take reasonable steps to protect your personal information.
        </p>

        <h2 className="text-lg font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-sm">
          We may update our privacy policy from time to time.
        </p>

        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about our privacy policy, please contact us
          at privacy@example.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
