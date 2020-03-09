<template>
  <div class="page-wrapper">
    <div class="page-section">
      <div class="title">
        <h1>News</h1>
        <div class="category-wrapp">
          <ul class="category-list">
            <li class="category-item">
              <router-link class="project-link" to="/news">all</router-link>
            </li>
            <li class="category-item">
              <router-link class="project-link" to="/news">events</router-link>
            </li>
            <li class="category-item">
              <router-link class="project-link" to="/news">press</router-link>
            </li>
            <li class="category-item">
              <router-link class="project-link" to="/news"
                >technology</router-link
              >
            </li>
            <li class="category-item">
              <router-link class="project-link" to="/news"
                >workshops</router-link
              >
            </li>
          </ul>
        </div>
        <!-- test isotope-->
        <div class="button-group filters-button-group">
          <button
            @click="handleFilter($event)"
            class="button is-checked"
            data-filter="*"
          >
            show all
          </button>
          <button
            @click="handleFilter($event)"
            class="button"
            data-filter=".metal"
          >
            metal
          </button>
          <button
            @click="handleFilter($event)"
            class="button"
            data-filter=".transition"
          >
            transition
          </button>
          <button
            @click="handleFilter($event)"
            class="button"
            data-filter=".alkali, .alkaline-earth"
          >
            alkali and alkaline-earth
          </button>
          <button class="button" data-filter=":not(.transition)">
            not transition
          </button>
          <button class="button" data-filter=".metal:not(.transition)">
            metal but not transition
          </button>
          <button class="button" data-filter="numberGreaterThan50">
            number > 50
          </button>
          <button class="button" data-filter="ium">
            name ends with &ndash;ium
          </button>
        </div>
        <div class="grid">
          <div
            class="element-item transition metal "
            data-category="transition"
          >
            <h3 class="name">Mercury</h3>
            <p class="symbol">Hg</p>
            <p class="number">80</p>
            <p class="weight">200.59</p>
          </div>
          <div class="element-item metalloid " data-category="metalloid">
            <h3 class="name">Tellurium</h3>
            <p class="symbol">Te</p>
            <p class="number">52</p>
            <p class="weight">127.6</p>
          </div>
          <div
            class="element-item post-transition metal "
            data-category="post-transition"
          >
            <h3 class="name">Bismuth</h3>
            <p class="symbol">Bi</p>
            <p class="number">83</p>
            <p class="weight">208.980</p>
          </div>
          <div
            class="element-item post-transition metal "
            data-category="post-transition"
          >
            <h3 class="name">Lead</h3>
            <p class="symbol">Pb</p>
            <p class="number">82</p>
            <p class="weight">207.2</p>
          </div>
          <div
            class="element-item transition metal "
            data-category="transition"
          >
            <h3 class="name">Gold</h3>
            <p class="symbol">Au</p>
            <p class="number">79</p>
            <p class="weight">196.967</p>
          </div>
          <div class="element-item alkali metal " data-category="alkali">
            <h3 class="name">Potassium</h3>
            <p class="symbol">K</p>
            <p class="number">19</p>
            <p class="weight">39.0983</p>
          </div>
          <div class="element-item alkali metal " data-category="alkali">
            <h3 class="name">Sodium</h3>
            <p class="symbol">Na</p>
            <p class="number">11</p>
            <p class="weight">22.99</p>
          </div>
          <div
            class="element-item transition metal "
            data-category="transition"
          >
            <h3 class="name">Cadmium</h3>
            <p class="symbol">Cd</p>
            <p class="number">48</p>
            <p class="weight">112.411</p>
          </div>
          <div
            class="element-item alkaline-earth metal "
            data-category="alkaline-earth"
          >
            <h3 class="name">Calcium</h3>
            <p class="symbol">Ca</p>
            <p class="number">20</p>
            <p class="weight">40.078</p>
          </div>
          <div
            class="element-item transition metal "
            data-category="transition"
          >
            <h3 class="name">Rhenium</h3>
            <p class="symbol">Re</p>
            <p class="number">75</p>
            <p class="weight">186.207</p>
          </div>
          <div
            class="element-item post-transition metal "
            data-category="post-transition"
          >
            <h3 class="name">Thallium</h3>
            <p class="symbol">Tl</p>
            <p class="number">81</p>
            <p class="weight">204.383</p>
          </div>
          <div class="element-item metalloid " data-category="metalloid">
            <h3 class="name">Antimony</h3>
            <p class="symbol">Sb</p>
            <p class="number">51</p>
            <p class="weight">121.76</p>
          </div>
          <div
            class="element-item transition metal "
            data-category="transition"
          >
            <h3 class="name">Cobalt</h3>
            <p class="symbol">Co</p>
            <p class="number">27</p>
            <p class="weight">58.933</p>
          </div>
          <div
            class="element-item lanthanoid metal inner-transition "
            data-category="lanthanoid"
          >
            <h3 class="name">Ytterbium</h3>
            <p class="symbol">Yb</p>
            <p class="number">70</p>
            <p class="weight">173.054</p>
          </div>
          <div
            class="element-item noble-gas nonmetal "
            data-category="noble-gas"
          >
            <h3 class="name">Argon</h3>
            <p class="symbol">Ar</p>
            <p class="number">18</p>
            <p class="weight">39.948</p>
          </div>
          <div class="element-item diatomic nonmetal " data-category="diatomic">
            <h3 class="name">Nitrogen</h3>
            <p class="symbol">N</p>
            <p class="number">7</p>
            <p class="weight">14.007</p>
          </div>
          <div
            class="element-item actinoid metal inner-transition "
            data-category="actinoid"
          >
            <h3 class="name">Uranium</h3>
            <p class="symbol">U</p>
            <p class="number">92</p>
            <p class="weight">238.029</p>
          </div>
          <div
            class="element-item actinoid metal inner-transition "
            data-category="actinoid"
          >
            <h3 class="name">Plutonium</h3>
            <p class="symbol">Pu</p>
            <p class="number">94</p>
            <p class="weight">(244)</p>
          </div>
        </div>
        <!-- <div class="article-wrapp">
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/news1.png" />
              </div>
              <div class="article-text">
                <p>
                  At GDC 2018 3Lateral will be showing its latest lifelike
                  digital characters brought to life in collaboration with Epic
                  Games. The tech demo will be a part of Epic’s “State of
                  Unreal” keynote talk at GDC 2018, which will be held on
                  Wednesday, March 21st from 9:30-10:30AM (Pacific time). This
                  project is aligned with 3Lateral’s ambitions to empower
                  digital life through technologies and art. More details will
                  follow after the official technology demonstration this
                  Wednesday. The session will be announced on YouTube, Facebook
                  and Twitch. Links:
                  https://www.youtube.com/user/UnrealDevelopmentKit
                  https://www.facebook.com/UnrealEngine/
                  https://www.twitch.tv/unrealengine
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
          <div class="article-content">
            <div class="title">state of unreal-gdc 2019</div>
            <div class="date">
              <p>20.03.2019</p>
            </div>
            <div class="main">
              <div class="article-img">
                <img src="../assets/news/latest-news.jpg" />
              </div>
              <div class="article-text">
                <p>
                  As a part of Epic Game`s keynote held at GDC 2019, Vladimir
                  Mastilovic (3Lateral`s CEO) outlined the evolution of
                  3Lateral’s digital humans and shared the vision for future
                  development of digital humans technologies.
                </p>
              </div>
            </div>
            <router-link to="/">Continue reading</router-link>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import Isotope from "isotope-layout";
// Vue.use(Isotope);
export default {
  name: "LatestNews",
  components: {
    // HelloWorld
  },
  data() {
    return {
      $grid: null
    };
  },
  mounted() {
    var elem = document.querySelector(".grid");
    this.$grid = new Isotope(elem, {
      // options
      itemSelector: ".element-item",
      layoutMode: "fitRows"
    });
  },
  methods: {
    handleFilter(e) {
      //   console.log(e);
      //   console.log(this.$grid);
      this.$grid.arrange({
        filter: e.target.getAttribute("data-filter")
      });
    }
  }
};
</script>
<style lang="scss">
@import "../styles/page.scss";
* {
  box-sizing: border-box;
}

/* ---- button ---- */

.button {
  display: inline-block;
  padding: 10px 18px;
  margin-bottom: 10px;
  background: #eee;
  border: none;
  border-radius: 7px;
  background-image: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0),
    hsla(0, 0%, 0%, 0.2)
  );
  color: #222;
  font-family: sans-serif;
  font-size: 16px;
  text-shadow: 0 1px white;
  cursor: pointer;
}

.button:hover {
  background-color: #8cf;
  text-shadow: 0 1px hsla(0, 0%, 100%, 0.5);
  color: #222;
}

.button:active,
.button.is-checked {
  background-color: #28f;
}

.button.is-checked {
  color: white;
  text-shadow: 0 -1px hsla(0, 0%, 0%, 0.8);
}

.button:active {
  box-shadow: inset 0 1px 10px hsla(0, 0%, 0%, 0.8);
}

/* ---- button-group ---- */

.button-group:after {
  content: "";
  display: block;
  clear: both;
}

.button-group .button {
  float: left;
  border-radius: 0;
  margin-left: 0;
  margin-right: 1px;
}

.button-group .button:first-child {
  border-radius: 0.5em 0 0 0.5em;
}
.button-group .button:last-child {
  border-radius: 0 0.5em 0.5em 0;
}

/* ---- isotope ---- */

.grid {
  border: 1px solid #333;
}

/* clear fix */
.grid:after {
  content: "";
  display: block;
  clear: both;
}

/* ---- .element-item ---- */

.element-item {
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  margin: 5px;
  padding: 10px;
  background: #888;
  color: #262524;
}

.element-item > * {
  margin: 0;
  padding: 0;
}

.element-item .name {
  position: absolute;

  left: 10px;
  top: 60px;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12px;
  font-weight: normal;
}

.element-item .symbol {
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 42px;
  font-weight: bold;
  color: white;
}

.element-item .number {
  position: absolute;
  right: 8px;
  top: 5px;
}

.element-item .weight {
  position: absolute;
  left: 10px;
  top: 76px;
  font-size: 12px;
}

.element-item.alkali {
  background: #f00;
  background: hsl(0, 100%, 50%);
}
.element-item.alkaline-earth {
  background: #f80;
  background: hsl(36, 100%, 50%);
}
.element-item.lanthanoid {
  background: #ff0;
  background: hsl(72, 100%, 50%);
}
.element-item.actinoid {
  background: #0f0;
  background: hsl(108, 100%, 50%);
}
.element-item.transition {
  background: #0f8;
  background: hsl(144, 100%, 50%);
}
.element-item.post-transition {
  background: #0ff;
  background: hsl(180, 100%, 50%);
}
.element-item.metalloid {
  background: #08f;
  background: hsl(216, 100%, 50%);
}
.element-item.diatomic {
  background: #00f;
  background: hsl(252, 100%, 50%);
}
.element-item.halogen {
  background: #f0f;
  background: hsl(288, 100%, 50%);
}
.element-item.noble-gas {
  background: #f08;
  background: hsl(324, 100%, 50%);
}

.category-wrapp {
  text-align: center;
  width: 100%;
  .category-list {
    display: block;
    margin: 30px 0;
    list-style: none;
    font-weight: 300;
    font-family: $basic-font;
    .category-item {
      display: inline-block;
      font-size: 20px;
      text-transform: uppercase;
      &:not(:first-child):before {
        margin: 0 10px;
        color: #010101;
        content: "/";
      }
      a {
        color: #de4242;
        text-decoration: none;
        line-height: inherit;
        cursor: pointer;
        transition: color 0.2s ease-in 0s;
        &:active {
          border-bottom: 2px solid #de4242;
        }
        &:hover {
          color: #d32525;
          border-bottom: 2px solid #de4242;
          cursor: pointer;
        }
      }
    }
  }
}
.article-wrapp {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 479px) {
    flex-direction: column;
  }
}
.article-content {
  //   background: red;
  width: 50%;
  margin-bottom: 20px;
  padding: 0 15px;
  @media (max-width: 479px) {
    width: 100%;
  }
  .title {
    margin-bottom: 25px;
    position: relative;
    text-transform: uppercase;
    font-size: 25px;
    line-height: 1.5;
    &:after {
      width: 48px;
      height: 4px;
      position: absolute;
      left: 0;
      top: calc(100% + 15px);
      background-color: $orange;
      content: "";
    }
  }
  .date {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 300;
    font-family: $basic-font;
  }
  .main {
    width: 100%;
    .article-img {
      max-width: 180px;
      margin: 0 15px 10px 0;
      float: left;
      vertical-align: middle;
      @media (max-width: 820px) {
        float: initial;
        display: block;
        text-align: center;
        max-width: 100%;
      }
      img {
        @media (max-width: 820px) {
          width: 100%;
        }
      }
    }
    .article-text {
      color: #333;
      font-size: 16px;
      line-height: 1.375;
      @media (max-width: 820px) {
        display: block;
      }
    }
  }
  a {
    cursor: pointer;
  }
}
</style>
