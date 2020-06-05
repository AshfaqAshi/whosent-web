import { trigger, state, style, animate, transition, group, animateChild, query } from '@angular/animations';
export const introAnimation=[
trigger('introAnim',[state('void',style({
    position:'relative',
    left:'-75%'
})),

state('*',style({
    position:'relative',
    left:'0%'
})),

transition('void=>*',group([
    
    animate('850ms ease-in-out'),
    query('@introAnimRight',[animateChild()])
]))]),

trigger('introAnimRight',[state('void',style({
    opacity:'0.1',
    position:'relative',
    right:'-75%'
})),

state('*',style({
    opacity:'1.0',
    position:'relative',
    right:'0%'
})),

transition('void=>*',animate('850ms ease-in-out'))]),


]