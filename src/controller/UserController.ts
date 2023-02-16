import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";


export class UserController {

    public insertUser = async (req: Request, res: Response) => {
        try {
            
            const {name, email, password} = req.body;

            const input: UserInputDTO = {
                name,
                email,
                password
            };

            const userBusiness = new UserBusiness()
            await userBusiness.insertUser(input)

            res.status(201).send({ message: "Usuário criado!"})
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}