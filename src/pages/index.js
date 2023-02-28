import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './index.module.css'

export default function Home() {
  const { siteConfig, i18n } = useDocusaurusContext();
  let localePathRoot = '';
  if (i18n.currentLocale != i18n.defaultLocale) localePathRoot = '/' + i18n.currentLocale;
  return (
    <Layout title={`Embedded IDE - A c/c++ development environment for microcontrollers`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="landing_page/css/fonts.css" />
        <link rel="stylesheet" href="landing_page/css/style.css" />
        <script src="landing_page/js/preset.js"></script>
      </Head>
      <main class="landing-page">
        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title mt-0">{siteConfig.title}</h1>
                <p class="hero-paragraph">{siteConfig.tagline}</p>
                <div class="hero-cta">
                  <a class="button button-primary" href={`${localePathRoot}/docs/intro`}>Getting Start</a>
                  <a class="button" href="https://marketplace.visualstudio.com/items?itemName=CL.eide">Install</a></div>
              </div>
              <div class="hero-figure anime-element">
                <svg class="placeholder" width="528" height="396" viewBox="0 0 528 396">
                  <rect width="528" height="396" style={{ fill: 'transparent' }} />
                </svg>
                <div class="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                <div class="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                <div class="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                <div class="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                <div class="hero-figure-box hero-figure-box-05"></div>
                <div class="hero-figure-box hero-figure-box-06"></div>
                <div class="hero-figure-box hero-figure-box-07"></div>
                <div class="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                <div class="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                <div class="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="features section">
          <div class="container">
            <div class="features-inner section-inner has-bottom-divider">
              <div class="features-wrap">
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src="landing_page/images/feature-icon-01.svg" alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">Better Coding Experience</h4>
                    <p class="text-sm mb-0">On VSCode, we can get a much better coding experience. This helps improve efficiency and reduces coding errors.</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src="landing_page/images/feature-icon-02.svg" alt="Feature 02" />
                    </div>
                    <h4 class="feature-title mt-24">Unify Development Environment</h4>
                    <p class="text-sm mb-0">This plug-in support many kinds of compiler, project type, flasher, utility tools. You don't have to switch between multiple development environments. It's enough that work with VsCode.</p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src="landing_page/images/feature-icon-03.svg" alt="Feature 03" />
                    </div>
                    <h4 class="feature-title mt-24">Supported Many Kinds Of MCU</h4>
                    <p class="text-sm mb-0">We support <strong>8</strong> kinds of compilers that can be used to compile <strong>mcs51/stm8/cortex-m[0/0+/3/23/33/35p/4/7]/riscv</strong> mcu projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
