import { IUser } from "src/app/pages/auth/user.interface";

export interface VoterDto {
    readonly firstName: string;
    readonly surName: string;
    readonly kindred: string;
    readonly schoolName: string;
    readonly schoolLevel: string;
}

export interface IVoter {
    _id: string;
    firstName: string;
    surName: string;
    kindred: string;
    schoolName: string;
    schoolLevel: string;
    votingSecret: string;
    referenceId: string;
    isVerified: boolean;
    verifiedBy: IUser;
    verifiedAtDate: string;
    registeredAtDate: string;
}
