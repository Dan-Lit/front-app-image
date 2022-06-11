import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-asign-tag',
  templateUrl: './asign-tag.component.html',
  styleUrls: ['./asign-tag.component.css']
})
export class AsignTagComponent {

  imageId: any;
  nameTag: any;

  constructor(private imageService: ConfigService, private route: ActivatedRoute, private router: Router) {}

  ngAfterContentChecked(): void {
    const id: string = this.route.snapshot.params['id'];
    this.imageId = id;

  }

  cancel() {
    console.log('cancelado');
    this.router.navigate(['.'], { relativeTo: this.route.parent });
  }

  submit() {
    console.log(this.imageId + ',' + this.nameTag);

    this.imageService.AssignTag(this.imageId, this.nameTag)
      .subscribe(data => {
        console.log(data);
      })
  }

}
