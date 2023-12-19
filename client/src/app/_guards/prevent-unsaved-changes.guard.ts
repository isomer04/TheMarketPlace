import { Injectable, inject } from '@angular/core';
import {  CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { ConfirmService } from '../_services/confirm.service';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements  CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent) {
    const confirmService = inject(ConfirmService);
  
  if (component.editForm?.dirty) {
    return confirmService.confirm();
  }
  
  return true;
};
  
}
