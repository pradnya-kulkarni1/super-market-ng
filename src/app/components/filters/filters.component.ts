import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit{
  left_nav_list_item:Array<{title:string,icon:any}>=[
    {
      title:'Fruits',
      icon: document
    },
    {
      title:'Vegetables',
      icon:document
    },
    {
      title:'Frozen Items',
      icon:document
    },
    {
      title:'Grains',
      icon:document
    }
  ]

  showLeftNav:boolean=true;


  ngOnInit():void{
    


  }
  
  showAndHideLeftNav(){
    this.showLeftNav=!this.showLeftNav;
  }

}
