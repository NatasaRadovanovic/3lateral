<template>
  <div class="page-wrapper">
    <div class="page-section">
      <div class="title">
        <h1>Projects</h1>
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
                data-filter=".vr"
                >vr</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".3d"
                >3d scanning</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".charachter"
                >charachter</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".concept"
                >concept</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".creature"
                >creature</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".face"
                >face</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".film"
                >film</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".games"
                >games</a
              >
            </li>
            <li class="category-item">
              <a
                class="project-link"
                @click="handleFilter($event)"
                data-filter=".motion"
                >motion</a
              >
            </li>
          </ul>
        </div>
        <!-- isotope-->
        <div class="grid">
          <div class="element-item charachter creature face film motion">
            <div class="img-container">
              <img src="../assets/projects/project1.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digital and serkis&osiris black blended performance
                </div>
                <div class="project-category">
                  <p>charachter, creature, face, film, motion</p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item 3d face motion">
            <div class="img-container">
              <img src="../assets/projects/project2.jpg" />
              <div class="project-info">
                <div class="project-title">
                  siren
                </div>
                <div class="project-category">
                  <p>3d scanning, face, motion</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="element-item 3d character concept creature face film games motion"
          >
            <div class="img-container">
              <img src="../assets/projects/project1.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    3d scanning, charachter, concept, creature, face, film,
                    games, motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item charachter face games motion">
            <div class="img-container">
              <img src="../assets/projects/project2.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    charachter, face, games, motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item character games motion">
            <div class="img-container">
              <img src="../assets/projects/project1.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    charachter, games, motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item 3d charachter face games motion">
            <div class="img-container">
              <img src="../assets/projects/project2.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    charachter, face, games, motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item charachter games motion">
            <div class="img-container">
              <img src="../assets/projects/project1.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    charachter games motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item charachter face games motion">
            <div class="img-container">
              <img src="../assets/projects/project2.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    charachter, face, games, motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item concept motion">
            <div class="img-container">
              <img src="../assets/projects/project1.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    concept, motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item concept motion">
            <div class="img-container">
              <img src="../assets/projects/project2.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    concept, motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item concept motion">
            <div class="img-container">
              <img src="../assets/projects/project1.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    concept, motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item concept motion">
            <div class="img-container">
              <img src="../assets/projects/project2.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    concept, motion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="element-item concept motion">
            <div class="img-container">
              <img src="../assets/projects/project1.jpg" />
              <div class="project-info">
                <div class="project-title">
                  digitaly andy serkis and osiris black
                </div>
                <div class="project-category">
                  <p>
                    concept, motion
                  </p>
                </div>
              </div>
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
  name: "Projects",
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
      itemSelector: ".element-item",
      layoutMode: "fitRows"
    });
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
<style lang="scss" scoped>
.grid {
  border: none;
}
.element-item {
  width: 33.333%;
  @media (max-width: 1023px) {
    width: 50%;
  }
  @media (max-width: 479px) {
    width: 100%;
  }
}
.element-item > * {
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss">
@import "../styles/page.scss";
* {
  box-sizing: border-box;
}
/* ---- isotope ---- */
.img-container {
  position: relative;
  width: 100%;
  img {
    transition: transform 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      z-index: 1000;
    }
  }
  .project-info {
    padding: 5px 15px;
    position: absolute;
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    color: #fff;
    text-transform: uppercase;
    font-family: $basic-font;
    .project-title {
      font-size: 18px;
      line-height: 36px;
      font-weight: 700;
      display: inline-block;
      padding-right: 5px;
    }
    .project-category {
      font-weight: 300;
      display: inline-block;

      p {
        margin-bottom: 0px;
        &:before {
          color: #de4242;
          content: "/ ";
        }
      }
    }
  }
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
</style>
