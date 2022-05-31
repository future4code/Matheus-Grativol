import { movie, MovieInputDTO } from "../model/Movie";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create({ id, title, description,duration_in_minutes, year_of_release}: movie): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release
      })
      .into(MovieDatabase.TABLE_NAME);
  }

  async getMovie(){
    return await MovieDatabase.connection.select().into(MovieDatabase.TABLE_NAME)
  }
}
