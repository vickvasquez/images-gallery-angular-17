import { AnimationBuilder, animate, style } from '@angular/animations';
import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[animateZoomIn]',
  standalone: true
})
export class AnimateZoomInDirective {
  elementRef: ElementRef = inject(ElementRef)
  builder: AnimationBuilder = inject(AnimationBuilder)

  private player = this.builder.build([
    style({ transform: 'scale(1)' }),
    animate('500ms', style({ transform: 'scale(1.2)' }))
  ]).create(this.elementRef.nativeElement)


  private playAnimation() {
    this.player.play()
    this.player.onDone(() => {
      this.player.pause()
    })
  }

  private stopAnimation() {
    if (this.player.hasStarted()) {
      this.player.pause()
      this.player.reset()
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.playAnimation()
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.stopAnimation()
  }
}
