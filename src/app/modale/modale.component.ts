import { Component, OnInit } from '@angular/core';
import { ServiceModalService } from '../service/service-modal.service';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {

  private title: string;
  private texte: string;
  private texteButton: string;

  constructor(private _serviceModalService: ServiceModalService) { }

  ngOnInit() {
    this._serviceModalService.subject.subscribe(
                        (data) => {
                          this.title = data.title;
                          this.texte = data.texte;
                          this.texteButton = data.texteButton;
                          console.log(JSON.stringify(data));
                        },
                        (error) => {
                          console.log(error);
                        });
  }

}
