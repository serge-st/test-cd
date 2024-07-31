import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subject, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Kickass test-cd app';
  isSpacePressed = false;
  keyDownSubject = new Subject<KeyboardEvent>();

  ngOnInit(): void {
    this.keyDownSubject.pipe(throttleTime(1000)).subscribe((event) => {
      console.log('Key pressed', event)
    })
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code !== 'Space') return;
    this.isSpacePressed = true;
    this.keyDownSubject.next(event);
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(_event: KeyboardEvent) {
    this.isSpacePressed = false;
  }
}
