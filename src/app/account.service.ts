import {LoggingService} from './logging.service';

export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {

  }


  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.loggingStatusChanged(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.loggingStatusChanged(status);
  }


}
