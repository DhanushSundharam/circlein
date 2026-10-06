import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Legal.css';

const Terms = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-wrapper pt-24">
      <main className="legal-container">
        <div className="sub-nav-links">
          <Link to="/support">Support</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms" className="active">Terms</Link>
        </div>
        <h1>
          <span style={{ fontFamily: "'Outfit', sans-serif" }}>
            <span style={{ color: '#8b5cf6', fontWeight: '500' }}>Circle</span>
            <span style={{ color: '#1a1a1a', fontWeight: '600' }}>Ind</span>
          </span>
          {' '}— Terms of Service
        </h1>


        <h2>1. Acceptance of Terms</h2>
        <p>By downloading, installing, or using the CircleInd mobile application ("<strong>App</strong>", "<strong>Service</strong>"), you agree to be bound by these Terms of Service ("<strong>Terms</strong>"). If you do not agree, you must stop using the App immediately.</p>
        <p>These Terms constitute a legally binding agreement between you and <strong>CircleInd</strong> ("<strong>CircleInd</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"), a company registered at <strong>Gobichettipalayam, Erode, Tamil Nadu, India</strong>.</p>

        <h2>2. Eligibility</h2>
        <p>You may use the App only if:</p>
        <ul>
          <li>You are at least <strong>[18] years of age</strong> (or the minimum legal age of majority in your jurisdiction, whichever is higher).</li>
          <li>You are a legal resident of India.</li>
          <li>You have the legal capacity to enter into a binding contract.</li>
          <li>You are not barred from receiving services under applicable Indian law.</li>
        </ul>
        <p>By using the App, you represent and warrant that all of the above are true.</p>

        <h2>3. Account Registration and Security</h2>
        <h3>3.1 OTP-Based Authentication</h3>
        <p>CircleInd uses <strong>Firebase Phone Authentication (OTP)</strong> as the sole login method for Customers, Drivers, and Car Wash Station operators. By providing your mobile phone number, you:</p>
        <ul>
          <li>Consent to receive a one-time password (OTP) SMS from Firebase / Google.</li>
          <li>Represent that the phone number belongs to you and that you are authorised to use it.</li>
        </ul>

        <h3>3.2 Roles</h3>
        <p>The App recognises four user roles: <strong>CUSTOMER</strong>, <strong>DRIVER</strong>, <strong>STATION</strong> (car-wash centre operator), and <strong>ADMIN</strong>. Your role determines the features and screens available to you.</p>

        <h3>3.3 Your Responsibilities</h3>
        <p>You are responsible for all activity that occurs under your account. Notify us immediately if you believe your account has been compromised.</p>

        <h2>4. The Services</h2>
        <p>CircleInd is a <strong>local on-demand service marketplace</strong> currently operating in and around <strong>Gobichettipalayam, Tamil Nadu, India</strong>, including Nambiyur, Sathyamangalam, Bhavani, Anthiyur, Perundurai, and Kolappalur.</p>
        
        <h3>4.1 Driver Hire</h3>
        <p>Customers may book a professional driver for Night Drop, Wedding Events, Outstation Travel, Local City Travel, Hourly Packages, and Full-Day Packages. A booking moves through the status lifecycle: <strong>PENDING → ACCEPTED → ON_THE_WAY → ARRIVED → IN_PROGRESS → COMPLETED</strong> (or <strong>CANCELLED</strong>).</p>

        <h3>4.2 Car Wash Booking</h3>
        <p>Customers may book a time slot at a participating car wash centre across vehicle types including bikes, cars, autos, heavy vehicles, lorries, tractors, and more.</p>

        <h3>4.3 CircleInd is a Marketplace</h3>
        <p>CircleInd <strong>connects</strong> Customers with independent Drivers and Car Wash Stations. <strong>We do not employ Drivers or operate Car Wash Stations.</strong> We are not a party to the service agreement between you and a Driver or Station, and we do not guarantee the quality, safety, legality, or timeliness of services.</p>

        <h2>5. Bookings and Cancellations</h2>
        <h3>5.1 Booking Confirmation</h3>
        <p>A booking is confirmed when a Driver or Station accepts your request. Pending bookings older than <strong>5 minutes</strong> are automatically suppressed from the driver queue.</p>

        <h3>5.2 Ride Start OTP</h3>
        <p>For Driver bookings, a 4-digit OTP is generated at booking creation. The driver must enter the correct OTP to start the ride, confirming the customer's presence.</p>

        <h3>5.3 Scheduled Ride Reminders</h3>
        <p>The platform sends automated push notifications at <strong>24 hours, 60 minutes, 30 minutes, 15 minutes, and 0 minutes</strong> before a scheduled ride.</p>

        <h3>5.4 Car Wash Slot Limits</h3>
        <p>Car Wash Stations may configure a maximum number of simultaneous bookings per time slot. Overbooking is prevented automatically.</p>

        <h3>5.5 Rescheduling</h3>
        <p>Car Wash Stations may propose a new time for an existing booking. Customers may ACCEPT, DECLINE, or cancel.</p>

        <h3>5.6 Cancellation Policy</h3>
        <p>Customers may cancel a booking before the service begins. Cancellation charges, if applicable, will depend on the stage at which the booking is cancelled. If a driver or service provider cancels the booking, the customer will generally receive a full refund or may be offered an alternative provider. Refunds will be processed according to the applicable payment provider's timelines. CircleInd reserves the right to determine cancellation charges in cases of repeated cancellations, no-shows, or misuse of the service.</p>

        <h2>6. Payments and Platform Fees</h2>
        <h3>6.1 Payment Methods</h3>
        <p>The App supports three payment methods: <strong>CASH</strong>, <strong>UPI</strong>, and <strong>CARD</strong>.</p>

        <h3>6.2 Fare Pricing</h3>
        <p>Fares are set by the operator and published within the App. Pricing may vary by trip category, sub-category, and distance (km range).</p>

        <h3>6.3 Platform Fee</h3>
        <p>A platform fee is embedded within the total fare. Upon completing a booking, the driver's pending-cash balance is incremented by the platform fee. If a driver's pending balance <strong>exceeds ₹2,000</strong>, the account is automatically <strong>suspended</strong> until the outstanding amount is deposited and verified by an Admin.</p>

        <h3>6.4 Invoices</h3>
        <p>Upon booking completion, a PDF invoice may be generated and shared.</p>

        <h3>6.5 No Payment Gateway</h3>
        <p>CircleInd does not collect payments on behalf of third parties through an in-app payment gateway. UPI payments are made directly to the service provider's UPI ID. <strong>We are not a payment aggregator and we do not hold or process funds in escrow.</strong> We accept no liability for failed UPI transactions.</p>

        <h2>7. Ratings and Reviews</h2>
        <p>After a completed booking, Customers may submit a star rating (1–5) and an optional text comment. By submitting a review, you grant CircleInd a <strong>non-exclusive, royalty-free, perpetual licence</strong> to display that content within the App and associated materials.</p>
        <p>You must not submit reviews that are false, defamatory, harassing, or submitted in exchange for payment. We reserve the right to remove any violating review.</p>

        <h2>8. Offers and Coupons</h2>
        <p>CircleInd may issue promotional offers with discount codes. Offers may have an expiry date, be restricted to specific user types, and are single-use per customer. Offers have no cash value, may be withdrawn without notice, and may not be combined unless stated.</p>

        <h2>9. Location Data</h2>
        <p>To provide routing, address suggestions, and live tracking, the App requests access to your device's GPS. By granting permission, you consent to:</p>
        <ul>
          <li>Your real-time coordinates being used for trip routing.</li>
          <li>Your location being shared with the other party in an active booking (e.g., driver's live location visible to customer).</li>
        </ul>
        <p>Route data is sourced from <strong>OSRM</strong> (a public routing API). The fallback default location is Gobichettipalayam (lat 11.4565, lng 77.3583). If you deny location permission, core booking features may be unavailable.</p>

        <h2>10. Push Notifications</h2>
        <p>By using the App, you consent to receiving push notifications via <strong>Firebase Cloud Messaging (FCM)</strong> for booking updates, driver alerts, ride reminders, and rescheduling proposals. Your FCM token is stored in Firestore and removed upon logout. You may disable notifications via your device settings, which may impair time-sensitive alerts.</p>

        <h2>11. Acceptable Use</h2>
        <p>You agree <strong>not</strong> to:</p>
        <ol>
          <li>Use the App for any unlawful purpose or in violation of applicable Indian law.</li>
          <li>Impersonate another person or entity.</li>
          <li>Submit false bookings or fraudulent payment claims.</li>
          <li>Circumvent OTP authentication or security rules.</li>
          <li>Reverse-engineer or decompile the App.</li>
          <li>Interfere with the App's infrastructure or other users' use of the App.</li>
          <li>Use automated scripts or bots to interact with the App.</li>
        </ol>
        <p>Violations may result in immediate account suspension or termination.</p>

        <h2>12. Third-Party Services</h2>
        <p>The following third-party services are integral to CircleInd, each governed by their own terms:</p>
        <table className="legal-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Firebase / Google</td>
              <td>Auth, database, storage, FCM, analytics, Cloud Functions</td>
            </tr>
            <tr>
              <td>Google Maps Platform</td>
              <td>Map rendering and routing</td>
            </tr>
            <tr>
              <td>OSRM</td>
              <td>Turn-by-turn route calculation</td>
            </tr>
            <tr>
              <td>Sentry</td>
              <td>Crash reporting and performance monitoring</td>
            </tr>
          </tbody>
        </table>
        <p>We are not responsible for the privacy practices or content of any third-party service.</p>

        <h2>13. Intellectual Property</h2>
        <p>All App content, including the CircleInd name, logo, design, source code, text, and graphics, is owned by or licensed to <strong>[LEGAL ENTITY NAME]</strong> and protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable licence to use the App for its intended personal, non-commercial purpose only.</p>

        <h2>14. Account Suspension and Termination</h2>
        <h3>14.1 By CircleInd</h3>
        <p>We may suspend or terminate your account if you violate these Terms, if your driver pending-cash exceeds ₹2,000 (auto-suspension), if your account is set to inactive by an Admin, or if your continued use poses a risk to other users.</p>
        <h3>14.2 By You</h3>
        <p>You may request account deletion by contacting us at <strong>circleindrive@gmail.com</strong>. Your data will be handled per our Privacy Policy.</p>

        <h2>15. Disclaimers of Warranty</h2>
        <p>THE APP AND ALL SERVICES ARE PROVIDED <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong>, WITHOUT WARRANTY OF ANY KIND. TO THE FULLEST EXTENT PERMITTED BY LAW, CIRCLEIND DISCLAIMS ALL WARRANTIES INCLUDING FITNESS FOR A PARTICULAR PURPOSE, SERVICE QUALITY OF THIRD-PARTY PROVIDERS, UNINTERRUPTED AVAILABILITY, AND ACCURACY OF ROUTING DATA.</p>

        <h2>16. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW, CIRCLEIND AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL. OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID IN PLATFORM FEES IN THE <strong>30 DAYS PRECEDING THE CLAIM</strong>, OR <strong>₹500</strong>, WHICHEVER IS GREATER.</p>

        <h2>17. Indemnification</h2>
        <p>You agree to indemnify and hold harmless <strong>CircleInd</strong> and its officers, directors, and employees from any claims, liabilities, damages, or expenses arising from your use of the App, violation of these Terms, or infringement of any third-party rights.</p>

        <h2>18. Changes to These Terms</h2>
        <p>We may modify these Terms at any time. We will notify you of material changes by updating the "Last Updated" date and, where feasible, by in-app notification. Continued use after the effective date constitutes acceptance.</p>

        <h2>19. Governing Law and Dispute Resolution</h2>
        <p>These Terms are governed by the laws of <strong>Tamil Nadu, India</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of <strong>Erode, Tamil Nadu, India</strong>.</p>

        <h2>20. Contact Information</h2>
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

export default Terms;
