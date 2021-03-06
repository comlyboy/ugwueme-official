import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Subscription } from 'rxjs';

import { DialogService } from 'src/app/service/dialog.service';
import { UtilityService } from 'src/app/service/utility.service';
import { FuugaVoteService } from '../fuuga-vote.service';
import { IVoter } from '../fuuga-voter/fuuga-voter.interface';
import { ElectivePositionArray, ElectivePositionEnum, ICandidate, RegisterCandidateDto } from './fuuga-vote-candidate.interface';

@Component({
  selector: 'app-fuuga-vote-candidate',
  templateUrl: './fuuga-vote-candidate.component.html',
  styleUrls: ['./fuuga-vote-candidate.component.scss']
})
export class FuugaVoteCandidateComponent implements OnInit, OnDestroy {
  candidate: ICandidate;
  candidates: ICandidate[] = [];
  totalCandidates = 0;

  voters: IVoter[] = [];

  candidatesPerPage = 16;
  currentPage = 1;
  filterByPosition: ElectivePositionEnum

  candidateSub: Subscription;
  recordSub: Subscription;

  positions = ElectivePositionArray;

  selectedImage: string | undefined;
  pickedFile: File;


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Candidate manifesto...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    toolbarHiddenButtons: [
      [
        // 'undo',
        // 'redo',
        // 'bold',
        // 'italic',
        // 'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        // 'justifyLeft',
        // 'justifyCenter',
        // 'justifyRight',
        // 'justifyFull',
        // 'indent',
        // 'outdent',
        // 'insertUnorderedList',
        // 'insertOrderedList',
        'heading',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        // 'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ],
    ]
    


  };


  constructor(
    private fuugaVoteService: FuugaVoteService,
    private utilityService: UtilityService,
    private dialogService: DialogService
  ) { }


  onSubmitCandidate(form: NgForm) {
    if (form.invalid) return;

    const candidateData: RegisterCandidateDto = {
      image: this.pickedFile,
      position: form.value.inputPosition,
      manifesto: form.value.inputManifesto,
      voterId: form.value.inputVoter
    };

    this.fuugaVoteService.createCandidate(candidateData);

    form.resetForm();
    this.selectedImage = undefined;
  }

  onSelectCandidate(candidateId: string) {
    const candidate = this.candidates.find(item => item._id === candidateId);
    this.candidate = candidate!;
  }


  onSelectIMG(event: Event) {
    const pickedFile = (event.target as any).files[0] as File;
    this.pickedFile = pickedFile;

    if (!pickedFile) {
      return;
    }

    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result!.toString();
      this.selectedImage = dataUrl;

      let img = new Image();


      // img.onload = function() {
      //   let canvas = document.createElement('canvas');
      //   let ctx = canvas.getContext('2d');
      //   canvas.width = 250;
      //   canvas.height = canvas.width * (img.height / img.width);
      //   ctx!.drawImage(img, 0, 0, canvas.width, canvas.height);

      //   // SEND THIS DATA TO WHEREVER YOU NEED IT
      //   let data = canvas.toDataURL('image/png');


      // }

    };
    fr.readAsDataURL(pickedFile);

  }


  onFilter(event: any) {
    this.filterByPosition = event.target.value;

    this.fuugaVoteService.getCanditates(this.candidatesPerPage, this.currentPage, this.filterByPosition);
  }


  onChangePage(value: { newCurrentPage: number, newDataPerPage: number }) {
    this.currentPage = value.newCurrentPage;
    this.candidatesPerPage = value.newDataPerPage;

    this.fuugaVoteService.getCanditates(this.candidatesPerPage, this.currentPage, this.filterByPosition);
  }



  initContent() {
    this.fuugaVoteService.getCanditates(this.candidatesPerPage, this.currentPage, this.filterByPosition);

    this.fuugaVoteService.getVoters(1000, 1);

    this.recordSub = this.fuugaVoteService.getVotersUpdateListener()
      .subscribe(data => {
        const voters = data.voters;
        this.voters = voters.filter(item => item.isVerified);
      });


    this.candidateSub = this.fuugaVoteService.getCandidatesUpdateListener()
      .subscribe(data => {
        this.candidates = data.candidates;
        this.totalCandidates = data.totalCandidates;
      });

    this.utilityService.setPageTitle('Election condidates ??? FUUGA');
  }


  ngOnInit(): void {
    this.initContent();
  }



  ngOnDestroy() {
    this.candidateSub.unsubscribe();
    this.recordSub.unsubscribe();
  }


}
