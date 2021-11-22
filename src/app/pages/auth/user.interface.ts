import { UserSignUpDto } from "./user.dto";

export interface IUser extends UserSignUpDto {
    _id?: string;
}
