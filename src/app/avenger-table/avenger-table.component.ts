import { Component, OnInit, ViewChild } from '@angular/core';
import { AvengerDialogComponent } from '../avenger-dialog/avenger-dialog.component';
import { AvengerService } from '../shared/avenger.service';
import { EventsService } from '../shared/events.service';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-avenger-table',
  templateUrl: './avenger-table.component.html',
  styleUrls: ['./avenger-table.component.scss']
})
export class AvengerTableComponent implements OnInit {

  constructor(public service: AvengerService,
    private eventsService: EventsService,
    private dialog: MatDialog,
    private notificationService: NotificationService) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'description', 'eventName', 'eventDescription', 'actions'];
  /* Decorators which are using MatSort & MatPaginator,
    and implementing 'sort' and 'paginator'
    on listData, shown on ngInit below! */
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  // When the component is initialized, retrieve key, all avengers, event name and push it to array
  ngOnInit() {
    this.service.getAvengers().subscribe(
      list => {
        const array = list.map(item => {
          const eventName = this.eventsService.getEventName(item.payload.val()['event']);
          const eventDescription = this.eventsService.getEventDescription(item.payload.val()['event']);
          return {
            $key: item.key,
            eventName,
            eventDescription,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        // Restricts the search functionality only for the form, not the Firebase
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(element => {
            return element !== 'actions' && data[element].toLowerCase().indexOf(filter) !== -1;
          });
        };
      }
    );
  }

  // Clears the search & applies the filter
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  // Filters the word, removes whitespace and changes to lowercase
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  // Editing the form:
  // Populate the form, open the dialog component and pass the configs
  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AvengerDialogComponent, dialogConfig);
  }

  // Delete Avenger
  onDelete($key) {
    if (confirm('Are you sure about deleting this Avenger?')) {
      this.service.deleteAvenger($key);
      this.notificationService.warn('! Avenger Removed');
    }
  }

}
