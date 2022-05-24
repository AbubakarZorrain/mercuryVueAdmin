<template>
  <div class="">

    <navSideBar />
    <div class="d-flex">
      <sideBar class="w-25" />
      <div class="main m-5 w-75">
        <div class="row m-0 firstrow">
          <div class="col-12 d-flex justify-content-between text-white p-1 m-1">
            <div class="mt-1 pl-1 firstrowheading">
              <h1>Jobs</h1>
            </div>
            <div>
              <button class="addjobBtn mt-1 pr-1" data-toggle="modal" data-target="#jobPostModalCenter"><svg width="39" height="39" viewBox="0 0 39 39" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M38.0714 19.0938C38.0714 20.7176 36.76 22.0322 35.1429 22.0322H21.9643V35.2509C21.9643 36.8748 20.6528 38.1875 19.0357 38.1875C17.4186 38.1875 16.1071 36.8748 16.1071 35.2509V22.0322H2.92857C1.31145 22.0322 0 20.7176 0 19.0938C0 17.4699 1.31145 16.1572 2.92857 16.1572H16.1071V2.93842C16.1071 1.31453 17.4186 0 19.0357 0C20.6528 0 21.9643 1.31453 21.9643 2.93842V16.1572H35.1429C36.7627 16.1562 38.0714 17.4689 38.0714 19.0938Z"
                    fill="white" />
                </svg>
                Add New Job</button>
            </div>
          </div>
        </div>
        <div class="row mt-5 ">

          <div class="postsection m-0 ">
            <div class="row pl-5">
              Node.Js Developer
            </div>
            <div class="row pl-5">2-5 years - Experience</div>
            <div class="row pl-5">
              <div class="col">
                <router-link to="">
                  <button class="buttonstyle textalign">
                    <div class="">
                      Job Description
                    </div>
                  </button>
                </router-link>
              </div>
            </div>
            <div class="row pl-5">
              <div class="col">
                <li>Knows and have implemented serverless architecture</li>
                <li> Worked with NoSQL and AWS DynamoDB (optional)</li>
                <li>Knows and implemented CI/CD</li>
              </div>
            </div>
            <div class="row m-5 jobsection">
              <div class="row pl-5">
                <div class="col-2 p-1 skill">Key Skills:</div>
                <div class="col-6 p-1 skilldetail">Node.Js, CI/CD, Typescript, NoSql</div>
              </div>
            </div>
            <div class="row m-5 jobsection">
              <div class="row pl-5">
                <div class="col-2 p-1 skill">Key Skills:</div>
                <div class="col-6 p-1 skilldetail">Node.Js, CI/CD, Typescript, NoSql</div>
              </div>
            </div>
            <div class="row pl-5">
              <div class="col float-end ml-auto">
                <router-link to="">
                  <button class="buttonstyle textalign" data-toggle="modal" data-target="#deleteModalCenter">
                    <div class="">
                      Delete Job
                    </div>
                  </button>
                </router-link>
              </div>
              <div class="col float-end ml-auto">
                <router-link to="">
                  <button class="Updatebuttonstyle textalign" data-toggle="modal" data-target="#jobUpdateModalCenter">
                    <div class="">
                      Update Job
                    </div>
                  </button>
                </router-link>
                <deleteModal />
                <jobUpdateModal />
                <addJob />
                <jobPostModal />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
// import Vue from 'vue'   // in Vue 2
import Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import navSideBar from './navSideBar.vue';
import FooterPage from './footer.vue';
import sideBar from './sidebar.vue';
import deleteModal from './deletepost.vue';
import jobUpdateModal from './jobupdateModal.vue';
import addJob from './addJob.vue';
import jobPostModal from './jobPostModal.vue'
export default {
  name: "jobPage",
  components: {
    navSideBar,
    sideBar,
    FooterPage,
    deleteModal,
    jobUpdateModal,
    addJob,
    jobPostModal
  },
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

<style scoped>
.main {
  margin: 0px;

}

.addjobBtn {
  background: #5FE0B5;
  border-radius: 5px;
}

.firstrow {
  border: 1px solid #928F8F;
  border-radius: 5px;
}

.firstrowheading {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 75px;
  text-align: center;

  color: #02285B;
}

.postsection {
  background: #FFFFFF;
  border: 1px solid #928F8F;
  border-radius: 5px;
}

.buttonstyle {
  background: #FF6D6B;
  border-style: solid;
  border-color: #FFFFFF;
  border-radius: 4px;
}
.Updatebuttonstyle {
    background: #04A8F5;
    border-radius: 5px;
    border-style: solid;
    border-color: #FFFFFF;

}
.textalign {
  text-align: center;
  color: white;
}

.jobsection {
  background: #E5E5E5;
}

.skill {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  color: #FF6D6B;
}

.skilldetail {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  color: #323232;
}
</style>