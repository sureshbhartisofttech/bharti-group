import Footer from '@/app/component/common/Footer'
import Header from '@/app/component/common/Header'
import React from 'react'

function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div>

                <div className="container mx-auto py-8 px-28">
                    <h2 className="text-4xl text-center font-bold mb-8">Privacy Policy</h2>

                    <div className="text-gray-700 space-y-6 leading-relaxed">
                        <p>
                            Our website address is <span className="font-semibold"> www.bhartibusinessgroups.com</span>
                        </p>

                        <p>
                            This privacy policy sets out how <span className="font-semibold"> www.bhartibusinessgroups.com</span> uses and protects any information that you provide when you use this website. <span className="font-semibold">www.bhartibusinessgroups.com</span> is committed to ensuring that your privacy is protected.
                        </p>

                        <p>
                            <span className="font-semibold"> www.bhartibusinessgroups.com</span> may change this policy from time to time by updating this page. You should check this page occasionally to ensure that you are happy with any changes.
                        </p>

                        <h3 className="text-2xl font-bold mt-6">What We Collect</h3>
                        <p>
                            We may collect the following information:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Name and contact information including email address and phone number</li>
                            <li>Demographic information such as postcode, preferences, and interests</li>
                            <li>Other information relevant to customer surveys and/or offers</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-6">What We Do with the Information We Gather</h3>
                        <p>
                            We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
                        </p>
                        <ul className="list-decimal list-inside space-y-2">
                            <li>Internal record keeping</li>
                            <li>Improvement of our products and services</li>
                            <li>Periodic promotional emails about new products, special offers, or other information</li>
                            <li>Market research purposes, to customize the website according to your interests</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-6">Security</h3>
                        <p>
                            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
                        </p>

                        <h3 className="text-2xl font-bold mt-6">How We Use Cookies</h3>
                        <p>A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual, tailoring operations to your needs and preferences.</p>
                        <p>We use traffic log cookies to identify which pages are being used, helping us analyze data and improve our website to meet customer needs. We only use this information for statistical analysis purposes, after which the data is removed from the system.</p>
                        <p>You can choose to accept or decline cookies. Most browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.</p>

                        <h3 className="text-2xl font-bold mt-6">Links to Other Websites</h3>
                        <p>Our website may contain links to other websites of interest. However, once you leave our site, we cannot be responsible for the protection and privacy of any information you provide on those sites. You should exercise caution and review the privacy statement of any website in question.</p>

                        <h3 className="text-2xl font-bold mt-6">Controlling Your Personal Information</h3>
                        <p>You may restrict the collection or use of your personal information in the following ways:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Look for the option to opt-out of direct marketing on any form you fill out on the website.</li>
                            <li>If you previously agreed to us using your personal information for direct marketing, you may change your mind at any time by contacting us at <span className="font-semibold">support@bhartisharemarket.com</span>.</li>
                        </ul>
                        <p>We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law. We may use your information to send you promotional material about third parties if you indicate your interest in such information.</p>
                        <p>If you believe that any information we hold about you is incorrect or incomplete, please contact us. We will promptly correct any inaccuracies.</p>

                        <h3 className="text-2xl font-bold mt-6">What Personal Data We Collect and Why We Collect It</h3>
                        <p>When visitors leave comments on the website, we collect data shown in the comments form, as well as the visitor’s IP address and browser user agent string for spam detection. An anonymized string from your email address may be provided to a third-party service to see if you are using it.</p>

                        <h3 className="text-2xl font-bold mt-6">Analytics</h3>
                        <p>If you leave a comment, the comment and its metadata are retained indefinitely to recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>
                        <p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>

                        <h3 className="text-2xl font-bold mt-6">What rights you have over your data</h3>
                        <p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy