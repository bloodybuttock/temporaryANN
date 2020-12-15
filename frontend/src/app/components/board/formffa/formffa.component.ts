import { Component, OnInit } from '@angular/core';
import 'jquery';
declare var $: JQuery;

declare global {
  interface JQuery {
    (any): JQuery;
    bracket(options: any): JQuery;
  }
}
@Component({
  selector: 'app-formffa',
  templateUrl: './formffa.component.html',
  styleUrls: ['./formffa.component.css']
})
export class FormffaComponent implements OnInit {

  constructor() { }

  ngOnInit(){

  var leftBracket = {
              teams: [
                  ["Kansas", "Austin Peay"],
                  ["Colorado", "Connecticut"],
                  ["Maryland", "South Dakota State"],
                  ["California", "Hawaii"],
                  ["Arizona", "Wichita State"],
                  ["Miami (FL)", "Buffalo"],
                  ["Iowa", "Temple"],
                  ["Villanova", "UNC Asheville"],
                  ["Oregon", "Holy Cross"],
                  ["Saint Joseph's", "Cincinnati"],
                  ["Baylor", "Yale"],
                  ["Duke", "UNC Wilmington"],
                  ["Texas", "Northern Iowa"],
                  ["Texas A&M", "Green Bay"],
                  ["Oregon State", "VCU"],
                  ["Oklahoma", "Cal State Bakersfield"]
              ],
              results: [
                  [
                      [[105, 79],[67, 74],[79, 74],[66, 77],[55, 65],[79, 72],[72, 70],[86, 56],[91, 52], [78, 76], [75, 79], [93, 85], [72, 75], [92, 65], [67, 75], [82, 68]],
                      [[73, 61],[73, 60],[57, 65],[68, 87],[69, 64],[64, 71],[88, 92],[81, 85]],
                      [[79, 63],[69, 92],[82, 68],[63, 77]],
                      [[59, 64],[68, 80]],
                      [[1,2]]
                  ]
              ]
          };

          var rightBracket = {
              teams: [
                  ["North Carolina", "Florida Gulf Coast"],
                  ["USC", "Providence"],
                  ["Indiana", "Chattanooga"],
                  ["Kentucky", "Stony Brook"],
                  ["Notre Dame", "Michigan"],
                  ["West Virginia", "Stephen F. Austin"],
                  ["Wisconsin", "Pittsburgh"],
                  ["Xavier", "Weber State"],
                  ["Virginia", "Hampton"],
                  ["Texas Tech", "Butler"],
                  ["Purdue", "Little Rock"],
                  ["Iowa State", "Iona"],
                  ["Seton Hall", "Gonzaga"],
                  ["Utah", "Fresno State"],
                  ["Dayton", "Syracuse"],
                  ["Michigan State", "Middle Tennessee"]
              ],
              results: [
                  [
                      [[83, 67], [69, 70], [99, 74], [85, 57], [70, 63], [56, 70], [47, 43], [71, 53], [81, 45], [61, 71], [83, 85], [94, 81], [52, 68], [80, 69], [51, 70], [81, 90]],
                      [[85, 66], [73, 67], [76, 75], [66, 63], [77, 69], [61, 78], [82, 59], [75, 50]],
                      [[101, 86], [61, 56], [84, 71], [60, 63]],
                      [[88, 74], [62, 68]],
                      [[2, 3]]
                  ]
              ]
          };

          $(function() {

              $('div#leftBracket').bracket({
                  init: leftBracket,
                  skipConsolationRound: true,
              });


              $('div#rightBracket').bracket({
                  init: rightBracket,
                  skipConsolationRound: true,
                  dir: 'rl',
              });
          })
  }

}
