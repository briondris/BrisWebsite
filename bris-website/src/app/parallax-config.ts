import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

export class ParallaxConf implements IParallaxScrollConfig {
  private direction: Array<string> = ['straight', 'reverse'];
  private timingFuncts: Array<string> = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'];

  parallaxSpeed: number;
  parallaxSmoothness: number;
  parallaxDirection: string;
  parallaxTimingFunction: string;
  parallaxThrottleTime: 80;

  constructor() {
    this.parallaxSpeed = parseFloat((Math.random() * (2 - 0.1) + 0.1).toFixed(2));
    this.parallaxSmoothness = parseFloat((Math.random() * (2 - 0.5) + 0.5).toFixed(2));
    this.parallaxDirection = this.direction[Math.round(Math.random() * 1)];
    this.parallaxTimingFunction = this.timingFuncts[Math.round(Math.random() * 4)];
  }
}
