/*creio que este arquivo shared.module.ts não seja necessário ao projeto, pois deixamos
os componentes stand-alone depois, mas enfim, caso necessário, abaixo o conteúdo */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule]
})
export class SharedModule {}
