class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() { return this.#items; };
  addItem(newItem) {
    let newItemArray = (this.#items.push(newItem));
    return (newItemArray);
  };
  removeItem(itemToRemove) {
    if (this.#items.includes(itemToRemove)) { return this.#items.splice(this.#items.indexOf(itemToRemove), 1) }
    ;
  };
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]