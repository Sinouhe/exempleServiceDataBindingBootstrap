import { Component, OnInit } from '@angular/core';
import { ServiceModalService } from '../service/service-modal.service';
import $ from "jquery";
import 'bootstrap';

@Component({
  selector: 'app-modal-call',
  templateUrl: './modal-call.component.html',
  styleUrls: ['./modal-call.component.css']
})
export class ModalCallComponent implements OnInit {

  constructor(private _serviceModalService: ServiceModalService) { }

  ngOnInit() {
    console.log($("#exampleModal").html())
  }

  public setModalText(p_sTitle: string, p_sTexte: string, p_texteButton: string) {
    this._serviceModalService.subject.next({'title': p_sTitle, 'texte': p_sTexte, 'texteButton': p_texteButton});
  }

  modalForm(data){
    this.setModalText(data.title, data.text, data.buttonText);
    event.preventDefault();
    $("#exampleModal").modal('show');
  }

}
