import { CustomError } from "../error/customError";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "User_Cookenu";

    public insertUser = async (user: User) => {
      try {
        await UserDatabase.connection
          .insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
          }).into(UserDatabase.TABLE_NAME);


      } catch (error: any) {
        throw new CustomError(error.statusCode, error.message);
      }
    };

    public getUsers = async (): Promise<User[]> => {
      try {
        const allUsers = await UserDatabase.connection
          .select()
          .from("User_Cookenu");

        return allUsers;
      } catch (error: any) {
        throw new CustomError(error.statusCode, error.message);
      }
    };
}