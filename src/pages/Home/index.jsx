import AdCards from "../../components/Cards/AdCards";
import HomeCards from "../../components/Cards/HomeCards";
import Header from "../../components/Header";
import "./style.css";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="main-container">
        <div className="container-left">
          <HomeCards />
        </div>
        <div className="container-right">
          <AdCards />
        </div>
      </div>
    </>
  );
}

export default Home;
