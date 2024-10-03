import { getFirestore, collection, addDoc } from 'firebase/firestore';
export function seedDatabase(firebase) {
  const firestore = getFirestore(firebase);
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  // Series Data
  const seriesData = [
    {
      title: 'Tiger King',
      description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king',
    },
    {
      title: 'Amanda Knox',
      description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'amanda-knox',
    },
    {
      title: 'Citizenfour',
      description: 'A 2014 documentary concerning Edward Snowden and the NSA spying scandal.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'citizenfour',
    },
    {
      title: 'Super Size Me',
      description: "Director Morgan Spurlock's social experiment in fast-food gastronomy.",
      genre: 'documentaries',
      maturity: '12',
      slug: 'super-size-me',
    },
    {
      title: 'Man on Wire',
      description: "A recreation of Philippe Petits 1974 high-wire stunt between the Twin Towers.",
      genre: 'documentaries',
      maturity: '12',
      slug: 'man-on-wire',
    },
    // Comedies
    {
      title: 'The Office',
      description: 'Hilarious misadventures of office workers at Dunder Mifflin Paper Company.',
      genre: 'comedies',
      maturity: '15',
      slug: 'the-office',
    },
    {
      title: 'Arrested Development',
      description: 'The Bluth family loses everything after their patriarch gets convicted for fraud.',
      genre: 'comedies',
      maturity: '15',
      slug: 'arrested-development',
    },
    {
      title: 'Curb Your Enthusiasm',
      description: 'Larry David gets into misadventures with friends and celebrities in Los Angeles.',
      genre: 'comedies',
      maturity: '15',
      slug: 'curb-your-enthusiasm',
    },
    {
      title: 'Family Guy',
      description: 'The Griffin family finds themselves in hilarious scenarios.',
      genre: 'comedies',
      maturity: '15',
      slug: 'family-guy',
    },
    {
      title: 'South Park',
      description: 'Four boys embark on adventures in the bizarre town of South Park.',
      genre: 'comedies',
      maturity: '15',
      slug: 'south-park',
    },
    // Children
    {
      title: 'Peppa Pig',
      description: 'Peppa learns something new every day with her family and friends.',
      genre: 'children',
      maturity: '0',
      slug: 'peppa-pig',
    },
    {
      title: 'Dora The Explorer',
      description: 'Dora embarks on adventures with Boots and useful tools.',
      genre: 'children',
      maturity: '0',
      slug: 'dora-the-explorer',
    },
    {
      title: 'PAW Patrol',
      description: 'Six brave puppies, led by Ryder, complete high-stakes rescue missions.',
      genre: 'children',
      maturity: '0',
      slug: 'paw-patrol',
    },
    {
      title: 'Arthur',
      description: 'Aardvark Arthur Read deals with childhood challenges and traumas.',
      genre: 'children',
      maturity: '0',
      slug: 'arthur',
    },
    {
      title: 'SpongeBob',
      description: 'SpongeBob SquarePants lives in the city of Bikini Bottom.',
      genre: 'children',
      maturity: '0',
      slug: 'spongebob',
    },
    // Crime
    {
      title: 'Making a Murderer',
      description: 'Steven Avery exonerated after spending decades in prison for a crime he didn’t commit.',
      genre: 'crime',
      maturity: '18',
      slug: 'making-a-murderer',
    },
    {
      title: 'Long Shot',
      description: 'A man’s alibi is confirmed by raw footage from a TV show.',
      genre: 'crime',
      maturity: '18',
      slug: 'long-shot',
    },
    {
      title: 'The Confession Killer',
      description: 'Henry Lee Lucas, an American serial killer convicted of murdering eleven people.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-confession-killer',
    },
    {
      title: 'The Innocent Man',
      description: 'Henry Lee Lucas was convicted of multiple murders, yet questions surround the investigation.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-innocent-man',
    },
    {
      title: 'The Staircase',
      description: 'The story of novelist Michael Peterson, who claims his wife died after falling down the stairs.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-staircase',
    },
    // Feel-good
    {
      title: 'Good Will Hunting',
      description: 'Will Hunting, a genius in mathematics, solves difficult problems while battling emotional issues.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'good-will-hunting',
    },
    {
      title: 'Forrest Gump',
      description: 'Forrest Gump, a man with a low IQ, embarks on an extraordinary journey through life.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'forrest-gump',
    },
    {
      title: 'Juno',
      description: 'A misfit teen navigates her unplanned pregnancy with humor and wit.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'juno',
    },
    {
      title: 'Midnight In Paris',
      description: 'A man experiences Paris in a magical, bygone era.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'midnight-in-paris',
    },
    {
      title: 'School of Rock',
      description: 'Dewey Finn starts training students to form a band while pretending to be their substitute teacher.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'school-of-rock',
    }
  ];

  // Films Data
  const filmsData = [
    {
      title: 'The Prestige',
      description: 'Two magicians become bitter enemies and make sacrifices for fame with terrible consequences.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    },
    {
      title: 'Fight Club',
      description: 'A discontented insomniac forms an underground fight club that spirals out of control.',
      genre: 'drama',
      maturity: '15',
      slug: 'fight-club',
    },
    {
      title: 'Kings Speech',
      description: 'King George VI overcomes his stammer to lead his country through WWII.',
      genre: 'drama',
      maturity: '15',
      slug: 'kings-speech',
    },
    {
      title: 'The Revenant',
      description: 'A frontiersman seeks revenge after being abandoned by his crew after a bear attack.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-revenant',
    },
    {
      title: 'The Social Network',
      description: 'Mark Zuckerberg creates Facebook but faces turmoil with his friend and business partner.',
      genre: 'drama',
      maturity: '12',
      slug: 'the-social-network',
    },
    // Suspense
    {
      title: 'Shutter Island',
      description: 'US Marshals investigate the disappearance of a patient from an asylum.',
      genre: 'suspense',
      maturity: '15',
      slug: 'shutter-island',
    },
    {
      title: 'Gone Girl',
      description: 'A man becomes the prime suspect in his wife’s mysterious disappearance.',
      genre: 'suspense',
      maturity: '15',
      slug: 'gone-girl',
    },
    {
      title: 'Prisoners',
      description: 'A desperate father searches for his missing daughter and uncovers a terrifying truth.',
      genre: 'suspense',
      maturity: '15',
      slug: 'prisoners',
    },
    {
      title: 'Seven',
      description: 'Detectives hunt a serial killer who commits murders based on the seven deadly sins.',
      genre: 'suspense',
      maturity: '15',
      slug: 'seven',
    },
    {
      title: 'Zodiac',
      description: 'A cartoonist becomes obsessed with identifying the infamous Zodiac killer.',
      genre: 'suspense',
      maturity: '15',
      slug: 'zodiac',
    }
  ];

  const seed = async () => {
    try {
      // Add series data to Firestore
      const seriesCollection = collection(firestore, 'series');
      for (const item of seriesData) {
        await addDoc(seriesCollection, {
          id: getUUID(),
          ...item,
        });
      }

      // Add films data to Firestore
      const filmsCollection = collection(firestore, 'films');
      for (const item of filmsData) {
        await addDoc(filmsCollection, {
          id: getUUID(),
          ...item,
        });
      }

      console.log('Database seeded successfully!');
    } catch (error) {
      console.error('Error seeding the database: ', error);
    }
  };

  // Call the seed function to start the process
  seed();
}
