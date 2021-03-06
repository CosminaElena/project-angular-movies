import { MovieDetails } from '../movies/movie-details/movie-details.movie';

export interface MovieModel {
  id: number;
  name: string;
  genre: string;
  year: string;
  rating: string;
  image: string;
  description: string;
}

export const movies: MovieModel[] = [
  {
    id: 1,
    name: 'Interstellar',
    genre: 'Action',
    year: '2014',
    rating: '8.6',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    description:
      ' Viitorul Pământului a fost zdrobit de dezastre, foamete și secete. Există o singură modalitate de a asigura supraviețuirea omenirii: călătoriile interstelare. O gaură de vierme nou descoperită în zonele îndepărtate ale sistemului nostru solar permite unei echipe de astronauți să meargă acolo unde niciun om nu a mers înainte, o planetă care ar putea avea mediul potrivit pentru a susține viața umană.',
  },

  {
    id: 2,
    name: 'The Godfather',
    genre: 'Crime/Drama ',
    year: '1972',
    rating: '9.1',
    image:
      'https://reelaffinity.files.wordpress.com/2013/09/29a-the-godfather-1972.jpg',
    description:
      ' Nașul „Don” Vito Corleone este șeful familiei mafiei Corleone din New York. El se află la evenimentul nunții fiicei sale. Michael, fiul cel mai mic al lui Vito și un marin decorat din al doilea război mondial este de asemenea prezent la nuntă. Michael pare să nu fie interesat să facă parte din afacerea familiei. Vito este un om puternic și este amabil cu toți cei care îi oferă respect, dar este nemilos împotriva celor care nu. Dar când un rival puternic și trădător vrea să vândă droguri și are nevoie de influența lui Don, Vito refuză să o facă. Ceea ce urmează este o ciocnire între vechile valori decolorate ale lui Vito și noile modalități care îl pot determina pe Michael să facă ceea ce el a fost cel mai reticent în a face și a purta un război mafiot împotriva tuturor celorlalte familii mafiote care ar putea sfâșia familia Corleone.',
  },

  {
    id: 3,
    name: 'The Dark Knight',
    genre: '1',
    year: '2008',
    rating: '9.0',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    description:
      ' Situat în decurs de un an după evenimentele din Batman Begins (2005), Batman, locotenentul James Gordon și noul procuror Harvey Dent încep cu succes să-i adune pe criminalii care afectează orașul Gotham, până când un misterios și sadic creier criminal cunoscut doar ca „The Joker "apare în Gotham, creând un nou val de haos. Lupta lui Batman împotriva The Joker devine profund personală, forțându-l să „înfrunte tot ce crede” și să-și îmbunătățească tehnologia pentru a-l opri. Un triunghi amoros se dezvoltă între Bruce Wayne, Dent și Rachel Dawes.',
  },

  {
    id: 4,
    name: '12 Angry Men',
    genre: 'Action',
    year: '1957',
    rating: '8.9',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg',
    description:
      ' Apărarea și acuzarea s-au odihnit, iar juriul se depune în sala de juri pentru a decide dacă un tânăr este vinovat sau nevinovat de uciderea tatălui său. Ceea ce începe ca un caz deschis și închis de crimă devine în curând o poveste detectivistă care prezintă o succesiune de indicii care creează îndoială și o mini-dramă a prejudecăților și preconcepțiilor fiecărui jurat cu privire la proces, acuzat ȘI unii pe alții . Pe baza piesei, toată acțiunea are loc pe scena sălii de juriu.',
  },

  {
    id: 5,
    name: 'Beginning',
    genre: 'Drama/Narrative',
    year: '2020',
    rating: '6.6',
    image: 'https://pbs.twimg.com/media/Es52nXqW4AEhSMi.jpg',
    description:
      ' Într-un oraș de provincie adormit, o comunitate a Martorilor lui Iehova este atacată de un grup extremist. În mijlocul acestui conflict, lumea familiară a lui Yana, soția liderului comunității, se năruie încet. Nemulțumirea interioară a Yanei crește pe măsură ce se străduiește să-și dea sens dorințelor.',
  },
  {
    id: 6,
    name: 'The Prison of Angels',
    genre: 'Drama',
    year: '1994',
    rating: '9.2',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507928247l/36407780._SY475_.jpg',
    description:
      ' Cronică experiențele unui fost bancher de succes ca prizonier în închisoarea mohorâtă din Shawshank după ce a fost găsit vinovat de o crimă pe care nu a comis-o. Filmul descrie modul unic al omului de a face față noii sale vieți chinuitoare; pe parcurs se împrietenește cu mai mulți colegi prizonieri, mai ales cu un înțelept deținut de lungă durată pe nume Red.',
  },
];

export class Movies {
  page: number;
  results!: MovieModelDetails[];
  total_pages!: number;
  total_results!: number;
}

export class MovieModelDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
