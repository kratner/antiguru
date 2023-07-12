import ACastAudio from "./ACastAudio";
import YouTubeVideo from "./YouTubeVideo";

const Main = () => {
  return (
    <main className="main">
        <h2>The Latest</h2>
        <ACastAudio audioSource="https://embed.acast.com/$/62a222737c02140013aa4c03/episode-1449-the-united-states-of-conspiracy-w-robert-guffey" />
        <YouTubeVideo videoId="cG8h_FpT5FM" />
    </main>
  );
};

export default Main;
