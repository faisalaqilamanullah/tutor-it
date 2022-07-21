import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <div class="card bg-white text-primary-content">
          <div class="card-body">
            <h5 class="card-title text-slate-900">Semangat Pagi!</h5>
            <p className=" text-slate-900">
              Hai, ini adalah pusat edukasi yang masih butuh saran dan kritik.
              Mohon dimaklumi dan semoga bermanfaat.
            </p>
          </div>
        </div>
        <Categories />
      </Wrapper>
      <Posts />
    </div>
  );
}

const Wrapper = styled.div`
  padding-right: 2em;
  padding-left: 2em;
  margin-top: 2em;
`;
export default App;
