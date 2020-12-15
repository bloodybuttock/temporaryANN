import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanitiaComponent } from '../../components/panitia/panitia.component';
import { AddgameComponent } from '../../components/panitia/addgame/addgame.component';
import { AddparticipanComponent } from '../../components/panitia/addparticipan/addparticipan.component';
import { AddruleComponent } from '../../components/panitia/addrule/addrule.component';
import { DataparticipantComponent } from '../../components/panitia/dataparticipant/dataparticipant.component';


const routes: Routes = [
  {path:'', component:PanitiaComponent,},
  {path:'addgame', component:AddgameComponent},
  {path:'addparticipan', component:AddparticipanComponent},
  {path:'addrule', component:AddruleComponent},
  {path:'participant', component:DataparticipantComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanitiaRoutingModule { }
