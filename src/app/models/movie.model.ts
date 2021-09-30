export interface MovieModel {
 
 
  id: number;
  name: string;
  rank: string;
  year: string;
  rating: string;
  image: string;
  description: string;
}

export const movies: MovieModel[] = [
  {
    id: 1,
    name: 'The Prison of Angels',
    rank: '1',
    year: '1994',
    rating: '9.2',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507928247l/36407780._SY475_.jpg',
    description: '',
  },

  {
    id: 2,
    name: 'The Godfather',
    rank: '2',
    year: '1972',
    rating: '9.1',
    image:
      'https://reelaffinity.files.wordpress.com/2013/09/29a-the-godfather-1972.jpg',
    description:" Nașul „Don” Vito Corleone este șeful familiei mafiei Corleone din New York. El se află la evenimentul nunții fiicei sale. Michael, fiul cel mai mic al lui Vito și un marin decorat din al doilea război mondial este de asemenea prezent la nuntă. Michael pare să nu fie interesat să facă parte din afacerea familiei. Vito este un om puternic și este amabil cu toți cei care îi oferă respect, dar este nemilos împotriva celor care nu. Dar când un rival puternic și trădător vrea să vândă droguri și are nevoie de influența lui Don, Vito refuză să o facă. Ceea ce urmează este o ciocnire între vechile valori decolorate ale lui Vito și noile modalități care îl pot determina pe Michael să facă ceea ce el a fost cel mai reticent în a face și a purta un război mafiot împotriva tuturor celorlalte familii mafiote care ar putea sfâșia familia Corleone."
  },

  {
    id: 3,
    name: 'The Dark Knight',
    rank: '3',
    year: '2008',
    rating: '9.0',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    description: '',
  },

  {
    id: 4,
    name: '12 Angry Men',
    rank: '6',
    year: '1957',
    rating: '8.9',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg',
    description: '',
  },

  {
    id: 5,
    name: 'Beginning',
    rank: '10',
    year: '2020',
    rating: '6.6',
    image: 'https://pbs.twimg.com/media/Es52nXqW4AEhSMi.jpg',
    description: '',
  },
];
// return {movies};
