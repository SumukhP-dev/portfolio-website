import { Component, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dream-flow-ai-platform',
  imports: [NgbCarouselModule],
  templateUrl: './dream-flow-ai-platform.component.html',
})
export class DreamFlowAiPlatformComponent {
  images = [
    '/images/mobile-app-projects/dream-flow-ai/screen1.png',
    '/images/mobile-app-projects/dream-flow-ai/screen5.png',
    '/images/mobile-app-projects/dream-flow-ai/screen6.png',
    '/images/mobile-app-projects/dream-flow-ai/screen7.png',
    '/images/mobile-app-projects/dream-flow-ai/screen8.png',
    '/images/mobile-app-projects/dream-flow-ai/screen9.png',
    '/images/mobile-app-projects/dream-flow-ai/screen10.png',
    '/images/mobile-app-projects/dream-flow-ai/screen11.png',
    '/images/mobile-app-projects/dream-flow-ai/screen12.png',
    '/images/mobile-app-projects/dream-flow-ai/screen2.png',
    '/images/mobile-app-projects/dream-flow-ai/screen3.png',
    '/images/mobile-app-projects/dream-flow-ai/screen4.png',
  ];

  altTexts = [
    'Dream Flow app splash screen',
    'Dream Flow app create new story screen',
    'Dream Flow app story generation screen',
    'Dream Flow app story player screen',
    'Dream Flow app story complete screen',
    'Dream Flow app library screen',
    'Dream Flow app subscription screen',
    'Dream Flow app settings screen',
    'Dream Flow app story weaver screen',
    'Dream Flow app welcome screen',
    'Dream Flow app choose profile screen',
    'Dream Flow app home screen',
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  carousel: NgbCarousel = new NgbCarousel();

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}

