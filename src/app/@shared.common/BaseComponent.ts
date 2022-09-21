import { HostListener, Injectable, OnDestroy } from "@angular/core";
import { Subject, Subscription } from "rxjs";

@Injectable()
export abstract class BaseComponent implements OnDestroy {
  // protected subscription$: Subscription = new Subscription();
  protected readonly destroy$ = new Subject<boolean>();

  constructor() {}

  @HostListener('window:beforeunload')
  public ngOnDestroy(): void {
    console.log('Destoyed!')
    this.destroy$.next(true);
    this.destroy$.complete();
    // this.subscription$.unsubscribe();
  }

}
