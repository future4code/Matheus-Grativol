import * as bcrypt from "bcryptjs"


export class HashManager {

    public generateHash = async (str: string): Promise<string> =>{

        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hast = await bcrypt.hash(str, salt)

        return hast
    }

    public compareHash = async (str: string, hash: string): Promise<boolean> =>{

        const result = await bcrypt.compare(str, hash)

        return result
    }
}