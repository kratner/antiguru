import "./styles/main.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GoogleTag from "./components/GoogleTag";
import GoogleAnalytics from "./components/GoogleAnalytics";

function App() {
  return (
    <div className="App">
      <GoogleTag trackingId="G-502EZJ5VN6" />
      <Header />
      <Main />
      <Footer />
      <GoogleAnalytics measurementId="G-502EZJ5VN6" />
    </div>
  );
}

export default App;
