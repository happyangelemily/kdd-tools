// === Stars ===
(function(){const c=document.getElementById('stars');for(let i=0;i<80;i++){const s=document.createElement('div');s.className='star';s.style.cssText='left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;width:'+(1+Math.random()*2)+'px;height:'+(1+Math.random()*2)+'px;--dur:'+(2+Math.random()*4)+'s;--delay:'+Math.random()*5+'s';c.appendChild(s)}})();

// ═══ AUDIO SYSTEM ═══
var AUDIO_BASE='audio/';
var audioCache={};
var PHONEMES={
  '/iː/':'phonemes/sheep.mp3','/ɪ/':'phonemes/ship.mp3','/ɑː/':'phonemes/father.mp3',
  '/æ/':'phonemes/hat.mp3','/ʌ/':'phonemes/cup.mp3','/ɔː/':'phonemes/horse.mp3',
  '/ɒ/':'phonemes/sock.mp3','/uː/':'phonemes/blue.mp3','/ʊ/':'phonemes/foot.mp3',
  '/e/':'phonemes/head.mp3','/ɜː/':'phonemes/bird.mp3','/ə/':'phonemes/above.mp3',
  '/eɪ/':'phonemes/day_ei.mp3','/aɪ/':'phonemes/eye.mp3','/ɔɪ/':'phonemes/boy.mp3',
  '/əʊ/':'phonemes/nose.mp3','/aʊ/':'phonemes/mouth.mp3','/ɪə/':'phonemes/ear.mp3',
  '/eə/':'phonemes/hair.mp3','/ʊə/':'phonemes/pure.mp3',
  '/p/':'phonemes/pen.mp3','/b/':'phonemes/book.mp3','/t/':'phonemes/town.mp3',
  '/d/':'phonemes/day.mp3','/k/':'phonemes/cat.mp3','/g/':'phonemes/give.mp3',
  '/f/':'phonemes/fish.mp3','/v/':'phonemes/very.mp3','/θ/':'phonemes/think.mp3',
  '/ð/':'phonemes/this.mp3','/s/':'phonemes/say.mp3','/z/':'phonemes/zoo.mp3',
  '/ʃ/':'phonemes/she.mp3','/ʒ/':'phonemes/vision.mp3','/h/':'phonemes/hand.mp3',
  '/tʃ/':'phonemes/cheese.mp3','/dʒ/':'phonemes/jump.mp3',
  '/m/':'phonemes/moon.mp3','/n/':'phonemes/name.mp3','/ŋ/':'phonemes/sing.mp3',
  '/l/':'phonemes/look.mp3','/r/':'phonemes/run.mp3','/w/':'phonemes/we.mp3',
  '/j/':'phonemes/yes.mp3','/i/':'phonemes/happy.mp3','/u/':'phonemes/situation.mp3',
  '/juː/':'words/you.mp3','/kw/':'phonemes/kw.mp3','/ks/':'phonemes/ks.mp3'
};
var WORDS={
  'above':'words/above.mp3','act':'words/act.mp3','actor':'words/actor.mp3','apple':'words/apple.mp3','apt':'words/apt.mp3','back':'words/back.mp3','bag':'words/bag.mp3','bang':'words/bang.mp3',
  'bank':'words/bank.mp3','bar':'words/bar.mp3','bask':'words/bask.mp3','bat':'words/bat.mp3','bath':'words/bath.mp3','beach':'words/beach.mp3','bed':'words/bed.mp3','bee':'words/bee.mp3',
  'before':'words/before.mp3','belch':'words/belch.mp3','belt':'words/belt.mp3','bench':'words/bench.mp3','bend':'words/bend.mp3','bent':'words/bent.mp3','best':'words/best.mp3','big':'words/big.mp3',
  'bird':'words/bird.mp3','blank':'words/blank.mp3','blanks':'words/blanks.mp3','bland':'words/bland.mp3','blast':'words/blast.mp3','blasts':'words/blasts.mp3','blend':'words/blend.mp3','blink':'words/blink.mp3','blob':'words/blob.mp3','blue':'words/blue.mp3','blunt':'words/blunt.mp3','bolt':'words/bolt.mp3',
  'bond':'words/bond.mp3','book':'words/book.mp3','box':'words/box.mp3','boy':'words/boy.mp3','brag':'words/brag.mp3','brand':'words/brand.mp3','bread':'words/bread.mp3','break':'words/break.mp3',
  'bred':'words/bred.mp3','brim':'words/brim.mp3','brink':'words/brink.mp3','brisk':'words/brisk.mp3','bug':'words/bug.mp3','bulk':'words/bulk.mp3','bump':'words/bump.mp3','bunch':'words/bunch.mp3','bus':'words/bus.mp3',
  'bush':'words/bush.mp3','cake':'words/cake.mp3','camp':'words/camp.mp3','cap':'words/cap.mp3','cape':'words/cape.mp3','car':'words/car.mp3','cash':'words/cash.mp3','cat':'words/cat.mp3',
  'chat':'words/chat.mp3','cheese':'words/cheese.mp3','chin':'words/chin.mp3','chip':'words/chip.mp3','chop':'words/chop.mp3','city':'words/city.mp3','clamp':'words/clamp.mp3','clank':'words/clank.mp3','clink':'words/clink.mp3','clasp':'words/clasp.mp3','clip':'words/clip.mp3',
  'club':'words/club.mp3','cold':'words/cold.mp3','corn':'words/corn.mp3','cost':'words/cost.mp3','crab':'words/crab.mp3','cramp':'words/cramp.mp3','crank':'words/crank.mp3','crimp':'words/crimp.mp3','crept':'words/crept.mp3','crest':'words/crest.mp3','crib':'words/crib.mp3',
  'crisp':'words/crisp.mp3','crust':'words/crust.mp3','cup':'words/cup.mp3','cut':'words/cut.mp3','cute':'words/cute.mp3','damp':'words/damp.mp3','dark':'words/dark.mp3','dash':'words/dash.mp3',
  'day':'words/day.mp3','dent':'words/dent.mp3','desk':'words/desk.mp3','dig':'words/dig.mp3','doctor':'words/doctor.mp3','dog':'words/dog.mp3','door':'words/door.mp3','dot':'words/dot.mp3',
  'draft':'words/draft.mp3','dream':'words/dream.mp3','drift':'words/drift.mp3','drink':'words/drink.mp3','drinks':'words/drinks.mp3','drop':'words/drop.mp3','drum':'words/drum.mp3','duck':'words/duck.mp3','duct':'words/duct.mp3',
  'dump':'words/dump.mp3','dunk':'words/dunk.mp3','dusk':'words/dusk.mp3','dust':'words/dust.mp3','ear':'words/ear.mp3','eat':'words/eat.mp3','egg':'words/egg.mp3','elf':'words/elf.mp3',
  'enjoy':'words/enjoy.mp3','eye':'words/eye.mp3','fact':'words/fact.mp3','fan':'words/fan.mp3','far':'words/far.mp3','farm':'words/farm.mp3','fast':'words/fast.mp3','father':'words/father.mp3',
  'felt':'words/felt.mp3','fern':'words/fern.mp3','filch':'words/filch.mp3','fill':'words/fill.mp3','filth':'words/filth.mp3','fin':'words/fin.mp3','fish':'words/fish.mp3','fist':'words/fist.mp3',
  'fix':'words/fix.mp3','flag':'words/flag.mp3','flask':'words/flask.mp3','flunk':'words/flunk.mp3','flat':'words/flat.mp3','floor':'words/floor.mp3','flower':'words/flower.mp3','fly':'words/fly.mp3','fog':'words/fog.mp3','fold':'words/fold.mp3',
  'foot':'words/foot.mp3','for':'words/for.mp3','fork':'words/fork.mp3','fox':'words/fox.mp3','frog':'words/frog.mp3','front':'words/front.mp3','frump':'words/frump.mp3','frost':'words/frost.mp3','full':'words/full.mp3',
  'fun':'words/fun.mp3','fund':'words/fund.mp3','garden':'words/garden.mp3','gasp':'words/gasp.mp3','germ':'words/germ.mp3','gift':'words/gift.mp3','giraffe':'words/giraffe.mp3','give':'words/give.mp3',
  'glad':'words/glad.mp3','goat':'words/goat.mp3','gold':'words/gold.mp3','golf':'words/golf.mp3','grab':'words/grab.mp3','grand':'words/grand.mp3','grist':'words/grist.mp3','grant':'words/grant.mp3','grasp':'words/grasp.mp3',
  'gray':'words/gray.mp3','great':'words/great.mp3','green':'words/green.mp3','grin':'words/grin.mp3','grunt':'words/grunt.mp3','guitar':'words/guitar.mp3','gulp':'words/gulp.mp3','gym':'words/gym.mp3','hair':'words/hair.mp3',
  'halt':'words/halt.mp3','hand':'words/hand.mp3','hang':'words/hang.mp3','happy':'words/happy.mp3','hasp':'words/hasp.mp3','hat':'words/hat.mp3','he':'words/he.mp3','head':'words/head.mp3',
  'health':'words/health.mp3','held':'words/held.mp3','help':'words/help.mp3','hemp':'words/hemp.mp3','hen':'words/hen.mp3','her':'words/her.mp3','hit':'words/hit.mp3','honk':'words/honk.mp3',
  'hop':'words/hop.mp3','hope':'words/hope.mp3','horse':'words/horse.mp3','hot':'words/hot.mp3','hug':'words/hug.mp3','hunch':'words/hunch.mp3','hunt':'words/hunt.mp3','husk':'words/husk.mp3',
  'hut':'words/hut.mp3','ice':'words/ice.mp3','igloo':'words/igloo.mp3','jam':'words/jam.mp3','jar':'words/jar.mp3','jet':'words/jet.mp3','jump':'words/jump.mp3','junk':'words/junk.mp3',
  'just':'words/just.mp3','kept':'words/kept.mp3','kilt':'words/kilt.mp3','king':'words/king.mp3','kit':'words/kit.mp3','kite':'words/kite.mp3','lamp':'words/lamp.mp3','left':'words/left.mp3',
  'leg':'words/leg.mp3','length':'words/length.mp3','lick':'words/lick.mp3','lift':'words/lift.mp3','like':'words/like.mp3','limp':'words/limp.mp3','link':'words/link.mp3','lint':'words/lint.mp3',
  'lion':'words/lion.mp3','lip':'words/lip.mp3','lisp':'words/lisp.mp3','loft':'words/loft.mp3','log':'words/log.mp3','long':'words/long.mp3','look':'words/look.mp3','lost':'words/lost.mp3',
  'lunch':'words/lunch.mp3','lymph':'words/lymph.mp3','mail':'words/mail.mp3','map':'words/map.mp3','mask':'words/mask.mp3','math':'words/math.mp3','me':'words/me.mp3','melt':'words/melt.mp3',
  'mend':'words/mend.mp3','milk':'words/milk.mp3','mint':'words/mint.mp3','mix':'words/mix.mp3','month':'words/month.mp3','moon':'words/moon.mp3','more':'words/more.mp3','moth':'words/moth.mp3',
  'mouth':'words/mouth.mp3','much':'words/much.mp3','mulch':'words/mulch.mp3','must':'words/must.mp3','my':'words/my.mp3','myth':'words/myth.mp3','name':'words/name.mp3','nest':'words/nest.mp3',
  'net':'words/net.mp3','never':'words/never.mp3','north':'words/north.mp3','nose':'words/nose.mp3','not':'words/not.mp3','nut':'words/nut.mp3','nymph':'words/nymph.mp3','octopus':'words/octopus.mp3',
  'odd':'words/odd.mp3','open':'words/open.mp3','opt':'words/opt.mp3','pack':'words/pack.mp3','pact':'words/pact.mp3','paint':'words/paint.mp3','pan':'words/pan.mp3','pant':'words/pant.mp3',
  'park':'words/park.mp3','path':'words/path.mp3','peg':'words/peg.mp3','pen':'words/pen.mp3','pet':'words/pet.mp3','pick':'words/pick.mp3','pig':'words/pig.mp3','pin':'words/pin.mp3',
  'pinch':'words/pinch.mp3','pink':'words/pink.mp3','plan':'words/plan.mp3','plank':'words/plank.mp3','plant':'words/plant.mp3','plants':'words/plants.mp3','play':'words/play.mp3','plug':'words/plug.mp3','plump':'words/plump.mp3','plunk':'words/plunk.mp3','pond':'words/pond.mp3','pot':'words/pot.mp3',
  'press':'words/press.mp3','prank':'words/prank.mp3','primp':'words/primp.mp3','prod':'words/prod.mp3','prompts':'words/prompts.mp3','pull':'words/pull.mp3','pulp':'words/pulp.mp3','pump':'words/pump.mp3','punt':'words/punt.mp3','pure':'words/pure.mp3',
  'push':'words/push.mp3','put':'words/put.mp3','queen':'words/queen.mp3','raft':'words/raft.mp3','rain':'words/rain.mp3','ranch':'words/ranch.mp3','rat':'words/rat.mp3','read':'words/read.mp3',
  'red':'words/red.mp3','rest':'words/rest.mp3','rich':'words/rich.mp3','risk':'words/risk.mp3','river':'words/river.mp3','rock':'words/rock.mp3','romp':'words/romp.mp3','rose':'words/rose.mp3',
  'run':'words/run.mp3','rush':'words/rush.mp3','rust':'words/rust.mp3','sad':'words/sad.mp3','sail':'words/sail.mp3','salt':'words/salt.mp3','sand':'words/sand.mp3','say':'words/say.mp3',
  'scab':'words/scab.mp3','scalp':'words/scalp.mp3','scar':'words/scar.mp3','scram':'words/scram.mp3','script':'words/script.mp3','scripts':'words/scripts.mp3','scrimp':'words/scrimp.mp3','scrimps':'words/scrimps.mp3','scum':'words/scum.mp3','sea':'words/sea.mp3','sect':'words/sect.mp3',
  'see':'words/see.mp3','self':'words/self.mp3','send':'words/send.mp3','serve':'words/serve.mp3','shark':'words/shark.mp3','she':'words/she.mp3','sheep':'words/sheep.mp3','shelf':'words/shelf.mp3',
  'ship':'words/ship.mp3','shop':'words/shop.mp3','short':'words/short.mp3','shred':'words/shred.mp3','shrub':'words/shrub.mp3','shrug':'words/shrug.mp3','sift':'words/sift.mp3','silk':'words/silk.mp3',
  'sin':'words/sin.mp3','sing':'words/sing.mp3','sink':'words/sink.mp3','sir':'words/sir.mp3','sister':'words/sister.mp3','sit':'words/sit.mp3','six':'words/six.mp3','sixth':'words/sixth.mp3',
  'sixths':'words/sixths.mp3','skimp':'words/skimp.mp3','skin':'words/skin.mp3','skip':'words/skip.mp3','slam':'words/slam.mp3','slant':'words/slant.mp3','sled':'words/sled.mp3','sleep':'words/sleep.mp3','slink':'words/slink.mp3','slip':'words/slip.mp3','slug':'words/slug.mp3','slump':'words/slump.mp3',
  'smog':'words/smog.mp3','smug':'words/smug.mp3','snap':'words/snap.mp3','snip':'words/snip.mp3','sock':'words/sock.mp3','soft':'words/soft.mp3','son':'words/son.mp3','song':'words/song.mp3',
  'speak':'words/speak.mp3','spend':'words/spend.mp3','spent':'words/spent.mp3','spin':'words/spin.mp3','splash':'words/splash.mp3','splat':'words/splat.mp3','splint':'words/splint.mp3','splints':'words/splints.mp3','split':'words/split.mp3','spot':'words/spot.mp3','spunk':'words/spunk.mp3','sprig':'words/sprig.mp3',
  'spring':'words/spring.mp3','sprint':'words/sprint.mp3','sprints':'words/sprints.mp3','stamp':'words/stamp.mp3','stamps':'words/stamps.mp3','stand':'words/stand.mp3','star':'words/star.mp3','stay':'words/stay.mp3','stilt':'words/stilt.mp3','stink':'words/stink.mp3','stomp':'words/stomp.mp3','step':'words/step.mp3','stop':'words/stop.mp3',
  'store':'words/store.mp3','storm':'words/storm.mp3','strand':'words/strand.mp3','strands':'words/strands.mp3','strap':'words/strap.mp3','strict':'words/strict.mp3','strip':'words/strip.mp3','strong':'words/strong.mp3','strum':'words/strum.mp3',
  'such':'words/such.mp3','sulk':'words/sulk.mp3','sun':'words/sun.mp3','swell':'words/swell.mp3','swept':'words/swept.mp3','swim':'words/swim.mp3','sylph':'words/sylph.mp3','table':'words/table.mp3',
  'tank':'words/tank.mp3','tea':'words/tea.mp3','teacher':'words/teacher.mp3','ten':'words/ten.mp3','tent':'words/tent.mp3','tenth':'words/tenth.mp3','term':'words/term.mp3','text':'words/text.mp3',
  'texts':'words/texts.mp3','that':'words/that.mp3','them':'words/them.mp3','then':'words/then.mp3','thin':'words/thin.mp3','think':'words/think.mp3','this':'words/this.mp3','throb':'words/throb.mp3',
  'tick':'words/tick.mp3','top':'words/top.mp3','tract':'words/tract.mp3','train':'words/train.mp3','tramp':'words/tramp.mp3','tract':'words/tract.mp3','train':'words/train.mp3','trap':'words/trap.mp3','tree':'words/tree.mp3','trim':'words/trim.mp3',
  'trip':'words/trip.mp3','trump':'words/trump.mp3','trunk':'words/trunk.mp3','trunks':'words/trunks.mp3','trust':'words/trust.mp3','trusts':'words/trusts.mp3','tub':'words/tub.mp3','tusk':'words/tusk.mp3','twig':'words/twig.mp3','twin':'words/twin.mp3',
  'twist':'words/twist.mp3','twists':'words/twists.mp3','type':'words/type.mp3','umbrella':'words/umbrella.mp3','unicorn':'words/unicorn.mp3','van':'words/van.mp3','verb':'words/verb.mp3','very':'words/very.mp3',
  'vision':'words/vision.mp3','wait':'words/wait.mp3','wash':'words/wash.mp3','wasp':'words/wasp.mp3','way':'words/way.mp3','we':'words/we.mp3','welsh':'words/welsh.mp3','went':'words/went.mp3',
  'wept':'words/wept.mp3','wet':'words/wet.mp3','what':'words/what.mp3','when':'words/when.mp3','which':'words/which.mp3','whip':'words/whip.mp3','wild':'words/wild.mp3','wind_1':'words/wind_1.mp3',
  'wind_2':'words/wind_2.mp3','wing':'words/wing.mp3','winter':'words/winter.mp3','wish':'words/wish.mp3','wisp':'words/wisp.mp3','with':'words/with.mp3','word':'words/word.mp3','work':'words/work.mp3',
  'xylophone':'words/xylophone.mp3','yellow':'words/yellow.mp3','yelp':'words/yelp.mp3','yes':'words/yes.mp3','find':'words/find.mp3','kind':'words/kind.mp3','mind':'words/mind.mp3','child':'words/child.mp3','old':'words/old.mp3','most':'words/most.mp3','all':'words/all.mp3','ball':'words/ball.mp3','talk':'words/talk.mp3','walk':'words/walk.mp3','you':'words/you.mp3','scald':'words/scald.mp3','skulk':'words/skulk.mp3','smelt':'words/smelt.mp3','swift':'words/swift.mp3','glint':'words/glint.mp3','dwelt':'words/dwelt.mp3','squelch':'words/squelch.mp3','stench':'words/stench.mp3','trench':'words/trench.mp3','clench':'words/clench.mp3','strength':'words/strength.mp3','sphinx':'words/sphinx.mp3','shrimp':'words/shrimp.mp3','thrift':'words/thrift.mp3','thrust':'words/thrust.mp3','crunch':'words/crunch.mp3','zoo':'words/zoo.mp3','blinks':'words/blinks.mp3','blond':'words/blond.mp3','clamps':'words/clamps.mp3','cramps':'words/cramps.mp3','drafts':'words/drafts.mp3','drifts':'words/drifts.mp3','frosts':'words/frosts.mp3','grants':'words/grants.mp3','grasps':'words/grasps.mp3','stomps':'words/stomps.mp3','stunt':'words/stunt.mp3','branch':'words/branch.mp3','drench':'words/drench.mp3','stunts':'words/stunts.mp3','sculpt':'words/sculpt.mp3','prompt':'words/prompt.mp3','glimpse':'words/glimpse.mp3','twelfth':'words/twelfth.mp3',};
(function(){try{for(var k in WORDS){var a=new Audio(AUDIO_BASE+WORDS[k]);a.preload='auto';a.load();audioCache[WORDS[k]]=a}for(var k in PHONEMES){var p=PHONEMES[k];if(!audioCache[p]){var a2=new Audio(AUDIO_BASE+p);a2.preload='auto';a2.load();audioCache[p]=a2}}}catch(e){}})();
function playAudio(path,el){if(!el||!el.classList)return;if(el.classList.contains('on'))return;var player=audioCache[path];if(!player)return;player.pause();player.currentTime=0;el.classList.add('on');var done=function(){el.classList.remove('on')};player.addEventListener('ended',done,{once:true});player.addEventListener('error',done,{once:true});player.play().catch(function(e){el.classList.remove('on')});}

function spkPhoneme(ipa,el){var p=PHONEMES[ipa];if(p){playAudio(p,el);return}}
function spkWord(word,el){var w=word.toLowerCase();var p=WORDS[w];if(p){playAudio(p,el);return}spk(w)}
function spk(word){var w=String(word).toLowerCase().replace(/[^a-z']/g,'');var p=WORDS[w];if(p){var player=audioCache[p];if(!player){speakNow(w);return}player.pause();player.currentTime=0;player.addEventListener('error',function(){speakNow(w)},{once:true});player.play().catch(function(){speakNow(w)});}else{speakNow(w);}}

function isFem(n){return/female|woman|samantha|karen|moira|fiona|veena|tessa|susan|ava|allison/i.test(n)}
function speakNow(word){speechSynthesis.resume();if(spT){clearTimeout(spT);spT=null}speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(word);u.lang='en-US';u.rate=0.75;u.pitch=1;u.volume=1;var voices=speechSynthesis.getVoices();var en=voices.find(function(v){return v.lang==='en-US'&&v.name.includes('Google')})||voices.filter(function(v){return v.lang==='en-US'}).sort(function(a,b){return isFem(a.name)?-1:isFem(b.name)?1:0})[0]||voices.filter(function(v){return v.lang.startsWith('en')}).sort(function(a,b){return isFem(a.name)?-1:isFem(b.name)?1:0})[0];if(en)u.voice=en;setTimeout(function(){speechSynthesis.speak(u)},50)}

// === Navigation ===
var NM={story:'故事',lab:'实验',sort:'分拣',quiz:'闯关',book:'绘本',easter:'彩蛋'};
function showS(n){
  document.querySelectorAll('.section').forEach(function(s){s.classList.remove('active')});
  document.getElementById('sec-'+n).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(function(b){b.classList.remove('active');if(b.textContent.includes(NM[n]))b.classList.add('active')});
  if(n==='lab')buildL();
  if(n==='sort')buildSort();
  if(n==='quiz')initQ();
  if(n==='book'){bp_cp=0;renderP()}
}
function findStartBlend(word){
  var tri=['spl','spr','str','scr'];
  for(var i=0;i<tri.length;i++){if(word.substring(0,3)===tri[i])return {blend:tri[i],len:3}}
  var bi=['st','sp','sk','bl','br','cl','cr','dr','fl','fr','gl','gr','pl','pr','sl','sm','sn','tr','tw','sw','sc','dw','sh','th'];
  for(var i=0;i<bi.length;i++){if(word.substring(0,2)===bi[i])return {blend:bi[i],len:2}}
  return null;
}

// ═══ STORY: Blend Deconstruction Cards ═══
function makeDeconCard(cat, word, letters){
  var h='<div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:10px 14px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:4px 0;min-width:0">';
  h+='<span style="font-size:.7em;color:#888;white-space:nowrap;min-width:50px">'+cat+'</span>';
  h+='<span style="display:inline-flex;align-items:center;gap:1px;flex-wrap:wrap">';
  letters.forEach(function(l,i){
    if(i>0)h+='<span style="color:#444;font-size:.75em;margin:0 3px">+</span>';
    if(l.s2){
      h+='<span style="display:inline-flex;flex-direction:column;align-items:center;padding:1px 2px">';
      h+='<span style="color:'+l.c+';font-size:1.2em;font-weight:bold;line-height:1.2">'+l.l+'</span>';
      h+='<span style="font-size:.62em;color:#888;line-height:1.2">'+l.s+' <span style="cursor:pointer" onclick="spkPhoneme(\''+l.s+'\',this)">🔊</span> '+l.s2+' <span style="cursor:pointer" onclick="spkPhoneme(\''+l.s2+'\',this)">🔊</span></span>';
      h+='</span>';
    }else{
      h+='<span style="display:inline-flex;flex-direction:column;align-items:center;cursor:pointer;padding:1px 2px" onclick="spkPhoneme(\''+l.s+'\',this)">';
      h+='<span style="color:'+l.c+';font-size:1.2em;font-weight:bold;line-height:1.2">'+l.l+'</span>';
      h+='<span style="font-size:.62em;color:#888;line-height:1.2">'+l.s+' 🔊</span>';
      h+='</span>';
    }
  });
  h+='</span>';
  h+='<span style="color:#666;font-size:.85em;margin:0 4px">→</span>';
  h+='<span style="font-size:1.15em;font-weight:bold;letter-spacing:2px">';letters.forEach(function(l){h+='<span style="color:'+l.c+'">'+l.l+'</span>';});h+='</span>';
  h+='<span class="speak-btn" onclick="spk(\''+word+'\')" style="width:24px;height:24px;font-size:.65em;flex-shrink:0">🔊</span>';
  h+='</div>';
  return h;
}

// ═══ STORY: Decon Examples + Variety Cards ═══
(function(){
  // CCVCC decon example: stamp
  var h=makeDeconCard('CCVCC','stamp ✉️',[{l:'s',s:'/s/',c:'#ce93d8'},{l:'t',s:'/t/',c:'#ce93d8'},{l:'a',s:'/æ/',c:'#4fc3f7'},{l:'m',s:'/m/',c:'#ef9a9a'},{l:'p',s:'/p/',c:'#ef9a9a'}]);
  // CCVCC variety: one per coda type
  h='';
  h+=makeDeconCard('mp','stamp',[{l:'s',s:'/s/',c:'#ce93d8'},{l:'t',s:'/t/',c:'#ce93d8'},{l:'a',s:'/æ/',c:'#4fc3f7'},{l:'m',s:'/m/',c:'#ef9a9a'},{l:'p',s:'/p/',c:'#ef9a9a'}]);
  h+=makeDeconCard('nk','drink',[{l:'d',s:'/d/',c:'#ce93d8'},{l:'r',s:'/r/',c:'#ce93d8'},{l:'i',s:'/ɪ/',c:'#4fc3f7'},{l:'n',s:'/ŋ/',c:'#ef9a9a'},{l:'k',s:'/k/',c:'#ef9a9a'}]);
  document.getElementById('ccvccVariety').innerHTML=h;
})();
(function(){
  // CCVCCC decon example: sculpt
  var h=makeDeconCard('CCVCCC','sculpt 🗿',[{l:'s',s:'/s/',c:'#ce93d8'},{l:'c',s:'/k/',c:'#ce93d8'},{l:'u',s:'/ʌ/',c:'#4fc3f7'},{l:'l',s:'/l/',c:'#ef9a9a'},{l:'p',s:'/p/',c:'#ef9a9a'},{l:'t',s:'/t/',c:'#ef9a9a'}]);
  // CCVCCC variety
  h='';
  h+=makeDeconCard('CCVCCC','sculpt',[{l:'s',s:'/s/',c:'#ce93d8'},{l:'c',s:'/k/',c:'#ce93d8'},{l:'u',s:'/ʌ/',c:'#4fc3f7'},{l:'l',s:'/l/',c:'#ef9a9a'},{l:'p',s:'/p/',c:'#ef9a9a'},{l:'t',s:'/t/',c:'#ef9a9a'}]);
  h+=makeDeconCard('CCVCCC','prompt',[{l:'p',s:'/p/',c:'#ce93d8'},{l:'r',s:'/r/',c:'#ce93d8'},{l:'o',s:'/ɒ/',c:'#4fc3f7'},{l:'m',s:'/m/',c:'#ef9a9a'},{l:'p',s:'/p/',c:'#ef9a9a'},{l:'t',s:'/t/',c:'#ef9a9a'}]);
  document.getElementById('ccvcccCards').innerHTML=h;
})();
(function(){
  // CCCVCC decon example: sprint
  var h=makeDeconCard('CCCVCC','sprint 🏃',[{l:'s',s:'/s/',c:'#ce93d8'},{l:'p',s:'/p/',c:'#ce93d8'},{l:'r',s:'/r/',c:'#ce93d8'},{l:'i',s:'/ɪ/',c:'#4fc3f7'},{l:'n',s:'/n/',c:'#ef9a9a'},{l:'t',s:'/t/',c:'#ef9a9a'}]);
  // CCCVCC variety: sprint, strand (one per coda type)
  h='';
  h+=makeDeconCard('nt','sprint',[{l:'s',s:'/s/',c:'#ce93d8'},{l:'p',s:'/p/',c:'#ce93d8'},{l:'r',s:'/r/',c:'#ce93d8'},{l:'i',s:'/ɪ/',c:'#4fc3f7'},{l:'n',s:'/n/',c:'#ef9a9a'},{l:'t',s:'/t/',c:'#ef9a9a'}]);
  h+=makeDeconCard('nd','strand',[{l:'s',s:'/s/',c:'#ce93d8'},{l:'t',s:'/t/',c:'#ce93d8'},{l:'r',s:'/r/',c:'#ce93d8'},{l:'a',s:'/æ/',c:'#4fc3f7'},{l:'n',s:'/n/',c:'#ef9a9a'},{l:'d',s:'/d/',c:'#ef9a9a'}]);
  document.getElementById('cccvccCards').innerHTML=h;
})();
// CCCVCCC explanation
(function(){
  document.getElementById('cccvcccCards').innerHTML='<div style="background:rgba(239,154,154,.04);border:1px solid rgba(239,154,154,.2);border-radius:12px;padding:14px 18px;text-align:center;max-width:400px;margin:0 auto;line-height:1.7"><p style="color:#ef9a9a;font-weight:bold;margin-bottom:6px">📝 CCCVCCC 模式说明</p><p style="color:#ccc;font-size:.9em">sprints / strands / scripts 等词，全部是<b style="color:#ffd200">「CCCVCC + 后缀 -s」</b>的结构。没有非后缀的纯 CCCVCCC 单词。</p><p style="color:#aaa;font-size:.82em;margin-top:8px">🔒 后缀 -s/-es 要等后面专门学。</p></div>';
})();


// ═══ LAB ═══
var labData={
  'ccvcc':{
    label:'CCVCC (2+1+2)',blendLen:2,
    subs:{
      'nd':{label:'-nd',words:[['stand','站立 🧍'],['spend','花费 💸'],['bland','平淡 😐'],['blend','混合 🌀'],['brand','品牌 🏷'],['blond','金发 👱'],['grand','宏伟 🏰']]},
      'nt':{label:'-nt',words:[['spent','花费过 💸'],['front','前面 🚪'],['grant','授予 🎫'],['plant','植物 🌱'],['slant','倾斜 📐'],['blunt','钝的 🔪'],['grunt','咕哝 😤'],['stunt','特技 🎪']]},
      'mp':{label:'-mp',words:[['stamp','邮票 ✉️'],['clamp','夹子 🔧'],['cramp','抽筋 😫'],['tramp','流浪者 🚶'],['plump','丰满 🍗'],['slump','暴跌 📉'],['trump','王牌 ♠️'],['stomp','跺脚 👣'],['crimp','卷曲 🦐'],['skimp','吝啬 🪙'],['primp','打扮 💄'],['frump','邋遢 👗']]},
      'nk':{label:'-nk',words:[['blank','空白 ⬜'],['plank','木板 🪵'],['prank','恶作剧 🎭'],['clank','叮当 🔗'],['crank','曲柄 🔧'],['stink','臭味 🤢'],['blink','眨眼 👁'],['brink','边缘 🌊'],['drink','喝 🥤'],['clink','碰杯 🥂'],['trunk','树干 🧳'],['flunk','不及格 📉'],['slink','溜走 🐍'],['spunk','勇气 💪'],['plunk','弹拨 🪕']]},
      'stftct':{label:'-st/-ft/-ct',words:[['blast','爆炸 💥'],['crest','顶峰 🏔'],['crust','外壳 🍞'],['frost','霜 ❄️'],['trust','信任 🤝'],['twist','扭转 🪢'],['grist','谷物 🌾'],['draft','草稿 📝'],['drift','漂流 🌊'],['tract','地带 📄'],['crept','爬行 🐢']]},
      'spsklt':{label:'-sp/-sk/-lt',words:[['clasp','扣子 🔒'],['grasp','抓住 ✊'],['brisk','轻快 🏃'],['flask','烧瓶 🧪'],['stilt','高跷 🪜'],['scalp','头皮 💆'],['skulk','躲藏 🕵'],['smelt','冶炼 🔩'],['swift','快速 💨'],['dwelt','住过 🏠'],['glint','闪光 ✨']]}
    }
  },
  'ccvccc':{
    label:'CCVCCC (2+1+3)',blendLen:2,
    words:[['sculpt','雕刻 🗿'],['prompt','提示 💡'],['glimpse','一瞥 👀']]
  },
  'cccvcc':{
    label:'CCCVCC (3+1+2)',blendLen:3,
    words:[['splint','夹板 🩹'],['sprint','冲刺 🏃'],['strand','一缕 🧵'],['strict','严格 📏'],['script','剧本 📜'],['scrimp','节省 🪙']]
  }
};
var curL='ccvcc';
var curSub='nd';
function switchL(k){curL=k;var s=labData[k].subs;curSub=s?Object.keys(s)[0]:null;buildL()}
function switchSub(k){curSub=k;buildL()}
function buildL(){
  var cfg=labData[curL];
  if(!cfg){document.getElementById('labGrid').innerHTML='';return}
  var tabs='';
  Object.keys(labData).forEach(function(k){
    tabs+='<button class="lab-tab'+(k===curL?' active':'')+'" onclick="switchL(\''+k+'\')">'+labData[k].label+'</button>';
  });
  document.getElementById('labTabs').innerHTML=tabs;
  var subEl=document.getElementById('labSubtabs');
  if(cfg.subs){
    var stabs='';
    Object.keys(cfg.subs).forEach(function(k){
      stabs+='<button class="lab-subtab'+(k===curSub?' active':'')+'" onclick="switchSub(\''+k+'\')">'+cfg.subs[k].label+'</button>';
    });
    subEl.innerHTML=stabs;
    subEl.style.display='flex';
  }else{subEl.innerHTML='';subEl.style.display='none'}
  var words=cfg.subs?cfg.subs[curSub].words:(cfg.words||[]);
  var bl=cfg.blendLen,blendColor=bl>=3?'#ef9a9a':'#ce93d8',vowels='aeiou';
  document.getElementById('labGrid').innerHTML=words.map(function(w,i){
    var word=w[0],emoji=w[1],len=word.length;
    var sb=findStartBlend(word);
    var ebLen=(curL==='ccvccc')?3:2;
    var ebPos=len-ebLen;
    var j=0,colored='';
    while(j<len){
      if(sb&&j===0){colored+='<span class="sb-c">'+sb.blend+'</span>';j+=sb.len}
      else if(j>=ebPos){colored+='<span class="eb-c">'+word.substring(j)+'</span>';j=len}
      else if(vowels.indexOf(word[j])>=0){colored+='<span class="vw">'+word[j]+'</span>';j++}
      else{colored+='<span class="cn-c">'+word[j]+'</span>';j++}
    }
    return '<div class="lab-card" id="lc'+i+'" onclick="document.getElementById(\'lc'+i+'\').classList.toggle(\'flipped\');spk(\''+word+'\')"><div class="word" style="font-size:'+(word.length<=4?'1.7em':word.length<=5?'1.45em':word.length<=6?'1.25em':word.length<=7?'1.1em':word.length<=8?'0.95em':word.length<=9?'0.85em':word.length<=10?'0.76em':'0.68em')+';letter-spacing:'+(word.length<=5?'3px':word.length<=6?'2px':word.length<=7?'1px':'0px')+'">'+colored+'</div><div class="hint">'+emoji+'</div></div>';
  }).join('');
}

// ═══ SORT ═══
var sortWords=[{w:'stand',t:'a'},{w:'grand',t:'a'},{w:'brand',t:'a'},{w:'grant',t:'a'},{w:'plant',t:'a'},{w:'stamp',t:'a'},{w:'clamp',t:'a'},{w:'blank',t:'a'},{w:'blast',t:'a'},{w:'tract',t:'a'},{w:'clasp',t:'a'},{w:'flask',t:'a'},{w:'scalp',t:'a'},{w:'strand',t:'a'},{w:'spend',t:'e'},{w:'blend',t:'e'},{w:'drink',t:'i'},{w:'stink',t:'i'},{w:'glint',t:'i'},{w:'splint',t:'i'},{w:'sprint',t:'i'},{w:'strict',t:'i'},{w:'script',t:'i'},{w:'scrimp',t:'i'},{w:'swift',t:'i'},{w:'glimpse',t:'i'},{w:'front',t:'o'},{w:'stomp',t:'o'},{w:'frost',t:'o'},{w:'prompt',t:'o'},{w:'blunt',t:'u'},{w:'grunt',t:'u'},{w:'trump',t:'u'},{w:'trunk',t:'u'},{w:'trust',t:'u'},{w:'sculpt',t:'u'}];
var selectedWord=null,placedCount=0;
function buildSort(){
  var pool=document.getElementById('sortPool'),h='';
  sortWords.sort(function(){return Math.random()-0.5}).forEach(function(w){h+='<span class="sort-item unplaced" data-word="'+w.w+'" data-type="'+w.t+'" draggable="true" onclick="selWord(this)" ondragstart="dragStart(event)" ondragend="dragEnd(event)" ontouchstart="touchStart(event,\''+w.w+'\')">'+w.w+' <span class="spk sort-spk" onclick="event.stopPropagation();spk(\''+w.w+'\')">🔊</span></span>'});
  pool.innerHTML=h;
  ['A','E','I','O','U'].forEach(function(v){document.getElementById('bin'+v+'Items').innerHTML=''});
  document.getElementById('sortFeedback').innerHTML='';selectedWord=null;placedCount=0;setupBins();
}
function setupBins(){['binA','binE','binI','binO','binU'].forEach(function(id){var el=document.getElementById(id);el.ondragover=function(e){e.preventDefault();el.classList.add('drag-over')};el.ondragleave=function(){el.classList.remove('drag-over')};el.ondrop=function(e){e.preventDefault();el.classList.remove('drag-over');var w=e.dataTransfer.getData('text');if(w)dropToBin(w,id.replace('bin','').toLowerCase())}})}
function selWord(el){if(el.classList.contains('placed'))return;document.querySelectorAll('.sort-item.unplaced').forEach(function(i){i.classList.remove('selected')});el.classList.add('selected');selectedWord={w:el.getAttribute('data-word'),t:el.getAttribute('data-type')}}
function clickToBin(type){if(!selectedWord){document.getElementById('sortFeedback').innerHTML='<span style="color:#4fc3f7">👆 请先点击或拖拽一个单词</span>';return}dropToBin(selectedWord.w,type,selectedWord.t)}
function dropToBin(w,type,correct){if(!correct){var it=document.querySelector('.sort-item[data-word="'+w+'"].unplaced');correct=it?it.getAttribute('data-type'):null}var ok=type===correct;var item=document.querySelector('.sort-item[data-word="'+w+'"].unplaced');if(!item)return;var typeLabels={a:'a /æ/',e:'e /e/',i:'i /ɪ/',o:'o /ɒ/',u:'u /ʌ/'};var binCap=type.toUpperCase();if(ok){item.classList.remove('unplaced','selected');item.classList.add('placed');item.draggable=false;item.onclick=null;item.style.cursor='default';document.getElementById('bin'+binCap+'Items').innerHTML+='<span class="sort-item placed" style="margin:2px;background:rgba(105,240,174,.1);border-color:rgba(105,240,174,.4);color:#69f0ae">'+w+'</span>';document.getElementById('sortFeedback').innerHTML='<span style="color:#69f0ae">✅ '+w+' → '+typeLabels[type]+'!</span>';placedCount++;if(placedCount>=sortWords.length)document.getElementById('sortFeedback').innerHTML='<span style="color:#ffd200">🎉 全部正确！</span>'}else{item.classList.add('wrong');setTimeout(function(){item.classList.remove('wrong')},500);document.getElementById('sortFeedback').innerHTML='<span style="color:#ff5252">❌ 再听听中间的元音？</span>'}selectedWord=null}
function dragStart(e){e.dataTransfer.setData('text',e.target.getAttribute('data-word'));setTimeout(function(){e.target.classList.add('dragging')},0)}
function dragEnd(e){e.target.classList.remove('dragging')}
var tl=null,tc=null;
function touchStart(e,w){if(e.target.classList.contains('placed'))return;tl=w;var t=e.touches[0];tc=document.createElement('div');tc.className='sort-item';tc.textContent=w;tc.style.cssText='position:fixed;z-index:999;pointer-events:none;left:'+(t.clientX-20)+'px;top:'+(t.clientY-15)+'px;background:rgba(255,210,0,.18);border:2px solid #ffd200;border-radius:14px;padding:6px 14px;font-weight:bold;color:#ffd200;font-size:.9em';document.body.appendChild(tc);selWord(e.target)}
document.addEventListener('touchmove',function(e){if(!tc)return;e.preventDefault();var t=e.touches[0];tc.style.left=(t.clientX-20)+'px';tc.style.top=(t.clientY-15)+'px';['binA','binE','binI','binO','binU'].forEach(function(id){var el=document.getElementById(id),r=el.getBoundingClientRect();if(t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom)el.classList.add('drag-over');else el.classList.remove('drag-over')})},{passive:false});
document.addEventListener('touchend',function(e){if(!tc)return;var t=e.changedTouches[0],type=null;['binA','binE','binI','binO','binU'].forEach(function(id){var el=document.getElementById(id),r=el.getBoundingClientRect();if(t.clientX>=r.left&&t.clientX<=r.right&&t.clientY>=r.top&&t.clientY<=r.bottom)type=id.replace('bin','').toLowerCase();el.classList.remove('drag-over')});if(type&&tl){var correct=document.querySelector('.sort-item[data-word="'+tl+'"].unplaced');if(correct)dropToBin(tl,type,correct.getAttribute('data-type'))}if(tc){document.body.removeChild(tc);tc=null}tl=null});
function resetSort(){buildSort()}

// ═══ QUIZ ═══
function sfxOK(){var a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);o.type='sine';o.frequency.setValueAtTime(880,a.currentTime);o.frequency.setValueAtTime(1100,a.currentTime+.1);g.gain.setValueAtTime(.15,a.currentTime);g.gain.exponentialRampToValueAtTime(.01,a.currentTime+.25);o.start(a.currentTime);o.stop(a.currentTime+.25)}
function sfxNO(){var a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);o.type='sine';o.frequency.setValueAtTime(300,a.currentTime);g.gain.setValueAtTime(.1,a.currentTime);g.gain.exponentialRampToValueAtTime(.01,a.currentTime+.2);o.start(a.currentTime);o.stop(a.currentTime+.2)}
var quizPool=[{t:'struct',q:'stamp 是什么结构？',w:'stamp',o:['CCVCC','CCVCCC','CCCVCC','CCCVCCC'],a:0,x:'st(2)+a+mp(2)=CCVCC，5个音位'},{t:'struct',q:'plant 是什么结构？',w:'plant',o:['CCVCC','CCVCCC','CCCVCC'],a:0,x:'pl(2)+a+nt(2)=CCVCC，5个音位'},{t:'struct',q:'sprint 是什么结构？',w:'sprint',o:['CCVCC','CCVCCC','CCCVCC','CCCVCCC'],a:2,x:'spr(3)+i+nt(2)=CCCVCC，6个音位'},{t:'struct',q:'script 是什么结构？',w:'script',o:['CCVCC','CCVCCC','CCCVCC'],a:2,x:'scr(3)+i+pt(2)=CCCVCC，6个音位'},{t:'struct',q:'drink 是什么结构？',w:'drink',o:['CCVCC','CCVCCC','CCCVCC','CCCVCCC'],a:0,x:'dr(2)+i+nk(2)=CCVCC，5个音位'},{t:'struct',q:'trust 是什么结构？',w:'trust',o:['CCVCC','CCVCCC','CCCVCC'],a:0,x:'tr(2)+u+st(2)=CCVCC，5个音位'},{t:'struct',q:'strand 是什么结构？',w:'strand',o:['CCVCC','CCVCCC','CCCVCC','CCCVCCC'],a:2,x:'str(3)+a+nd(2)=CCCVCC'},{t:'struct',q:'strict 是什么结构？',w:'strict',o:['CCVCC','CCVCCC','CCCVCC','CCCVCCC'],a:2,x:'str(3)+i+ct(2)=CCCVCC。ct=2个音'},{t:'struct',q:'stop 是什么结构？',w:'stop',o:['CCVCC','CCVC','CVCC','CCCVCC'],a:1,x:'st(2)+o+p(1)=CCVC。只有开头连缀'},{t:'struct',q:'hand 是什么结构？',w:'hand',o:['CCVCC','CCVC','CVCC','CCCVCC'],a:2,x:'h(1)+a+nd(2)=CVCC。只有结尾连缀'},{t:'count',q:'🔊 听发音，sprint 有几个音位？',w:'sprint',o:['4个','5个','6个','7个'],a:2,x:'=6个音位'},{t:'count',q:'🔊 听发音，plant 有几个音位？',w:'plant',o:['4个','5个','6个','7个'],a:1,x:'=5个音位'},{t:'count',q:'🔊 听发音，sprint 有几个音位？',w:'sprint',o:['5个','6个','7个','8个'],a:1,x:'=6个音位'},{t:'count',q:'🔊 听发音，stamp 有几个音位？',w:'stamp',o:['3个','4个','5个','6个'],a:2,x:'=5个音位'},{t:'listen',q:'🔊 开头有几个辅音？',w:'sprint',o:['1个','2个','3个','4个'],a:2,x:'spr=3个辅音'},{t:'listen',q:'🔊 开头有几个辅音？',w:'stamp',o:['1个','2个','3个','4个'],a:1,x:'st=2个辅音'},{t:'listen',q:'🔊 结尾有几个辅音？',w:'plant',o:['1个','2个','3个','4个'],a:1,x:'nt=2个辅音'},{t:'vowel',q:'stamp 中间的元音是什么？',w:'stamp',o:['a /æ/ (短)','a /eɪ/ (长)','e /e/','i /ɪ/'],a:0,x:'a 读短音 /æ/'},{t:'vowel',q:'sprint 中间的元音是什么？',w:'sprint',o:['i /aɪ/ (长)','i /ɪ/ (短)','e /e/','a /æ/'],a:1,x:'i 读短音 /ɪ/'},{t:'choose',q:'下面哪个是 CCCVCC？',o:['stamp','drink','sprint','trust'],a:2,x:'sprint=spr+int'},{t:'choose',q:'下面哪个是 CCVCCC？',o:['sculpt','stamp','sprint','drink'],a:0,x:'sculpt=sc+ulpt, 6个音位'},{t:'choose',q:'下面哪个结尾有3个辅音？',o:['stamp','sculpt','sprint','plant'],a:1,x:'sculpt 结尾 lpt=3个辅音'},{t:'choose',q:'哪个不是混合连缀？',o:['stamp','cat','drink','trust'],a:1,x:'cat=CVC'},{t:'spell',q:'/sprɪnt/ 正确拼写？',o:['sprint','sprinnt','sprind','sprintt'],a:0,x:'s-p-r-i-n-t=sprint'},{t:'spell',q:'/strænd/ 正确拼写？',o:['strand','strannd','stranned','strandd'],a:0,x:'s-t-r-a-n-d=strand'}];
var qS={qs:[],cur:0,as:[]};
function initQ(){var p=[].concat(quizPool).sort(function(){return Math.random()-0.5});qS={qs:p.slice(0,10),cur:0,as:new Array(10).fill(-1)};document.getElementById('qf').style.display='none';renderQD();renderQC()}
function renderQD(){document.getElementById('qd').innerHTML=qS.qs.map(function(_,i){var c='quiz-dot';if(i===qS.cur)c+=' current';if(qS.as[i]>=0)c+=' '+(qS.as[i]===qS.qs[i].a?'correct':'wrong');return'<div class="'+c+'"></div>'}).join('')}
function renderQC(){var q=qS.qs[qS.cur],answered=qS.as[qS.cur]>=0,chosen=qS.as[qS.cur],typeNames={struct:'🏗️ 辨别结构',count:'🔊 听音数数',listen:'👂 数辅音',vowel:'🔤 找元音',choose:'🎯 选择',spell:'✏️ 拼写',digraph:'🤔 二合音'},h='<div class="quiz-card"><div class="quiz-q-num">第'+(qS.cur+1)+'/10题 · '+(typeNames[q.t]||'')+'</div><div class="quiz-q">'+q.q+'</div>';if(q.w&&(q.t==='count'||q.t==='listen'))h+='<div class="quiz-word"><span class="speak-btn" onclick="spk(\''+q.w+'\');event.stopPropagation()" style="width:52px;height:52px;font-size:1.3em">🔊</span><div style="font-size:.72em;color:#888;margin-top:2px">点击听发音</div></div>';if(q.w&&q.t!=='count'&&q.t!=='listen')h+='<div class="quiz-word">'+q.w+' <span class="speak-btn" onclick="spk(\''+q.w+'\');event.stopPropagation()">🔊</span></div>';h+='<div class="quiz-opts">'+q.o.map(function(o,i){var cls='quiz-opt'+(answered?' locked':'');if(answered){if(i===q.a)cls+=' correct';else if(chosen===i)cls+=' wrong'}return'<button class="'+cls+'" onclick="ansQ('+i+')">'+String.fromCharCode(65+i)+'. '+o+'</button>'}).join('')+'</div>';var isOk=answered&&chosen===q.a;h+='<div class="quiz-explain">'+(answered?(isOk?'<span style="color:#69f0ae">✅</span> ':'<span style="color:#ff5252">❌</span> ')+q.x:'')+'</div></div>';document.getElementById('qc').innerHTML=h;var n='';n+='<button class="btn btn-outline" onclick="goQ(-1)"'+(qS.cur===0?' disabled':'')+'>⬅</button>';n+='<span class="qi">'+(qS.cur+1)+' / 10</span>';n+='<button class="btn btn-outline" onclick="goQ(1)"'+(qS.cur>=9?' disabled':'')+'>▶</button>';var allDone=qS.as.every(function(x){return x>=0});if(allDone)n+='<button class="btn btn-gold" onclick="showQR()">🏆 看成绩</button>';document.getElementById('qn').innerHTML=n}
function ansQ(i){if(qS.as[qS.cur]>=0)return;qS.as[qS.cur]=i;if(qS.qs[qS.cur].a===i)sfxOK();else sfxNO();renderQD();renderQC()}
function goQ(d){var n=qS.cur+d;if(n<0||n>=10)return;qS.cur=n;renderQD();renderQC()}
function showQR(){var s=qS.as.reduce(function(a,x,i){return a+(x===qS.qs[i].a?1:0)},0);document.getElementById('qc').innerHTML='';document.getElementById('qn').innerHTML='';var f=document.getElementById('qf');f.style.display='block';var e,m;if(s===10){e='🏆🌟';m='满分！'}else if(s>=8){e='🎉👏';m='非常棒！'}else if(s>=6){e='💪😊';m='还不错！'}else{e='📖✨';m='再练练~'}f.innerHTML='<div class="quiz-final perfect"><div style="font-size:3em">'+e+'</div><div style="font-size:1.4em;color:#ffd200;margin:8px 0">'+s+'/10</div><p>'+m+'</p><div style="margin-top:10px"><button class="btn btn-gold" onclick="initQ()">🔄 再来一次</button></div></div>'}

// ═══ BOOK ═══
var bp_cp=0,bp_pages=[
  {s:'📮🚂',t:'Off on a Trip',x:'<span class="dg-hl">Grant</span> puts a <span class="dg-hl">stamp</span> on the box.<br>“I <span class="dg-hl">trust</span> the train,” he says.<br>He is off on a trip.'},
  {s:'🏔️❄️',t:'The Frosty Hill',x:'The camp is on a hill with <span class="dg-hl">frost</span>.<br><span class="dg-hl">Grant</span> will <span class="dg-hl">plant</span> a flag on the <span class="dg-hl">crest</span>.<br>“I will reach the top!” he says.'},
  {s:'💨😖',t:'The Wind Blasts',x:'“Let us <span class="dg-hl">sprint</span> to the top!” he says.<br>But the wind <span class="dg-hl">blasts</span> past him!<br>It is so cold!'},
  {s:'🥤💪',t:'I Can Do It',x:'He stops for a <span class="dg-hl">drink</span> from his <span class="dg-hl">flask</span>.<br>“I can do it!” he says.<br>He climbs on and on.'},
  {s:'🚩😊',t:'The Grand Trip',x:'At the top, the flag flies high.<br>“This is a <span class="dg-hl">grand</span> trip!” says <span class="dg-hl">Grant</span>.<br>He smiles at the view.'},

  {s:'📖✨',t:'Words We Met',x:'<div class="glossary-grid"><div class="gi"><div class="gw">Grant <span class="speak-btn" onclick="spk(&#39;grant&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCC</div></div><div class="gi"><div class="gw">stamp <span class="speak-btn" onclick="spk(&#39;stamp&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCC</div></div><div class="gi"><div class="gw">trust <span class="speak-btn" onclick="spk(&#39;trust&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCC</div></div><div class="gi"><div class="gw">frost <span class="speak-btn" onclick="spk(&#39;frost&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCC</div></div><div class="gi"><div class="gw">plant <span class="speak-btn" onclick="spk(&#39;plant&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCC</div></div><div class="gi"><div class="gw">crest <span class="speak-btn" onclick="spk(&#39;crest&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCC</div></div><div class="gi"><div class="gw">drink <span class="speak-btn" onclick="spk(&#39;drink&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCC</div></div><div class="gi"><div class="gw">flask <span class="speak-btn" onclick="spk(&#39;flask&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCC</div></div><div class="gi"><div class="gw">sprint <span class="speak-btn" onclick="spk(&#39;sprint&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCCVCC</div></div><div class="gi"><div class="gw">blasts <span class="speak-btn" onclick="spk(&#39;blasts&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCCC</div></div><div class="gi"><div class="gw">grand <span class="speak-btn" onclick="spk(&#39;grand&#39;);event.stopPropagation()" style="width:18px;height:18px;font-size:.5em">🔊</span></div><div class="gm">CCVCC</div></div></div>'}
];
var bp_reading=false,bp_audio=null;
function spkBookUK(){playBookAudio('uk')}
function spkBookUS(){playBookAudio('us')}
function playBookAudio(accent){
  if(bp_audio){bp_audio.pause();bp_audio=null;bp_reading=false;document.querySelectorAll('.pron-btn.playing').forEach(function(b){b.classList.remove('playing')});return}
  bp_reading=true;
  document.querySelectorAll('.pron-btn.playing').forEach(function(b){b.classList.remove('playing')});
  document.querySelectorAll('.pron-btn').forEach(function(b){if((accent==='uk'&&b.classList.contains('uk'))||(accent==='us'&&b.classList.contains('us')))b.classList.add('playing')});
  bp_audio=new Audio(AUDIO_BASE+'book/08-page'+(bp_cp+1)+'-'+accent+'.mp3');
  bp_audio.onended=function(){document.querySelectorAll('.pron-btn.playing').forEach(function(b){b.classList.remove('playing')});bp_reading=false;bp_audio=null};
  bp_audio.onerror=function(){document.querySelectorAll('.pron-btn.playing').forEach(function(b){b.classList.remove('playing')});bp_reading=false;bp_audio=null};
  bp_audio.play().catch(function(){document.querySelectorAll('.pron-btn.playing').forEach(function(b){b.classList.remove('playing')});bp_reading=false;bp_audio=null});
}

function renderP(){if(bp_audio){bp_audio.pause();bp_audio=null}if(bp_reading){speechSynthesis.cancel();bp_reading=false;document.querySelectorAll('.pron-btn.playing').forEach(function(b){b.classList.remove('playing')})}var p=bp_pages[bp_cp];document.getElementById('bs').textContent=p.s;document.getElementById('bt').textContent=p.t;document.getElementById('bx').innerHTML=p.x;document.getElementById('pn').textContent=(bp_cp+1)+'/'+bp_pages.length;document.getElementById('bp').style.visibility=bp_cp===0?'hidden':'visible';document.getElementById('bn').style.visibility=bp_cp===bp_pages.length-1?'hidden':'visible';var g=bp_cp===bp_pages.length-1;document.getElementById('bookPron').innerHTML=g?'':'<button class="pron-btn uk" onclick="spkBookUK()">🇬🇧 UK RP</button><button class="pron-btn us" onclick="spkBookUS()">🇺🇸 US</button>'}
function nextP(){if(bp_cp<bp_pages.length-1){bp_cp++;renderP()}}
function prevP(){if(bp_cp>0){bp_cp--;renderP()}}

// ═══ EASTER EGG: -ald (a + l) ═══
(function(){
  var h='';
  h+=makeDeconCard('-ald','scald 🔥',[{l:'s',s:'/s/',c:'#ce93d8'},{l:'c',s:'/k/',c:'#ce93d8'},{l:'a',s:'/ɔː/',c:'#ff8a65'},{l:'l',s:'/l/',c:'#ef9a9a'},{l:'d',s:'/d/',c:'#ef9a9a'}]);
  document.getElementById('easterAld').innerHTML=h;
})();

// === Init ===
buildL();buildSort();initQ();
