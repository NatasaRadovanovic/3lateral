<template>
  <div class="footer">
    <footer>
      <div class="col">
        <img src="../assets/logo-alt.png" />
      </div>
      <div class="col">
        <p>© 2019 All Rights Reserved.</p>
      </div>
      <div class="col">
        <div class="col-flex">
          <p>Mind over matter. |</p>
          <div class="media-icon">
            <i class="fa fa-facebook-square"></i>
            <i class="fa fa-twitter-square"></i>
            <i class="fa fa-vimeo-square"></i>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
.footer {
  background-color: #fff;
  bottom: 0;
  width: 100%;
  footer {
    max-width: 73.125rem;
    margin: 0 auto;
    width: 60%;
    display: flex;
    align-content: center;
    align-items: center;
    @media (max-width: 820px) {
      flex-direction: column;
      height: auto;
      width: 100%;
    }
    .col-flex {
      display: flex;
      align-items: center;
      flex-direction: row;

      .media-icon {
        padding: 10px;
        cursor: pointer;
        display: flex;
        align-content: center;
        align-items: center;
        i {
          padding: 6px;
          font-size: 28px;
          &:hover {
            color: #de4242;
          }
          @media (max-width: 820px) {
            width: 30%;
            font-size: 20px;
            padding: 5px;
          }
        }
      }
    }
    .col {
      flex: 0 0 33.3333%;
      max-width: 33.3333%;
      text-align: center;
      display: inline-block;
      width: 33.3333333333%;
      padding: 30px 20px;
      @media (max-width: 820px) {
        padding: 17px 20px;
      }
      p {
        font-size: 16px;
        text-align: center;
        font-family: "Open Sans";
        white-space: nowrap;
      }
    }
  }
}
</style>
