import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Legal.css';

const Privacy = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-wrapper pt-24">
      <main className="legal-container">
        <div className="sub-nav-links">
          <Link to="/support">Support</Link>
          <Link to="/privacy" className="active">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <h1>
          <span style={{ fontFamily: "'Outfit', sans-serif" }}>
            <span style={{ color: '#8b5cf6', fontWeight: '500' }}>Circle</span>
            <span style={{ color: '#1a1a1a', fontWeight: '600' }}>Ind</span>
          </span>
          {' '}— Privacy Policy
        </h1>


        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>CircleInd</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("<strong>App</strong>"). Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>We collect information that identifies you, which may include:</p>
        <ul>
          <li><strong>Phone Number</strong>: Used for account creation and login via Firebase Phone Authentication (OTP).</li>
          <li><strong>Profile Information</strong>: Name, role (CUSTOMER, DRIVER, STATION, or ADMIN), and profile picture (if provided).</li>
          <li><strong>Vehicle Information</strong>: For Drivers and Car Wash bookings, details such as vehicle make, model, and registration numbers.</li>
        </ul>

        <h3>2.2 Location Information</h3>
        <p>When you grant the App permission to access your location, we collect:</p>
        <ul>
          <li><strong>Precise GPS Location</strong>: To provide routing, address suggestions, live tracking, and location-based services (like matching customers with nearby drivers or car wash stations).</li>
          <li><strong>Live Tracking</strong>: During an active booking, your real-time location may be shared with the other party (e.g., driver's live location visible to the customer).</li>
        </ul>

        <h3>2.3 App Usage and Device Data</h3>
        <ul>
          <li><strong>Device Information</strong>: Model, operating system, and unique device identifiers (e.g., FCM token for push notifications).</li>
          <li><strong>Booking and Transaction Data</strong>: Service requested, time, date, fares, payment method (CASH, UPI, CARD), and booking status.</li>
          <li><strong>Ratings and Reviews</strong>: Feedback and comments submitted by users.</li>
          <li><strong>Crash and Performance Data</strong>: Handled via Sentry to improve app stability.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Facilitate bookings between Customers, Drivers, and Stations.</li>
          <li>Communicate with you via Firebase Cloud Messaging (FCM) for ride reminders, OTPs, and booking updates.</li>
          <li>Calculate routing and fares using Google Maps Platform and OSRM.</li>
          <li>Process driver platform fee tracking.</li>
          <li>Generate booking invoices.</li>
          <li>Maintain app security and prevent fraudulent activities.</li>
          <li>Analyse usage trends and improve user experience.</li>
        </ul>

        <h2>4. How We Share Your Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Other Users</strong>: To facilitate a booking, we share necessary details (e.g., name, phone number, vehicle details, live location) between the Customer and the assigned Driver or Station.</li>
          <li><strong>Third-Party Service Providers</strong>: We use external services that process your data on our behalf:
            <ul>
              <li><strong>Firebase / Google</strong>: For authentication, database (Firestore), storage, analytics, cloud functions, and push notifications.</li>
              <li><strong>Google Maps Platform</strong>: For map rendering and routing.</li>
              <li><strong>OSRM</strong>: For turn-by-turn route calculation.</li>
              <li><strong>Sentry</strong>: For crash reporting and performance monitoring.</li>
            </ul>
          </li>
          <li><strong>Legal Obligations</strong>: We may disclose your data if required by Indian law or in response to valid requests by public authorities.</li>
        </ul>

        <h2>5. Data Retention and Deletion</h2>
        <p>We retain your personal information as long as your account is active or as needed to provide you services.</p>
        <ul>
          <li><strong>Account Deletion</strong>: You may request the deletion of your account and associated data by contacting us at <strong>circleindrive@gmail.com</strong>.</li>
          <li><strong>Data Anonymisation</strong>: We may retain anonymised usage data and historical booking records for analytics and legal compliance.</li>
        </ul>

        <h2>6. Security of Your Information</h2>
        <p>We implement reasonable administrative, technical, and physical security measures (including OTP-based authentication) to protect your personal information. However, no electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

        <h2>7. Your Privacy Rights (DPDPA 2023)</h2>
        <p>In accordance with applicable laws, including the Digital Personal Data Protection Act, 2023 (DPDPA) of India, you may have the right to:</p>
        <ul>
          <li>Access your personal data.</li>
          <li>Correct inaccurate or incomplete data.</li>
          <li>Request the deletion of your personal data.</li>
          <li>Withdraw your consent at any time (which may impact your ability to use the App).</li>
        </ul>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date and, where feasible, by in-app notifications. Continued use of the App after updates constitutes your acceptance of the revised policy.</p>

        <h2>9. Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p>
          <strong>CircleInd</strong><br />
          Address: Gobichettipalayam, Erode, Tamil Nadu, India<br />
          Email: <a href="mailto:circleindrive@gmail.com">circleindrive@gmail.com</a><br />
          Phone: +91 88380 38494
        </p>

      </main>
      <Footer lang={lang} setLang={setLang} />
    </div>
  );
};

export default Privacy;
