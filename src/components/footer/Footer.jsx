import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className=" flex flex-row justify-between ">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h2>Solutions</h2>
            <ul>
              <li>
                <a href="/about-us"> 8th-9th</a>
              </li>
              <li>
                <a href="/about-us">10th-12th</a>
              </li>
              <li>
                <a href="/about-us">College Graduates</a>
              </li>
              <li>
                <a href="/about-us">Working Professionals</a>
              </li>
              <li>
                <a href="/about-us">Parents</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h2 className="text-5xl font-bold">Partnerships</h2>
            <ul>
              <li>
                <a href="/about-us">Mentoria for Schools</a>
              </li>
              <li>
                <a href="/about-us">Mentoria for Corporates</a>
              </li>
              <li>
                <a href="/about-us">Mentoria for Counsellors</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h2>Knowledge Gateway</h2>
            <ul>
              <li>
                <a href="/about-us">Career Library</a>
              </li>
              <li>
                <a href="/about-us">Mentoria Blog</a>
              </li>
              <li>
                <a href="/about-us">Career Webinars</a>
              </li>
              <li>
                <a href="/about-us">Exam Calendars 2024</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="/about-us"> Who We Are Team Mentoria</a>
              </li>
              <li>
                <a href="/about-us"> Work With Us</a>
              </li>
              <li>
                <a href="/about-us">Refund and Cancellation</a>
              </li>
              <li>
                <a href="/about-us">Privacy Policy</a>
              </li>
              <li>
                <a href="/about-us">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <a href="tel:+14154495492" className="footer-email">
                  +91 8291856155
                </a>
              </li>
              <li>
                <a href="tel:+918591141509" className="footer-email">
                  info@mentoria.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rightsightresearch.com"
                  className="footer-email"
                >
                  info@mentoria.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
            <h2>Support</h2>
            <ul className="footer-support-list">
              <li>
                <a href="/order-process">Process</a>
              </li>
              <li>
                <a href="/blogs">Blog</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
