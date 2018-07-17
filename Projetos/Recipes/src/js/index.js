/*import str from './models/Search';
import { add, multiply, op } from './views/searchView';
import * as searchView from './views/searchView';
console.log(`Using imported functions ${add(op, 2)} and ${multiply(3, 5)}. ${str}`);
console.log(searchView.op);
*/
//http://food2fork.com/api/search
//034df1eb03833db0692e7c3d0e82f00f
import axios from 'axios';

async function getResult(query){
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = '034df1eb03833db0692e7c3d0e82f00f'
  try {
    const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(res.data.recipes);
  } catch(error) {
    alert(error);
  }
}

getResult('pizza');
