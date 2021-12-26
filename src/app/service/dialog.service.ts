import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

import { FuugaVoteService } from '../pages/fuuga/fuuga-vote/fuuga-vote.service';



@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private fuugaVoteService: FuugaVoteService,
  ) { }


  async verifyVoterDialog(voterId: string) {
    try {
      const result = await this.OpenDialog('You sure you want to verify this voter?');
      if (result.value) {
        this.fuugaVoteService.verifyVoter(voterId);
      }
    } catch (error) { }
  }


  async deleteVoterDialog(voterId: string) {
    try {
      const result = await this.OpenDialog('You sure you want to delete this voter?');
      if (result.value) {
        this.fuugaVoteService.deleteVoter(voterId);
      }
    } catch (error) { }
  }


  async submitVotesDialog() {
    try {
      const result = await this.OpenDialog('You sure want to submit all votes?');
      if (result.value) {
        this.fuugaVoteService.submitAllVotes();
      }
    } catch (error) { }
  }


  // async deleteServiceRecordDialog(recordId: string) {
  //   try {
  //     const result = await this.OpenDialog('Delete Service record?');
  //     if (result.value) {
  //       this.serviceRecordService.deleteRecord(recordId);
  //     }
  //   } catch (error) { }
  // }


  // async withdrawUserInvitationDialog(invitationId: string) {
  //   try {
  //     const result = await this.OpenDialog('Withdraw invitation?');
  //     if (result.isConfirmed) {
  //       this.userService.withdrawUserInvitation(invitationId);
  //     }
  //   } catch (error) { }
  // }




  private async OpenDialog(title: string) {
    return Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger bg-danger',
        cancelButton: 'btn btn-secondary'
      },
      buttonsStyling: true
    }).fire({
      title,
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    });
  }


}
