export default class Diary {
  // Properties
  #name;
  #entries = [];

  //Behaviours

  addEntry = (entry) => {
    if (entry === null) {
      return;
    };
    this.#entries.push(entry);
  }

    getEntry = () => this.#entries;
    
}