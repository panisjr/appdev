import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './frontend/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
