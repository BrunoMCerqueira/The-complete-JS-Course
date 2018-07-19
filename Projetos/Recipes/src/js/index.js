import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';
const state = {};

const controlSearch = async () => {
  // Get query from view
  const query = searchView.getInput();

  if(query) {
    // New search object and add to state
    state.search = new Search(query);

    // Prepare view for result
    searchView.clearInput();
    searchView.clearResults();

    // Search for recipes
    await state.search.getResults();

    // render result on UI
    searchView.renderResults(state.search.results);
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
