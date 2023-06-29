/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./banner-Story.css"

export default function BannerStory() {
  return (
    <div className="banner-container">
      <div className="title">
        <p>Unhappy with your website?</p>
        <h1>We create beautiful and fast web services</h1>
      </div>
      <div id="banner">
        <img src="/heroImage.jpg" alt="img" />
      </div>
      <div className="story">
        <h1>Story, emotion and purpose</h1>
        <p>
          We may help transform your ideas into real world applications that
          will outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>

        <div className="input-box">
          <p>Want us to contact you?</p>
          <input type="text" placeholder="Email" />
          <button type="submit">Join</button>
        </div>
      </div>
    </div>
  );
}
