import Database from 'better-sqlite3';
import { app } from 'electron';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const dbFilePath = join(
  app.getPath('userData'),
  'tournaments',
  'tournaments.db',
);

// Ensure the tournaments folder exists
const tournamentsDir = join(app.getPath('userData'), 'tournaments');
if (!existsSync(tournamentsDir)) {
  mkdirSync(tournamentsDir);
}

// Initialize the database
const db = new Database(dbFilePath);

// Run migrations or setup initial tables
export const initializeDatabase = () => {
  db.exec(`
    DROP TABLE IF EXISTS tournaments;

    CREATE TABLE IF NOT EXISTS tournaments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      location TEXT NOT NULL,
      date TEXT NOT NULL,
      timeType TEXT NOT NULL,
      playerCount INTEGER NOT NULL,
      roundsPlayed INTEGER NOT NULL,
      totalRounds INTEGER NOT NULL,
      countryCode TEXT NOT NULL
    );
  `);

  // Example migration to add a new column (this will run only if the database version is old)
  const migrationVersion = db.prepare('PRAGMA user_version').get().user_version;
  if (migrationVersion < 1) {
    // If needed, add future migrations here
    db.exec('PRAGMA user_version = 1');
  }

  // Future migrations can be handled here
};

export default db;
