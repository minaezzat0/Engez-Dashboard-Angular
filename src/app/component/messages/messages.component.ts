import { MessagesService } from '../../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  AllMessages: Message[] = [];
  constructor(private msgService: MessagesService ,private router: Router ,  private http: HttpClient) { }
// @Inject(String)
  ngOnInit(): void {
    this.msgService.getAllMessages().subscribe(msgs => {
      this.AllMessages = msgs;
    });
  }

  getMsgs() {
    this.msgService.getAllMessages().subscribe({
      next: (data) => { this.AllMessages = data },
    });
  }

  deleteMsg(msgID: number) {
    this.msgService.deleteMessage(msgID).subscribe(
      {
        next: () => {
          this.getMsgs();
          // alert("*** Message Deleted Successfully ***");
          Swal.fire({
            title: 'success',
            text: 'Your message has been deleted successfully',
            icon: 'success',
            cancelButtonText: "No",
            confirmButtonColor:"green",
            // iconColor:'red'
            // icon="question"
            // showConfirmButton
            // showCancelButton:"false"
            // cancelButtonText:"Cancel"
            // imageUrl:"/sssss/ss" ,
            // imageWidth:"200px"
            // confirmButtonText: 'ok' ,
            // [showCancelButton]="true"
            // [focusCancel]="true"
          })
        }
      });
  }

}
