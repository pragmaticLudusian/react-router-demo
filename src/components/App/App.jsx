import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import Review from "../Review/Review";
import AboutMe from "../AboutMe/AboutMe";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";
import MyStory from "../AboutMe/MyStory";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";
import PageNotFound from "../PageNoteFound/PageNotFound";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
