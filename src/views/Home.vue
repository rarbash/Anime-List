<template>
  <div class="home">
    <br />
    <br />
    <img alt="Page logo" class="logo" src="@/assets/cartoon.png" />
    <br />
    <br />
    <br />
    <h1>Welcome to anime Top 10 list</h1>
    <br />
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Category</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>On Air</td>
          <td>Ended</td>
          <td>Upcoming</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style>
.logo {
  width: 25%;
  height: 25%;
}
</style>
