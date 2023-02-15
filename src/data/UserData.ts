import { CustomError } from "../error/customError";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: User) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.getId,
          name: user.getName,
          email: user.getEmail,
          password: user.getPassword,
        }).into('User_Cookenu');
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