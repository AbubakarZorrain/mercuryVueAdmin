<template>
<div class="">
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white sideblock " style="width: 280px; height:100%">

      <ul class="nav nav-pills flex-column mb-auto" style="height:100%">
        <li class="nav-item">
          <router-link to="/jobs" class="nav-link text-white sideinnerblock">
            Jobs
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link text-white sideinnerblock">
            Projects
          </router-link>
        </li>
      </ul>
      <hr>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sideblock {
  background: #02285B;
}
.sideinnerblock {
  background: #001C42;
  border-radius: 0px;
}
</style>
