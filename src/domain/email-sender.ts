export interface EmailSender {
    send(userId:string, text:string):void
}
