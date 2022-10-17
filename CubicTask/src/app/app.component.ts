import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { MerchantCategory } from './Models/APIResponse.model';
import {TranslateService} from "@ngx-translate/core";
import { User } from './Models/User.model';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CubicTask';


  CurrentLang ="en";
  textDir :any;

  Categories : MerchantCategory[] = [];
  uploadedFiles: TreeNode[] = [];
  treeFiles: TreeNode[] = [];

  User : User = new User();
  constructor(private apiService : ApiService , private translate: TranslateService)
  {
    
    translate.setDefaultLang('en');
    translate.use('en');
    this.textDir = 'ltr';
    // this.CurrentLang = translate.currentLang;
  }

  ngOnInit()
  {
      this.apiService.GetMerchantCategories().subscribe(
        response => {
          if(response.success)
              this.Categories = response.result;
        }
      );

  }

  ChangeLang()
  {
    let lang = this.translate.currentLang
    if(lang == "en")
    {
        this.translate.use('ar');
        this.CurrentLang = 'ar';
        this.textDir ='rtl';
    }
    
    else
    {
      this.translate.use('en') ;
      this.CurrentLang = 'en';
      this.textDir ='ltr';

    }
  }

  SubmitForm()
  {
    console.log(this.User);
    //send data to backend
  }

  onBasicUpload(event : any)
  {

  }

  onUpload(event:any) {
 
    for(let file of event.target.files) {
        this.uploadedFiles.push(file);
        let x = { label: file.name,
                  data: "Documents Folder",
                  expandedIcon: "pi pi-folder-open",
                  collapsedIcon: "pi pi-folder",
                  children: [{}]};
       this.treeFiles.push(x);
    }
    
}

}
