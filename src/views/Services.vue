<template>
  <div class="page-wrapper">
    <div class="page-section">
      <div class="title">
        <h1>Services</h1>
      </div>
      <div class="grid">
        <div class="item1">
          <div class="item-content">
            <h3 class="title light">charachter concept</h3>
            <div class="item-text">
              <p class="light">
                3Lateral is currently employed to define visual style and design
                of 30 primary characters in feature length animation movie. We
                are able to communicate design through traditional and digital
                medium.
              </p>
            </div>
          </div>
        </div>
        <div class="item2 position">
          <div class="item-img">
            <img src="../assets/services/item2.jpg" />
          </div>
        </div>
        <div class="item3">
          <div class="item-content dark">
            <h3 class="title light">charachter rigging</h3>
            <div class="item-text">
              <p class="light">
                With our RnD department we are constantly working on new
                solutions for rigging characters. We equally favor quality and
                productivity and term “solution” means satisfying both criteria
                for given task. Contact us for inquiries about your specific
                needs.
              </p>
            </div>
          </div>
        </div>
        <div class="item4 position">
          <div class="item-img">
            <img src="../assets/services/item-img.png" />
          </div>
        </div>
        <div class="item5 position">
          <div class="item-img">
            <img src="../assets/services/item-img.png" />
          </div>
        </div>
        <div class="item6 position">
          <div class="item-img">
            <img src="../assets/services/item-img.png" />
          </div>
        </div>
        <div class="item7 position">
          <div class="item-content">
            <h3 class="title light">Face rigging</h3>
            <div class="item-text">
              <p class="light">
                Face rigging is huge topic at 3Lateral mainly because of
                extensive experience our team has and robust proprietary
                software we have built for this purpose. Our solutions go from
                current generation game rigs (PS3/Xbox 360/ PC) over next gen
                grade face rigs to VFX quality rigs. This is one area where we
                are extremely productive while still satisfying highest
                production organization standards and quality requirements. Face
                rigging is a very dynamic topic in the industry and we encourage
                you to contact us to gather latest information about
                developments in this field at 3Lateral.
              </p>
            </div>
          </div>
        </div>
        <div class="item8">
          <div class="item-content light">
            <h3 class="title dark">character modeling</h3>
            <div class="item-text">
              <p class="dark">
                Closely related to previous, it is often most efficient to
                realize our (or client’s ) designs in form of ordered mesh with
                all necessary high resolution sculpts and textures. Our clients
                often prefer that we rig these models which increases the
                efficiency of whole process as we will always know best what
                kind of meshes to build for future steps in the whole pipeline.
              </p>
            </div>
          </div>
        </div>
        <div class="item9">
          <div class="item-content light">
            <h3 class="title dark">3d scaning</h3>
            <div class="item-text">
              <p class="dark">
                Closely related to previous, it is often most efficient to
                realize our (or client’s ) designs in form of ordered mesh with
                all necessary high resolution sculpts and textures. Our clients
                often prefer that we rig these models which increases the
                efficiency of whole process as we will always know best what
                kind of meshes to build for future steps in the whole pipeline.
              </p>
            </div>
          </div>
        </div>
        <div class="item10 position">
          <div class="item-img">
            <img src="../assets/services/item-img.png" />
          </div>
        </div>
        <div class="item11 position">
          <div class="item-content dark">
            <h3 class="title light">simulation</h3>
            <div class="item-text">
              <p class="light">
                We offer a range of computer simulation services related to CG
                Characters- muscle, hair and cloth type simulations in popular
                packages as well as developing custom solvers.
              </p>
            </div>
          </div>
        </div>
        <div class="item12 position">
          <div class="item-img">
            <img src="../assets/services/item-img.png" />
          </div>
        </div>
        <div class="item13">
          <div class="item-content">
            <h3 class="title light">pipline and consulting</h3>
            <div class="item-text">
              <p class="light">
                3Lateral offers consulting and pipeline development services
                related to face rigging and animation. Through extensive
                experience and knowledge of our team we are helping our clients
                to avoid common problems, minimize risk and back and forth
                processes in their productions.
              </p>
            </div>
          </div>
        </div>
        <div class="item14 position">
          <div class="item-img">
            <img src="../assets/services/item-img.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  components: {
    // HelloWorld
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../styles/page.scss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 440px;
  max-width: 73.125rem;
  margin-left: auto;
  margin-right: auto;
  border: 0.5px solid grey;
  grid-template-areas:
    "item1 item2 item2"
    "item3 item4 item5"
    "item6 item7 item8"
    "item9 item10 item11"
    "item12 item13 item14";
  font-family: "Oswald", Arial, sans-serif;
}

.item-content {
  padding: 30px;
  background-color: #de4242;
  height: 100%;
  &.dark {
    background: #010101;
  }
  &.light {
    background: #fff;
  }
  .title {
    margin-bottom: 30px;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 400;
    position: relative;
    &:after {
      content: "";
      width: 48px;
      height: 4px;
      position: absolute;
      background-color: #010101;
      left: 0%;
      top: calc(100% + 12px);
    }
  }
  p {
    font-size: 14px;
    margin: 20px 0 0;
    line-height: 1.5;
  }
  .light {
    color: #fff;
  }
  .dark {
    color: #010101;
  }
}
.position {
  position: relative;
}
.item-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.item1 {
  grid-area: item1;
}
.item2 {
  grid-area: item2;
}
.item3 {
  grid-area: item3;
}
.item4 {
  grid-area: item4;
}
.item5 {
  grid-area: item5;
}
.item6 {
  grid-area: item6;
}
.item7 {
  grid-area: item7;
}
.item8 {
  grid-area: item8;
}
.item9 {
  grid-area: item9;
}
.item10 {
  grid-area: item10;
}
.item11 {
  grid-area: item11;
}
.item12 {
  grid-area: item12;
}
.item13 {
  grid-area: item13;
}
.item14 {
  grid-area: item14;
}
// responsive 2 col
@media (max-width: 1023px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 440px;
    border: 0.5px solid grey;
    grid-template-areas:
      "item1 item2"
      "item5 item8"
      "item3 item4"
      "item6 item7"
      "item8 item11"
      "item9 item10"
      "item13 item14";
    font-family: "Oswald", Arial, sans-serif;
  }
}
// responsive 1 col
@media (max-width: 820px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 73.125rem;
    margin-left: auto;
    margin-right: auto;
    border: 0.5px solid grey;
    grid-template-areas:
      "item2"
      "item1"
      "item5"
      "item8"
      "item4"
      "item3"
      "item6"
      "item7"
      "item12"
      "item9"
      "item10"
      "item11"
      "item14"
      "item13";
    font-family: "Oswald", Arial, sans-serif;
  }
}
</style>
