import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { MiraConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class MiraApiModule {
    public static forRoot(configurationFactory: () => MiraConfiguration): ModuleWithProviders<MiraApiModule> {
        return {
            ngModule: MiraApiModule,
            providers: [ { provide: MiraConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: MiraApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('MiraApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
