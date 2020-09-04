import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: HttpClient, public loadingController: LoadingController  ) {
    this.getUsersList()
  }

  //declaring array 
  usersList:any[]=[]
  stuff: any

  //Api call to reload displayed user data
  async getUsersList()
  {
    //loader to compensate for network speed
    const loading = await this.loadingController.create({
      message: 'Please wait . . .',
      duration: 2000
    });
    await loading.present();

    this.http.get('https://randomuser.me/api/?results=1').subscribe(data=>{
      this.usersList=data["results"]
      loading.dismiss()
      //console.log(data)
    })
  }


}
