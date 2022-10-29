import "./app.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Links from "./components/links/Links";
import SocialSection from "./components/socialSection/SocialSection";

const App = () => {
  return (
    <div className="appWrapper">
      <div className="content">
        <div className="mainContent">
          <Header />
          <Links />
        </div>
      </div>
      <SocialSection />
      <Footer />
    </div>
  );
};

export default App;

/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
> */
