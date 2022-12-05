import * as SQLite from 'expo-sqlite';
export const DataBaseConnection = {
    getConnection: ()=> SQLite.openDatabase('database.bd'),
};