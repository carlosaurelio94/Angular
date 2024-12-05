import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>Hola mundo</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeavyLoadersFastComponent { }
