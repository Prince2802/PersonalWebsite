import { Component } from '@angular/core';
import { Languages } from '../enums/ELanguage';
import { Experience } from '../models/Experience';
import { Education } from '../models/Education';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public experiences: Experience[] = [
    new Experience(
      [
        Languages.Angular,
        Languages.Ionic,
        Languages.TypeScript,
        Languages.JavaScript,
        Languages.RxJS,
        Languages.HTML,
        Languages.CSS,
        Languages.Java,
        Languages.Spring,
      ],
      'June 2022',
      'May 2024',
      'Verifone',
      'Software Engineer',
      'Worked on Google Play or AppStore like market for vendors where use Verifone terminals.',
      'assets/images/verifone-logo.png',
      'https://www.verifone.com'
    )
  ];

  public educations: Education[] = [
    new Education(
      'Aug 2021',
      'May 2022',
      'CDAC PUNE',
      'Post Graduate Diploma in Advanced Computing (PG-DAC)',
      '',
      'assets/images/iacsd-logo.png',
      'https://cdac.in'
    ),
    new Education(
      'Mar 2019',
      'Feb 2020',
      'DUCAT',
      'Java Expert',
      '',
      'assets/images/ducat-logo.png',
      'https://www.ducatindia.com'
    ),
    new Education(
      'Aug 2015',
      'July 2019',
      'Dr. A.P.J. Abdul Kalam Technical University',
      'Bachelors in Technology',
      'Electronics and Communication Engineering',
      'assets/images/aktu-logo.png',
      'https://aktu.ac.in'
    ),
  ];
}