export interface CsvReader {
  readFromBuffer: () => Promise<void>
}