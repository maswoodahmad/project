import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  version = '1.0.0';
  technologyStack = ['Angular 16', 'TypeScript', '[Anguar Material]'];
  developmentTeam = ['John Doe (Lead Developer)', 'Jane Smith (UI/UX Designer)', '[Other contributors]'];
  features = ['Feature 1', 'Feature 2', '...'];
  contactEmail = 'support@example.com';

  releaseNotes = [
    'Initial release of MyApp.',
    '[Add any specific release details here.]'
  ];

  legalInformation = {
    termsOfUse: 'Terms of Use',
    privacyPolicy: 'Privacy Policy',
    licensingDetails: 'Licensing Details'
  };

}
