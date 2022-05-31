import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'
import { MovieInputDTO, movie } from "../model/Movie"
import { InvalidTitle } from "../error/customError"

export class MovieBusiness {
  public create = async ({ title, description,duration_in_minutes, year_of_release }: MovieInputDTO) => {
    try{
      if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error("Dados inválidos (title, description, duration_in_minutes, year_of_release)")
      }

      if(title.length < 3){
        throw new InvalidTitle()
      }
      const id = generateId()

      const movieDatabase = new MovieDatabase()

      const movie: movie = {
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release
      }
      await movieDatabase.create(movie)
    }catch(error : any){
      throw new Error(error.message)
    }
  }
    

  async getMovie(): Promise<any> {
    const movieDatabase = new MovieDatabase
    
    return await movieDatabase.getMovie()
  }
}
