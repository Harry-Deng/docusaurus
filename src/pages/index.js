import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, solid, classic, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import {} from '@fortawesome/free-solid-svg-icons';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            My Curriculum Vitae
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <section id="about" class="home-section wg-about-biography">
      <div class="home-section-bg"></div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div id="profile">
              <img class="avatar avatar-circle" width="270" height="270" src="/img/avatar.jpg" alt="Yimo Deng 邓一默" />
              <div class="portrait-title">
                <h2>Yimo Deng 邓一默</h2>
                <h3>Undergraduate Students</h3>
                <h3>
                  <a href="http://www.neu.edu.cn/" target="_blank" rel="noopener">
                    <span>Northeastern University</span>
                  </a>
                </h3>
              </div>
              <ul class="network-icon" aria-hidden="true">
                <li>
                  <a href="/#contact" aria-label="envelope">
                    <FontAwesomeIcon icon={icon({name: "envelope",style: "solid"})} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Harry-Deng" target="_blank" rel="noopener" aria-label="github">
                    <FontAwesomeIcon icon={brands("github")} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="/uploads/resume.pdf" aria-label="cv">
                    <FontAwesomeIcon icon={solid("file-alt")} size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <h1>Biography</h1>
            <div class="article-style">
              <p>I am Yimo Deng, an <strong>Information Security</strong> major studying at
              the Software College of Northeastern University, China. I have aspirations
              of becoming a scientific researcher in the future.</p>
              <p>My research interests include <strong>network security</strong> and
              <strong>wireless networks</strong>. Specifically, I am interested in exploring
              the fields of <strong>security and privacy</strong>, with a focus on developing
              secure systems and protect the privacy in mobile communications. Currently, my
              research delves into the applications of <strong>distributed machine learning
                </strong>in<strong> VANETs</strong>.</p>
            </div>
            <div class="row">
              <div class="col-md-5">
                <div class="section-subheading">Interests</div>
                <ul class="ul-interests fa-ul mb-0">

                {["Computer Networks",
                "Privacy and Security",
                "Vehicular Networks",
                "Machine Learning",
                ].map((li) => (
                    <li>
                      <FontAwesomeIcon icon={solid("book")} listItem />
                      {li}
                    </li>
                ))}

                </ul>
              </div>
              <div class="col-md-7">
                <div class="section-subheading">Education</div>
                <ul class="ul-edu fa-ul mb-0">
                  <li>
                    <FontAwesomeIcon icon={solid("graduation-cap")} listItem />
                    <div class="description">
                      <p class="course">BEng in Information Security, 2024</p>
                      <p class="institution">Northeastern University</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section id="section-features" class="home-section wg-features">

        <HomepageFeatures />
      </section>
    </Layout>
  );
}
