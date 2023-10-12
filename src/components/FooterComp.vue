<template>
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>About Us</h3>
        <p>Movie Project by Tadeo Miranda Front End TechTest.</p>
        <p>This App was my very first interaction learning Vue.js</p>
      </div>
      <div class="col-md-3">
        <h3>Movie List</h3>
        <ul>
          <li>Good movies</li>
          <li>Average movies</li>
          <li>Bad movies</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h3>Contact Us</h3>
        <p>123 Street, City</p>
        <p>info@example.com</p>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "FooterComp",
};
</script>

<style scoped>

.footer {
  background-color: #35495E;
  color: #fff;
  padding: 40px 0;
}

.footer h3 {
  color: #fff;
  font-size: 18px;
}

.footer p {
  font-size: 14px;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer ul li {
  margin-bottom: 10px;
}

.footer ul li a {
  color: #fff;
  text-decoration: none;
}

.footer ul li a:hover {
  color: #bbb;
}

@media (max-width: 767px) {
  .footer .col-md-6,
  .footer .col-md-3 {
    text-align: center;
    margin-bottom: 30px;
  }
}

</style>