export interface VoterDto {
    position: ElectivePositionEnum;
    voterId: string; // from voter table
}

export interface ICandidate {
    _id: string;
    position: ElectivePositionEnum;
    voterId: string; // from voter table
}

export enum ElectivePositionEnum {
    president = 1,
    vicePresident = 2,
    generalSecretary = 3,
    assGeneralSecretary = 4,
    nationalCoordinator = 5,
    financialSecretary = 6,
    treasurer = 7,
    academicCoordinator = 8,
    directorOfSocials = 9,
    publicRelationOfficer = 10,
    provost = 11
}

