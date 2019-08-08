import { NgModule } from '@angular/core';
import { ButtonModule, TileModule, NavbarModule, ProgressIndicatorsModule, ListModule } from '@healthcatalyst/cashmere';

const imports = [
  ButtonModule,
  TileModule,
  NavbarModule,
  ProgressIndicatorsModule,
  ListModule,
];

@NgModule({
  declarations: [],
  imports,
  exports: imports,
})
export class CashmereModule {}
