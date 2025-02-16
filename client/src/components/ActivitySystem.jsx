import React from 'react'

const ActivityCategory = ({ icon, title, items }) => (
  <div className="mb-6">
    <h2 className="flex items-center gap-2 text-lg font-bold mb-3">
      <span>{icon}</span>
      <span>{title}</span>
    </h2>
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
        >
          <p className="text-sm">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const ActivitySystem = () => {
  const trendingItems = [
    "#MentalHealthAwareness is trending with 800 posts.",
    "Most-liked post: 'Morning Yoga Routine' 🧘♀️ (2.3k likes).",
  ];

  const communityItems = [
    "Welcome @NatureLover! 🌿",
    "New event: Virtual Book Club starts Friday! 📖",
  ];

  const inspirationItems = [
    "Quote: 'The only way to do great work is to love what you do.' – Jobs",
    "Tutorial: @PhotoGuru’s 'Editing Basics' 📸",
  ];

  const collaborateItems = [
    "Help build the 'Community Playlist'! 🎵",
    "Poll: Favorite Travel Destination? ✈️",
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl">
      <ActivityCategory icon="🔥" title="Trending" items={trendingItems} />
      <ActivityCategory icon="🎉" title="Community" items={communityItems} />
      <ActivityCategory icon="💡" title="Inspiration" items={inspirationItems} />
      <ActivityCategory icon="🤝" title="Collaborate" items={collaborateItems} />
    </div>
  );
};


export default ActivitySystem