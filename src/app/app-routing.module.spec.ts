import { APP_BASE_HREF, Location } from '@angular/common';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app.module';

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, AppRoutingModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '' }],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to the main page', async () => {
    await router.navigateByUrl('');

    expect(location.path()).toBe('');
  });

  it('should navigate to the about page', async () => {
    await router.navigateByUrl('about');

    expect(location.path()).toBe('/about');
  });

  it('should navigate to the contact page', async () => {
    await router.navigateByUrl('contact');

    expect(location.path()).toBe('/contact');
  });

  it('should redirect to the main page', async () => {
    await router.navigateByUrl('not-found');

    expect(location.path()).toBe('');
  });
});
