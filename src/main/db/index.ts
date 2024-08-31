import { join } from 'path'
import { app } from 'electron'
import { existsSync, mkdirSync } from 'fs'
import Database from 'better-sqlite3'

const dbFilePath = join(app.getPath('userData'), 'tournaments', 'tournaments.db')

// Ensure the tournaments folder exists
const tournamentsDir = join(app.getPath('userData'), 'tournaments')
if (!existsSync(tournamentsDir)) {
  mkdirSync(tournamentsDir)
}

// Initialize the database
const db = new Database(dbFilePath)

// Run migrations or setup initial tables
export const initializeDatabase = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS tournaments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      location TEXT NOT NULL,
      date TEXT NOT NULL
    );
  `)

  // Example migration to add a new column (this will run only if the database version is old)
  const migrationVersion = db.prepare('PRAGMA user_version').get().user_version
  if (migrationVersion < 1) {
    db.exec(`
      ALTER TABLE tournaments ADD COLUMN description TEXT;
    `)
    db.exec('PRAGMA user_version = 1')
  }

  // Future migrations can be handled here
}

export default db
