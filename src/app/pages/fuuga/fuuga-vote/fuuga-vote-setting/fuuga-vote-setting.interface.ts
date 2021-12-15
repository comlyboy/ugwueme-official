
export interface ISetting {
    _id: string;
    enableVoterRegistration: boolean;
    enableVoting: boolean;
    enableCandidateRegistration: boolean;
}

export interface SettingDto {
    readonly enableVoterRegistration?: boolean;
    readonly enableVoting?: boolean;
    readonly enableCandidateRegistration?: boolean;
}
