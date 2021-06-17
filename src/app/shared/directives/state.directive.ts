import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  constructor() {}
  ngOnChanges() {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
// si appState vaut CANCELED => state-canceled
// si appState vaut OPTION => state-option
// si appState vaut CONFIRMED => state-confirmed
// Binder ce string avec la propriété 'class' du host element <td>
