import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-service.service';
import { faTruckFast} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  xyz = faTruckFast;
  loading: boolean=false;
  error: string='';
  booklist: any;
  list: any;
  post: any;

  constructor(private apiservice: ApiServicesService) {}
  
  getlist() {
    this.loading = true;
    this.apiservice.getBook().subscribe(res=>{
      this.booklist=res;
      this.loading=false;
    })
  }

  addList(){
    this.apiservice.getCategory().subscribe(res=>{
      this.list=res;
      
    })
  }

  postList(){ 
    this.apiservice.postBook().subscribe(res=>{
      this.post=res;
    })
  }
 
  ngOnInit(): void {
  }

}
