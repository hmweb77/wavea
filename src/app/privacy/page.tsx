import NavBars from '@/components/NavBars';
import React from 'react';
import Layout from "@/components/Layout"
const page = () => {
    return (
     <Layout>
            <section className=" py-10 px-5">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl text-blue-500 font-bold mb-6">Privacy Policy</h2>
                    <div className="text-left space-y-4">
                        <p><strong className='text-blue-400'>Introduction</strong><br />
                            We value the privacy of our clients and are dedicated to protecting your personal data in compliance with the GDPR.</p>

                        <p><strong className='text-blue-400'>Data Collection</strong><br />
                            We collect personal information such as name, email, and contact details, solely for the purpose of providing our digital services, responding to inquiries, and sending occasional marketing updates.</p>

                        <p><strong className='text-blue-400'>User Rights</strong><br />
                            You have the right to access, rectify, or erase your personal data, as well as object to or restrict its processing at any time.</p>

                        <p><strong className='text-blue-400'>Data Use and Sharing</strong><br />
                            Your data is used exclusively for the purposes stated, with strict policies against sharing with third parties without your explicit consent.</p>

                        <p><strong className='text-blue-400'>Cookies and Tracking</strong><br />
                            Our website uses cookies for enhancing functionality and gathering analytics to improve our services, with clear options for you to manage your preferences.</p>

                        <p><strong className='text-blue-400'>Security Measures</strong><br />
                            We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure.</p>

                        <p><strong className='text-blue-400'>Policy Updates</strong><br />
                        This privacy policy may be updated periodically to reflect changes in our practices or regulatory requirements, with notifications provided through our website</p>

                        <p><strong className='text-blue-400'>Contact Information</strong><br />
                        For any privacy-related inquiries or to exercise your data rights, please contact us</p>
                    </div>
                </div>
            </section>
            </Layout>
    );
};

export default page;

