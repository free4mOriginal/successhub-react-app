import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <h1>The Beer Bank</h1>
        <h5>Find your favorite beer here</h5>
        <input type="textfield" placeholder="Search for beer name"></input>
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}
