import { Pipe, PipeTransform } from '@angular/core';
import { ElectivePositionEnum } from '../pages/fuuga/fuuga-vote/fuuga-vote-candidate/fuuga-vote-candidate.interface';


@Pipe({
  name: 'positionFormat'
})
export class PositionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]) {
    if (!value) {
      return;
    }

    switch (value) {
      case ElectivePositionEnum.president:
        return 'President';

      case ElectivePositionEnum.vicePresident:
        return 'Vice President';

      case ElectivePositionEnum.generalSecretary:
        return 'General Secretary';

      case ElectivePositionEnum.assGeneralSecretary:
        return 'Assistant General Secretary';

      case ElectivePositionEnum.nationalCoordinator:
        return 'National Coordinator';

      case ElectivePositionEnum.financialSecretary:
        return 'Financial Secretaty';

      case ElectivePositionEnum.treasurer:
        return 'Treasurer';

      case ElectivePositionEnum.academicCoordinator:
        return 'Academic Coordinator';

      case ElectivePositionEnum.directorOfSocials:
        return 'Director of Social';

      case ElectivePositionEnum.publicRelationOfficer:
        return 'Public Relations Officer';

      case ElectivePositionEnum.provost:
        return 'Provost';

      default:
        return value;
    }

  }

}
