import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photos = [
    {
      'globalName': 'Passport 2 from 2',
      'details': [
        {
          'photoName': 'Passport1',
          'photoUrl': '../assets/passport.jpg'
        },
        {
          'photoName': 'Passport2',
          'photoUrl': '../assets/driver.jpg'
        },
        {
          'photoName': 'Passport3',
          'photoUrl': '../assets/passport.jpg'
        },
      ]
    },
    {
      'globalName': 'Driver Licence 2 from 2',
      'details': [
        {
          'photoName': 'Passport1',
          'photoUrl': '../assets/driver.jpg'
        },
        {
          'photoName': 'Passport2',
          'photoUrl': '../assets/passport.jpg'
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
