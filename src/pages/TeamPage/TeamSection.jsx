import React, { useState } from 'react';

const TeamSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'View all' },
    { id: 'graphic', name: 'Grafik Tasarımcı' },
    { id: 'video', name: 'Video Graper' },
    { id: 'host', name: 'Sunucu & Spiker' },
    { id: 'voice', name: 'Seslendirme' },
    { id: 'content', name: 'İçerik Üreticisi' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      role: 'Grafik Tasarımcı',
      category: 'graphic',
      imageUrl: require('./assets/Teamİmage/ali.png')
    },
    {
      id: 2,
      name: 'Mehmet Kaya',
      role: 'Video Graper',
      category: 'video',
      imageUrl: require('./assets/Teamİmage/ali.png')
    },
    {
      id: 3,
      name: 'Ayşe Demir',
      role: 'Sunucu & Spiker',
      category: 'host',
      imageUrl: require('./assets/Teamİmage/ali.png')
    },
    {
      id: 4,
      name: 'Zeynep Şahin',
      role: 'Seslendirme',
      category: 'voice',
      imageUrl: require('./assets/Teamİmage/ali.png')
    },
    {
      id: 5,
      name: 'Can Öztürk',
      role: 'İçerik Üreticisi',
      category: 'content',
      imageUrl: require('./assets/Teamİmage/ali.png')
    },
    {
      id: 6,
      name: 'Ali Yıldız',
      role: 'Grafik Tasarımcı',
      category: 'graphic',
      imageUrl: require('./assets/Teamİmage/ali.png')
    },
    {
      id: 7,
      name: 'Selin Kara',
      role: 'Video Graper',
      category: 'video',
      imageUrl: require('./assets/Teamİmage/ali.png')
    },
    {
      id: 8,
      name: 'Murat Demir',
      role: 'Sunucu & Spiker',
      category: 'host',
      imageUrl: require('./assets/Teamİmage/ali.png')
    }
  ];

  const filteredMembers = activeCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeCategory);

  return (
    <div className="team-container">
      <div className="category-nav">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="team-grid">
        {filteredMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="team-member-image"
            />
            <div className="team-member-info">
              <div className="team-member-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;