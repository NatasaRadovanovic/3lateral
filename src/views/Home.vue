<template>
  <div class="home">
    <div class="header-home">
      <div class="header-home-image">
        <img src="../assets/static_image.jpg" />
      </div>
      <div
        class="header-home-content"
        :class="{ contentAnimate: contentAnimate }"
      >
        <div class="header-home-title">
          3Lateral Studio is built around passion for creating <br />characters
          and creatures
        </div>
        <button class="header-home-button">read more</button>
      </div>
      <div class="note-page">
        <div class="note-content">
          <div class="note-label">Events</div>
          <span class="label-underline"></span>
          <div class="note-msg">
            <i>3Lateral is a part of Epic Games - Unreal Engine Team!</i>
          </div>
        </div>
      </div>
    </div>
    <div class="services-page">
      <Services />
    </div>
    <div class="project-home">
      <div class="project-text">
        <p>
          Throught 15 years we've worked on more than 200 projects in
          categories:
        </p>
      </div>
      <div class="links-wrapp">
        <router-link class="project-link" to="/">vr</router-link>
        <router-link class="project-link" to="/">3D scanning</router-link>
        <router-link class="project-link" to="/">characters</router-link>
        <router-link class="project-link" to="/">concept</router-link>
        <router-link class="project-link" to="/">creature</router-link>
        <router-link class="project-link" to="/">face</router-link>
        <router-link class="project-link" to="/">film</router-link>
        <router-link class="project-link" to="/">games</router-link>
        <router-link class="project-link" to="/">motion</router-link>
      </div>
      <button>see our projects</button>
    </div>
    <div class="latest-news-home">
      <LatestNews />
    </div>
    <div class="about-home">
      <About />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Services from "@/views/Services.vue";
import LatestNews from "@/views/latestNews.vue";
import About from "@/views/About.vue";

export default {
  name: "Home",
  components: {
    About,
    Services,
    LatestNews
  },
  data() {
    return {
      contentAnimate: false
    };
  },
  mounted() {
    setTimeout(() => {
      return (this.contentAnimate = true);
    }, 1000);
  }
};
</script>
<style lang="scss">
.home {
  position: relative;
  min-height: 100vh;
  .header-home {
    position: relative;
    text-align: center;
    color: white;
    @media (max-width: 820px) {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .header-home-image > img {
      width: 100%;
      opacity: 0.9;
      @media (max-width: 820px) {
        z-index: 200;
      }
    }

    .header-home-content {
      opacity: 0;
      margin: 0;
      padding: 0 10%;
      position: absolute;
      left: 0;
      top: 20%;
      right: 0;
      z-index: 20;
      transition: all 1s;
      @media (max-width: 1000px) {
        scale: 0.3;
        margin-top: -100px;
      }
      @media (max-width: 820px) {
        background: #fff;
        color: #000;
        order: 1;
        position: static;
        margin-top: 10px;
      }
      .header-home-title {
        color: #fff;
        font-size: 48px;
        margin-bottom: 20px;
        font-weight: 400;
        font-family: "Oswald", Arial, sans-serif;
        font-style: normal;
        // text-rendering: optimizeLegibility;
        margin-top: 0;
        line-height: 1.4;
        @media (max-width: 1000px) {
          font-size: 38px;
        }
        @media (max-width: 820px) {
          color: #010101;
          // white-space: nowrap;
          font-size: 40px;
          padding-top: 30px;
          padding-bottom: 30px;
        }
      }
      .header-home-button {
        display: inline-block;
        border: 0;
        background-color: #de4242;
        color: #fff;
        font-family: "Oswald", Arial, sans-serif;
        line-height: 1;
        text-transform: uppercase;
        padding: 10px 40px;
        font-size: 32px;
        cursor: pointer;
        &:hover {
          background-color: #e66d6d;
          color: #fff;
        }
        @media (max-width: 1000px) {
          padding: 10px 30px;
          font-size: 28px;
        }
        @media (max-width: 820px) {
          font-size: 20px;
          padding: 10px 30px;
        }
      }
    }
    .contentAnimate {
      opacity: 1;
      top: 50%;
      @media (max-width: 820px) {
        opacity: 1;
      }
    }
  }
  .note-page {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    z-index: 50;
    width: 100%;
    padding: 14px 0;
    margin: 0;
    @media (max-width: 820px) {
      position: static;
      transform: unset;
      order: 1;
      padding: 14px 0px 0px 0px;
    }
    .note-content {
      background: #000;
      max-width: 73.125rem;
      margin: 0 auto;
      padding: 40px 0;
      display: flex;
      justify-content: center;
      position: relative;
      @media (max-width: 820px) {
        position: static;
        flex-direction: column;
        transition: all 0s;
      }
      &:before {
        position: absolute;
        left: 0;
        top: 100%;
        border-style: solid;
        border-color: transparent #de4242 transparent transparent;
        border-width: 0 15px 15px 0;
        content: "";
      }
      &:after {
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translateY(100%);
        border-style: solid;
        border-color: transparent transparent transparent #de4242;
        border-width: 0 0 15px 15px;
        content: "";
      }
      .note-label {
        position: absolute;
        transform: translateY(-50%);
        left: 100px;
        font-family: "Oswald", Arial, sans-serif;
        // line-height: 1.5;
        font-size: 25px;
        text-transform: uppercase;
        @media (max-width: 820px) {
          position: static;
        }
        &:after {
          content: "";
          position: absolute;
          top: calc(100% + 5px);
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 4px;
          background: #de4242;
        }
      }
    }
  }
  .project-home {
    width: 100%;
    text-align: center;
    background-color: #de4242;
    padding: 30px 0;
    color: #fff;
    font-family: "Oswald", Arial, sans-serif;
    margin-top: 30px;
    .project-text p {
      max-width: 480px;
      margin: auto auto 40px;
      text-transform: none;
      font-weight: 300;
      font-family: "Oswald", Arial, sans-serif;
      font-size: 33px;
      position: relative;
      &:after {
        content: "";
        width: 48px;
        height: 4px;
        background-color: #fff;
        position: absolute;
        top: calc(100% + 15px);
        left: 50%;
      }
    }
    .links-wrapp {
      line-height: inherit;
      cursor: pointer;
      font-size: 20px;
      text-transform: uppercase;
      padding-bottom: 40px;
      // font-weight: 300;
      .project-link {
        text-decoration: none;
        color: #fff;
        font-weight: normal;
        &:hover {
          text-decoration: underline;
        }
        &:not(:first-child):before {
          margin: 0 10px;
          color: #010101;
          content: "/";
        }
      }
    }
    button {
      border: 4px solid #fff;
      background-color: transparent;
      padding: 10px 40px;
      font-size: 32px;
      display: inline-block;
      font-family: "Oswald", Arial, sans-serif;
      line-height: 1;
      text-transform: uppercase;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #e66d6d;
      }
    }
  }
  .latest-news-home {
    margin-top: -50px;
  }
}
</style>
