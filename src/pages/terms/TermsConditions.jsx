import React from 'react';

const TermsConditions = () => {
    return (
        <div className=" min-h-screen flex items-center justify-center">
            <div className="border border-zinc-800 p-8 mx-auto max-w-2xl shadow-md rounded-sm">
                <h1 className="text-xl text-center font-semibold mb-4">Terms and Conditions</h1>

                <p className="mb-4 text-sm">
                    By using our OTT platform, you agree to the following terms and conditions.
                </p>

                <h2 className="text-lg font-semibold mb-2">User Conduct</h2>
                <p className="mb-4 text-sm">
                    You are solely responsible for your actions and content while using our platform. Do not engage in any illegal or abusive activities.
                </p>

                <h2 className="text-lg font-semibold mb-2">Content Usage</h2>
                <p className="mb-4 text-sm">
                    The content available on our platform is for personal use only. Any unauthorized distribution, copying, or sharing of content is prohibited.
                </p>

                <h2 className="text-lg font-semibold mb-2">Subscription and Billing</h2>
                <p className="mb-4 text-sm">
                    Subscription fees are non-refundable. You agree to pay the specified subscription fees according to the chosen plan.
                </p>

                <h2 className="text-lg font-semibold mb-2">Privacy</h2>
                <p className="mb-4 text-sm">
                    Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your data.
                </p>

                <h2 className="text-lg font-semibold mb-2">Disclaimer</h2>
                <p className="mb-4 text-sm">
                    Our platform provides content on an "as is" basis. We do not guarantee the accuracy, availability, or reliability of the content.
                </p>

                <h2 className="text-lg font-semibold mb-2">Changes to Terms</h2>
                <p className="mb-4 text-sm">
                    We may update these terms and conditions from time to time. Your continued use of the platform constitutes your acceptance of the updated terms.
                </p>

                <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                <p>If you have any questions about our terms and conditions, please contact us at support@example.com.</p>
            </div>
        </div>
    );
};

export default TermsConditions;
