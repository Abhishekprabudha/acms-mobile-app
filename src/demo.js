export const crew = { crewId:'CPT-204', name:'A. Rahman', rank:'Captain', base:'KUL', fleet:'ATR72', status:'Ready', nextDuty:'FY3124 KUL → PEN', report:'06:40', checkWindow:'opens in 22m' };
export const roster = [
  {date:'Today', type:'FLY', title:'FY3124 KUL → PEN', time:'Report 06:40 · STD 08:10', status:'Acknowledge pending'},
  {date:'Tomorrow', type:'SBY', title:'Home Standby', time:'06:00 - 14:00', status:'Call-up ready'},
  {date:'Jun 30', type:'TRN', title:'Route Training', time:'09:00 - 13:00', status:'Confirmed'},
  {date:'Jul 01', type:'OFF', title:'Weekly Off', time:'All day', status:'Protected'},
  {date:'Jul 02', type:'FLY', title:'FY2176 PEN → JHB', time:'Report 09:00 · STD 10:30', status:'Published'}
];
export const notifications = [
  {title:'Roster v3 published', body:'Please acknowledge updated duties for the week.', action:'Required', time:'5m'},
  {title:'Medical expiry reminder', body:'Renewal due in 42 days.', action:'Info', time:'2h'},
  {title:'Leave approved', body:'Annual leave request for Jul 12-14 approved.', action:'Done', time:'1d'}
];
