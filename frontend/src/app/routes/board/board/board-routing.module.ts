import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from '../../../components/board/board.component';
import { PlayerComponent } from '../../../components/board/player/player.component';
import { BracketComponent } from '../../../components/board/bracket/bracket.component';
import { BigmatchComponent } from '../../../components/board/bigmatch/bigmatch.component';
import { MatchdayComponent } from '../../../components/board/matchday/matchday.component';
import { TournamentMatchComponent } from '../../../components/board/tournament-match/tournament-match.component';
import { FormffaComponent } from '../../../components/board/formffa/formffa.component';
import { TeamallComponent } from '../../../components/board/teamall/teamall.component';

const routes: Routes = [
  {path:'', component:BoardComponent,},
  {path:'bracket', component:BracketComponent,},
  {path:'individuals', component:TeamallComponent},
  {path:'player', component:PlayerComponent,},
  {path:'bigmatch', component:BigmatchComponent},
  {path:'ffa', component:FormffaComponent,},
  {path:'matchday', component:TournamentMatchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
