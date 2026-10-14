// ═══ 83-graduation 知识回顾数据：六大阶段 + 20小阶段 + 83卡 ═══
// 与总导览页 phonics-index.html 完全对齐 · 孩子友好（图标+一句话规则+例词点发音）

var KNOW = [
{name:'🔰 字母与声音',c:'#42a5f5',icon:'🔰',intro:'拼读第一步：认识字母的声音，拼出最简单的词',subs:[
 {name:'字母名音 · 元辅音',cards:[
  {i:'🔤',t:'字母名 vs 字母音',r:'每个字母都有「名字」和「声音」——名字用来介绍，声音用来拼读',w:[['cat','c 读 /k/'],['bed','b 读 /b/']]},
  {i:'🎤',t:'元音和辅音',r:'元音 a e i o u 是主唱，每个词都得有；辅音是伴奏',w:[['cat','a 是元音'],['pen','p 是辅音']]},
 ]}
]},
{name:'🧱 CVC 与辅音系统',c:'#66bb6a',icon:'🧱',intro:'短元音 + 各种辅音组合，见词就能拼',subs:[
 {name:'CVC 短元音',cards:[
  {i:'🥪',t:'CVC 短元音',r:'三明治结构：辅音+元音+辅音，中间元音读短音',w:[['cat','/æ/'],['bed','/e/'],['sit','/ɪ/']]},
 ]},
 {name:'辅音二合音融入 CVC',cards:[
  {i:'👫',t:'二合音融入 CVC',r:'两个字母合起来发一个音，sh/ch/th/wh/ck/ng/ph',w:[['ship','sh→/ʃ/'],['chin','ch→/tʃ/'],['ring','ng→/ŋ/']]},
 ]},
 {name:'辅音连缀家族',cards:[
  {i:'🦁',t:'L 家族连缀',r:'bl cl fl gl pl sl——词首两个音各发各的，快速连读',w:[['black','bl'],['flag','fl'],['slim','sl']]},
  {i:'🐯',t:'R 家族连缀',r:'br cr dr fr gr pr tr——只在词首出现',w:[['frog','fr'],['crab','cr'],['tree','tr']]},
  {i:'🐍',t:'S 家族连缀',r:'sc sk sm sn sp st sw——s 开头，还能变三字母',w:[['stop','st'],['skip','sk'],['swim','sw']]},
  {i:'👃',t:'鼻音家族连缀',r:'词尾 -mp -nd -nt -nk，鼻音收尾',w:[['jump','-mp'],['hand','-nd'],['sink','-nk']]},
  {i:'🍃',t:'清辅音词尾连缀',r:'-ft -pt -ct -xt，清辅音 + t 轻轻收尾',w:[['gift','-ft'],['left','-ft'],['next','-xt']]},
  {i:'🌊',t:'W 家族连缀',r:'tw dw sw，辅音 + w 嘴巴圆圆的',w:[['twin','tw'],['sweet','sw']]},
 ]},
 {name:'连缀加长与混合闭音节',cards:[
  {i:'➡️',t:'CCVC 前置加长',r:'开头两片面包，中间短元音，stop 比 top 多一个音',w:[['stop','st+o+p'],['frog','fr+o+g']]},
  {i:'⬅️',t:'CVCC 后置加长',r:'结尾两片面包，hat 长成 hand',w:[['hand','ha+nd'],['milk','mi+lk'],['jump','ju+mp']]},
  {i:'↔️',t:'混合闭音节连缀',r:'开头结尾都加厚，中间元音永远短',w:[['stamp','st+a+mp'],['sprint','spr+i+nt']]},
  {i:'🔀',t:'二合音加入连缀',r:'shr thr sph，二合音当一块积木再连缀',w:[['shrimp','shr'],['three','thr']]},
 ]},
 {name:'六个短元音总结',cards:[
  {i:'🗺️',t:'六个短元音',r:'/æ/ /e/ /ɪ/ /ɒ/ /ʌ/ /ʊ/ 六个短音，一张地图全记住',w:[['cat','/æ/'],['bed','/e/'],['book','/ʊ/']]},
 ]}
]},
{name:'✨ 元音变脸与长元音',c:'#ffb74d',icon:'✨',intro:'元音会「变长」——读自己的名字',subs:[
 {name:'音节承启 · 开闭音节',cards:[
  {i:'🚪',t:'开音节 · 闭音节',r:'元音站词尾读本名（开），被辅音挡住读短音（闭）',w:[['he','/iː/ 开'],['go','/əʊ/ 开'],['cap','/æ/ 闭']]},
 ]},
 {name:'魔法 E',cards:[
  {i:'🪄',t:'魔法 E · a_e',r:'词尾加个不发音的 e，a 就喊名字 /eɪ/',w:[['cake','/eɪ/'],['cape','/eɪ/']]},
  {i:'🪄',t:'魔法 E · e_e',r:'e_e 读 /iː/，Pete these scene',w:[['these','/iː/'],['scene','/iː/']]},
  {i:'🪄',t:'魔法 E · i_e',r:'kit 变 kite，i 喊名字 /aɪ/',w:[['kite','/aɪ/'],['like','/aɪ/']]},
  {i:'🪄',t:'魔法 E · o_e',r:'hop 变 hope，o 喊名字 /əʊ/',w:[['home','/əʊ/'],['hope','/əʊ/']]},
  {i:'🪄',t:'魔法 E · u_e /juː/',r:'cut 变 cute，u 喊名字 /juː/',w:[['cute','/juː/'],['tube','/juː/']]},
  {i:'🪄',t:'魔法 E · u_e /uː/',r:'rule June flute，u 读 /uː/ 没有 /j/',w:[['rule','/uː/'],['flute','/uː/']]},
 ]},
 {name:'长元音二合音及其稀有写法',cards:[
  {i:'👫',t:'/eɪ/ · ai ay',r:'都读 /eɪ/，ai 不在词尾',w:[['rain','ai'],['day','ay']]},
  {i:'👫',t:'/iː/ · ee ea ie',r:'都读 /iː/',w:[['tree','ee'],['sea','ea'],['field','ie']]},
  {i:'👫',t:'/aɪ/ · igh ie y',r:'都读 /aɪ/，gh 不发音',w:[['night','igh'],['pie','ie'],['fly','y']]},
  {i:'👫',t:'/əʊ/ · oa ow oe',r:'都读 /əʊ/',w:[['boat','oa'],['snow','ow'],['toe','oe']]},
  {i:'👫',t:'/juː/ · ue ew',r:'u 喊名字，读 /juː/',w:[['cue','ue'],['few','ew']]},
  {i:'👫',t:'/uː/ · oo ue ui ew',r:'都读 /uː/',w:[['moon','oo'],['blue','ue'],['fruit','ui']]},
  {i:'💎',t:'/eɪ/ 稀有写法',r:'ea ey eigh ei，收藏夹里的词',w:[['great','ea'],['eight','eigh']]},
  {i:'💎',t:'/aɪ/ 稀有写法',r:'i ei uy ye，收藏夹里的词',w:[['kind','i'],['buy','uy']]},
  {i:'💎',t:'/əʊ/ 稀有写法',r:'ough o(old) ou eau，收藏夹里的词',w:[['gold','o(old)'],['dough','ough']]},
  {i:'💎',t:'/uː/ 稀有写法',r:'ou o oe，收藏夹里的词',w:[['you','ou'],['who','o']]},
 ]},
 {name:'双元音',cards:[
  {i:'🌊',t:'/aʊ/ · ou ow',r:'会滑动的音，ow 的第二种声音',w:[['cloud','ou'],['cow','ow']]},
  {i:'🌊',t:'/ɔɪ/ · oi oy',r:'都读 /ɔɪ/，oi 不在词尾',w:[['coin','oi'],['boy','oy']]},
  {i:'⭕',t:'/ɔː/ · aw au',r:'嘴巴圆圆，读 /ɔː/',w:[['saw','aw'],['autumn','au']]},
 ]},
 {name:'R 控元音',cards:[
  {i:'👑',t:'霸道总裁 R · ar',r:'r 把 a 拽变样，读 /ɑː/',w:[['car','/ɑː/'],['farm','/ɑː/']]},
  {i:'👑',t:'霸道总裁 R · or',r:'or 读 /ɔː/',w:[['fork','/ɔː/'],['store','/ɔː/']]},
  {i:'👑',t:'R 控 · er ir ur',r:'三个都读同一个音 /ɜː/',w:[['her','er'],['bird','ir'],['turn','ur']]},
  {i:'👂',t:'R 控 · ear',r:'ear 读 /ɪə/',w:[['ear','/ɪə/'],['deer','/ɪə/']]},
  {i:'👂',t:'R 控 · air',r:'air 读 /eə/',w:[['hair','/eə/'],['bear','/eə/']]},
  {i:'👂',t:'R 控 · ire',r:'ire 读 /aɪə/，会滑动',w:[['fire','/aɪə/'],['wire','/aɪə/']]},
 ]},
 {name:'稀有写法补充',cards:[
  {i:'💎',t:'/ɔː/ 稀有写法',r:'ough augh a(l) war quar，收藏夹里的词',w:[['caught','augh'],['talk','a(l)'],['warm','war']]},
 ]}
]},
{name:'📐 特殊规则与词法',c:'#e57373',icon:'📐',intro:'字母会变软、变沉默，词尾也有小规矩',subs:[
 {name:'弱读 schwa · 闭音节例外',cards:[
  {i:'😴',t:'弱读 schwa',r:'弱读音节里的元音都偷懒，变成轻轻的 /ə/',w:[['about','/ə/'],['teacher','/ə/']]},
  {i:'🦕',t:'闭音节例外',r:'长得像短音，却读长音的「化石词」',w:[['find','/aɪ/'],['gold','/əʊ/'],['put','/ʊ/']]},
 ]},
 {name:'辅音特殊规则',cards:[
  {i:'🍬',t:'Soft C',r:'c 在 e/i/y 前变软，读 /s/',w:[['city','/s/'],['cat','/k/']]},
  {i:'🍬',t:'Soft G',r:'g 在 e/i/y 前变软，读 /dʒ/',w:[['giraffe','/dʒ/'],['go','/g/']]},
  {i:'🤫',t:'静音字母',r:'kn wr mb gn，有个字母站着却不出声',w:[['knife','k 静音'],['write','w 静音'],['lamb','b 静音']]},
  {i:'✌️',t:'FLOSS 双写',r:'短元音后面，f l s z 常常双写',w:[['hill','ll'],['kiss','ss'],['off','ff']]},
  {i:'🕵️',t:'/k/ /g/ 隐藏写法',r:'ch→/k/，gu→/g/，从法语借来的',w:[['school','ch→/k/'],['guitar','gu→/g/']]},
  {i:'🕵️',t:'声东击西 + /ʒ/',r:'gh→/f/，x→/gz/，还有 /ʒ/ 沙沙声',w:[['laugh','gh→/f/'],['vision','/ʒ/']]},
 ]},
 {name:'词尾与词形变化',cards:[
  {i:'🔚',t:'词尾 -le',r:'-le 不读 /le/，读轻轻的 /əl/，自成音节',w:[['table','/əl/'],['little','/əl/']]},
  {i:'🔄',t:'-s / -es 三种声音',r:'清音后 /s/，浊音后 /z/，嘶嘶声后 /ɪz/',w:[['cats','/s/'],['dogs','/z/'],['buses','/ɪz/']]},
  {i:'🔄',t:'双写规则',r:'短元音后面，一短一辅才双写',w:[['hopping','双写'],['making','去 e']]},
  {i:'🔄',t:'-ing 进行时',r:'加 -ing，去 e 或双写',w:[['jumping','加 -ing'],['making','去 e']]},
  {i:'🔄',t:'-ed 三种声音',r:'清音后 /t/，浊音后 /d/，t/d 后 /ɪd/',w:[['walked','/t/'],['played','/d/'],['wanted','/ɪd/']]},
  {i:'🏷️',t:'-tion',r:'固定词尾读 /ʃən/，t 变 /ʃ/',w:[['action','/ʃən/'],['station','/ʃən/']]},
  {i:'🏷️',t:'-sion',r:'读 /ʒən/ 或 /ʃən/',w:[['television','/ʒən/'],['mission','/ʃən/']]},
  {i:'🏷️',t:'-ture',r:'固定词尾读 /tʃə/，t 变 /tʃ/',w:[['picture','/tʃə/'],['nature','/tʃə/']]},
  {i:'🏷️',t:'-sure',r:'固定词尾读 /ʒə/',w:[['treasure','/ʒə/'],['measure','/ʒə/']]},
 ]},
 {name:'构词法 · 前后缀',cards:[
  {i:'🧱',t:'前缀',r:'前面加积木，意思变、读法基本不变',w:[['unhappy','un-'],['replay','re-']]},
  {i:'🧱',t:'后缀',r:'后面加积木，意思变、读法基本不变',w:[['helpful','-ful'],['careless','-less']]},
 ]}
]},
{name:'🔧 多音节拼读进阶',c:'#ab47bc',icon:'🔧',intro:'长单词不用怕——拆开读、听音写',subs:[
 {name:'解码 · 见词能读',cards:[
  {i:'🧩',t:'解码① 大块预处理',r:'先切掉前后缀、找复合词、认辅音-le',w:[['sunset','复合词'],['replay','前缀 re-']]},
  {i:'🔢',t:'解码② 标记元音核',r:'数元音 = 数音节',w:[['rabbit','2 个元音']]},
  {i:'✂️',t:'解码③ 切割 VCCV',r:'两分手，正中切',w:[['rabbit','rab|bit']]},
  {i:'✂️',t:'解码③ 切割 VCV',r:'先长后短试音',w:[['tiger','ti|ger']]},
  {i:'✂️',t:'解码③ 切割 V-V',r:'两元音中间切',w:[['lion','li|on']]},
  {i:'✂️',t:'解码③ 多音节切割',r:'N 个元音核，切 N-1 刀',w:[['banana','ba|na|na']]},
  {i:'🏷️',t:'解码④ 类型判定',r:'短 · 长 · r · 双元音，先判类型',w:[['tiger','长元音'],['rabbit','短元音']]},
  {i:'🎯',t:'解码④ 定音',r:'多音字母、歧义组合，看位置定音',w:[['city','c→/s/'],['go','o→/əʊ/']]},
  {i:'🏷️',t:'解码④ 词缀定音',r:'-tion -sion -ture -cient 固定读法',w:[['action','-tion'],['picture','-ture']]},
  {i:'⚖️',t:'解码④ 定重音',r:'多音节重音、名动异读',w:[['banana','ba-NA-na'],['record','名/动异读']]},
  {i:'🧭',t:'解码总复盘',r:'8 步串讲，见长词会读',w:[['sunset','8 步走一遍']]},
 ]},
 {name:'编码 · 听音能写',cards:[
  {i:'👂',t:'编码① 听觉拆分',r:'拍手数音节，逐段切音素',w:[['rocket','roc|ket']]},
  {i:'🔒',t:'编码② 锁元音',r:'先写元音骨架',w:[['rocket','_o_e_']]},
  {i:'✏️',t:'编码③ 填辅音',r:'多音字母看位置',w:[['rocket','-ck']]},
  {i:'🛡️',t:'编码④ 拼写守卫',r:'词尾三关：-ck、-dge、-tch',w:[['picnic','-c'],['rock','-ck']]},
  {i:'♻️',t:'编码⑤ 词根还原',r:'加后缀先还原词根',w:[['making','make+ing'],['hopping','hop+ping']]},
  {i:'🔄',t:'编码⑥ 闭环自检',r:'反向读一遍验证',w:[['rocket','倒着读']]},
  {i:'🧭',t:'编码总复盘',r:'7 步串讲，听长词会写',w:[['picnic','7 步走一遍']]},
 ]}
]},
{name:'🏁 专项巩固与阅读',c:'#80deea',icon:'🏁',intro:'高频词 + 毕业大乱斗，冲向自主阅读',subs:[
 {name:'高频词 · 全程并行',cards:[
  {i:'⭐',t:'高频词 L1',r:'1-94 词，规则清晰，整体认读',w:[['the','整体认读'],['and','整体认读']]},
  {i:'⭐',t:'高频词 L2',r:'95-183 词，元音组合、变音',w:[['said','/e/ 特殊'],['come','/ʌ/ 特殊']]},
  {i:'⭐',t:'高频词 L3',r:'184-220 词，难词、不规则',w:[['thought','/ɔː/'],['through','/uː/']]},
 ]},
 {name:'毕业大乱斗',cards:[
  {i:'🏆',t:'毕业大乱斗',r:'全规则终极挑战，解码 + 编码 combo',w:[['see 词能读','解码'],['听音能写','编码']]},
 ]}
]}
];
