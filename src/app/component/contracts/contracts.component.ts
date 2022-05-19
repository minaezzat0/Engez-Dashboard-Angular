import { ContractsService } from './../../services/contracts.service';
import { Component, OnInit } from '@angular/core';
import { Contract } from '../../models/contract';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  contractList: Contract[] = [];
  constructor(private contractService: ContractsService ,private router: Router ,  private http: HttpClient) { }
  // @Inject(String)
    ngOnInit(): void {
      this.contractService.getAllContracts().subscribe(contacts => {
        this.contractList = contacts;
      });
    }



}
