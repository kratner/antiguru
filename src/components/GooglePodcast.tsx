import React from 'react';

interface GooglePodcastProps {
  episodeId: string;
}

const GooglePodcast: React.FC<GooglePodcastProps> = ({ episodeId }) => {
  return (
    <iframe
      title="Google Podcasts"
      src={`https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8=${episodeId}`}
      width="100%"
      height="200"
      frameBorder="0"
      allowFullScreen
    />
  );
};

export default GooglePodcast;
