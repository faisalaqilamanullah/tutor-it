import React from "react";
import styled from "styled-components";
import { BellIcon } from "@heroicons/react/outline";

function Navbar() {
  return (
    <div className="shadow-lg bg-white">
      <Wrapper className="flex justify-between">
        <div>
          <span className="text-gray-400">Welcome Back</span>
          <p className="text-3xl font-bold">Faisal Aqil</p>
        </div>
        <div className="indicator">
          <span class="indicator-item badge badge-primary">2</span>
          <BellIcon className="h-7 w-7 text-blue-500" />
        </div>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  padding-left: 2em;
  padding-top: 2em;
  padding-right: 2em;
  padding-bottom: 2em;
`;
export default Navbar;
