<template>
  <div class="page-wrapper">
    <div class="page-section">
      <div class="title">
        <h1>News</h1>
        <div class="category-wrapp">
          <ul class="category-list">
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter="*"
                >all</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".events"
                >events</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".press"
                >press</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".technology"
                >technology</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".workshops"
                >workshops</a
              >
            </li>
          </ul>
        </div>
        <!-- isotope-->
        <div class="grid">
          <div class="element-item events">
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
              <router-link to="/news/1">Continue reading</router-link>
            </div>
          </div>
          <div class="element-item press">
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
          </div>
          <div class="element-item events">
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
          </div>
          <div class="element-item technology">
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
          </div>
          <div class="element-item events">
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
          </div>
          <div class="element-item press">
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
          </div>
          <div class="element-item press">
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
          </div>
          <div class="element-item press">
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
          </div>
          <div class="element-item workshops">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import Isotope from "isotope-layout";
// Vue.use(Isotope);
export default {
  name: "News",
  components: {
    // HelloWorld
  },
  data() {
    return {
      $grid: null
    };
  },
  mounted() {
    setTimeout(() => {
      var elem = document.querySelector(".grid");
      this.$grid = new Isotope(elem, {
        itemSelector: ".element-item",
        layoutMode: "fitRows"
      });
    }, 100);
  },
  methods: {
    handleFilter(e) {
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
/* ---- isotope ---- */
.grid {
  border: none;
}

/* clear fix */
.grid:after {
  // content: "";
  // display: block;
  // clear: both;
}

/* ---- .element-item ---- */

.element-item {
  width: 50%;
  // float: left;
  // width: 100px;
  // height: 100px;
  // margin: 5px;
  // padding: 10px;
  // background: #888;
  // color: #262524;
  @media (max-width: 479px) {
    width: 100%;
  }
}

.element-item > * {
  margin: 0;
  padding: 0;
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
  width: 100%;
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
