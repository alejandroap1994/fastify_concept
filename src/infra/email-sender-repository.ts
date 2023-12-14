import {EmailSender} from "../domain/email-sender";

export class EmailSenderRepository implements EmailSender{
    send(userId: string, text: string): void {
        console.log(`Simulating email sender for User: ${userId} with text: ${text}`)
    }

}
