import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngresosService, AuthService} from './service.index';

@NgModule({
imports: [
CommonModule
],
providers: [
IngresosService,
AuthService
],
declarations: []
})

export class ServiceModule { }
