import { Injectable } from '@angular/core';
import {environment } from '../../../environments/environment';


export abstract class AbstractmanagerService {
  
  protected readonly API_URL: string;
  
  constructor() { 
    this.API_URL = environment.API_URL;
  }
}
