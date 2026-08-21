import React, { useState, useEffect } from 'react';
import { ChevronDown, Smile, CreditCard, ShieldCheck, Car, Briefcase, HelpCircle, FileText, Calendar, Shield, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';
import './Faq.css';
import { T } from '../utils/content';

// Mapping FAQs to categories and icons based on content.jsx order
const FAQ_MAPPING = [
  { category: 'General', icon: Smile },
  { category: 'Pricing', icon: CreditCard },
  { category: 'General', icon: Calendar },
  { category: 'Safety', icon: ShieldCheck },
  { category: 'Services', icon: Car },
  { category: 'Services', icon: CheckCircle2 },
  { category: 'Services', icon: FileText },
  { category: 'Pricing', icon: CreditCard },
  { category: 'Pricing', icon: HelpCircle },
  { category: 'General', icon: Briefcase },
  { category: 'Safety', icon: Shield },
];

const CATEGORIES = ['All', 'General', 'Pricing', 'Services', 'Safety'];

const Faq = () => {
  const [lang, setLang] = useState('en');
  const t = T[lang];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = t.faqs.map((faq, index) => ({
    ...faq,
    originalIndex: index,
    category: FAQ_MAPPING[index]?.category || 'General',
    Icon: FAQ_MAPPING[index]?.icon || HelpCircle
  })).filter(faq => activeTab === 'All' || faq.category === activeTab);

  return (
    <div className="faq-page-wrapper pt-24">
      <div className="faq-grid-bg"></div>
      
      <main style={{ flex: 1, padding: '80px 0 100px' }}>
        <div className="faq-header">
          <h1>{t.faqTitle}</h1>
          <p>
            {lang === 'en' 
              ? "These are the most commonly asked questions about CircleInd." 
              : "CircleInd பற்றிய பொதுவான கேள்விகள்."}
          </p>
        </div>

        <div className="faq-tabs">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              className={`faq-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => { setActiveTab(cat); setOpenFaq(null); }}
            >
              {cat === 'All' && lang === 'ta' ? 'அனைத்தும்' : 
               cat === 'General' && lang === 'ta' ? 'பொதுவானவை' :
               cat === 'Pricing' && lang === 'ta' ? 'கட்டணம்' :
               cat === 'Services' && lang === 'ta' ? 'சேவைகள்' :
               cat === 'Safety' && lang === 'ta' ? 'பாதுகாப்பு' : cat}
            </button>
          ))}
        </div>

        <div className="faq-list-container">
          {filteredFaqs.map((faq) => {
            const Icon = faq.Icon;
            const isOpen = openFaq === faq.originalIndex;
            return (
              <div 
                key={faq.originalIndex} 
                className={`faq-item-row ${isOpen ? 'open' : ''}`}
              >
                <div className="faq-icon-wrapper">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div className="faq-item-content">
                  <div 
                    className="faq-item-header"
                    onClick={() => toggleFaq(faq.originalIndex)}
                  >
                    <h3>{faq.q}</h3>
                    <ChevronDown size={20} className="faq-chevron" />
                  </div>
                  <div className="faq-item-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer lang={lang} setLang={setLang} />
    </div>
  );
};

export default Faq;
