import db from './';

export const seedDatabase = () => {
  const count = db.prepare('SELECT COUNT(*) AS count FROM tournaments').get().count;

  if (count === 0) {
    const insert = db.prepare(`
      INSERT INTO tournaments (name, location, date, timeType, playerCount, roundsPlayed, totalRounds, countryCode)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const tournaments = [
      {
        name: 'Qualifying tournament for the championship of Ukraine among club teams',
        location: 'Kharkiv, Ukraine',
        date: '28.04.2018',
        timeType: 'Rapid',
        playerCount: 45,
        roundsPlayed: 2,
        totalRounds: 9,
        countryCode: 'UA',
      },
      {
        name: 'International Grandmasters Tournament',
        location: 'Kyiv, Ukraine',
        date: '15.06.2020',
        timeType: 'Classic',
        playerCount: 60,
        roundsPlayed: 5,
        totalRounds: 11,
        countryCode: 'UA',
      },
      {
        name: 'European Chess Championship',
        location: 'Odessa, Ukraine',
        date: '10.09.2021',
        timeType: 'Blitz',
        playerCount: 30,
        roundsPlayed: 7,
        totalRounds: 7,
        countryCode: 'UA',
      },
    ];

    tournaments.forEach((tournament) => {
      insert.run(
        tournament.name,
        tournament.location,
        tournament.date,
        tournament.timeType,
        tournament.playerCount,
        tournament.roundsPlayed,
        tournament.totalRounds,
        tournament.countryCode,
      );
    });

    console.log('Database seeded with initial data.');
  } else {
    console.log('Database already seeded.');
  }
};
