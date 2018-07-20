import axios from 'axios';
import { key, proxy } from '../config';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe(){
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = '034df1eb03833db0692e7c3d0e82f00f'

    try {
      const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
      // console.log(this.result);
    } catch(error) {
      alert(error);
    }
  }


  calcTime () {
    // Assuming 15 min for each 3 ingredients
    const num = this.ingredients.length;
    const periods = Math.ceil(num / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }
}


