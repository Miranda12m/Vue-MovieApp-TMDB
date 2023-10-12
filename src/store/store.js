export const state = () => ({
  filters: [],
  subfilters: [],
  activeFilter: null,
  activeSubFilter: null
})

export const mutations = {
  add(state, filter) {
    state.filters.push(filter)
  },
  addSub(state, subfilter) {
    state.subfilters.push(subfilter);
  },

  toggle(state, selectedFilter) {
    state.activeFilter = selectedFilter
  },
  toggleSub(state, selectedSubFilter) {
    state.activeSubFilter = selectedSubFilter
  }
}
