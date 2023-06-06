import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {AppModule } from './app/App.Module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);