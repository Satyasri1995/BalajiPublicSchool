import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-schedule-item',
  templateUrl: './update-schedule-item.component.html',
  styleUrls: ['./update-schedule-item.component.scss'],
})
export class UpdateScheduleItemComponent implements OnInit {
  constructor(private readonly modal: ModalController) {}

  ngOnInit() {}

  doDismissModal() {
    this.modal.dismiss(null, 'cancel');
  }
}
