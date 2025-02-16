import React from 'react';

const TrendingPostItem = ({ rank, title, description, image }) => (
  <div className="flex items-center gap-4 p-2 hover:bg-gray-100 transition-colors">
    <div className="w-8 text-center font-bold text-blue-500">{rank}</div>
    <div className="flex-1">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    {image && (
      <img
        src={image}
        alt={title}
        className="w-12 h-12 object-cover rounded-md"
      />
    )}
  </div>
);

const TrendingPosts = () => {
  // Sample trending posts data; replace with your dynamic data as needed.
  const trendingPosts = [
    {
      title: "Breaking News: Tech Innovation",
      description: "Discover the latest breakthroughs in technology today.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Hot Topic: Market Trends",
      description: "An in-depth look at the current market trends shaping industries.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Must Read: Health & Wellness",
      description: "Tips and insights on how to improve your overall well-being.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Spotlight: Creative Design",
      description: "A showcase of the most inspiring design projects this month.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold mb-4">Trending Posts</h2>
      <div className="space-y-2">
        {trendingPosts.map((post, index) => (
          <TrendingPostItem
            key={index}
            rank={index + 1}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
