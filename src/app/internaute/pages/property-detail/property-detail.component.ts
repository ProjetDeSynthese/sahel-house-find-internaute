import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  id: string=" "

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //  this.id = this.route.snapshot.paramMap.get('id');
    // Access the parameter value using this.id
  }
}
