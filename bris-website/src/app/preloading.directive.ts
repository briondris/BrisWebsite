import { Directive, ElementRef, AfterViewInit, Renderer2, OnInit, Input,AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appPreLoading]'
})
export class PreLoadingDirective implements OnInit {
  @Input('src') src;

  constructor(private elemRef: ElementRef, private renderer: Renderer2){ }
  
  ngOnInit() {
    // this.renderer.setAttribute(this.elemRef.nativeElement, 'src', 'https://2.bp.blogspot.com/-xGlousScPfM/WEQB74UGXHI/AAAAAAAAAOo/Q3xV3xqOYdoIo492BtMCE0BC13-Q3ZXmgCLcB/s640/LOADING.gif');
    this.renderer.addClass(this.elemRef.nativeElement, 'gradient');

    const image = new Image();
    image.onload = this.imageLoaded.bind(this);
    image.src = this.src;
  }

  imageLoaded() {
      this.renderer.setAttribute(this.elemRef.nativeElement, 'src', this.src);
    }

}