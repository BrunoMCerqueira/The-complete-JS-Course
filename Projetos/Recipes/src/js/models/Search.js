import axios from 'axios';


export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(){
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = '034df1eb03833db0692e7c3d0e82f00f'
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.results = res.data.recipes;
      // console.log(this.result);
    } catch(error) {
      alert(error);
    }
  }
}


