import { IUser } from "src/app/pages/auth/user.interface";
import { IVoter } from "../fuuga-voter/fuuga-voter.interface";

export interface RegisterCandidateDto {
    readonly image: any;
    readonly position: any;
    readonly manifesto: string;
    readonly voterId: string;
}


export interface ICandidate {
    _id: string;
    image: string;
    position: ElectivePositionEnum;
    voterId: IVoter;
    manifesto: string;
    referenceId: string;
    addedBy: IUser;
    registeredAtDate: string;
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

export const ElectivePositionArray = [
    { name: 'President', value: ElectivePositionEnum.president },
    { name: 'Vice President', value: ElectivePositionEnum.vicePresident },
    { name: 'General Secretary', value: ElectivePositionEnum.generalSecretary },
    { name: 'Assistant General Secretary', value: ElectivePositionEnum.assGeneralSecretary },
    { name: 'National Coordinator', value: ElectivePositionEnum.nationalCoordinator },
    { name: 'Financial Secretaty', value: ElectivePositionEnum.financialSecretary },
    { name: 'Treasurer', value: ElectivePositionEnum.treasurer },
    { name: 'Academic Coordinator', value: ElectivePositionEnum.academicCoordinator },
    { name: 'Director of Social', value: ElectivePositionEnum.directorOfSocials },
    { name: 'Public Relations Officer', value: ElectivePositionEnum.publicRelationOfficer },
    { name: 'Provost', value: ElectivePositionEnum.provost },
];
