let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat(name) {
    cats.push(name);
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function appendCat(name) {
    return [...cats, name];
  }

  function prependCat(name) {
    return [name, ...cats];
  }

  function removeLastCat() {
    return cats.slice(0, -1);
  }

  function removeFirstCat() {
    return cats.slice(1);
  }


  console.log(destructivelyAppendCat("Bella"), cats);

  console.log(destructivelyPrependCat("Luna"), cats);

  console.log(destructivelyRemoveLastCat(), cats);

  console.log(destructivelyRemoveFirstCat(), cats);

  console.log(appendCat("Bella"));

  console.log(prependCat("Luna"));

  console.log(removeLastCat());

  console.log(removeFirstCat());


