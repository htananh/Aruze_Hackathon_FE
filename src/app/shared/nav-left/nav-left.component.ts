import { Component } from '@angular/core';
import { res } from 'src/Data/res_file';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {
  res_file: any[] = [];
  selectedFile: File | null = null;
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

    HandleLogin(){

    }

    isMenuOpen: boolean = false;

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
