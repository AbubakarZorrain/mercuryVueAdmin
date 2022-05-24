<template>
    <div class="">
        <div class="modal fade" id="deleteModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Alert</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                       <div class="col">
                            <svg width="111" height="94" viewBox="0 0 111 94" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M109.761 80.7812L63.5163 4.40625C59.9758 -1.46875 51.0413 -1.46875 47.477 4.40625L1.25429 80.7812C-2.30347 86.6353 2.1278 94 9.25872 94H101.748C108.85 94 113.295 86.6562 109.761 80.7812ZM50.2912 28.5357C50.2912 25.7556 52.6218 23.5 55.4945 23.5C58.3671 23.5 60.6978 25.7661 60.6978 28.5357V55.3929C60.6978 58.173 58.3671 60.4286 55.6896 60.4286C53.0121 60.4286 50.2912 58.1835 50.2912 55.3929V28.5357ZM55.4945 80.5714C51.7308 80.5714 48.6781 77.6171 48.6781 73.9746C48.6781 70.3321 51.7286 67.3779 55.4945 67.3779C59.2604 67.3779 62.3108 70.3321 62.3108 73.9746C62.3022 77.6129 59.2669 80.5714 55.4945 80.5714Z"
                                fill="#C92020" />
                        </svg>
                       </div>
                        <div class="col"><h3 class="color-danger">Are you sure, you want to delete it!</h3></div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
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

export default {
    name: "deleteModal",
    mounted: function () {
        this.getProjects();
    },
    methods: {

    }
};
</script>

<style>
</style>