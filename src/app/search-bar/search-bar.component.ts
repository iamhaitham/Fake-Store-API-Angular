import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  value: string;
  searchTerm = new FormControl('');
  destroyed$: Subject<boolean> = new Subject();
  @Output() findProductByName$ = new EventEmitter<string>();

  constructor() { 
    this.value = '';
  }

  ngOnInit(): void {
    this.searchTerm.valueChanges.pipe(
      takeUntil(this.destroyed$),
      tap((term: string) => this.findProductByName$.emit(term))
    ).subscribe();
  }

  clearSearchBar(): void {
    this.value = '';
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
