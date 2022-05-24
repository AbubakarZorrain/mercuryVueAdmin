<template>
    <div class="">
        <div class="modal fade" id="jobUpdateModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Update Job</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form action="">
                        <div class="modal-body">

                            <div class="">
                                <div class="row">
                                    <div class="col">
                                        <h5 class="color-danger">Job Name</h5>
                                        <input type="text">
                                    </div>
                                    <div class="col">
                                        <h5 class="color-danger">Experience</h5>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h5 class="color-danger">Key Skills</h5>
                                        <input type="text">
                                    </div>
                                    <div class="col">
                                        <h5 class="color-danger">Location</h5>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h5 class="color-danger">Description</h5>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
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
    name: "jobUpdateModal",
    mounted: function () {

    },
    methods: {

    }
};
</script>

<style>
</style>