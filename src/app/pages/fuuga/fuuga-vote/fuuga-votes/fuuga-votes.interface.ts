import { ElectivePositionEnum, ICandidate } from "../fuuga-vote-candidate/fuuga-vote-candidate.interface";
import { IVoter } from "../fuuga-voter/fuuga-voter.interface";

export interface IVote {
    _id: string;
    position: ElectivePositionEnum;
    candidateId: any;
    voterId: IVoter;
    schoolName: string;
    schoolLevel: string;
}
