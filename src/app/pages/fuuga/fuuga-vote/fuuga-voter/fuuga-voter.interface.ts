export interface VoterDto {
    readonly firstName: string;
    readonly surName: string;
    readonly kindred: string;
    readonly schoolName: string;
    readonly schoolLevel: string;
}

export interface IVoter {
    firstName: string;
    surName: string;
    kindred: string;
    schoolName: string;
    schoolLevel: string;
    votingSecret: string;
    isVerified: boolean;
}
