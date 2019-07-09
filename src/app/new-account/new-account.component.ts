import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private logging: LoggingService) {

  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    // 1st
    // console.log('A server status changed, new status: ' + accountStatus);

    // 2nd approach
    //const logging: LoggingService = new LoggingService();
    // logging.loggingStatusChanged(accountStatus);

    // 3rd approach
    this.logging.loggingStatusChanged(accountStatus);
  }
}
