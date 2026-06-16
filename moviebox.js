// Movie Data Array with Real Poster URLs
const movies = [
    {
        id: 1,
        title: "The Batman",
        year: 2022,
        genre: "Action",
        categories: ["All", "Action", "Trending"],
        poster_url: "https://tse2.mm.bing.net/th/id/OIP.ggHEg_xMWmxopHLTcUOQbgHaK9?rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        categories: ["All", "Sci-Fi", "Action", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
        id: 3,
        title: "Oppenheimer",
        year: 2023,
        genre: "Biography",
        categories: ["All", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb."
    },
    {
        id: 4,
        title: "Joker",
        year: 2019,
        genre: "Crime",
        categories: ["All", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime."
    },
    {
        id: 5,
        title: "Spider-Man: No Way Home",
        year: 2021,
        genre: "Action",
        categories: ["All", "Action", "Sci-Fi", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear."
    },
    {
        id: 6,
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        categories: ["All", "Sci-Fi", "Trending"],
        poster_url: "https://th.bing.com/th/id/OIP.nYw6Hmn6O4KhXczF9GPFRAHaKl?w=202&h=288&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        id: 7,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        categories: ["All", "Action", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
        id: 8,
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        categories: ["All", "Action", "Sci-Fi", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions."
    },
    {
        id: 9,
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        categories: ["All", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        id: 10,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        categories: ["All", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        id: 11,
        title: "Avatar: The Way of Water",
        year: 2022,
        genre: "Sci-Fi",
        categories: ["All", "Sci-Fi", "Action", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."
    },
    {
        id: 12,
        title: "Top Gun: Maverick",
        year: 2022,
        genre: "Action",
        categories: ["All", "Action", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission."
    },
    {
        id: 13,
        title: "Everything Everywhere All at Once",
        year: 2022,
        genre: "Adventure",
        categories: ["All", "Action", "Sci-Fi", "Trending"],
        poster_url: "https://tse3.mm.bing.net/th/id/OIP.TQsIf9hiVqWQ9JuuQr813QHaKe?rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save the existence by exploring other universes and connecting with the lives she could have led."
    },
    {
        id: 14,
        title: "The Conjuring",
        year: 2013,
        genre: "Horror",
        categories: ["All", "Horror", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
    },
    {
        id: 15,
        title: "Get Out",
        year: 2017,
        genre: "Horror",
        categories: ["All", "Horror", "Trending"],
        poster_url: "https://th.bing.com/th/id/OIP.TZx7RWdWa8JM16uUGG0txQHaKX?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
    },
    {
        id: 16,
        title: "Hereditary",
        year: 2018,
        genre: "Horror",
        categories: ["All", "Horror"],
        poster_url: "https://th.bing.com/th/id/OIP.-SSkEkXmGMtsk60p7i-9IgHaJQ?w=202&h=253&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother."
    },
    {
        id: 17,
        title: "The Notebook",
        year: 2004,
        genre: "Romance",
        categories: ["All", "Romance", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
        description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences."
    },
    {
        id: 18,
        title: "Titanic",
        year: 1997,
        genre: "Romance",
        categories: ["All", "Romance", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    },
    {
        id: 19,
        title: "La La Land",
        year: 2016,
        genre: "Romance",
        categories: ["All", "Romance"],
        poster_url: "https://th.bing.com/th/id/OIP.-z5aZ8MrV3ylRQ47bQ3V8wHaKe?w=202&h=286&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
    },
    {
        id: 20,
        title: "Pride and Prejudice",
        year: 2005,
        genre: "Romance",
        categories: ["All", "Romance"],
        poster_url: "https://image.tmdb.org/t/p/w500/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg",
        description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class."
    },
    {
        id: 21,
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        categories: ["All", "Sci-Fi", "Action"],
        poster_url: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
    },
    {
        id: 22,
        title: "Blade Runner 2049",
        year: 2017,
        genre: "Sci-Fi",
        categories: ["All", "Sci-Fi"],
        poster_url: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years."
    },
    {
        id: 23,
        title: "Dune",
        year: 2021,
        genre: "Sci-Fi",
        categories: ["All", "Sci-Fi", "Action"],
        poster_url: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
    },
    {
        id: 24,
        title: "John Wick",
        year: 2014,
        genre: "Action",
        categories: ["All", "Action"],
        poster_url: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him."
    },
    // Drama Series
    {
        id: 25,
        title: "Breaking Bad",
        year: 2008,
        genre: "Drama",
        categories: ["All", "Series", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        description: "A high school chemistry teacher turned methamphetamine manufacturing drug dealer navigates the dangerous criminal underworld while providing for his family."
    },
    {
        id: 26,
        title: "Game of Thrones",
        year: 2011,
        genre: "Drama",
        categories: ["All", "Series", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
    },
    {
        id: 27,
        title: "The Crown",
        year: 2016,
        genre: "Drama",
        categories: ["All", "Series"],
        poster_url: "https://th.bing.com/th/id/OIP.3VsvPXL02DEF92zM8F4AAgHaLD?w=202&h=302&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century."
    },
    {
        id: 28,
        title: "Stranger Things",
        year: 2016,
        genre: "Drama",
        categories: ["All", "Series", "Sci-Fi", "Horror", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
    },
    {
        id: 29,
        title: "The Sopranos",
        year: 1999,
        genre: "Drama",
        categories: ["All", "Series", "Trending"],
        poster_url: "https://th.bing.com/th/id/OIP.K9dBPMlMGhSIZIJjWKhSbwHaL3?w=122&h=195&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state."
    },
    {
        id: 30,
        title: "Succession",
        year: 2018,
        genre: "Drama",
        categories: ["All", "Series", "Trending"],
        poster_url: "https://th.bing.com/th/id/OIP.HP674qpvl4rVFSzaqJyfqQHaLH?w=202&h=303&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down."
    },
    {
        id: 31,
        title: "Better Call Saul",
        year: 2015,
        genre: "Drama",
        categories: ["All", "Series"],
        poster_url: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
        description: "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman."
    },
    {
        id: 32,
        title: "The Wire",
        year: 2002,
        genre: "Drama",
        categories: ["All", "Series"],
        poster_url: "https://th.bing.com/th/id/OIP.Ilpr2cjkKe9FqyK4t4hhqgHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement."
    },
    {
        id: 33,
        title: "Money Heist",
        year: 2017,
        genre: "Drama",
        categories: ["All", "Series", "Action", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg",
        description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain."
    },
    {
        id: 34,
        title: "Ozark",
        year: 2017,
        genre: "Drama",
        categories: ["All", "Series", "Trending"],
        poster_url: "https://tse4.mm.bing.net/th/id/OIP.oe-HL_YRUSWXg32l-LTq-QHaLF?rs=1&pid=ImgDetMain&o=7&rm=3",
        description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss."
    },
    {
        id: 35,
        title: "Peaky Blinders",
        year: 2013,
        genre: "Drama",
        categories: ["All", "Series", "Action", "Trending"],
        poster_url: "https://th.bing.com/th/id/OIP.2R5ngodxcmUfvIsvKeK-8AHaKX?w=202&h=282&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps."
    },
    {
        id: 36,
        title: "The Mandalorian",
        year: 2019,
        genre: "Sci-Fi",
        categories: ["All", "Series", "Sci-Fi", "Action", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
        description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic."
    },
    {
        id: 37,
        title: "Squid Game",
        year: 2021,
        genre: "Drama",
        categories: ["All", "Series", "Action", "Trending"],
        poster_url: "https://th.bing.com/th/id/OIP.fGHMmgQpigLZ_WHzHI1xcwHaLH?w=202&h=303&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games with deadly stakes."
    },
    {
        id: 38,
        title: "Narcos",
        year: 2015,
        genre: "Drama",
        categories: ["All", "Series", "Action"],
        poster_url: "https://th.bing.com/th/id/OIP.mrLdu0FXjq_v5BKGH4bE5QHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country."
    },
    {
        id: 39,
        title: "Dark",
        year: 2017,
        genre: "Sci-Fi",
        categories: ["All", "Series", "Sci-Fi", "Horror"],
        poster_url: "https://th.bing.com/th/id/OIP.OUWZxWfPqL_GS7EuKZGFDQHaK-?w=202&h=300&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families."
    },
    {
        id: 40,
        title: "Chernobyl",
        year: 2019,
        genre: "Drama",
        categories: ["All", "Series", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
        description: "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes."
    },
    {
        id: 41,
        title: "Mindhunter",
        year: 2017,
        genre: "Drama",
        categories: ["All", "Series", "Crime"],
        poster_url: "https://th.bing.com/th/id/OIP.LDvTKya6ADBRWRayk_EUEwHaLH?w=202&h=303&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases."
    },
    {
        id: 42,
        title: "Fargo",
        year: 2014,
        genre: "Drama",
        categories: ["All", "Series", "Crime"],
        poster_url: "https://th.bing.com/th/id/R.0b8fb3e85905bd8f0ce311c68556a30d?rik=%2b6%2b5HbRK5VynjQ&riu=http%3a%2f%2fimpawards.com%2f1996%2fposters%2ffargo.jpg&ehk=NEbYdQ92op87WQ8FxWyr0hGFkSrhpn62r34nSPdZv9M%3d&risl=&pid=ImgRaw&r=0",
        description: "Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota."
    },
    {
        id: 43,
        title: "True Detective",
        year: 2014,
        genre: "Drama",
        categories: ["All", "Series", "Crime", "Trending"],
        poster_url: "https://th.bing.com/th/id/OIP.3JpjQOJE-tcQ9mbiAvdS4wHaJ4?w=202&h=269&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law."
    },
    {
        id: 44,
        title: "The Boys",
        year: 2019,
        genre: "Action",
        categories: ["All", "Series", "Action", "Sci-Fi", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
        description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers."
    },
    {
        id: 45,
        title: "House of Cards",
        year: 2013,
        genre: "Drama",
        categories: ["All", "Series"],
        poster_url: "https://th.bing.com/th/id/OIP.gvUJAw4kvI8Z53wjsS99LwHaK9?w=202&h=300&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him."
    },
    {
        id: 46,
        title: "Vikings",
        year: 2013,
        genre: "Action",
        categories: ["All", "Series", "Action"],
        poster_url: "https://th.bing.com/th/id/OIP.KH_2GE6gPBQCoQ_twNARMgHaKu?w=202&h=293&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        description: "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore and raid the distant shores across the ocean."
    },
    {
        id: 47,
        title: "Black Mirror",
        year: 2011,
        genre: "Sci-Fi",
        categories: ["All", "Series", "Sci-Fi", "Horror"],
        poster_url: "https://image.tmdb.org/t/p/w500/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg",
        description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide."
    },
    {
        id: 48,
        title: "The Witcher",
        year: 2019,
        genre: "Action",
        categories: ["All", "Series", "Action", "Sci-Fi", "Trending"],
        poster_url: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
        description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts."
    }
];

// My List (saved movies)
let myList = [];

// DOM Elements
const movieGrid = document.getElementById('movieGrid');
const xflexView = document.getElementById('xflexView');
const menuLinks = document.querySelectorAll('.menu-link');
const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));

// X-Flex Scroll Containers
const scrollContainers = {
    'Action': document.getElementById('actionScroll'),
    'Sci-Fi': document.getElementById('scifiScroll'),
    'Horror': document.getElementById('horrorScroll'),
    'Romance': document.getElementById('romanceScroll'),
    'Series': document.getElementById('seriesScroll')
};

// Fallback image for broken poster URLs
const fallbackImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTFhMWEiLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db21pbmcgU29vbjwvdGV4dD4KPC9zdmc+';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMovies('All');
    renderXFlexSections();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Filter movies
            const category = link.getAttribute('data-category');
            renderMovies(category);
        });
    });
}

// Filter and Render Movies
function renderMovies(category) {
    // Toggle between X-Flex view and Grid view
    if (category === 'X-Flex') {
        xflexView.classList.remove('d-none');
        movieGrid.classList.add('d-none');
        return;
    } else if (category === 'All') {
        xflexView.classList.remove('d-none');
        movieGrid.classList.add('d-none');
        return;
    } else {
        xflexView.classList.add('d-none');
        movieGrid.classList.remove('d-none');
    }
    
    movieGrid.innerHTML = '';
    
    let filteredMovies;
    
    if (category === 'My List') {
        filteredMovies = movies.filter(movie => myList.includes(movie.id));
        if (filteredMovies.length === 0) {
            movieGrid.innerHTML = `
                <div class="col-12 empty-state">
                    <i class="bi bi-collection"></i>
                    <h4>Your List is Empty</h4>
                    <p>Add movies to your list to see them here.</p>
                </div>
            `;
            return;
        }
    } else {
        filteredMovies = movies.filter(movie => movie.categories.includes(category));
    }
    
    filteredMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieGrid.appendChild(movieCard);
    });
}

// Render X-Flex Genre Sections
function renderXFlexSections() {
    // Clear all containers
    Object.values(scrollContainers).forEach(container => {
        if (container) container.innerHTML = '';
    });
    
    // Render each genre section
    const genres = ['Action', 'Sci-Fi', 'Horror', 'Romance', 'Series'];
    
    genres.forEach(genre => {
        const container = scrollContainers[genre];
        if (!container) return;
        
        const genreMovies = movies.filter(movie => movie.categories.includes(genre));
        
        genreMovies.forEach(movie => {
            const card = createXFlexCard(movie);
            container.appendChild(card);
        });
    });
}

// Create X-Flex Card Element
function createXFlexCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <div class="movie-poster-wrapper">
            <img src="${movie.poster_url}" 
                 alt="${movie.title}" 
                 class="movie-poster"
                 onerror="this.src='${fallbackImage}'">
        </div>
        <div class="movie-info">
            <h6 class="movie-title">${movie.title}</h6>
            <p class="movie-meta">${movie.year} • ${movie.genre}</p>
        </div>
    `;
    
    // Add click event for modal
    card.addEventListener('click', () => openModal(movie));
    
    return card;
}

// Create Movie Card Element
function createMovieCard(movie) {
    const col = document.createElement('div');
    col.className = 'col';
    
    const isInMyList = myList.includes(movie.id);
    
    col.innerHTML = `
        <div class="movie-card" data-movie-id="${movie.id}">
            <div class="movie-poster-wrapper">
                <img src="${movie.poster_url}" 
                     alt="${movie.title}" 
                     class="movie-poster"
                     onerror="this.src='${fallbackImage}'">
            </div>
            <div class="movie-info">
                <h6 class="movie-title">${movie.title}</h6>
                <p class="movie-meta">${movie.year} • ${movie.genre}</p>
            </div>
        </div>
    `;
    
    // Add click event for modal
    const card = col.querySelector('.movie-card');
    card.addEventListener('click', () => openModal(movie));
    
    return col;
}

// Open Movie Modal
function openModal(movie) {
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalPoster').src = movie.poster_url;
    document.getElementById('modalPoster').onerror = function() {
        this.src = fallbackImage;
    };
    document.getElementById('modalYear').textContent = movie.year;
    document.getElementById('modalGenre').textContent = movie.genre;
    document.getElementById('modalDescription').textContent = movie.description;
    
    movieModal.show();
}
