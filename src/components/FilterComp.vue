<template>
  <div class="filters">
    <h3>Filters</h3>
    <div class="container" style="align-items: center">
      <div class="row align-items-center">
        <div class="form-group col-6">
          <label for="search">Search:</label>
          <input
            type="text"
            id="search"
            placeholder="Movie"
            v-model="searchQuery"
            class="form-control"
            style="height: 34px"
          />
        </div>
        <div class="form-group col-4">
          <label for="genre">Vote Average:</label>
          <select id="genre" v-model="selectedVoted" class="form-select">
            <option value="">All</option>
            <option v-for="vote in voteAverage" :value="vote.id" :key="vote.id">
              {{ vote.name }}
            </option>
          </select>
        </div>

        <div class="col-2" style="margin-top: 10px">
          <button @click="applyFilters" class="btn btn-primary custom-button">
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedVoted: "",
      searchQuery: "",
      voteAverage: [
        { id: 1, name: "More than 8" },
        { id: 2, name: "Between 8 and 6" },
        { id: 3, name: "Less than 6" },
      ],
    };
  },
  methods: {
    applyFilters() {
      this.$emit("filters-applied", {
        voted: this.selectedVoted,
        search: this.searchQuery,
      });
    },
  },
};
</script>

<style scoped>
.filters {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

h3 {
  margin-bottom: 10px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #666;
}

select.form-control {
  width: 35%;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button.btn-primary {
  display: block;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #41B883;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.btn-primary:hover {
  background-color: #35495E;
}

button.btn-primary:focus {
  outline: none;
  box-shadow: none;
}



</style>
