// src/db/seed.ts

import db from './';

export const seedDatabase = () => {
  const count = db.prepare('SELECT COUNT(*) AS count FROM tournaments').get().count;

  if (count === 0) {
    const insert = db.prepare('INSERT INTO tournaments (name, location, date) VALUES (?, ?, ?)');

    insert.run('Tournament 1', 'New York', '2024-08-29');
    insert.run('Tournament 2', 'Los Angeles', '2024-09-05');
    insert.run('Tournament 3', 'Chicago', '2024-09-12');

    console.log('Database seeded with initial data.');
  } else {
    console.log('Database already seeded.');
  }
};
