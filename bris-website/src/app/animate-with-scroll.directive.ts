import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { AnimationBuilder, AnimationMetadata, AnimationPlayer } from '@angular/animations';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
//import { RendererAnimationPlayer } from '@angular/platform-browser/animations/src/animation_builder';

@Directive({
  selector: '[appAnimateWithScroll]'
})
export class AnimateWithScrollDirective implements OnChanges {
  @Input('appAnimateWithScroll') animation: AnimationMetadata | AnimationMetadata[];
  @Input() animateStart = 0;
  @Input() animateEnd = 200;

  private animationPlayer?: AnimationPlayer;
  private scrollOffset: number;

  constructor(   
    private scrollDispatcher: ScrollDispatcher,  
    private animationBuilder: AnimationBuilder,
    private templateRef: ElementRef,
  ) { }
  
  ngAfterViewInit() {
    if(!this.animationPlayer) {
      this.animationPlayer = this.buildAnimationPlayer(this.animation);
    }
    
    this.scrollDispatcher.scrolled().subscribe(scroll=>{
      if (scroll !== undefined && (scroll as CdkScrollable).measureScrollOffset) {
        const topOffset = (scroll as CdkScrollable).measureScrollOffset("top")
        this.scrollOffset = topOffset;
        this.animateFromScroll(topOffset);
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.animation && changes.animation.currentValue !== undefined) {
      if(this.templateRef) {
        this.animationPlayer = this.buildAnimationPlayer(changes.animation.currentValue);
      }
    }
    if (changes.animateStart || changes.animateEnd) {
      console.log(this.animateStart, this.animateEnd)
      if(this.animationPlayer) {
        this.animateFromScroll(this.scrollOffset)
      }
    } 
  }

  buildAnimationPlayer(animation: AnimationMetadata | AnimationMetadata[]) {
    console.log('build')
    const animationFactory = this.animationBuilder.build(animation)
    const animationPlayer = animationFactory.create(this.templateRef.nativeElement);
    console.log(this.animationPlayer)
    // animationPlayer.play();
    // animationPlayer.pause();
    animationPlayer.play(); 
    animationPlayer.pause(); 
    // this.reversePlayback(animationPlayer);
    // animationPlayer.setPosition(0.0);
    // animationPlayer.play(); 
    return animationPlayer; 
  }
  
  animateFromScroll(scrollOffset: number) {
    if (scrollOffset >= this.animateStart) {
      const newPosition = (scrollOffset - this.animateStart)/this.animateEnd
      this.animationPlayer.setPosition(newPosition)
    } else {
      this.animationPlayer.setPosition(0.0001)
    }
  }

  private reversePlayback(animationPlayer: any) {
    console.log(animationPlayer)
    if(animationPlayer) {
      animationPlayer._renderer.engine._timelineEngine.players.forEach(groupPlayer=>{
        groupPlayer.players.forEach(player=>{
          console.log(player)
          // player.domPlayer.playbackRate = -1
        })
      })
    }

  }

}
