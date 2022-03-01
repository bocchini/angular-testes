import { TestBed, ComponentFixture } from '@angular/core/testing';

import { LikeWidgetModule } from './like-widget.module';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create componet', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should auto-generate Id during onInit when(@Input id) is not assigned', () => {    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('should NOT auto-generate ID during ngOnInit when (@Init id) is assigned', () =>{
    const someId = 'someId';
    component.id = someId;

    fixture.detectChanges();

    expect(component.id).toBe(someId);
  });

  it(`${LikeWidgetComponent.prototype.like.name} should trigger (@Ouput liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
