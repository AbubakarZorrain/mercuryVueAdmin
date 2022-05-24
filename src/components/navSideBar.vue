
<template>
  <!--  eslint-disable  -->
  <!--  eslint-disable  -->

  <html>

  <body>

    <nav class="navbar navbar-expand-lg block2 text-white">
      <div class="m-0 p-4 ">
        <router-link to="/">
          <img src="../assets/block2logo.png" alt="" class="block2img" />
        </router-link>
      </div>
      <button class="navbar-toggler border border-2 border-dark w-10" type="button" data-toggle="collapse"
        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->



      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav w-100 pl-7">



          <div class="nav-item nav-link float-end text-white p-0">
            <div class="block2signinblock d-flex">
              <div class="">
                <img src="../assets/block2vector.png" alt="" class="block2vectorimg" />
              </div>
              <div class="block2signIn   text-center p-b-1">
                <router-link to="/" class="anchorStyles2">
                  SignIn</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    
  </body>

  </html>
</template>
<script>
/* eslint-disable */
// eslint-disable-next-line
// import Vue from 'vue'   // in Vue 2
import Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "homePage",
  data() {
    return {

    };
  },
  mounted: function () {
    this.getProjects();
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block2 {
  background: white;
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
}

.block9 {
    width: 100%;
    /* height: 419px; */
    /* left: -2px; */
    /* top: 4665px; */
    margin: 0;
    background: #02285b;
}

.block9logoblock {
    /* width: 500px; */

}

.block9logo {
    width: 100%;
    /* height: 76px;
  left: 147px;
  top: 77px; */
}

.block9circle1 {
    /* width: 55px; */
    /* height: 55px; */
    /* left: 156px; */
    /* top: 223px; */
    margin-left: 10px;
    border-radius: 50%;
    background: #3e5e7e;
}

.block9lntxt {
    /* left: 15.36%;
  right: 15.71%;
  top: 15.27%;
  bottom: 15.27%; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 38px;
    text-align: center;
    color: white;
}

.block9circle2 {
    /* width: 55px;
  height: 55px;
  left: 231px;
  top: 223px; */
    border-radius: 50%;
    background: #3e5e7e;
}

.block9circle3 {
    /* width: 55px;
  height: 55px;
  left: 306px;
  top: 223px; */
    border-radius: 50%;
    background: #3e5e7e;
}

.block9circle4 {
    /* width: 55px;
  height: 55px;
  left: 396px;
  top: 223px; */
    border-radius: 50%;
    background: #3e5e7e;
}

.block9icon {
    /* left: 28.93%;
  right: 25.14%;
  top: 30.27%;
  bottom: 27.27%; */
}

.block9cc {
    /* width: 299px;
  height: 29px;
  left: 147px;
  top: 307px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
}

.block9contact {
    /* width: 200px;
  height: 38px;
  left: 630px;
  top: 79px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    text-align: center;

    color: #ffffff;
}

.block9emailimgblock {
    width: 50px;
}

.block9emailimg1 {
    /* left: 637px;
  top: 176px; */
    width: 50px;
}

.block9email1 {
    /* width: 214px;
  height: 30px;
  left: 673px;
  top: 172px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
}

.block9emailimg2 {
    /* left: 637px;
  top: 226px; */
    width: 50px;
}

.block9email2 {
    /* width: 214px;
  height: 30px;
  left: 673px;
  top: 222px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
}

.block9phimg1 {
    /* left: 637px;
  top: 271px;
   */
    width: 50px;
}

.block9ph1 {
    /* width: 214px;
  height: 30px;
  left: 673px;
  top: 272px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
}

.block9phimg2 {
    /* left: 637px;
  top: 316px; */
    width: 50px;
}

.block9ph2 {
    /* width: 214px;
  height: 30px;
  left: 673px;
  top: 316px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #ffffff;
}

.block9location {
    /* left: 1025px;

  top: 88px; */
}

.block9locationtxt {
    /* left: 1055px;
  right: 85px;
  top: 144px;
  bottom: 208.25px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
}

.block9button {
    /* left: 1055px;
  right: 120px;
  top: 320px;
  bottom: 90px;
  width: 258px;
  height: 54px; */

    background: #e29e4e;
    border-radius: 5px;
}

.block9buttontxt {
    /* width: 300px;
  height: 45px;
  left: -25px;
  top: 8px; */

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    text-align: center;

    color: #ffffff;
}

a {
    color: white;
    font-style: none;
    text-decoration: none;
}
</style>