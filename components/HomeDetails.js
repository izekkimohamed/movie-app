import { useState } from "react";
import { HomeDetailsStyles } from "../styles/HomeDetailsStyles";

import CardsList from "./CardsList";

function HomeDetails({ movies, shows }) {
  const [activeTab, setActiveTab] = useState("movies");

  return (
    <HomeDetailsStyles active={activeTab}>
      <div className="btns">
        <button
          className={activeTab === "movies" ? "active" : ""}
          onClick={() => setActiveTab("movies")}>
          Movies
        </button>
        <button
          className={activeTab === "shows" ? "active" : ""}
          onClick={() => setActiveTab("shows")}>
          Shows
        </button>
      </div>
      {activeTab === "movies" && (
        <CardsList section="Popular" movies={movies} />
      )}
      {activeTab === "shows" && <CardsList section="Popular" movies={shows} />}
    </HomeDetailsStyles>
  );
}

export default HomeDetails;
