import { Component, OnInit } from '@angular/core';
import { CampModel } from 'src/app/admin/componant/add-camp/camp.model';
import { CampService } from 'src/app/services/camp.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  campData!:any;
  capacity:number=0;
  SearchCapacity:number=0;
  SortbyParam='';
  SortDirection='asc';
  constructor(private campSer: CampService) { }

  ngOnInit(): void {

    //getting all camp data here
    this.campSer.getAllCamp().subscribe(
      data => {
        this.campData = data;
        console.log(data);
      }, error => {
        console.log(error);
      }

    );
  }
  passBookedCamp(obj: CampModel) {
    this.campSer.setCampData(obj);

  }

// filtering functionality written here
  onCapacityFilter() {
    this.SearchCapacity = this.capacity;

  }

  onCapacityFilterClear() {
    this.capacity =0;
    this.SearchCapacity =0;
  }
  onSortDirection(){
    if(this.SortDirection==='desc'){
      this.SortDirection='asc';
    }else{
      this.SortDirection='desc';
    }
  }


}
