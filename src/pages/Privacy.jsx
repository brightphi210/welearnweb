import React from 'react'

import "../components/common/Privacy.css"
import { Navbar } from '../components/navabar/Navbar'
import { Footer } from '../components/home/Footer'

const Privacy = () => {
    return (
        <div>
            <Navbar />
            <div className="privacy-container">
                <div className="privacy-header">
                    <h1>Privacy Policy</h1>
                    <p>Last Updated Oct 11th, 2024</p>
                </div>

                <div className="section__margin">
                    <div className="privacy-body">
                        <div className='privacy-body-text'>
                            <p className='privacy-body-text-head'>This Privacy Policy will help you better understand how we collect, use and share, your personal information</p>

                            <div className='privacy-body-text-policy'>
                                <h3>Privacy Policy</h3>
                                <p>Welearn Global ("we", "our", or "us") operates the Welearn Global online tutoring app (the "Service"). This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our Service. Please read this document carefully. If you do not agree with the terms of this privacy policy, please do not use the Service.</p>
                            </div>

                            <div className='privacy-body-text-summary'>
                                <h3>Privacy Summary</h3>

                                <div className='privacy-body-text-summary-container'>
                                    <div className='policy-list' id='information-we-collect'>
                                        <h3>1. Information We Collect</h3>
                                        <p>We collect personal and non-personal information from you when you:</p>
                                        <ul>
                                            <li>Register or sign up for the Service</li>
                                            <li>Schedule tutoring sessions</li>
                                            <li>Communicate with tutors or customer support</li>
                                            <li>Make payments via the app</li>
                                        </ul>
                                        <p><span>Personal Information </span>may include, but is not limited to:</p>
                                        <ul>
                                            <li>Name</li>
                                            <li>Email address</li>
                                            <li>Phone number</li>
                                            <li>Address</li>
                                            <li>Payment information</li>
                                        </ul>
                                        <p><span>Non-personal information</span> includes data such as usage statistics, device details, and preferences.</p>
                                    </div>

                                    <div className='policy-list' id='how-we-use-your-information'>
                                        <h3>2. How We Use Your Information</h3>
                                        <p>We use the collected information to:</p>
                                        <ul>
                                            <li>Provide and improve the Service</li>
                                            <li>Facilitate scheduling and communication with tutors</li>
                                            <li>Process payments and send transaction notifications</li>
                                            <li>Send promotional material if you have opted-in</li>
                                            <li>Ensure compliance with applicable laws</li>
                                        </ul>
                                    </div>

                                    <div className='policy-list' id='sharing-your-information'>
                                        <h3>3. Sharing Your Information</h3>
                                        <p>We may share your information with:</p>
                                        <ul>
                                            <li>Third-party service providers (e.g., payment processors)</li>
                                            <li>Legal authorities if required by law</li>
                                            <li>Tutors for the purpose of providing tutoring sessions</li>
                                        </ul>
                                        <p>We do not sell your personal information to third parties.</p>
                                    </div>

                                    <div className='policy-list' id='data-security'>
                                        <h3>4. Data Security</h3>
                                        <p>We take data security seriously. All personal information is encrypted and securely stored. However, no system is completely secure. While we strive to protect your personal data, we cannot guarantee its absolute security.</p>
                                    </div>

                                    <div className='policy-list' id='your-rights'>
                                        <h3>5. Your Rights</h3>
                                        <p>You have the right to:</p>
                                        <ul>
                                            <li>Access and update your personal information</li>
                                            <li>Request deletion of your data</li>
                                            <li>Opt-out of marketing communications</li>
                                        </ul>
                                    </div>

                                    <div className='policy-list' id='changes-to-this-policy'>
                                        <h3>6. Changes to This Policy</h3>
                                        <p>We may update this Privacy Policy periodically. Any changes will be posted on this page, and your continued use of the Service following these changes constitutes your consent to the updated policy.</p>
                                    </div>

                                    <div className='policy-list' id='contact-us'>
                                        <h3>7. Contact Us</h3>
                                        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
                                        <h3>Welearn Global</h3>
                                        <p>No 7 Mercy Mall Trans-Woji Road port harcourt.</p>
                                        <p>Phone: 0813 - 113 - 3113</p>
                                        <p>Email: welearn562@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='privacy-body-table'>
                            <h3>Table of contents</h3>

                            <ol>
                                <li>
                                    <a href="/privacy#information-we-collect">Information we collect</a>
                                </li>
                                <li><a href="/privacy#how-we-use-your-information">How we use your Information</a></li>
                                <li><a href="/privacy#sharing-your-information">Sharing your Information</a></li>
                                <li><a href="/privacy#data-security">Data Security</a></li>
                                <li><a href="/privacy#your-rights">Your Rights</a></li>
                                <li><a href="/privacy#changes-to-this-policy">Change of this Policy</a></li>
                                <li><a href="/privacy#contact-us">Contact Us</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy