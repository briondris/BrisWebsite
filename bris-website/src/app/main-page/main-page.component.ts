import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, HostListener} from '@angular/core';
import { MainPageService } from '../services/main-page/main-page.service';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, map, pairwise, takeUntil, throttleTime } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';

export enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

export enum Direction {
  None = 'None',
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state(VisibilityState.Visible, style({
        transform: 'translateY(0)'
      })),
      state(VisibilityState.Hidden, style({
        transform: 'translateY(-64px)' // adjust this to the height of your header
      })),
      transition(`${VisibilityState.Visible} => ${VisibilityState.Hidden}`, animate('250ms')),
      transition(`${VisibilityState.Hidden} => ${VisibilityState.Visible}`, animate('250ms'))
    ])
  ]
})
export class MainPageComponent implements AfterViewInit, OnDestroy{

  @ViewChild('aboutTarget',{static: false}) scrollToAbout: ElementRef;
  @ViewChild('infoTarget',{static: false}) scrollToInfo: ElementRef;
  @ViewChild('currentTarget',{static: false}) scrollToCurrent: ElementRef;
  
  currentSection = 'section1';
  isScrollAbout = false;
  isScrollInfo = false;
  isScrollCurrent = false;

  public isAboutMeSelected = true;
  public isAboutDevSelected = false;
  public isAboutArtSelected = false; 

  private destroy$: Subject<boolean> = new Subject<boolean>();
  public isHeader1Visible = VisibilityState.Visible;
  public isHeader2Visible = VisibilityState.Hidden;
  slideHeader2InAtPosition = 0;

  constructor(private mainPageService : MainPageService) { }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  ngAfterViewInit() {
    // create an observable stream of scroll positions and map them to UP / DOWN directions
    const content = document.querySelector('.scrollWrapper');
    const scroll$ = fromEvent(content, 'scroll').pipe( // if the scroll events happen on your window you could use 'window' instead of 'content' here
      throttleTime(10),
      map(() => content.scrollTop), // if you used 'window' above replace 'content.scrollTop' with 'window.pageYOffset'
      pairwise(),
      map(([y1, y2]): Direction => {
        // console.log(y1, y2);
        return (y2 < y1 ? Direction.Up : (y2 > this.slideHeader2InAtPosition ? Direction.Down : Direction.None));
      }),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    );

    // subscribe to the UP / DOWN scroll direction stream and set the header state accordingly
    scroll$.subscribe(dir => {
      if (dir === Direction.Down) {
        console.log('scrolling down', content.scrollTop);
        this.isHeader1Visible = VisibilityState.Hidden;
        this.isHeader2Visible = VisibilityState.Visible;
      } 
      else {
        console.log('scrolling up', content.scrollTop);
        this.isHeader1Visible = VisibilityState.Visible;
        this.isHeader2Visible = VisibilityState.Hidden;
      }
    });
  }
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollAbout(){
    //document.querySelector('#aboutTarget').scrollIntoView()
    this.scrollToAbout.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }
  scrollInfo(){
    //document.querySelector('#aboutTarget').scrollIntoView()
    this.scrollToInfo.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }
  scrollCurrent(){
    //document.querySelector('#aboutTarget').scrollIntoView()
    this.scrollToCurrent.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  ngOnInit() {
    this.mainPageService.changeAbout.subscribe(isScroll => {
      this.isScrollAbout = isScroll;
      this.scrollAbout();
    });

    this.mainPageService.changeInfo.subscribe(isScroll => {
      this.isScrollInfo = isScroll;
      this.scrollInfo();
    });

    this.mainPageService.changeCurrent.subscribe(isScroll => {
      this.isScrollCurrent = isScroll;
      this.scrollCurrent();
    });

    //let el = <HTMLElement>document.querySelector(".dropEl");
    // el.addEventListener("mousemove", (e) => { 
    //   //get vars for scss
    //   // el.style.setProperty('--x', -e.offsetX + "px");
    //   // el.style.setProperty('--y', -e.offsetY + "px");

    //   //move possition with js 
    //   el.style.margin = (-e.offsetY - -e.offsetX)/5 + "px";
    //   //el.style.backgroundPositionY = ;
    // });
  }
  AboutMe(){
    if(!this.isAboutMeSelected){
      this.isAboutMeSelected = true;
      this.isAboutArtSelected = false;
      this.isAboutDevSelected = false;
    }
  }
  AboutArt(){
    if(!this.isAboutArtSelected){
      this.isAboutMeSelected = false;
      this.isAboutArtSelected = true;
      this.isAboutDevSelected = false;
    }
  }
  AboutDev(){
    if(!this.isAboutDevSelected){
      this.isAboutMeSelected = false;
      this.isAboutArtSelected = false;
      this.isAboutDevSelected = true;
    }
  }
  openResume(){
    window.open('/assets/img/OndrisBrianna_Resume_.pdf', '_blank');
  }

}
