import { Component } from '@angular/core';
import { res } from 'src/Data/res_file';
import {MatDialog} from '@angular/material/dialog'
import { AuthComponent } from 'src/app/auth/auth.component';
@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {
  res_file: any[] = [];
  selectedFile: File | null = null;
  constructor(private diaolog:MatDialog){

  }
  ngOnInit() {
    this.res_file = res;
    console.log(this.res_file);
    
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
  onSubmit() {
    if (this.selectedFile) {
      
      console.log('File selected:', this.selectedFile);
      
    }}

    HandleLogin(){ this.diaolog.open(AuthComponent,{
   
     
    })
    
    }

    isMenuOpen: boolean = false;

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
