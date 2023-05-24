import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, ResolveEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  constructor(private readonly title: Title, private readonly router: Router) {}

  public init(): void {
    this.setupPageTitle();
  }

  private setupPageTitle(): void {
    this.router.events.pipe(filter((event) => event instanceof ResolveEnd)).subscribe((event: ResolveEnd) => {
      const { data } = AppInitializerService.getDeepestChildSnapshot(event.state.root);

      if (data?.title) this.title.setTitle(data.title);
    });
  }

  private static getDeepestChildSnapshot(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let deepestChild = snapshot.firstChild;

    while (deepestChild?.firstChild !== null) {
      deepestChild = deepestChild.firstChild;
    }

    return deepestChild || snapshot;
  }
}
