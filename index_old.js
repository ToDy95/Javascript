// // // console.log('din body');
// // console.table()
// // var nume = 'nume';
// // var nume = "dsadsas"
// // let ceva = 'ceva';

// // const altceve = 'altceva';

// // let array = [1, 2, 3, 'abc', 'def'];

// // // console.log(array[3]);

// // let object = {
// //   key1: 'val1',
// //   key2: 'val2',
// // };
// // console.log(object['key1']);
// // [
// //   {
// //     key1: 'val1',
// //     key2: 'val2',
// //   },
// //   {
// //     key1: 'val1',
// //     key2: 'val2',
// //   },
// //   {
// //     key1: 'val1',
// //     key2: 'val2',
// //   },
// // ];

// // function numeFunctie() {
// //   return 'return ';
// // }

// // function namePlusCeva(params) {
// //   return params;
// // }
// // // console.log(name('parametru'));
// // function abc(a, b) {
// //   return a - b;
// // }
// // //  sau

// // // daca nu aveti logica si doar returnati direct o operatie e recomandat sa nu le mai puneti
// // const abc2 = (a, b) => a - b;
// // // sau
// // //in caz ca vreti mai multa logica (cu acolade si return)
// // const abc3 = (a, b) => {
// //   a = a + 10;
// //   b = b + 11;

// //   return a - b;
// // };

// //filter
// const words = [
//   'spray',
//   'sprayS',
//   'limit',
//   'elite',
//   'exuberant',
//   'destruction',
//   'present',
// ];

// const result = words.filter(word => word.length > 6);

// const result2 = words.filter(word => word.includes('spr'));

// // // console.log(result2);

// // // Expected output: Array ["exuberant", "destruction", "present"]

// // // -------------------------------------------------------------------sort
// // const array1 = [1, 30, 4, 21, 100000];
// // let array321 = [...array1];
// // let array321 = [array1[0],array1[1],array1[2] sa sa mai departe];
// // ? de unde stii cate elemente are array-ul ?

// // array1.sort((c, d) => d - c); (descrescator)
// // array1.sort((c, d) => c - d); (crescator)

// // console.log(array321);
// // console.log(array1);
// // a - b
// // 1   30  => daca rezultatu e - negativ inseamna ca 1 < 30 => 1 e lasat a devine 30
// // [1, 30, 4, 21, 100000]; a = 1 , b = 30 (nimic schimbat, trece mai departe)
// // 30 - 4 =>  daca rezultatul este + (pozitiv) inseamna ca 4 mai mic decat 30 si ii ia locul
// // [1, 30, 4, 21, 100000]; a = 30 , b = 4 30 > 4 deci inversam locurile
// // [1, 4, 30, 21, 100000]; a = 30 , b = 21 => acelasi lucru inversam
// // [1, 4, 21, 30, 100000];
// // o ia de la capat => 1 > 4

// // console.log(array1);
// // Expected output: Array [1, 100000, 21, 30, 4]

// //concant
// // const array1 = ['a', 'b', 'c'];
// // const array2 = ['d', 'e', 'f'];
// // // const array3 = array1.concat(array2);
// // const array3 = array2.concat(array1);

// // console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]
// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------pop
// // const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// // //aray original
// // console.log(plants.pop()); // am scos afara ultimul element din array => tomato
// // // Expected output: "tomato"

// // console.log(plants); // am primit array-ul din nou dupa ce am scos afara ultimul element
// // // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

// // plants.pop(); //iar rulez pop  => rezulta un array fara TOMATO si fara KALE

// // console.log(plants);
// // Expected output: Array ["broccoli", "cauliflower", "cabbage"]
// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------push
// // const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('cows');
// // console.log(count);
// // // Expected output: 4
// // console.log(animals);
// // // Expected output: Array ["pigs", "goats", "sheep", "cows"]

// // animals.push('chickens', 'cats', 'dogs');
// // console.log(animals);
// // Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------find
// // const array1 = [5, 12, 8, 130, 44];

// // const found = array1.find((element) => element > 10);

// // console.log(found);
// // Expected output: 12
// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------

// //findIndex
// // const array1 = [5, 12, 8, 130, 44];

// // const isLargeNumber = (element) => element > 13;

// // console.log(array1.findIndex(isLargeNumber));
// // Expected output: 3

// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------shift

// // const array1 = [1, 2, 3];

// // const firstElement = array1.shift();

// // console.log(array1);
// // // Expected output: Array [2, 3]

// // console.log(firstElement);
// // Expected output: 1

// // -------------------------------------------------------------------unshift

// // const array1 = [1, 2, 3];

// // console.log(array1.unshift(4, 5));
// // // Expected output: 5

// // console.log(array1);
// // // Expected output: Array [4, 5, 1, 2, 3]
// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------slice
// // const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// // console.log(animals.slice(2));
// // // Expected output: Array ["camel", "duck", "elephant"]

// // console.log(animals.slice(2, 4));
// // // Expected output: Array ["camel", "duck"]

// // console.log(animals.slice(1, 5));
// // // Expected output: Array ["bison", "camel", "duck", "elephant"]

// // console.log(animals.slice(-2));
// // // Expected output: Array ["duck", "elephant"]

// // console.log(animals.slice(2, -1));
// // // Expected output: Array ["camel", "duck"]

// // console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
// // ---------------------------------------------------------------------splice

// // // TO remove

// // const scores = [1, 2, 3, 4, 5];
// // console.log(scores, 'array original'); // [4, 5]

// // // Remove three array elements, starting with the first one (index 0)
// // const deletedScores = scores.splice(0, 3);

// // // The scores array now contains two elements
// // console.log(scores, 'ce ramane din array original'); // [4, 5]

// // // The deletedScores array contains three deleted elements
// // console.log(
// //   deletedScores,
// //   'splice(0, 3) itemele scoase de intre index 0 si pana la index 3'
// // ); // [1, 2, 3]

// // TO ADD SOME

// // const colors = ['red', 'green', 'blue'];

// // colors.splice(2, 0, 'purple'); // ADAUGA-MI la index 2 scotant 0 ELEMENTE cuvantul purple

// // console.log(colors); // ["red", "green", "purple", "blue"]

// // REPLACEMENT

// // const languages = ['C', 'C++', 'Java', 'JavaScript'];
// // console.log(languages, 'array original');

// // // Replace the element with index 1 with a new one
// // languages.splice(1, 1, 'Python');
// // console.log(
// //   languages,
// //   'la index 1 scoatemi 1 element si adauga mi python in schimb'
// // ); // ["C", "Python", "Java", "JavaScript"]

// // // Replace one element (with index 2) with several ones
// // languages.splice(2, 1, 'C#', 'Swift', 'Go');
// // console.log(
// //   languages,
// //   'la index 2 scoatemi un element (JAVA (si eu l-as scoate) si adaugi-mi 3 elemente , elementele viitoare fiind impinse cate pozitii este necesar )'
// // ); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// // rezulta red index0 green index 1 purple index 2 blue (impins pe index 3)

// // const arrayDeTest = ['ana', 'are', 'mere'];

// // // ---------------------------------------------------------------------map
// // arrayDeTest.map(element => console.log(element));
// // map iti genereaza o copie al array-ul original ( ARRAYDETEST in cazul nostru) si lucreaza pe ea
// // ---------------------------------------------------------------------forEach\

// // arrayDeTest.forEach(element => console.log(element));
// // Lucreaza direct pe array-ul original riscand sa stricam datele din el (irecuperabil)
// // ---------------------------------------------------------------------for

// // console.log(arrayDeTest);

// // for (let index = 0; index < arrayDeTest.length; index++) {
// //   const element = arrayDeTest[index];
// //   console.log(element);
// // }
// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------if

// // let andrei = {
// //   ani: 28,
// //   nume: 'Andrei',
// // };
// // let George = {
// //   ani: 26,
// //   nume: 'Gigel',
// // };
// // if (a) return b;
// // else return c;
// // if (andrei['ani'] > George['ani']) {
// //   console.log(andrei[nume], 'este mai mare');
// // } else if (andrei['ani'] === George['ani']) {
// //   console.log(andrei[nume], 'si', George[nume], ' au aceeasi varsta');
// // } else {
// //   console.log(George[nume], 'este mai mare');
// // }
// // echivalent;
// // andrei['ani'] > George['ani']
// //   ? console.log(andrei[nume], 'este mai mare')
// //   : andrei['ani'] === George['ani']
// //   ? console.log(andrei[nume], 'si', George[nume], ' au aceeasi varsta')
// //   : console.log(George[nume], 'este mai mare');

// // ---------------------------------------------------------------------

// // --------------------------------------------------------------------- tarnay operator (sau if infline)
// // let a = 5;
// // let b = 6;

// // a > 5 ? console.log('a mai mare de cat 5') : console.log('b mai mare decat a');
// // echivalent
// // if (a > 5) {
// //   console.log('a mai mare de cat 5');
// // } else {
// //   console.log('b mai mare decat a');
// // }

// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------while

// // let i = 1;

// // while (i < 5) {
// //   console.log('I este ', i);
// //   ++i;
// // }

// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------for of

// // for (element of arrayDeTest) {
// //   console.log(element);
// // }

// // ---------------------------------------------------------------------

// // ---------------------------------------------------------------------switch

// // const expr = 'Papayas;
// // switch (expr) {
// //   case 'Oranges':
// //     console.log('Oranges are $0.59 a pound.');
// //     break;
// //   case 'Mangoes':
// //     console.log('Mangoes  are $3.79 a pound.');
// //     break;
// //   case 'Papayas':
// //     console.log('Mangoes  are $2.79 a pound.');
// //     break;
// //   default:
// //     console.log(`Sorry, we are out of ${expr}.`);
// // }

// // ---------------------------------------------------------------------

// // OBIECTE
// // const obiect = {
// //   a: 'ceva',
// //   2: undefined,
// //   3: 3,
// //   abc: true,
// //   obiect: {
// //     name: 'gigi',
// //   },
// // };

// // CONSTRUCOR
// // const o = new Object();
// // o.foo = 42;

// // console.log(o);
// // { foo: 42 } rar folosit in zilel noastre echivalent let a = {}

// // asign

// // const target = { a: 1, b: 2 };
// // const source = { b: 4, c: 5 };

// // // const returnedTarget = Object.assign(target, source);
// // const returnedTarget = {...target, ...source} // sau desctucturat asa
// // //nou obiect returnedTarget

// // //am luat valoarea din target adica a=1 , b= 2
// // // +
// // //valoare din source b=4 , c = 5  si rezulta

// // // a = 1 b = 2 b = 4 c = 5  // daca o keys se repeta se pastreaza ultima valoare

// // // console.log(target);
// // // // Expected output: Object { a: 1, b: 4, c: 5 }

// // // console.log(returnedTarget === target);
// // // Expected output: true

// // console.log(returnedTarget)

// // CREATE

// // const person = {
// //   isHuman: false,
// //   printIntroduction: function () {
// //     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
// //   },
// // };

// // const me = Object.create(person);

// // me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// // me.isHuman = true; // Inherited properties can be overwritten

// // me.printIntroduction();
// // // Expected output: "My name is Matthew. Am I human? true"

// // FREEZE

// // const obj = {
// //   prop: 42,
// // };

// // Object.freeze(obj);

// // obj.prop = 33;
// // // Throws an error in strict mode

// // console.log(obj.prop);
// // // Expected output: 42

// // isFrozen
// // const object1 = {
// //   property1: 42,
// // };

// // console.log(Object.isFrozen(object1));
// // // Expected output: false

// // Object.freeze(object1);

// // console.log(Object.isFrozen(object1));
// // // Expected output: true

// // Object.values
// // const object1 = {
// //   a: 'somestring',
// //   b: 42,
// //   c: false,
// // };
// // const arr = Object.values(object1);
// // console.log(Object.values(object1));
// // // Expected output: Array ["somestring", 42, false]
// // arr.map(e => console.log(e))
// // info correct din db
// // [
// //   {
// //     name:"name"
// //   },
// //   {
// //     name:"name2"
// //   }
// // ]
// // // greseala in schema din db
// // {
// //   {
// //     dsada:dsadsa
// //   },
// //   {
// //     dsads:dsadsa
// //   }
// // }

// // Object.keys iti arata keyle existent in obiect sub forma de array
// // const object1 = {
// //   a: 'somestring',
// //   b: 42,
// //   c: false,
// // };

// // console.log(Object.keys(object1));
// // // Expected output: Array ["a", "b", "c"]

// // preventExtensions actioneaza ca si freeze (diferenta facand o ca poti modifica valorile curente din obiect)

// // const object1 = {};

// // console.log(Object.isExtensible(object1));
// // // Expected output: true

// // Object.preventExtensions(object1);
// //isExtensible // verifici daca a fost blocat pentru a fi extins sau nu
// // console.log(Object.isExtensible(object1));
// // // Expected output: false

// // hasOwn

// // const object1 = {
// //   prop: 'exists',
// // };

// // console.log(Object.hasOwn(object1, 'prop'));
// // // Expected output: true

// // console.log(Object.hasOwn(object1, 'toString'));
// // // Expected output: false

// // console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
// // // Expected output: false
