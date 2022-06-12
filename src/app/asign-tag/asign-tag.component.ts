import { Component, ViewChild} from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { MatChip, MatChipList } from '@angular/material/chips';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ConfigService, Tag } from '../services/config.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-asign-tag',
  templateUrl: './asign-tag.component.html',
  styleUrls: ['./asign-tag.component.css']
})
export class AsignTagComponent {

  imageId: any;
  tags: any;

  chipsControl = new FormControl();
  chipsControlValue$ = this.chipsControl.valueChanges;

  constructor(private imageService: ConfigService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.imageId = this.route.snapshot.params['id'];

    this.route.params
      .subscribe(
        (params: Params) => {
          this.imageId = params['id'];
          console.log(this.imageId);
        }
    );
  }

  cancel() {
    console.log('cancelado');
    this.router.navigate(['.'], { relativeTo: this.route.parent });
  }

  submit() {
    const tagArray: string[] = this.chipsControl.value;
    console.log(tagArray);

    tagArray.forEach( (value) => {
      console.log(value);
      this.imageService.AssignTag(this.imageId, value)
        .subscribe();
    });

  }
}
