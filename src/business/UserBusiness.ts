import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword } from "../error/customError";
import { User, UserInputDTO } from "../model/User";
import { IdGenerator } from "../services/idGenerator";


export class UserBusiness {
    public insertUser = async (input: UserInputDTO) => {
        try{
            const {name, email, password} = input;

            if(!name || !email || !password) {
                throw new CustomError( 400,"Preencha todos os campos solicitados");       
            }

            if (password.length < 6){
                throw new InvalidPassword();   
            }

            if (!email.includes("@")) {
                throw new InvalidEmail();
            }

            const id: string = new IdGenerator().generateId()
            
            const newUser = new User(
                id, 
                name, 
                email, 
                password
                )

            const userDatabase = new UserDatabase()
            await userDatabase.insertUser(newUser)
        } catch (error: any){
            throw new CustomError(error.statusCode, error.message);
            
        }
    }
}