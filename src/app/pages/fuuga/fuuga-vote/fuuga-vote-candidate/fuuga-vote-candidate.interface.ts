
export interface RegisterCandidateDto {
    readonly position: ElectivePositionEnum;
    readonly voterId: string;
}


export interface ICandidate {
    _id: string;
    position: ElectivePositionEnum;
    voterId: string;
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
    { name: 'Ass General Secretary', value: ElectivePositionEnum.assGeneralSecretary },
    { name: 'National Coordinator', value: ElectivePositionEnum.nationalCoordinator },
    { name: 'Financial Secretaty', value: ElectivePositionEnum.financialSecretary },
    { name: 'Treasurer', value: ElectivePositionEnum.treasurer },
    { name: 'Accademic Coordinator', value: ElectivePositionEnum.academicCoordinator },
    { name: 'Director of Social', value: ElectivePositionEnum.directorOfSocials },
    { name: 'Public Relations Officer', value: ElectivePositionEnum.publicRelationOfficer },
    { name: 'Provost', value: ElectivePositionEnum.provost },
];
