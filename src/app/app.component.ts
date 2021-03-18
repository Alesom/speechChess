import {Component, NgZone, OnInit} from '@angular/core';

declare const annyang: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  voiceText: any;

  constructor(private ngZone: NgZone){}

  ngOnInit(): void {
    annyang.setLanguage('pt-br');

    const pecas = {
      'torre *pos': this.rook,
      'cavalo *pos': this.knight,
      'bispo *pos': this.bishop,
      'dama *pos': this.queen,
      'rei *pos': this.king,
      'peão *pos': this.pawn,
    };

    annyang.addCommands(pecas);
    annyang.start({ autoRestart: false });
  }

  rook(pos: string): void {
    alert('T' + pos);
  }

  knight(pos: string): void {
    alert('C' + pos);
  }

  bishop(pos: string): void {
    alert('B' + pos);
  }

  queen(pos: string): void {
    alert('D' + pos);
  }

  king(pos: string): void {
    alert('R' + pos);
  }

  pawn(pos: string): void {
    alert(pos);
  }

}
