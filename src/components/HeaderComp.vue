<template>
  <header id="header">
    <div class="center">
      <div id="logo" style="vertical-align: center;">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand"> <strong>Movie</strong> Project</span>
      </div>
      <nav id="menu" >
        <ul style="padding-top: 7px;">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Set List</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>
