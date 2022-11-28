const books = [
    { title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5 },
    { title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2 },
    { title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7 },
    { title: '10th Joy', pages: 32, genre: 'action', rating: 8 },
    { title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1 },
    { title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3 },
    { title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9 },
    { title: '300', pages: 600, genre: 'criminology', rating: 10 },
    { title: 'Renewer', pages: 472, genre: 'biology', rating: 2 },
];

const compose = (...fns) => (initialVal) => fns.reduce((val, fn) => fn(val), initialVal);

const parzysteStrony = (book) => book.filter((b) => b.pages % 2 == 0);
const ostatniaLitera = (book) => book.filter((b) => b.genre.endsWith("y"));
const iloscLiter = (book) => book.map((b) => b.title.split(" ").join("").length);

const tytulZawieraLiczbe = (book) => book.filter((b) => /\d/.test(b.title));
const nieparzysteStrony = (book) => book.filter((b) => b.pages % 2 != 0);
const pozytywneOceny = (book) => book.filter((b) => b.rating > 5).length;

const tytuly = (book) => book.map((b) => b.title);
const drugiNajdluzszyTytul = (titles) => titles.sort((a, b) => a.length - b.length).at(-2);

const zad6 = compose(iloscLiter, parzysteStrony, ostatniaLitera);
const zad7 = compose(nieparzysteStrony, tytulZawieraLiczbe, pozytywneOceny);
const zad8 = compose(tytuly, drugiNajdluzszyTytul);

console.log(zad6(books));
console.log(zad7(books));
console.log(zad8(books)); 