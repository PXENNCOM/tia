import React, { useRef, useEffect } from 'react';
import '../still.css';

const Portfolio = () => {
  const scrollRef = useRef(null);

  const portfolioItems = [
    { id: 1, image: 'https://pbs.twimg.com/media/Gd4zOf6WgAsWgMs?format=jpg&name=small', title: 'Project 1', category: 'UI Design' },
    { id: 2, image: 'https://pbs.twimg.com/media/GdiyWK_XYAA_y49?format=jpg&name=small', title: 'Project 2', category: 'Branding' },
    { id: 3, image: 'https://pbs.twimg.com/media/GdepXjiXEAATeY8?format=jpg&name=small', title: 'Project 3', category: 'Web Design' },
    { id: 4, image: 'https://pbs.twimg.com/media/GdI3sl-W8AAKNYy?format=jpg&name=small', title: 'Project 4', category: 'UI/UX' },
    { id: 5, image: 'https://pbs.twimg.com/media/GcafYF4WMAApNxy?format=jpg&name=small', title: 'Project 5', category: 'Mobile App' },
    { id: 6, image: 'https://pbs.twimg.com/media/GcA0bvfXEAAIcr1?format=jpg&name=small', title: 'Project 6', category: 'Web App' },
  ];

  // Sonsuz scroll için items'ları çoğaltıyoruz
  const duplicatedItems = [...portfolioItems, ...portfolioItems];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;
    let isHovered = false;

    const scroll = () => {
      if (scrollContainer && !isHovered) {
        scrollContainer.scrollLeft += 1; // Scroll hızı

        // Scroll sonuna geldiğinde başa dön
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="portfolio-container">
      <div className="portfolio-scroll" ref={scrollRef}>
        {duplicatedItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="portfolio-item">
            <div className="portfolio-image-container">
              <img src={item.image} alt={item.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;