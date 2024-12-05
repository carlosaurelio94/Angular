import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal  } from '@angular/core';
import TitleComponent from '@shared/title/title.component';

type Grade = 'A'|'B'|'F'

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {

  public showContent = signal(false)
  public grade = signal<Grade>('B')

  // IF
  public toggleContent() {
    this.showContent.update( value => !value);
  }

  // SWITCH
  public toggleSwitchContent() {
    switch(this.grade()) {
      case('A'): {
        this.grade.set('B')
        break;
      }
      case('B'): {
        this.grade.set('F')
        break;
      }
      case('F'): {
        this.grade.set('A')
      }
    }
  }

  // FOR
  public toggleForContent() {
    if(this.frameworks().length > 0) {
      this.frameworks = this.frameworks2
    }
  }

  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React'])
  public frameworks2 = signal([])

  //


}
