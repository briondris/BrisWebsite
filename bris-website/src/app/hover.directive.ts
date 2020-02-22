import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[hover]',
  host: {
    '(mouseenter)': 'onHoverStatusChange(true)',
    '(mouseleave)': 'onHoverStatusChange(false)'
  }
})
export class HoverDirective {
  @Input() hover: { isHovered: boolean };

  onHoverStatusChange(isHovered: boolean) {
    this.hover.isHovered = isHovered;
  }
}