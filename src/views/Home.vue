<template>
  <section id="main-content">
    <!-- Top scrolling text -->
    <header class="marquee-scroll">
      <div class="marquee-scroll__wrapper">
        <div class="marquee-scroll__item">
          <strong>LIFE PROGRESS REACHED 20</strong>
          <svg class="marquee-scroll__separator" height="19" width="19" viewBox="0 0 20 20">
            <polygon points="17.25,7 11.54,7 16.05,0.05 11.08,0.05 8.12,0.05 2.75,10.17 7.33,10.17 4.32,19.95 ">
            </polygon>
          </svg>
          <span>FEBRUARY</span>
        </div>
        <div class="marquee-scroll__item">
          <strong>LIFE PROGRESS REACHED 20</strong>
          <svg class="marquee-scroll__separator" height="19" width="19" viewBox="0 0 20 20">
            <polygon points="17.25,7 11.54,7 16.05,0.05 11.08,0.05 8.12,0.05 2.75,10.17 7.33,10.17 4.32,19.95 ">
            </polygon>
          </svg>
          <span>FEBRUARY</span>
        </div>
        <div class="marquee-scroll__item">
          <strong>LIFE PROGRESS REACHED 20</strong>
          <svg class="marquee-scroll__separator" height="19" width="19" viewBox="0 0 20 20">
            <polygon points="17.25,7 11.54,7 16.05,0.05 11.08,0.05 8.12,0.05 2.75,10.17 7.33,10.17 4.32,19.95 ">
            </polygon>
          </svg>
          <span>FEBRUARY</span>
        </div>
        <div class="marquee-scroll__item">
          <strong>LIFE PROGRESS REACHED 20</strong>
          <svg class="marquee-scroll__separator" height="19" width="19" viewBox="0 0 20 20">
            <polygon points="17.25,7 11.54,7 16.05,0.05 11.08,0.05 8.12,0.05 2.75,10.17 7.33,10.17 4.32,19.95 ">
            </polygon>
          </svg>
          <span>FEBRUARY</span>
        </div>
        <div class="marquee-scroll__item">
          <strong>LIFE PROGRESS REACHED 20</strong>
          <svg class="marquee-scroll__separator" height="19" width="19" viewBox="0 0 20 20">
            <polygon points="17.25,7 11.54,7 16.05,0.05 11.08,0.05 8.12,0.05 2.75,10.17 7.33,10.17 4.32,19.95 ">
            </polygon>
          </svg>
          <span>FEBRUARY</span>
        </div>
      </div>
    </header>
    <!-- navigation bar -->
    <header class="header scroll-header" id="header">
      <nav class="nav container">
        <a href="javascript:void(0)" class="nav__logo">M.</a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list grid">
            <li class="nav__item">
              <a href="javascript:void(0)" class="nav__link" @click="goAnchor('.marquee-scroll')">
                <i class="uil uil-estate nav__icon"></i>
                <p i18n="home">Home</p>
              </a>
            </li>
            <li class="nav__item">
              <a href="javascript:void(0)" class="nav__link" @click="goAnchor('.about-section')">
                <i class="uil uil-user nav__icon"></i>
                <p i18n="about">About</p>
              </a>
            </li>
            <li class="nav__item">
              <a href="javascript:void(0)" class="nav__link" @click="goAnchor('.skills-section')">
                <i class="uil uil-file-alt nav__icon"></i>
                <p i18n="skills">Skills</p>
              </a>
            </li>
            <li class="nav__item">
              <a href="javascript:void(0)" class="nav__link" @click="goAnchor('.protfolio-section')">
                <i class="uil uil-scenery nav__icon"></i>
                <p i18n="portfolio">Portfolio</p>
              </a>
            </li>
            <li class="nav__item">
              <a href="javascript:void(0)" class="nav__link" @click="goAnchor('.contact-section')">
                <i class="uil uil-message nav__icon"></i>
                <p i18n="contact">Contactme</p>
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav__close" id="nav-close"></i>
        </div>
      </nav>
    </header>
    <!-- bill -->
    <div class="content-header">
      <div class="inner">
        <div class="card-site-anime">
          <div class="card-site-anime__content">
            <div class="swiper">
              <div class="swiper-wrapper" style="transition-duration: 300ms;">
                <div class="swiper-slide"
                  :style="state.scrollIndex == 0 ? 'opacity: 1; animation: textAutoIn .6s ease-in 1;' : 'opacity: 0; animation: textAutoOut .6s ease-out 1;'">
                  <div class="card-site-anime__slide">
                    <div class="card-site-anime__label is-text-anime">
                      <span>Site name</span>
                    </div>
                    <div class="card-site-anime__text is-text-anime">
                      <span>Marcoo.top ^{{ state.Y }}</span>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide"
                  :style="state.scrollIndex == 1 ? 'opacity: 1; animation: textAutoIn .6s ease-in 1;' : 'opacity: 0; animation: textAutoOut .6s ease-out 1;'">
                  <div class="card-site-anime__slide">
                    <div class="card-site-anime__label is-text-anime">
                      <span>Current date</span>
                    </div>
                    <div class="card-site-anime__text is-text-anime">
                      <span class="card-site-anime__note">
                        {{ state.M }}.{{ state.D }}<sup>/{{ state.Y }}</sup>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide"
                  :style="state.scrollIndex == 2 ? 'opacity: 1; animation: textAutoIn .6s ease-in 1;' : 'opacity: 0; animation: textAutoOut .6s ease-out 1;'">
                  <div class="card-site-anime__slide">
                    <div class="card-site-anime__label is-text-anime">
                      <span>By</span>
                    </div>
                    <div class="card-site-anime__text is-text-anime">
                      <span>YX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="card-site-anime__bg" src="../assets/home/cartier-1.jpg" alt="">
        </div>
      </div>
    </div>
    <!-- home -->
    <div class="home_section" id="home">
      <div class="home__container">
        <div class="home__content">
          <div class="home__social">
            <a href="https://www.douyin.com/user/self" target="_blank" class="home__social-icon">
              <svg t="1677668883707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="41509" width="22" height="22">
                <path
                  d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1"
                  p-id="41510" fill="#222222"></path>
              </svg>
            </a>
            <a href="#" target="_blank" class="home__social-icon">
              <svg t="1677669137067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="45557" width="22" height="22">
                <path
                  d="M943.0016 579.072a1373.696 1373.696 0 0 0-30.8224-82.9952l-30.5152-72.4992 0.0512-8.6528C881.7664 166.7072 733.184 0 512 0S142.2336 166.7072 142.2336 414.8736l0.0512 8.6016-29.9008 71.0656a1355.776 1355.776 0 0 0-31.488 84.6336c-36.5568 111.9232-39.3216 193.3824-8.0896 242.0224 16.896 26.3168 43.3664 43.8272 73.216 48.7424a118.6816 118.6816 0 0 0 13.1072 92.0576c35.4304 56.9856 102.5536 61.2352 200.9088 61.2352 56.7808 0 117.1968-2.9184 151.9104-5.9392 34.7136 3.072 95.0784 5.9392 151.9104 5.9392 98.3552 0 165.4784-4.2496 200.8576-61.1328 15.9232-25.6 21.8112-59.4944 13.1584-92.16a107.776 107.776 0 0 0 73.216-48.7424c31.1808-48.64 28.4672-130.0992-8.0896-242.1248z m-81.7152 189.7984l-0.768 0.0512c-19.8656 0-73.9328-83.6608-73.9328-83.6608 0 49.664-26.88 121.344-84.992 168.1408 21.76 6.4 48.4352 16.1792 65.536 28.2624 15.4112 10.8032 13.4656 21.8112 10.7008 26.3168-5.9904 9.6256-56.9856 12.8-113.92 12.8-58.4192 0-123.136-3.328-151.9104-6.4-28.7744 3.1232-93.4912 6.4-151.9104 6.4-56.9344 0-107.8784-3.1744-113.92-12.8-2.7648-4.4544-4.7104-15.5136 10.7008-26.3168 17.1008-12.032 43.776-21.8624 65.536-28.2624-58.112-46.848-84.992-118.4768-84.992-168.192 0 0-54.1184 83.6608-73.9328 83.6608l-0.768-0.0512c-8.96-1.024-20.6848-47.0016 15.5648-158.0544 7.5776-23.296 17.9712-50.432 28.4672-76.544l38.3488-91.136c0-1.0752-0.512-19.0464-0.512-28.2624C244.6336 259.0208 321.9456 102.4 512 102.4c190.0544 0 267.3664 156.6208 267.3664 312.4736 0 9.2672-0.4608 27.1872-0.512 28.2624l38.4 91.136c10.496 26.112 20.8896 53.248 28.4672 76.544 36.2496 111.0528 24.5248 157.0304 15.5648 158.0544z"
                  fill="#222222" p-id="45558"></path>
              </svg>
            </a>
            <a href="https://github.com/LurzyQyQ" target="_blank" class="home__social-icon">
              <svg t="1677668939744" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="43069" width="22" height="22">
                <path
                  d="M0 556.416C0 602.816 4.352 644.8 13.024 682.336 21.696 719.904 33.728 752.544 49.088 780.224 64.416 807.936 83.968 832.32 107.648 853.344 131.36 874.368 157.056 891.552 184.768 904.928 212.48 918.272 244.096 929.12 279.648 937.472 315.2 945.824 351.52 951.648 388.576 955.008 425.632 958.336 466.336 960 510.752 960 555.488 960 596.384 958.336 633.44 955.008 670.496 951.648 706.88 945.824 742.592 937.472 778.304 929.12 810.112 918.272 837.984 904.928 865.856 891.552 891.712 874.368 915.584 853.344 939.456 832.32 959.168 807.936 974.688 780.224 990.208 752.544 1002.304 719.904 1010.976 682.336 1019.648 644.8 1024 602.816 1024 556.416 1024 473.632 996.288 402.016 940.896 341.6 943.872 333.568 946.624 324.48 949.152 314.304 951.648 304.128 953.984 289.6 956.16 270.752 958.336 251.872 957.504 230.112 953.664 205.408 949.824 180.704 942.72 155.488 932.352 129.792L924.864 128.288C919.52 127.296 910.752 127.52 898.56 129.024 886.368 130.528 872.192 133.536 856 138.048 839.808 142.56 818.944 151.232 793.408 164.096 767.872 176.928 740.928 193.056 712.544 212.416 663.808 199.04 596.864 192.384 511.744 192.384 426.944 192.384 360.192 199.04 311.456 212.416 283.072 193.056 255.968 176.928 230.08 164.096 204.224 151.232 183.616 142.56 168.256 138.048 152.896 133.536 138.528 130.624 125.184 129.28 111.84 127.936 103.392 127.52 99.904 128.032 96.384 128.544 93.632 129.12 91.648 129.792 81.28 155.488 74.176 180.672 70.368 205.408 66.528 230.112 65.696 251.872 67.84 270.752 70.016 289.6 72.352 304.128 74.848 314.304 77.376 324.48 80.128 333.568 83.136 341.6 27.712 402.016 0 473.632 0 556.416ZM125.696 682.08C125.696 634.016 147.552 589.952 191.296 549.888 204.288 537.888 219.488 528.8 236.832 522.592 254.208 516.448 273.824 512.928 295.68 512.096 317.536 511.264 338.496 511.424 358.528 512.608 378.56 513.76 403.264 515.36 432.64 517.344 462.016 519.36 487.392 520.352 508.736 520.352 530.112 520.352 555.488 519.36 584.864 517.344 614.24 515.36 638.944 513.76 658.976 512.608 679.008 511.424 699.936 511.264 721.792 512.096 743.68 512.928 763.296 516.448 780.64 522.592 798.016 528.768 813.184 537.888 826.208 549.888 869.952 589.28 891.808 633.344 891.808 682.08 891.808 710.816 888.224 736.256 881.024 758.464 873.856 780.672 864.672 799.264 853.504 814.304 842.304 829.312 826.784 842.08 806.944 852.608 787.072 863.104 767.712 871.2 748.832 876.896 729.984 882.56 705.792 886.976 676.224 890.144 646.688 893.312 620.32 895.232 597.12 895.904 573.92 896.576 544.448 896.928 508.736 896.928 473.024 896.928 443.552 896.576 420.352 895.904 397.152 895.232 370.784 893.312 341.248 890.144 311.712 886.976 287.52 882.56 268.64 876.896 249.792 871.2 230.432 863.104 210.56 852.608 190.688 842.08 175.168 829.312 164 814.304 152.8 799.264 143.616 780.672 136.448 758.464 129.28 736.256 125.696 710.816 125.696 682.08ZM640 672A2 3 2520 1 0 768 672 2 3 2520 1 0 640 672zM256 672A2 3 2520 1 0 384 672 2 3 2520 1 0 256 672z"
                  fill="#222222" p-id="43070" data-spm-anchor-id="a313x.7781069.0.i86" class="selected"></path>
              </svg>
            </a>
          </div>
          <div class="home__img" data-tilt data-tilt-max="7">
            <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                                                                                                                                                                                                                                                                                                                                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                                                                                                                                                                                                                                                                                                                                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                                                                                                                                                                                                                                                                                                                                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z">
                </path>
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                                                                                                                                                                                                                                                                                                                                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                                                                                                                                                                                                                                                                                                                                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                                                                                                                                                                                                                                                                                                                                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z">
                </path>
                <image class="home__blob-img" x="0" y="-30" xlink:href="../assets/home/cat.png"></image>
              </g>
            </svg>
          </div>
          <div class="home__data">
            <h1 class="home__title" i18n="home__title">
              Hi, I'm Marco
            </h1>
            <h3 class="home__subtitle" i18n="home__subtitle">
              Frontend developer
            </h3>
            <p class="home__description" i18n="home__description">
              Graduated from Guangdong Lingnan Vocational and Technical College, with over 1 year of work experience, able to complete the restoration of design drawings with high quality and efficiency
            </p>
            <a href="javascript:void(0)" @click="goAnchor('.contact-section')" class="button button-flex">
              <span i18n="home__contact">Contact Me</span>
              <svg t="1677670208195" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="50413" data-spm-anchor-id="a313x.7781069.0.i118" width="32" height="32">
                <path
                  d="M307.797333 560.341333l292.181334-180.053333a18.56 18.56 0 0 1 21.077333 1.152c27.733333 21.333333 52.565333 43.050667 69.12 61.269333 0 0 14.250667 14.592 20.394667 23.850667 9.984 12.629333 14.762667 29.141333 14.762666 45.184 0 18.005333-5.248 34.986667-15.701333 48.64-2.389333 2.432-11.434667 13.141333-19.968 21.888-49.877333 54.442667-180.010667 144.384-248.448 171.648-9.941333 4.394667-36.522667 13.568-50.346667 14.08-13.269333 0-26.112-2.901333-38.442666-9.258667a79.616 79.616 0 0 1-33.706667-38.4c-4.309333-11.178667-10.965333-44.714667-10.965333-45.696-4.266667-23.936-7.466667-57.6-9.088-96.853333a19.754667 19.754667 0 0 1 9.130666-17.493333z"
                  fill="#ffffff" p-id="50414" data-spm-anchor-id="a313x.7781069.0.i119" class="selected"></path>
                <path
                  d="M327.338667 463.36c-12.885333 7.978667-29.098667-2.218667-28.458667-17.493333 1.536-35.968 4.224-67.626667 7.466667-91.178667 0.512-0.512 7.125333-42.24 14.762666-56.405333A75.861333 75.861333 0 0 1 388.522667 256h2.346666c18.090667 0.469333 56.576 16.512 56.576 17.493333 19.370667 8.064 44.672 21.717333 71.893334 38.144a19.584 19.584 0 0 1 0.298666 33.194667L327.338667 463.36z"
                  fill="#ffffff" opacity=".4" p-id="50415" data-spm-anchor-id="a313x.7781069.0.i117" class="selected">
                </path>
              </svg>
            </a>
          </div>
        </div>
        <div class="home__scroll">
          <a href="javascript:void(0)" @click="goAnchor('.about-section')" class="home__scroll-button button--flex">
            <svg t="1677670978428" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="56470" width="32" height="32">
              <path
                d="M512 904.533333c-170.666667 0-307.2-136.533333-307.2-307.2v-204.8c0-109.226667 58.026667-211.626667 153.6-266.24 17.066667-10.24 37.546667-3.413333 47.786667 13.653334 10.24 17.066667 3.413333 37.546667-13.653334 47.786666C317.44 228.693333 273.066667 307.2 273.066667 392.533333v204.8c0 133.12 105.813333 238.933333 238.933333 238.933334s238.933333-105.813333 238.933333-238.933334v-238.933333c0-112.64-92.16-204.8-204.8-204.8v307.2c0 20.48-13.653333 34.133333-34.133333 34.133333s-34.133333-13.653333-34.133333-34.133333v-307.2c0-37.546667 30.72-68.266667 68.266666-68.266667 150.186667 0 273.066667 122.88 273.066667 273.066667v238.933333c0 167.253333-136.533333 307.2-307.2 307.2z"
                fill="#575757" p-id="56471" data-spm-anchor-id="a313x.7781069.0.i130" class="selected"></path>
            </svg>
            <span class="home__scroll-name" i18n="home__scroll-name">Scroll down</span>
            <svg t="1677671058666" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="62668" width="32" height="32">
              <path
                d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                fill="#575757" p-id="62669"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!-- about -->
    <div class="about-section" id="sotds">
      <div class="block js-showin is-showin">
        <div class="inner">
          <div class="c-heading text-center">
            <div class="c-heading__middle">
              <h3 class="heading-1 text-uppercase">About Me</h3>
            </div>
            <div class="c-heading__subline">My introduction</div>
          </div>
          <div class="about__container container grid">
            <img src="../assets/home/about.png" alt="" class="about__img">
            <div class="about__data">
              <p class="about__description" i18n="about__description">
                Web developers, with rich knowledge and experience, are engaged in Web technology and provide high-quality
                work.
              </p>

              <div class="about__info">
                <div>
                  <div class="about__info-title">01+</div>
                  <div class="about__info-name" i18n="about__info-name1">Years of <br>
                    experience</div>
                </div>

                <div>
                  <div class="about__info-title">05+</div>
                  <div class="about__info-name" i18n="about__info-name2">Completed <br>
                    projects</div>
                </div>

                <div>
                  <div class="about__info-title">02+</div>
                  <div class="about__info-name" i18n="about__info-name3">Companies <br>
                    worked</div>
                </div>
              </div>

              <div class="about__buttons">
                <a download="" href="/ax4tv-wwuez.pdf" class="button button--flex">
                  <span i18n="download">Download CV</span>
                  <svg t="1677683874685" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="6852" width="22" height="22">
                    <path
                      d="M502 662.3c3.1 3 7.1 4.4 11.1 4.4s8-1.5 11.1-4.4l211.2-201.6c2.6-2.5 4.1-5.5 4.7-8.6 1.8-9.2-5-19.2-15.8-19.2H595.5V165.8c0-8.8-7.1-16-16-16H446.6c-8.8 0-16 7.1-16 16V433H301.8c-10.9 0-17.6 10-15.8 19.2 0.6 3.1 2.1 6 4.7 8.6L502 662.3z"
                      fill="#868686" p-id="6853" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path>
                    <path
                      d="M859.6 653H626.7l-58.3 55.6c-15 14.3-34.6 22.2-55.3 22.2-20.7 0-40.4-7.9-55.3-22.2L399.5 653H166.6c-8.9 0-16.1 7.2-16.1 16v190.1c0 8.9 7.2 16.1 16.1 16.1h693c8.9 0 16-7.2 16-16.1v-190c0-8.9-7.2-16.1-16-16.1zM674.8 834.6c-19.5 0-35.2-15.8-35.2-35.2 0-19.5 15.8-35.2 35.2-35.2 19.5 0 35.2 15.8 35.2 35.2 0 19.4-15.8 35.2-35.2 35.2z m122.8 0c-19.5 0-35.2-15.8-35.2-35.2 0-19.5 15.8-35.2 35.2-35.2 19.5 0 35.2 15.8 35.2 35.2 0.1 19.4-15.7 35.2-35.2 35.2z"
                      fill="#ffffff" p-id="6854" data-spm-anchor-id="a313x.7781069.0.i11" class=""></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- skills -->
    <div class="skills-section" id="sotds">
      <div class="block js-showin is-showin">
        <div class="inner">
          <div class="c-heading text-center">
            <div class="c-heading__middle">
              <h3 class="heading-1 text-uppercase">Skills</h3>
            </div>
            <div class="c-heading__subline">My technical level</div>
          </div>
          <div class="skills__container container">
            <div>
              <!--==================== SKILLS 1 ====================-->
              <div class="skills__content skills__open">
                <div class="skills__header" @click="SKILLS1">
                  <svg t="1677733505981" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2830" width="32" height="32">
                    <path
                      d="M256 256a85.333333 85.333333 0 0 1 85.333333-85.333333 42.666667 42.666667 0 1 0 0-85.333334 170.666667 170.666667 0 0 0-170.666666 170.666667v128a85.333333 85.333333 0 0 1-85.333334 85.333333 42.666667 42.666667 0 1 0 0 85.333334 85.333333 85.333333 0 0 1 85.333334 85.333333v128a170.666667 170.666667 0 0 0 170.666666 170.666667 42.666667 42.666667 0 1 0 0-85.333334 85.333333 85.333333 0 0 1-85.333333-85.333333v-128a170.666667 170.666667 0 0 0-58.88-128A170.666667 170.666667 0 0 0 256 384V256z m682.666667 213.333333a85.333333 85.333333 0 0 1-85.333334-85.333333V256a170.666667 170.666667 0 0 0-170.666666-170.666667 42.666667 42.666667 0 0 0 0 85.333334 85.333333 85.333333 0 0 1 85.333333 85.333333v128a170.666667 170.666667 0 0 0 58.88 128A170.666667 170.666667 0 0 0 768 640v128a85.333333 85.333333 0 0 1-85.333333 85.333333 42.666667 42.666667 0 0 0 0 85.333334 170.666667 170.666667 0 0 0 170.666666-170.666667v-128a85.333333 85.333333 0 0 1 85.333334-85.333333 42.666667 42.666667 0 1 0 0-85.333334z"
                      p-id="2831" fill="#868686"></path>
                  </svg>
                  <div class="skills-title">
                    <h1 class="skills__title" i18n="home__subtitle">
                      Frontend developer
                    </h1>
                    <span class="skills__subtitle" i18n="skills__years">More than {{ state.yearsCount }} years</span>
                  </div>
                  <svg :style="state.skills1 == true ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);'"
                    t="1677733759831" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="13833" width="22" height="22">
                    <path
                      d="M84.48 375.104C71.456 362.528 64.096 345.248 64 327.168 65.696 286.368 100 254.592 140.8 256.032 161.92 255.936 182.176 264.288 197.12 279.2L512 591.904 826.88 279.2C841.824 264.288 862.08 255.936 883.2 256.032 924 254.592 958.304 286.368 960 327.168 959.904 345.248 952.544 362.528 939.52 375.104L568.32 744.96C537.056 775.68 486.944 775.68 455.68 744.96L84.48 375.104Z"
                      p-id="13834" fill="#868686"></path>
                  </svg>
                </div>

                <div class="skills__list" v-show="state.skills1">
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">HTML</h3>
                      <span class="skills__number">80%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__html"></div>
                    </div>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">CSS</h3>
                      <span class="skills__number">80%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__css"></div>
                    </div>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">JavaScript</h3>
                      <span class="skills__number">70%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__js"></div>
                    </div>
                  </div>
                </div>
              </div>
              <!--==================== SKILLS 2 ====================-->
              <div class="skills__content skills__close">
                <div class="skills__header" @click="SKILLS2">
                  <svg t="1677740439288" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="18347" width="32" height="32">
                    <path
                      d="M508.39 884.5h-1.18c-5.39 0-10.44-1.72-14.58-4.69L153.52 726.19c-12.58-5.7-18.15-20.51-12.46-33.09 5.7-12.58 20.51-18.16 33.09-12.46L507.8 831.78l333.65-151.14c12.58-5.7 27.39-0.12 33.09 12.46s0.12 27.39-12.46 33.09L522.97 879.8a24.94 24.94 0 0 1-14.58 4.7z"
                      fill="#868686" p-id="18348"></path>
                    <path
                      d="M521.53 756.48h-1.18c-5.39 0-10.44-1.72-14.58-4.69L166.66 598.18c-12.58-5.7-18.15-20.51-12.46-33.09s20.51-18.16 33.09-12.46l333.65 151.14 333.65-151.14c12.58-5.7 27.39-0.12 33.09 12.46 5.7 12.58 0.12 27.39-12.46 33.09L536.11 751.79a24.955 24.955 0 0 1-14.58 4.69z"
                      fill="#868686" p-id="18349"></path>
                    <path
                      d="M517.15 628.47h-1.18c-5.39 0-10.44-1.72-14.58-4.69L162.28 470.17c-12.58-5.7-18.15-20.51-12.46-33.09 5.7-12.58 20.51-18.15 33.09-12.46l333.65 151.14 333.65-151.14c12.58-5.7 27.39-0.12 33.09 12.46s0.12 27.39-12.46 33.09L531.73 623.78a24.955 24.955 0 0 1-14.58 4.69z"
                      fill="#868686" p-id="18350"></path>
                    <path
                      d="M530.28 497.5h-1.18c-5.39 0-10.44-1.72-14.58-4.69L180.46 341.48c-2.95-0.63-5.8-1.81-8.4-3.5a25.016 25.016 0 0 1-11.34-20.94v-0.62c0-8.49 4.31-16.41 11.45-21.01 2.65-1.71 5.56-2.88 8.56-3.49L514.8 144.99a24.96 24.96 0 0 1 14.31-4.5h1.18c5.27 0 10.22 1.65 14.31 4.5l334.06 146.93c3 0.61 5.91 1.78 8.56 3.49a24.996 24.996 0 0 1 11.45 21.01v0.62c0 8.45-4.26 16.32-11.34 20.94-2.6 1.7-5.45 2.87-8.39 3.5L544.86 492.81a24.932 24.932 0 0 1-14.58 4.69zM247.75 317.07L529.7 444.79l281.94-127.72L529.7 193.06 247.75 317.07z"
                      fill="#868686" p-id="18351"></path>
                  </svg>
                  <div class="skills-title">
                    <h1 class="skills__title" i18n="home__subtitle">
                      Other developer
                    </h1>
                    <span class="skills__subtitle" i18n="skills__years">More than {{ state.yearsCount }} years</span>
                  </div>
                  <svg :style="state.skills2 == true ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);'"
                    t="1677733759831" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="13833" width="22" height="22">
                    <path
                      d="M84.48 375.104C71.456 362.528 64.096 345.248 64 327.168 65.696 286.368 100 254.592 140.8 256.032 161.92 255.936 182.176 264.288 197.12 279.2L512 591.904 826.88 279.2C841.824 264.288 862.08 255.936 883.2 256.032 924 254.592 958.304 286.368 960 327.168 959.904 345.248 952.544 362.528 939.52 375.104L568.32 744.96C537.056 775.68 486.944 775.68 455.68 744.96L84.48 375.104Z"
                      p-id="13834" fill="#868686"></path>
                  </svg>
                </div>
                <div class="skills__list" v-show="state.skills2">
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Babylonjs</h3>
                      <span class="skills__number">50%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__html"></div>
                    </div>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Nodejs</h3>
                      <span class="skills__number">50%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__css"></div>
                    </div>
                  </div>

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Arjs</h3>
                      <span class="skills__number">50%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__js"></div>
                    </div>
                  </div>

                </div>
              </div>
              <!--==================== SKILLS 3 ====================-->
              <div class="skills__content skills__close">
                <div class="skills__header" @click="SKILLS3">
                  <svg t="1677740495544" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="18901" width="32" height="32">
                    <path
                      d="M575 400.69H466.87c-40.33 0-73.14-32.8-73.14-73.14V219.42c0-40.34 32.81-73.14 73.14-73.14H575c40.33 0 73.14 32.8 73.14 73.14v108.13c0 40.33-32.81 73.14-73.14 73.14zM466.87 219.42v108.13h108.17L575 219.42H466.87zM831.79 914.28H723.67c-40.33 0-73.14-32.8-73.14-73.14V733.01c0-40.34 32.81-73.14 73.14-73.14h108.12c40.33 0 73.14 32.8 73.14 73.14v108.12c0.01 40.34-32.81 73.15-73.14 73.15zM723.67 733.01v108.12h108.17l-0.04-108.12H723.67zM318.2 914.28H210.08c-40.33 0-73.14-32.8-73.14-73.14V733.01c0-40.34 32.81-73.14 73.14-73.14H318.2c40.33 0 73.14 32.8 73.14 73.14v108.12c0.01 40.34-32.81 73.15-73.14 73.15zM210.08 733.01v108.12h108.17l-0.04-108.12H210.08z"
                      fill="#868686" p-id="18902"></path>
                    <path
                      d="M777.73 733.01c-20.2 0-36.57-16.38-36.57-36.57v-159.8H300.71v159.8c0 20.2-16.38 36.57-36.57 36.57-20.2 0-36.57-16.38-36.57-36.57V500.06c0-20.2 16.38-36.57 36.57-36.57h513.59c20.2 0 36.57 16.38 36.57 36.57v196.38c0 20.19-16.37 36.57-36.57 36.57z"
                      fill="#868686" p-id="18903"></path>
                    <path
                      d="M520.94 535.04c-20.2 0-36.57-16.38-36.57-36.57V364.11c0-20.2 16.38-36.57 36.57-36.57 20.2 0 36.57 16.38 36.57 36.57v134.36c0 20.2-16.38 36.57-36.57 36.57z"
                      fill="#868686" p-id="18904"></path>
                  </svg>
                  <div class="skills-title">
                    <h1 class="skills__title" i18n="home__subtitle">
                      Component development
                    </h1>
                    <span class="skills__subtitle" i18n="skills__years">More than {{ state.yearsCount }} years</span>
                  </div>
                  <svg :style="state.skills3 == true ? 'transform: rotate(180deg);' : 'transform: rotate(0deg);'"
                    t="1677733759831" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="13833" width="22" height="22">
                    <path
                      d="M84.48 375.104C71.456 362.528 64.096 345.248 64 327.168 65.696 286.368 100 254.592 140.8 256.032 161.92 255.936 182.176 264.288 197.12 279.2L512 591.904 826.88 279.2C841.824 264.288 862.08 255.936 883.2 256.032 924 254.592 958.304 286.368 960 327.168 959.904 345.248 952.544 362.528 939.52 375.104L568.32 744.96C537.056 775.68 486.944 775.68 455.68 744.96L84.48 375.104Z"
                      p-id="13834" fill="#868686"></path>
                  </svg>
                </div>
                <div class="skills__list" v-show="state.skills3">

                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">VUE</h3>
                      <span class="skills__number">80%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__vue"></div>
                    </div>
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Element-Ui</h3>
                      <span class="skills__number">70%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__vue"></div>
                    </div>
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">Vant</h3>
                      <span class="skills__number">60%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__vue"></div>
                    </div>
                  </div>
                  <div class="skills__data">
                    <div class="skills__titles">
                      <h3 class="skills__name">ECharts</h3>
                      <span class="skills__number">60%</span>
                    </div>
                    <div class="skills__bar">
                      <div class="skills__percentage skills__vue"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Protfolio -->
    <div class="protfolio-section" id="sotds">
      <div class="block js-showin is-showin">
        <div class="inner">
          <div class="c-heading text-center">
            <div class="c-heading__middle">
              <h3 class="heading-1 text-uppercase">Protfolio</h3>
            </div>
            <div class="c-heading__subline">My works</div>
          </div>
          <div class="project-section">
            <div class="proj-item">
              <div class="proj-site-last">
                <a href="http://43.136.118.101:5678/app/dist/index.html#/" class="item-link"></a>
                <figure class="card-site-last__figure">
                  <img src="../assets/home/portfolio1.jpg" class="card-site-last__media">
                </figure>
                <div class="card-site-last__info">
                  <div class="card-site-last__top">
                    <div>Create 6, 2022</div>
                  </div>
                  <div class="card-site-last__bottom">
                    <h3 class="card-site-last__title">MBT V8 Virtual Exhibition</h3>
                    <div class="card-site-last__by">
                      <small>by</small>
                      <div class="users-credits ">
                        <ul class="users-credits__details">
                          <li>
                            <div class="users-credits__item">
                              <figure class="circle-avatar ">
                                <a href="javascript(0);">
                                  <img class="circle-avatar__img" src="../assets/home/favicon-32x32.png" width="32"
                                    height="32" alt="">
                                </a>
                              </figure>
                              <div class="users-credits__name">
                                <a href="/SpringSummer/" class="link-underlined ">Marco</a>
                                <sup>PRO</sup>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="proj-item">
              <div class="proj-site-last">
                <a href="http://43.136.118.101:5678/app/example/pattern/MarkerBased/index.html" class="item-link"></a>
                <figure class="card-site-last__figure">
                  <img src="../assets/home/portfolio2.jpg" class="card-site-last__media">
                </figure>
                <div class="card-site-last__info">
                  <div class="card-site-last__top">
                    <div>Create 7, 2022</div>
                  </div>
                  <div class="card-site-last__bottom">
                    <h3 class="card-site-last__title">MarkerBased</h3>
                    <div class="card-site-last__by">
                      <small>by</small>
                      <div class="users-credits ">
                        <ul class="users-credits__details">
                          <li>
                            <div class="users-credits__item">
                              <figure class="circle-avatar ">
                                <a href="javascript(0);">
                                  <img class="circle-avatar__img" src="../assets/home/favicon-32x32.png" width="32"
                                    height="32" alt="">
                                </a>
                              </figure>
                              <div class="users-credits__name">
                                <a href="/SpringSummer/" class="link-underlined ">Marco</a>
                                <sup>PRO</sup>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="proj-item">
              <div class="proj-site-last">
                <a href="http://43.136.118.101:5678" class="item-link"></a>
                <figure class="card-site-last__figure">
                  <img src="../assets/home/portfolio3.jpg" class="card-site-last__media">
                </figure>
                <div class="card-site-last__info">
                  <div class="card-site-last__top">
                    <div>Create 7, 2022</div>
                  </div>
                  <div class="card-site-last__bottom">
                    <h3 class="card-site-last__title">Marcoo.top</h3>
                    <div class="card-site-last__by">
                      <small>by</small>
                      <div class="users-credits ">
                        <ul class="users-credits__details">
                          <li>
                            <div class="users-credits__item">
                              <figure class="circle-avatar ">
                                <a href="javascript(0);">
                                  <img class="circle-avatar__img" src="../assets/home/favicon-32x32.png" width="32"
                                    height="32" alt="">
                                </a>
                              </figure>
                              <div class="users-credits__name">
                                <a href="/SpringSummer/" class="link-underlined ">Marco</a>
                                <sup>PRO</sup>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- contact  -->
    <div class="contact-section" id="sotds">
      <div class="block js-showin is-showin">
        <div class="inner">
          <div class="c-heading text-center">
            <div class="c-heading__middle">
              <h3 class="heading-1 text-uppercase">Contact me</h3>
            </div>
            <div class="c-heading__subline">Get in touch</div>
          </div>
          <div class="contact__container container ">
            <div class="contact__info">
              <div class="contact__information">
                <svg t="1677743540270" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="22834" width="32" height="32">
                  <path
                    d="M691.8 936.446667c-32.333333 0-67.22-5.46-104.146667-16.32C487.42 890.666667 382 824.226667 290.9 733.1S133.333333 536.586667 103.873333 436.346667c-14.666667-49.94-19.493333-96.153333-14.28-137.333334 5.62-44.426667 22.593333-81.08 50.46-108.946666l37.713334-37.713334a53.393333 53.393333 0 0 1 75.42 0l165.94 165.933334a53.4 53.4 0 0 1 0 75.426666L381.46 431.333333l-0.046667 0.046667c-21.333333 21.333333-0.1 90.413333 60.34 150.846667s129.486667 81.72 150.846667 60.36l37.713333-37.713334a53.4 53.4 0 0 1 75.426667 0l165.933333 165.94a53.393333 53.393333 0 0 1 0 75.42l-37.713333 37.713334c-27.866667 27.866667-64.52 44.84-108.946667 50.46a264.333333 264.333333 0 0 1-33.213333 2.04zM170.22 220.206667c-42.573333 42.58-51.6 115.066667-25.413333 204.1 27.5 93.506667 90.1 192.453333 176.266666 278.62s185.113333 148.766667 278.62 176.266666c89.04 26.186667 161.52 17.16 204.1-25.413333l37.706667-37.713333a10.666667 10.666667 0 0 0 0-15.086667l-165.933333-165.933333a10.666667 10.666667 0 0 0-15.086667 0l-37.706667 37.713333c-13.64 13.64-32.353333 20.573333-54.586666 20.573333-13.84 0-29.046667-2.666667-45.26-8.08-37.273333-12.426667-76.813333-38.286667-111.333334-72.813333s-60.386667-74.073333-72.813333-111.333333C324.666667 458.82 329.113333 423.333333 351.24 401.226667l37.713333-37.706667a10.666667 10.666667 0 0 0 0-15.086667l-165.933333-165.933333a10.666667 10.666667 0 0 0-15.086667 0z"
                    fill="#868686" p-id="22835"></path>
                </svg>
                <div>
                  <h3 class="contact__title" i18n="tel">Call me</h3>
                  <span class="contact__subtitle" i18n="tel__number">13145737606</span>
                </div>
              </div>

              <div class="contact__information">
                <svg t="1677743490199" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="20843" width="32" height="32">
                  <path
                    d="M887.044 267.194H135.36c-39.56 0-71.631 32.07-71.631 71.632v463.536c0 39.561 32.07 71.632 71.631 71.632h751.685c39.561 0 71.632-32.07 71.632-71.632V338.826c0-39.562-32.07-71.632-71.632-71.632z m12.733 100.255v406.715c0 0.039-0.003 0.077-0.003 0.116L683.68 580.338l216.097-212.89zM383.103 620.616c70.996 50.776 191.38 54.63 258.105 0.748L857.07 815.095H166.406l216.697-194.48z m471.412-294.523l-218.34 215.055c-77.786 80.175-179.434 75.4-252.906-1.627L171.962 326.093h682.553z m-731.889 40.932c0-2.023 0.153-4.01 0.436-5.953l216.892 219.127-217.3 195.023c-0.01-0.353-0.027-0.704-0.027-1.058V367.025z"
                    p-id="20844" fill="#868686"></path>
                </svg>

                <div>
                  <h3 class="contact__title" i18n="email">E-mail</h3>
                  <span class="contatc__subtitle" i18n="email__address">183660157@qq.com</span>
                </div>
              </div>

              <div class="contact__information">
                <svg t="1677743583240" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="24799" width="32" height="32">
                  <path
                    d="M502.4 905.6l-12-6.6c-3.2-1.8-79.8-44.5-157.2-115.8-45.9-42.3-82.6-86-108.9-129.9-33.8-56.3-50.7-113-50.3-168.7 0.6-87.8 35-170.2 96.7-232.1 61.9-62.1 144.2-96.2 231.9-96.2 87.6 0 169.8 34.2 231.7 96.3 61.5 61.8 95.9 144.2 96.9 232 0.6 56.3-16.2 113.5-49.9 169.9-26.3 44-63 87.7-109 129.9-77.6 71-154.4 113-157.6 114.8l-12.3 6.4z m0.1-699.3C350 206.3 225.1 331.3 224 485c-1.3 182 223.7 329.8 278.6 363.2 24.1-14.4 80.7-50.3 136.4-101.4 65.4-60.1 143.1-154.2 142-261.7-1.6-153.8-126.6-278.8-278.5-278.8z"
                    fill="#868686" p-id="24800"></path>
                  <path
                    d="M508.7 651.1L414 556.4c-25.3-25.3-39.2-58.9-39.2-94.7s13.9-69.4 39.2-94.7c52.2-52.2 137.2-52.2 189.4 0 52.2 52.2 52.2 137.2 0 189.4l-94.7 94.7z m0-273.3c-21.5 0-43 8.2-59.3 24.5-32.7 32.7-32.7 86 0 118.7l59.3 59.3L568 521c32.7-32.7 32.7-86 0-118.7-16.4-16.3-37.8-24.5-59.3-24.5z"
                    fill="#868686" p-id="24801"></path>
                  <path d="M490.986 633.383l35.355-35.355 148.35 148.35-35.355 35.355z" fill="#868686" p-id="24802">
                  </path>
                </svg>

                <div>
                  <h3 class="contact__title" i18n="location">Location</h3>
                  <span class="contatc__subtitle" i18n="location__detail">GuangDong , CHN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer  -->
    <footer class="footer">
      <div class="footer__bg">
        <div class="footer__container container grid">
          <div>
            <h1 class="footer__title">Marco</h1>
            <span class="footer__subtitle" i18n="home__subtitle">Frontend developer</span>
          </div>

          <ul class="footer__links">
            <li>
              <a href="javascript:void(0)" @click="goAnchor('.about-section')" class="footer__link">About</a>
            </li>
            <li>
              <a href="javascript:void(0)" @click="goAnchor('.skills-section')" class="footer__link">Skills</a>
            </li>
            <li>
              <a href="javascript:void(0)" @click="goAnchor('.protfolio-section')" class="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="javascript:void(0)" @click="goAnchor('.contact-section')" class="footer__link">Contact</a>
            </li>
          </ul>

          <div class="footer__socials">
            <a href="https://www.douyin.com/user/self" target="_blank">
              <svg t="1677744746174" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="25209" width="22" height="22">
                <path
                  d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1"
                  p-id="25210" fill="#ffffff"></path>
              </svg>
            </a>
            <a href="#" target="_blank">
              <svg t="1677744837632" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="27375" width="22" height="22">
                <path
                  d="M943.0016 579.072a1373.696 1373.696 0 0 0-30.8224-82.9952l-30.5152-72.4992 0.0512-8.6528C881.7664 166.7072 733.184 0 512 0S142.2336 166.7072 142.2336 414.8736l0.0512 8.6016-29.9008 71.0656a1355.776 1355.776 0 0 0-31.488 84.6336c-36.5568 111.9232-39.3216 193.3824-8.0896 242.0224 16.896 26.3168 43.3664 43.8272 73.216 48.7424a118.6816 118.6816 0 0 0 13.1072 92.0576c35.4304 56.9856 102.5536 61.2352 200.9088 61.2352 56.7808 0 117.1968-2.9184 151.9104-5.9392 34.7136 3.072 95.0784 5.9392 151.9104 5.9392 98.3552 0 165.4784-4.2496 200.8576-61.1328 15.9232-25.6 21.8112-59.4944 13.1584-92.16a107.776 107.776 0 0 0 73.216-48.7424c31.1808-48.64 28.4672-130.0992-8.0896-242.1248z m-81.7152 189.7984l-0.768 0.0512c-19.8656 0-73.9328-83.6608-73.9328-83.6608 0 49.664-26.88 121.344-84.992 168.1408 21.76 6.4 48.4352 16.1792 65.536 28.2624 15.4112 10.8032 13.4656 21.8112 10.7008 26.3168-5.9904 9.6256-56.9856 12.8-113.92 12.8-58.4192 0-123.136-3.328-151.9104-6.4-28.7744 3.1232-93.4912 6.4-151.9104 6.4-56.9344 0-107.8784-3.1744-113.92-12.8-2.7648-4.4544-4.7104-15.5136 10.7008-26.3168 17.1008-12.032 43.776-21.8624 65.536-28.2624-58.112-46.848-84.992-118.4768-84.992-168.192 0 0-54.1184 83.6608-73.9328 83.6608l-0.768-0.0512c-8.96-1.024-20.6848-47.0016 15.5648-158.0544 7.5776-23.296 17.9712-50.432 28.4672-76.544l38.3488-91.136c0-1.0752-0.512-19.0464-0.512-28.2624C244.6336 259.0208 321.9456 102.4 512 102.4c190.0544 0 267.3664 156.6208 267.3664 312.4736 0 9.2672-0.4608 27.1872-0.512 28.2624l38.4 91.136c10.496 26.112 20.8896 53.248 28.4672 76.544 36.2496 111.0528 24.5248 157.0304 15.5648 158.0544z"
                  fill="#ffffff" p-id="27376"></path>
              </svg>
            </a>
            <a href="https://github.com/LurzyQyQ" target="_blank">
              <svg t="1677744867937" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="28425" width="22" height="22">
                <path
                  d="M0.064 556.416c0 46.4 4.352 88.384 13.024 125.92s20.704 70.176 36.064 97.888 34.88 52.064 58.592 73.12c23.712 21.024 49.408 38.24 77.12 51.584s59.328 24.192 94.88 32.544c35.552 8.352 71.84 14.176 108.896 17.536s77.792 4.992 122.176 4.992c44.736 0 85.632-1.664 122.688-4.992s73.44-9.184 109.152-17.536 67.52-19.2 95.392-32.544c27.872-13.344 53.76-30.528 77.6-51.584s43.552-45.408 59.072-73.12 27.616-60.352 36.288-97.888c8.672-37.568 13.024-79.552 13.024-125.92 0-82.784-27.712-154.4-83.104-214.816 3.008-8 5.76-17.12 8.256-27.296s4.832-24.704 7.008-43.552c2.176-18.848 1.344-40.64-2.496-65.344s-10.944-49.92-21.28-75.616l-7.52-1.504c-5.344-0.992-14.112-0.736-26.304 0.768s-26.368 4.512-42.56 9.024c-16.192 4.512-37.056 13.184-62.592 26.048s-52.48 28.96-80.864 48.32c-48.736-13.344-115.68-20.032-200.8-20.032-84.8 0-151.552 6.688-200.288 20.032-28.384-19.36-55.488-35.456-81.376-48.32s-46.496-21.536-61.856-26.048c-15.36-4.512-29.696-7.424-43.072-8.768s-21.792-1.76-25.28-1.248-6.272 1.088-8.256 1.76c-10.336 25.696-17.44 50.912-21.28 75.616s-4.672 46.496-2.496 65.344 4.512 33.376 7.008 43.552c2.496 10.176 5.248 19.264 8.256 27.296-55.424 60.416-83.136 132.032-83.136 214.816zM125.76 682.08c0-48.064 21.856-92.128 65.6-132.192 13.024-12.032 28.192-21.12 45.568-27.296s36.96-9.664 58.848-10.528c21.856-0.832 42.816-0.672 62.848 0.512s44.736 2.752 74.112 4.768c29.376 2.016 54.752 3.008 76.128 3.008s46.72-0.992 76.096-3.008c29.376-2.016 54.08-3.584 74.112-4.768s40.96-1.344 62.848-0.512c21.856 0.832 41.472 4.352 58.848 10.528s32.544 15.264 45.568 27.296c43.744 39.392 65.6 83.456 65.6 132.192 0 28.704-3.584 54.176-10.784 76.352s-16.352 40.8-27.552 55.84-26.688 27.776-46.56 38.304c-19.872 10.528-39.232 18.624-58.08 24.288s-43.072 10.112-72.608 13.28c-29.536 3.168-55.904 5.088-79.104 5.76s-52.672 0.992-88.384 0.992-65.184-0.32-88.384-0.992c-23.2-0.672-49.568-2.592-79.104-5.76s-53.76-7.584-72.608-13.28c-18.848-5.664-38.208-13.76-58.08-24.288s-35.392-23.296-46.56-38.304c-11.168-15.008-20.352-33.632-27.552-55.84s-10.752-47.648-10.752-76.352zM640.064 672c0-53.024 28.64-96 64-96s64 42.976 64 96c0 53.024-28.64 96-64 96s-64-42.976-64-96zM256.064 672c0-53.024 28.64-96 64-96s64 42.976 64 96c0 53.024-28.64 96-64 96s-64-42.976-64-96z"
                  fill="#ffffff" p-id="28426"></path>
              </svg>
            </a>
          </div>
        </div>

        <p class="footer__copy">
          © Marcoo.top from
          <a class="footer__copy" href="javascript:void(0)" target="_blank">YX</a>
        </p>
      </div>
    </footer>
    <!-- back -->
    <div class="bt-nav" @click="backTop">
      <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M8.69899 3.08174L7.76441 4.02584L7.75493 4.0258L1.3542 10.4265L0.0117182 9.08405L6.41245 2.68332L8.69707 0.398693L10.0396 1.74118L17.4565 9.15817L16.1159 10.4893L9.66059 4.0339L8.69899 3.08174ZM8.22508 5.69881L10.4911 7.2949L10.5527 21.8672L8.29342 21.8576L8.22508 5.69881Z"
          fill="white"></path>
      </svg>
    </div>
    <!-- 播放器 -->
    <!-- <musicPlay></musicPlay> -->
  </section>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
// import musicPlay from '../components/musicPlay.vue'
import { onMounted, onBeforeUnmount, reactive, toRefs, ref } from 'vue'

export default {
  components: {
    // musicPlay,
  },
  setup() {
    const state = reactive({
      scrollIndex: 0, //滚动文字下标
      Y: 0, //年
      M: 0, //月
      D: 0, //日
      timer: null, //定时器
      skills1: false,
      skills2: false,
      skills3: false,
      yearsCount: 1,
    });
    onMounted(() => {
      autoTextMove()
      autoTextPlay()
      dateCountGet()
      getSkills()
      // 初始化
      VanillaTilt.init(document.querySelectorAll(".home__img"));
      // 监听窗口滚动距离
      window.addEventListener('scroll', handleScroll)
      // 监听窗口大小
      window.addEventListener('resize', windowSize)
    });

    const autoTextMove = () => {
      let sons = document.querySelectorAll('.marquee-scroll__wrapper')[0]
      let tagertWidth = parseInt(sons.children[0].getBoundingClientRect().width)
      sons.innerHTML = sons.innerHTML + sons.innerHTML
      state.timer = setInterval(() => {
        let oldp = (sons.offsetWidth - 1) / 10
        let newp = parseFloat(getComputedStyle(sons).left) - 0.7;
        sons.style.left = newp >= oldp ? 0 : newp + "px";
        if (parseInt(sons.style.left) <= -(tagertWidth + 10)) {
          sons.style.left = 0
        }
      }, 14.67);
    };
    const autoTextPlay = () => {
      let setInt = null
      setInt = setInterval(() => {
        state.scrollIndex += 1
        if (state.scrollIndex == 3) {
          state.scrollIndex = 0
        }
      }, 5000);
    };
    const dateCountGet = () => {
      // 获取时间戳
      let date = new Date(new Date().getTime())
      state.Y = date.getFullYear();
      state.M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
      state.D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
      console.log(state.Y, state.M, state.D);
    };
    const handleScroll = () => {
      // 页面滑动的距离
      let scrollTop = document.documentElement.scrollTop
      let titleTop = document.querySelector('.marquee-scroll').offsetHeight
      let navTop = document.querySelector('.scroll-header').offsetHeight
      let billTop = document.querySelector('.content-header').offsetHeight
      // 当页面滑动的距离大于300px时元素显示，否则不显示
      if (scrollTop >= (titleTop + navTop + billTop)) {
        document.querySelector(".bt-nav").style.opacity = 1;
        document.querySelector('.scroll-header').style.cssText = 'box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);'
      } else {
        document.querySelector(".bt-nav").style.opacity = 0;
        document.querySelector('.scroll-header').style.cssText = 'box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);'
      }
    };
    const getSkills = () => {
      let eles = document.querySelectorAll('.skills__number')
      eles = Array.prototype.slice.call(eles)
      let childEles = document.querySelectorAll('.skills__percentage')
      childEles = Array.prototype.slice.call(childEles)
      let arrs = []
      eles.forEach(element => {
        arrs.push(element.innerHTML)
      });
      childEles.forEach((item, index) => {
        item.style.width = arrs[index]
      })
    }
    const SKILLS1 = () => {
      state.skills1 = !state.skills1
      state.skills2 = false
      state.skills3 = false
    }
    const SKILLS2 = () => {
      state.skills2 = !state.skills2
      state.skills1 = false
      state.skills3 = false
    }
    const SKILLS3 = () => {
      state.skills3 = !state.skills3
      state.skills1 = false
      state.skills2 = false
    }
    const goAnchor = (selector) => {
      let anchor = document.querySelector(selector)
      let stickyEle = document.querySelector('.scroll-header').offsetHeight

      document.body.scrollTop = anchor.offsetTop - stickyEle //chrome
      document.documentElement.scrollTop = anchor.offsetTop - stickyEle //firefox
    }
    const backTop = () => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    };
    const windowSize = () => {
      let windowSize = window.innerWidth;
      if (windowSize <= 640) {
        document.querySelector('.bt-nav').style.display = 'none'
      }
    };
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', windowSize())
      clearInterval(state.timer)
    });
    return {
      state,
      SKILLS1,
      SKILLS2,
      SKILLS3,
      goAnchor,
      backTop,
    };
  }
}
</script>

<style>
/*==================== GOOGLE FONTS 字体====================*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

/*==================== VARIABLES CSS ====================*/
:root {

  /*========== Colors 主题色彩==========*/
  /* Change favorite color */
  --hue-color: 250;
  /*Purple 250 - Green 142 - Blue 230 - Pink 340*/

  /* HSL color mode */
  --first-color: hsl(var(--hue-color), 0%, 34%);
  --first-color-second: hsl(var(--hue-color), 69%, 61%);
  --first-color-alt: hsl(var(--hue-color), 57%, 53%);
  --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
  --title-color: hsl(var(--hue-color), 0%, 0%);
  --text-color: hsl(var(--hue-color), 8%, 45%);
  --text-color-light: hsl(var(--hue-color), 8%, 65%);
  --input-color: hsl(var(--hue-color), 70%, 96%);
  --body-color: hsl(var(--hue-color), 60%, 99%);
  --container-color: hsl(var(--hue-color), 100%, 98%);
  --scroll-bar-color: hsl(var(--hue-color), 12%, 90%);
  --scroll-thumb-color: hsl(var(--hue-color), 12%, 80%);

  /*========== Font and typography ==========*/
  --body-font: 'Poppins', sans-serif;

  /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
  --big-font-size: 2rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1.125rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;
  --smaller-font-size: .75rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margenes Bottom ==========*/
  /* .25rem = 4px, .5rem = 8px, .75rem = 12px ... */
  --mb-0-25: .25rem;
  --mb-0-5: .5rem;
  --mb-0-75: .75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}

/*==================== BASE ====================*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0 0 var(--header-height) 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}

body::-webkit-scrollbar {
  display: none;
}

h1,
h2,
h3,
h4 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
</style>

<style lang="less">
/*==================== Top scrolling text ====================*/
.marquee-scroll {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  height: 50px;
  background-color: #222;
  font-size: 17px;
  color: #fff;

  .marquee-scroll__wrapper {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;

    .marquee-scroll__item {
      margin-right: 10px;

      strong {
        font-weight: bold;
      }

      .marquee-scroll__separator {
        position: relative;
        top: -1px;
        margin: 0 10px;
        font-size: 1.3rem;
        vertical-align: middle;
        fill: currentColor;
      }
    }
  }
}

/*==================== navigation bar ====================*/
.scroll-header {
  background: #f8f8f8;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 2;

  .nav {
    max-width: 1920px;
    padding: 10px 24px;
    height: calc(var(--header-height) + 2rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;


    .nav__logo {
      color: var(--title-color);
      font-weight: calc(var(--font-medium) + 100);
      font-size: calc(var(--big-font-size) - 5px);
    }

    .nav__menu {
      margin-left: auto;

      .nav__list {
        display: flex;
        column-gap: 2rem;

        .nav__item {
          border-bottom: 2px solid transparent;
          transition: all .2s ease-in;

          .nav__link {
            p {
              color: var(--title-color);
            }
          }

          &:hover {
            border-bottom: 2px solid var(--title-color);
          }

        }
      }
    }

  }
}

/*==================== bill ====================*/
.content-header {
  // margin-bottom: clamp(30px, 6vw, 100px);
  // padding-top: 71px;
  // padding-bottom: clamp(30px, 6vw, 100px);
  background: #f8f8f8;

  .inner {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 24px;

    .card-site-anime {
      position: relative;
      display: flex;
      align-items: flex-end;
      border-radius: 20px;
      aspect-ratio: 16/7;
      overflow: hidden;
      cursor: pointer;

      .card-site-anime__bg {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }

      .card-site-anime__content {
        width: 100%;
        padding: 0 clamp(20px, 3vw, 60px) clamp(20px, 3vw, 10px) clamp(20px, 3vw, 60px);
        pointer-events: none;

        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          transition-property: transform;
          box-sizing: content-box;
          align-content: stretch;
          align-items: flex-start;
          flex-direction: column;

          @keyframes textAutoIn {
            0% {
              margin-bottom: -20px;
            }

            100% {
              margin-bottom: 0px;
            }
          }

          @keyframes textAutoOut {
            0% {
              margin-bottom: 0px;
            }

            100% {
              margin-bottom: 20px;
            }
          }

          .swiper-slide {
            position: absolute;
            left: 0;
            bottom: 140px;
            flex-shrink: 0;
            width: 90%;
            height: 100%;
            transition-property: transform;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            transition: all .6s ease-out;

            .card-site-anime__slide {
              color: #fff;
              width: 100%;

              .card-site-anime__label {
                font-size: 26px;
                font-size: clamp(26px, 14.5915492958px + 0.2816901408vw, 20px);
                line-height: 130%;

                span {
                  transform: translateY(100%);
                  transition: all .4s ease-in-out;
                }
              }

              .card-site-anime__text {
                position: relative;
                padding-top: .15em;
                overflow: hidden;
                font-size: 4rem;
                line-height: normal;
                font-weight: bold;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-shadow: 5px 0px 0px gray;
              }
            }
          }

          .swiper-slide-active {
            z-index: 999;
          }
        }
      }
    }
  }
}

/*==================== HOME ====================*/
.home_section {
  background: #f8f8f8;

  .home__container {
    max-width: 1920px;
    padding: 100px 24px;
    margin: 0px auto;

    .home__content {
      display: flex;
      justify-content: center;
      align-items: center;

      .home__social {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100px;
        padding-bottom: 4rem;

        .home__social-icon {
          display: block;
          padding: .1rem 0;
        }
      }

      .home__img {
        width: 420px;
        order: 2;

        .home__blob {
          fill: var(--first-color);

          .home__blob-img {
            width: 220px;
          }
        }


      }

      .home__data {
        width: 32rem;

        .home__title {
          font-size: 3rem;
        }

        .home__description {
          padding-bottom: 4rem;
        }

        .button {
          padding: 1rem 1rem;
          border-radius: .6rem;
          background: var(--first-color);
          color: #f8f8f8;
          transition: all .2s linear;

          .icon {
            vertical-align: middle;
          }

          &:hover {
            background-color: #353535;
          }
        }
      }
    }

    .home__scroll {
      max-width: 1920px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      .home__scroll-button {
        color: #000000;
        font-size: 20px;
        transition: all .2s linear;

        &:hover {
          transform: translateY(.3rem);
        }

        .icon {
          vertical-align: middle;
        }
      }
    }
  }

}

/*==================== about me ====================*/
.about-section {
  background: #f8f8f8;

  .block {
    text-align: center;

    .c-heading {
      position: relative;
      font-weight: 400;

      .c-heading__middle {
        .heading-1 {
          position: relative;
          display: inline-block;
          text-transform: uppercase;
          font-size: 100px;
          line-height: normal;
          margin-top: 0px;
          color: #222222;
        }
      }

      .c-heading__subline {
        width: 9rem;
        // border-bottom: 1px solid #222222;
        margin: 0 auto;
        margin-bottom: 15px;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        color: #6d6a7c;
      }

    }

    .about__container {
      max-width: 1920px;
      padding: 80px 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      .about__img {
        width: 21rem;
      }

      .about__data {
        width: 300px;

        .about__info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2.5rem;

          .about__info-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #222222;
          }


        }

        .about__description {
          margin-bottom: 2.5rem;
          text-align: initial;
        }

        .about__buttons {
          display: flex;

          .icon {
            vertical-align: middle;
          }

          .button {
            padding: 1rem 1rem;
            border-radius: 0.6rem;
            background: var(--first-color);
            color: #f8f8f8;
            transition: all 0.2s linear;

            &:hover {
              background-color: #353535;
            }
          }

        }
      }
    }
  }

}

/*==================== skills ====================*/
.skills-section {
  background-color: #f8f8f8;

  .block {
    text-align: center;

    .c-heading {
      position: relative;
      font-weight: 400;

      .c-heading__middle {
        .heading-1 {
          position: relative;
          display: inline-block;
          text-transform: uppercase;
          font-size: 100px;
          line-height: normal;
          margin-top: 0px;
          color: #222222;
        }
      }

      .c-heading__subline {
        width: 9rem;
        // border-bottom: 1px solid #222222;
        margin: 0 auto;
        margin-bottom: 15px;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        color: #6d6a7c;
      }

    }

    .skills__container {
      padding: 80px 0px;

      .skills__content {
        width: 50%;
        margin: 0 auto;
        overflow: hidden;

        .skills__header {
          display: flex;
          justify-content: center;
          padding-bottom: 2rem;
          align-items: center;

          .icon:last-child {
            margin-left: auto;
            transition: all .2s linear;
          }

          .skills-title {
            text-align: left;
          }

          .icon:first-child {
            margin-right: .75rem;
          }
        }

        .skills__list {
          width: 100%;
          padding-left: 44px;
          margin-bottom: 2rem;
          transition: all .4s ease;

          .skills__data {
            margin-bottom: 1rem;

            .skills__titles {
              display: flex;
              justify-content: space-between;
              margin-bottom: .5rem;
            }

            .skills__bar {
              height: 5px;
              border-radius: .25rem;
              background-color: #949494;
              overflow: hidden;

              .skills__percentage {
                width: 0%;
                height: 5px;
                background: #3d3d3d;
                border-radius: .25rem;
                transition: all .5s ease-in;
              }

            }
          }
        }
      }
    }
  }
}

/*==================== protfolio ====================*/
.protfolio-section {
  background-color: #f8f8f8;

  .block {
    text-align: center;

    .c-heading {
      position: relative;
      font-weight: 400;

      .c-heading__middle {
        .heading-1 {
          position: relative;
          display: inline-block;
          text-transform: uppercase;
          font-size: 100px;
          line-height: normal;
          margin-top: 0px;
          color: #222222;
        }
      }

      .c-heading__subline {
        width: 9rem;
        // border-bottom: 1px solid #222222;
        margin: 0 auto;
        margin-bottom: 15px;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        color: #6d6a7c;
      }

    }

    .project-section {
      width: 80%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-bottom: 30px;
      padding: 80px 0px;

      .proj-item {
        padding-bottom: 1px;
        background-image: linear-gradient(to right, rgb(34, 34, 34) 0 10%, rgba(255, 255, 255, 0) 10%);
        background-position: bottom;
        background-size: 8px 1px;
        background-repeat: repeat-x;

        .proj-site-last {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: clamp(20px, 3vw, 50px);
          line-height: 150%;
          padding: 20px 20px;
          transition: all .3s;
          align-content: space-between;
          align-items: center;
          justify-content: space-between;


          .card-site-last__info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            margin-left: 0;

            .card-site-last__bottom {
              .card-site-last__title {
                margin-bottom: 12px;
                font-size: 18px;
                font-size: clamp(18px, 15.8873239437px + 0.4225352113vw, 24px);
                font-weight: 600;
                text-align: left;
              }

              .card-site-last__by {
                display: flex;
                align-items: center;
                gap: 8px;

                .users-credits__details {
                  display: flex;
                  align-items: center;
                  flex-wrap: wrap;
                  gap: 20px;
                  padding: 0;

                  li {
                    list-style: none;

                    .users-credits__item {
                      display: flex;
                      align-items: center;
                      gap: 12px;
                      min-width: -webkit-fit-content;
                      min-width: -moz-fit-content;
                      min-width: fit-content;

                      .circle-avatar {
                        display: inline-block;
                        position: relative;
                        flex-shrink: 0;
                        margin: 0;

                        a {
                          text-decoration: none;
                          color: #222;

                          img {
                            border-radius: 50%;
                          }
                        }
                      }

                      .users-credits__name {
                        display: flex;
                        font-size: 1rem;
                        font-weight: bold;

                        .link-underlined {
                          position: relative;
                          display: inline-block;
                          line-height: normal;
                          color: rgb(34, 34, 34);
                          border: none;
                          cursor: pointer;
                          text-decoration: none;
                        }

                        .link-underlined:before {
                          content: "";
                          position: absolute;
                          bottom: -0.2em;
                          left: 0;
                          width: 100%;
                          height: 2px;
                          background-repeat: no-repeat;
                          background-image: linear-gradient(to right, #222222 45%, rgba(170, 170, 170) 55%);
                          background-size: 220% 100%;
                          background-position: 100% 50%;
                          transition: .3s ease-out;
                        }

                        sup {
                          flex: 1;
                          margin-bottom: auto;
                          margin-left: 0.2em;
                          vertical-align: text-top;
                          font-size: .5em;
                          font-weight: 200;
                        }
                      }
                    }
                  }

                }
              }
            }
          }

          .card-site-last__figure {
            flex: 1;
            width: 40%;
            min-width: 250px;

            img {
              display: block;
              max-width: 100%;

            }

            .card-site-last__media {
              border-radius: 8px;
            }
          }

          .item-link {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            z-index: 1;
          }

          &:hover {
            background: #e9e9e9;
          }
        }
      }
    }
  }
}

/*==================== contact ====================*/
.contact-section {
  background-color: #f8f8f8;

  .block {
    text-align: center;

    .c-heading {
      position: relative;
      font-weight: 400;

      .c-heading__middle {
        .heading-1 {
          position: relative;
          display: inline-block;
          text-transform: uppercase;
          font-size: 100px;
          line-height: normal;
          margin-top: 0px;
          color: #222222;
        }
      }

      .c-heading__subline {
        width: 9rem;
        // border-bottom: 1px solid #222222;
        margin: 0 auto;
        margin-bottom: 15px;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        color: #6d6a7c;
      }
    }

    .contact__container {
      width: 50%;
      margin: 0px auto;
      padding: 70px 0px;

      .contact__info {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 2rem;

        .contact__information {
          display: flex;
          text-align: left;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
  }
}

/*==================== footer ====================*/
.footer {
  width: 100%;

  .footer__bg {
    width: 100%;
    background: #222222;
    padding: 2rem 0 4rem 0;

    .footer__container {
      width: 50%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;


      .footer__title {
        color: #ffffff;
        font-size: 48px;
      }

      .footer__subtitle {
        color: #ffffff;
      }

      .footer__links {
        display: flex;
        gap: 2rem;

        li {
          .footer__link {
            color: #ffffff;
          }
        }
      }

      .footer__socials {
        display: flex;
        gap: 2rem;
      }
    }

    .footer__copy {
      text-align: center;
      padding-top: 4rem;
      color: #6d6a7c;
    }
  }
}

/*==================== back ====================*/
.bt-nav {
  position: fixed;
  right: 20px;
  bottom: 60px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  border-radius: 8px;
  cursor: pointer;
  transition: all .5s ease-in;
  flex-direction: column;
  z-index: 9999;
  opacity: 0;
}

/*==================== MEDIA QUERIES ====================*/
/* For smaller devices */
@media screen and (max-width: 640px) {

  .footer .footer__bg .footer__container .footer__links,
  .footer .footer__bg .footer__container .footer__socials {
    display: flex;
    gap: 2rem;
    flex-direction: column;
  }

  .skills-section .block .skills__container .skills__content,
  .protfolio-section .block .project-section,
  .contact-section .block .contact__container,
  .footer .footer__bg .footer__container {
    width: 90%;
  }

  .about-section .block .c-heading .c-heading__middle .heading-1,
  .skills-section .block .c-heading .c-heading__middle .heading-1,
  .protfolio-section .block .c-heading .c-heading__middle .heading-1,
  .contact-section .block .c-heading .c-heading__middle .heading-1 {
    font-size: 24px;
  }

  .protfolio-section .block .project-section {
    display: flex;
    flex-wrap: wrap;
  }

  .about-section .block .about__container {
    flex-wrap: wrap;
  }

  .home_section .home__container .home__content .home__img {
    width: 60%;
    order: 1;
  }

  .home_section .home__container .home__content .home__data {
    order: 2;
  }

  .home_section .home__container .home__content {
    flex-wrap: wrap;
  }

  .home_section .home__container .home__content .home__social {
    padding-bottom: 0rem;
  }

  .home_section .home__container .home__scroll {
    max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    padding: 0;
  }

  .home_section .home__container .home__content .home__data .home__title {
    font-size: 2rem;
  }

  .content-header .inner .card-site-anime .card-site-anime__content .swiper-wrapper .swiper-slide .card-site-anime__slide .card-site-anime__text {
    font-size: 1.5rem;
  }

  .content-header .inner .card-site-anime .card-site-anime__content .swiper-wrapper .swiper-slide {
    bottom: 60px;
  }

  .content-header .inner .card-site-anime .card-site-anime__content .swiper-wrapper .swiper-slide .card-site-anime__slide .card-site-anime__label {
    font-size: 1rem;
  }

  .scroll-header {
    display: none;
  }

  .content-header {
    margin-top: 60px;
  }
}

/* For small devices */
@media screen and (min-width: 640px) {
  .footer .footer__bg .footer__container .footer__links {
    display: flex;
    gap: 2rem;
  }

  .skills-section .block .skills__container .skills__content,
  .protfolio-section .block .project-section,
  .contact-section .block .contact__container,
  .footer .footer__bg .footer__container {
    width: 90%;
  }

  .about-section .block .c-heading .c-heading__middle .heading-1,
  .skills-section .block .c-heading .c-heading__middle .heading-1,
  .protfolio-section .block .c-heading .c-heading__middle .heading-1,
  .contact-section .block .c-heading .c-heading__middle .heading-1 {
    font-size: 50px;
  }

  .bt-nav {
    display: none;
  }

  .content-header .inner .card-site-anime .card-site-anime__content .swiper-wrapper .swiper-slide .card-site-anime__slide .card-site-anime__text {
    font-size: 2rem;
  }

  .content-header .inner .card-site-anime .card-site-anime__content .swiper-wrapper .swiper-slide {
    bottom: 80px;
  }

  .content-header .inner .card-site-anime .card-site-anime__content .swiper-wrapper .swiper-slide .card-site-anime__slide .card-site-anime__label {
    font-size: 1rem;
  }

  .scroll-header {
    display: none;
  }

  .content-header {
    margin-top: 60px;
  }
}

/* For medium devices */
@media screen and (min-width: 768px) {

  .skills-section .block .skills__container .skills__content,
  .protfolio-section .block .project-section,
  .contact-section .block .contact__container,
  .footer .footer__bg .footer__container {
    width: 90%;
  }

  .about-section .block .c-heading .c-heading__middle .heading-1,
  .skills-section .block .c-heading .c-heading__middle .heading-1,
  .protfolio-section .block .c-heading .c-heading__middle .heading-1,
  .contact-section .block .c-heading .c-heading__middle .heading-1 {
    font-size: 50px;
  }

  .bt-nav {
    display: none;
  }

  .content-header .inner .card-site-anime .card-site-anime__content .swiper-wrapper .swiper-slide .card-site-anime__slide .card-site-anime__text {
    font-size: 2.5rem;
  }

  .content-header .inner .card-site-anime .card-site-anime__content .swiper-wrapper .swiper-slide {
    bottom: 90px;
  }

  .content-header .inner .card-site-anime .card-site-anime__content .swiper-wrapper .swiper-slide .card-site-anime__slide .card-site-anime__label {
    font-size: 1.5rem;
  }

  .scroll-header {
    display: block;
  }

  .content-header {
    margin-top: 0px;
  }
}

/* For large devices */
@media screen and (min-width: 1024px) {

  .scroll-header {
    display: block;
  }

  .content-header {
    margin-top: 0px;
  }

  /*==================== Top scrolling text ====================*/
  .marquee-scroll {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    height: 50px;
    background-color: #222;
    font-size: 17px;
    color: #fff;

    .marquee-scroll__wrapper {
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      display: flex;
      align-items: center;

      .marquee-scroll__item {
        margin-right: 10px;

        strong {
          font-weight: bold;
        }

        .marquee-scroll__separator {
          position: relative;
          top: -1px;
          margin: 0 10px;
          font-size: 1.3rem;
          vertical-align: middle;
          fill: currentColor;
        }
      }
    }
  }

  /*==================== navigation bar ====================*/
  .scroll-header {
    background: #f8f8f8;
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
    z-index: 2;

    .nav {
      max-width: 1920px;
      padding: 10px 24px;
      height: calc(var(--header-height) + 2rem);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;


      .nav__logo {
        color: var(--title-color);
        font-weight: calc(var(--font-medium) + 100);
        font-size: calc(var(--big-font-size) - 5px);
      }

      .nav__menu {
        margin-left: auto;

        .nav__list {
          display: flex;
          column-gap: 2rem;

          .nav__item {
            border-bottom: 2px solid transparent;
            transition: all .2s ease-in;

            .nav__link {
              p {
                color: var(--title-color);
              }
            }

            &:hover {
              border-bottom: 2px solid var(--title-color);
            }

          }
        }
      }

    }
  }

  /*==================== bill ====================*/
  .content-header {
    // margin-bottom: clamp(30px, 6vw, 100px);
    // padding-top: 71px;
    // padding-bottom: clamp(30px, 6vw, 100px);
    background: #f8f8f8;

    .inner {
      max-width: 1920px;
      margin: 0 auto;
      padding: 0 24px;

      .card-site-anime {
        position: relative;
        display: flex;
        align-items: flex-end;
        border-radius: 20px;
        aspect-ratio: 16/7;
        overflow: hidden;
        cursor: pointer;

        .card-site-anime__bg {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
        }

        .card-site-anime__content {
          width: 100%;
          padding: 0 clamp(20px, 3vw, 60px) clamp(20px, 3vw, 10px) clamp(20px, 3vw, 60px);
          pointer-events: none;

          .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            box-sizing: content-box;
            align-content: stretch;
            align-items: flex-start;
            flex-direction: column;

            @keyframes textAutoIn {
              0% {
                margin-bottom: -20px;
              }

              100% {
                margin-bottom: 0px;
              }
            }

            @keyframes textAutoOut {
              0% {
                margin-bottom: 0px;
              }

              100% {
                margin-bottom: 20px;
              }
            }

            .swiper-slide {
              position: absolute;
              left: 0;
              bottom: 140px;
              flex-shrink: 0;
              width: 90%;
              height: 100%;
              transition-property: transform;
              -webkit-user-select: none;
              -moz-user-select: none;
              user-select: none;
              transition: all .6s ease-out;

              .card-site-anime__slide {
                color: #fff;
                width: 100%;

                .card-site-anime__label {
                  font-size: 26px;
                  font-size: clamp(26px, 14.5915492958px + 0.2816901408vw, 20px);
                  line-height: 130%;

                  span {
                    transform: translateY(100%);
                    transition: all .4s ease-in-out;
                  }
                }

                .card-site-anime__text {
                  position: relative;
                  padding-top: .15em;
                  overflow: hidden;
                  font-size: 4rem;
                  line-height: normal;
                  font-weight: bold;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  text-shadow: 5px 0px 0px gray;
                }
              }
            }

            .swiper-slide-active {
              z-index: 999;
            }
          }
        }
      }
    }
  }

  /*==================== HOME ====================*/
  .home_section {
    background: #f8f8f8;

    .home__container {
      max-width: 1920px;
      padding: 100px 24px;
      margin: 0px auto;

      .home__content {
        display: flex;
        justify-content: center;
        align-items: center;

        .home__social {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100px;
          padding-bottom: 4rem;

          .home__social-icon {
            display: block;
            padding: .1rem 0;
          }
        }

        .home__img {
          width: 420px;
          order: 2;

          .home__blob {
            fill: var(--first-color);

            .home__blob-img {
              width: 220px;
            }
          }


        }

        .home__data {
          width: 32rem;

          .home__title {
            font-size: 3rem;
          }

          .home__description {
            padding-bottom: 4rem;
          }

          .button {
            padding: 1rem 1rem;
            border-radius: .6rem;
            background: var(--first-color);
            color: #f8f8f8;
            transition: all .2s linear;

            .icon {
              vertical-align: middle;
            }

            &:hover {
              background-color: #353535;
            }
          }
        }
      }

      .home__scroll {
        max-width: 1920px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        .home__scroll-button {
          color: #000000;
          font-size: 20px;
          transition: all .2s linear;

          &:hover {
            transform: translateY(.3rem);
          }

          .icon {
            vertical-align: middle;
          }
        }
      }
    }

  }

  /*==================== about me ====================*/
  .about-section {
    background: #f8f8f8;

    .block {
      text-align: center;

      .c-heading {
        position: relative;
        font-weight: 400;

        .c-heading__middle {
          .heading-1 {
            position: relative;
            display: inline-block;
            text-transform: uppercase;
            font-size: 100px;
            line-height: normal;
            margin-top: 0px;
            color: #222222;
          }
        }

        .c-heading__subline {
          width: 9rem;
          // border-bottom: 1px solid #222222;
          margin: 0 auto;
          margin-bottom: 15px;
          text-align: center;
          font-size: 1rem;
          font-weight: 400;
          color: #6d6a7c;
        }

      }

      .about__container {
        max-width: 1920px;
        padding: 80px 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        .about__img {
          width: 21rem;
        }

        .about__data {
          width: 300px;

          .about__info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2.5rem;

            .about__info-title {
              font-size: 1.5rem;
              font-weight: 600;
              color: #222222;
            }


          }

          .about__description {
            margin-bottom: 2.5rem;
            text-align: initial;
          }

          .about__buttons {
            display: flex;

            .icon {
              vertical-align: middle;
            }

            .button {
              padding: 1rem 1rem;
              border-radius: 0.6rem;
              background: var(--first-color);
              color: #f8f8f8;
              transition: all 0.2s linear;

              &:hover {
                background-color: #353535;
              }
            }

          }
        }
      }
    }

  }

  /*==================== skills ====================*/
  .skills-section {
    background-color: #f8f8f8;

    .block {
      text-align: center;

      .c-heading {
        position: relative;
        font-weight: 400;

        .c-heading__middle {
          .heading-1 {
            position: relative;
            display: inline-block;
            text-transform: uppercase;
            font-size: 100px;
            line-height: normal;
            margin-top: 0px;
            color: #222222;
          }
        }

        .c-heading__subline {
          width: 9rem;
          // border-bottom: 1px solid #222222;
          margin: 0 auto;
          margin-bottom: 15px;
          text-align: center;
          font-size: 1rem;
          font-weight: 400;
          color: #6d6a7c;
        }

      }

      .skills__container {
        padding: 80px 0px;

        .skills__content {
          width: 50%;
          margin: 0 auto;
          overflow: hidden;

          .skills__header {
            display: flex;
            justify-content: center;
            padding-bottom: 2rem;
            align-items: center;

            .icon:last-child {
              margin-left: auto;
              transition: all .2s linear;
            }

            .skills-title {
              text-align: left;
            }

            .icon:first-child {
              margin-right: .75rem;
            }
          }

          .skills__list {
            width: 100%;
            padding-left: 44px;
            margin-bottom: 2rem;
            transition: all .4s ease;

            .skills__data {
              margin-bottom: 1rem;

              .skills__titles {
                display: flex;
                justify-content: space-between;
                margin-bottom: .5rem;
              }

              .skills__bar {
                height: 5px;
                border-radius: .25rem;
                background-color: #949494;
                overflow: hidden;

                .skills__percentage {
                  width: 0%;
                  height: 5px;
                  background: #3d3d3d;
                  border-radius: .25rem;
                  transition: all .5s ease-in;
                }

              }
            }
          }
        }
      }
    }
  }

  /*==================== protfolio ====================*/
  .protfolio-section {
    background-color: #f8f8f8;

    .block {
      text-align: center;

      .c-heading {
        position: relative;
        font-weight: 400;

        .c-heading__middle {
          .heading-1 {
            position: relative;
            display: inline-block;
            text-transform: uppercase;
            font-size: 100px;
            line-height: normal;
            margin-top: 0px;
            color: #222222;
          }
        }

        .c-heading__subline {
          width: 9rem;
          // border-bottom: 1px solid #222222;
          margin: 0 auto;
          margin-bottom: 15px;
          text-align: center;
          font-size: 1rem;
          font-weight: 400;
          color: #6d6a7c;
        }

      }

      .project-section {
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-bottom: 30px;
        padding: 80px 0px;

        .proj-item {
          padding-bottom: 1px;
          background-image: linear-gradient(to right, rgb(34, 34, 34) 0 10%, rgba(255, 255, 255, 0) 10%);
          background-position: bottom;
          background-size: 8px 1px;
          background-repeat: repeat-x;

          .proj-site-last {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            gap: clamp(20px, 3vw, 50px);
            line-height: 150%;
            padding: 20px 20px;
            transition: all .3s;
            align-content: space-between;
            align-items: center;
            justify-content: space-between;


            .card-site-last__info {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              margin-left: 0;

              .card-site-last__bottom {
                .card-site-last__title {
                  margin-bottom: 12px;
                  font-size: 18px;
                  font-size: clamp(18px, 15.8873239437px + 0.4225352113vw, 24px);
                  font-weight: 600;
                  text-align: left;
                }

                .card-site-last__by {
                  display: flex;
                  align-items: center;
                  gap: 8px;

                  .users-credits__details {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 20px;
                    padding: 0;

                    li {
                      list-style: none;

                      .users-credits__item {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        min-width: -webkit-fit-content;
                        min-width: -moz-fit-content;
                        min-width: fit-content;

                        .circle-avatar {
                          display: inline-block;
                          position: relative;
                          flex-shrink: 0;
                          margin: 0;

                          a {
                            text-decoration: none;
                            color: #222;

                            img {
                              border-radius: 50%;
                            }
                          }
                        }

                        .users-credits__name {
                          display: flex;
                          font-size: 1rem;
                          font-weight: bold;

                          .link-underlined {
                            position: relative;
                            display: inline-block;
                            line-height: normal;
                            color: rgb(34, 34, 34);
                            border: none;
                            cursor: pointer;
                            text-decoration: none;
                          }

                          .link-underlined:before {
                            content: "";
                            position: absolute;
                            bottom: -0.2em;
                            left: 0;
                            width: 100%;
                            height: 2px;
                            background-repeat: no-repeat;
                            background-image: linear-gradient(to right, #222222 45%, rgba(170, 170, 170) 55%);
                            background-size: 220% 100%;
                            background-position: 100% 50%;
                            transition: .3s ease-out;
                          }

                          sup {
                            flex: 1;
                            margin-bottom: auto;
                            margin-left: 0.2em;
                            vertical-align: text-top;
                            font-size: .5em;
                            font-weight: 200;
                          }
                        }
                      }
                    }

                  }
                }
              }
            }

            .card-site-last__figure {
              flex: 1;
              width: 40%;
              min-width: 250px;

              img {
                display: block;
                max-width: 100%;

              }

              .card-site-last__media {
                border-radius: 8px;
              }
            }

            .item-link {
              position: absolute;
              top: 0;
              left: 0;
              display: block;
              width: 100%;
              height: 100%;
              z-index: 1;
            }

            &:hover {
              background: #e9e9e9;
            }
          }
        }
      }
    }
  }

  /*==================== contact ====================*/
  .contact-section {
    background-color: #f8f8f8;

    .block {
      text-align: center;

      .c-heading {
        position: relative;
        font-weight: 400;

        .c-heading__middle {
          .heading-1 {
            position: relative;
            display: inline-block;
            text-transform: uppercase;
            font-size: 100px;
            line-height: normal;
            margin-top: 0px;
            color: #222222;
          }
        }

        .c-heading__subline {
          width: 9rem;
          // border-bottom: 1px solid #222222;
          margin: 0 auto;
          margin-bottom: 15px;
          text-align: center;
          font-size: 1rem;
          font-weight: 400;
          color: #6d6a7c;
        }
      }

      .contact__container {
        width: 50%;
        margin: 0px auto;
        padding: 70px 0px;

        .contact__info {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          gap: 2rem;

          .contact__information {
            display: flex;
            text-align: left;
            align-items: center;
            gap: 0.5rem;
          }
        }
      }
    }
  }

  /*==================== footer ====================*/
  .footer {
    width: 100%;

    .footer__bg {
      width: 100%;
      background: #222222;
      padding: 2rem 0 4rem 0;

      .footer__container {
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;


        .footer__title {
          color: #ffffff;
          font-size: 48px;
        }

        .footer__subtitle {
          color: #ffffff;
        }

        .footer__links {
          display: flex;
          gap: 2rem;

          li {
            .footer__link {
              color: #ffffff;
            }
          }
        }

        .footer__socials {
          display: flex;
          gap: 2rem;
        }
      }

      .footer__copy {
        text-align: center;
        padding-top: 4rem;
        color: #6d6a7c;
      }
    }
  }

  /*==================== back ====================*/
  .bt-nav {
    position: fixed;
    right: 20px;
    bottom: 60px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #222;
    border-radius: 8px;
    cursor: pointer;
    transition: all .5s ease-in;
    flex-direction: column;
    z-index: 9999;
    opacity: 0;
  }
}
</style>
