import {WelcomeEmailSender} from "../application/welcome-email-sender";
import {UserController} from "./user-controller";
import {InMemoryUserRepository} from "./in-memory-user-repository";
import {EmailSenderRepository} from "./email-sender-repository";

export const emailSenderRepository = new EmailSenderRepository()
export const userRepository = new InMemoryUserRepository()

export const welcomeEmailSender = new WelcomeEmailSender(userRepository,emailSenderRepository)

export const userController = new UserController(welcomeEmailSender)
