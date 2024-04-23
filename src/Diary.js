export default class Diary {
  // Properties
  #name;
  #entries = [];

  //Behaviours

  addEntry = (entry) => this.#entries.push(entry);

    getEntry = () => this.#entries;
    
}