import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChip, MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { firstValueFrom, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ConfigService, Tag } from '../../services/config.service';
import { KeyValuePipe } from '@angular/common';


@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ChipComponent,
      multi: true,
    },
  ]
 
})
export class ChipComponent implements ControlValueAccessor {

  onChange!: (value: string[]) => void;
  @ViewChild(MatChipList) chipList!: MatChipList;
  value: string[] = [];
  tags: string[] = [];

  constructor(private imageService: ConfigService, private changeDetection: ChangeDetectorRef) {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  propagateChange(value: string[]) {
    if (this.onChange) {
      this.onChange(value);
    }
  }

    registerOnTouched(fn: any): void {
        throw new Error('Method not implemented.');
  }

  async ngAfterViewInit() {
    await console.log(this.tags)
    var tagsAsync = await firstValueFrom(this.imageService.GetAllTags());
    await this.tags.push(...tagsAsync);
    await this.changeDetection.detectChanges();
    await console.log(tagsAsync);


    this.selectChips(this.value);

    this.chipList.chipSelectionChanges
      .pipe(
        map((event) => event.source))
      .subscribe((chip) => {
        
        console.log('chip selection changes')
        if (chip.selected) {
          this.value = [...this.value, chip.value];
        } else {
          this.value = this.value.filter((o) => o !== chip.value);
        }
        this.propagateChange(this.value);
      });
  }

  writeValue(value: string[]): void {
    if (this.chipList && value) {
      this.selectChips(value);
    } else if (value) {
      this.value = value;
    }
  }

  selectChips(value: string[]) {
    this.chipList.chips.forEach((chip) => chip.deselect());

    const chipsToSelect = this.chipList.chips.filter((c) =>
      this.value.includes(c.value));

    chipsToSelect.forEach((chip) => chip.select());
  }

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }
}
