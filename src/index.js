import VPAIDHTML5Client from 'vpaid-html5-client'
window.vpaid = new VPAIDHTML5Client(
  document.getElementById('container'),
  document.getElementById('video'),
  {}
)

var s = '{"tag" : "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=rsb&c=31&ai=29738435&dg=3917123&sdg=6774085&PluID=0&sessionId=7418477019358539761&filghtId=&ta=-1&optOut=0","skipoffset":"5"}'
