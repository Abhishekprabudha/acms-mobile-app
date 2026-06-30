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
  {title:'Medical expiry reminder', body:'Renewal due in 42 days. Open Wallet > Renew to view evidence and upload a certificate.', action:'Info', time:'2h'},
  {title:'Leave approved', body:'Annual leave request for Jul 12-14 approved.', action:'Done', time:'1d'},
  {title:'Crew support ticket updated', body:'Uniform replacement ticket ACMS-4481 is assigned to KUL ops support.', action:'Info', time:'3h'},
  {title:'Standby briefing', body:'Home standby tomorrow includes a 20-minute call response target.', action:'Required', time:'4h'}
];
export const walletSamples = [
  {id:'doc-lic-2026', name:'ATPL license scan.pdf', type:'application/pdf', size:'420 KB', uploaded:'Jun 20, 2026', status:'Verified sample'},
  {id:'doc-med-2026', name:'Medical renewal certificate.jpg', type:'image/jpeg', size:'735 KB', uploaded:'Jun 24, 2026', status:'Renewal sample'},
  {id:'doc-sep-2026', name:'SEP recurrent completion.pdf', type:'application/pdf', size:'318 KB', uploaded:'Jun 25, 2026', status:'Training sample'}
];
