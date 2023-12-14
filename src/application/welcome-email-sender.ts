import {UserRepository} from "../domain/user-repository";
import {EmailSender} from "../domain/email-sender";

export class WelcomeEmailSender{
    constructor(private readonly userRepository:UserRepository, private readonly emailSender: EmailSender) {}


    async run (userId:string){
        console.log("Email Send to User",userId)
        const user = await this.userRepository.getById(userId)

        if(!user){
            throw new Error(`User with id ${userId} not found`)
        }

        this.emailSender.send(userId, "Welcome !!!")
    }
}
