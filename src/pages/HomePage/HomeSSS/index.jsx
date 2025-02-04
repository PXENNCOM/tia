import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import '../still.css';

const FAQComponent = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComponentVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };
  const faqData = [
    { question: 'Başvuru’ma hiçbir cevap gelmedi ?', answer: 'Cevap 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'Başvuru sonrasındaki süreç nedir ?', answer: 'Cevap 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'Kullanıcı Adımı ve şifremi yazıyorum , Ancak profilime giremiyorum', answer: 'Cevap 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'Şifremi unuttum , ne yapacağım ?', answer: 'Cevap 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { question: 'Ajansınıza üye olduktan sonraki süreç nedir ?', answer: 'Cevap 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Sık Sorulan Sorular</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${expandedIndex === index ? 'expanded' : ''} ${isComponentVisible ? 'show' : ''}`}
        >
          <div className="faq-question" onClick={() => toggleExpand(index)}>
            <h3>{item.question}</h3>
            <div className="faq-toggle">
              {expandedIndex === index ? <Minus size={24} /> : <Plus size={24} />}
            </div>
          </div>
          {expandedIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;