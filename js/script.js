function toggleMenu(){document.querySelector('.navlinks').classList.toggle('open')}
function setupAccordions(){document.querySelectorAll('.accordion button').forEach(btn=>{btn.addEventListener('click',()=>{const p=btn.nextElementSibling;p.style.display=p.style.display==='block'?'none':'block';btn.setAttribute('aria-expanded',p.style.display==='block')})})}
function openTab(evt, id){document.querySelectorAll('.tab-content').forEach(el=>el.classList.remove('active'));document.querySelectorAll('.tab-button').forEach(el=>el.classList.remove('active'));document.getElementById(id).classList.add('active');evt.currentTarget.classList.add('active')}
function openModal(id){document.getElementById(id).style.display='block'}
function closeModal(id){document.getElementById(id).style.display='none'}
window.onclick=function(e){document.querySelectorAll('.modal').forEach(m=>{if(e.target==m)m.style.display='none'})}
function filterCards(){const q=(document.getElementById('searchInput')?.value||'').toLowerCase();const kind=(document.getElementById('kindFilter')?.value||'all');document.querySelectorAll('[data-card]').forEach(card=>{const text=card.innerText.toLowerCase();const k=card.dataset.kind;card.style.display=(text.includes(q)&&(kind==='all'||kind===k))?'block':'none'})}
function filterTable(){const q=(document.getElementById('tableSearch')?.value||'').toLowerCase();document.querySelectorAll('#dataTable tbody tr').forEach(row=>{row.style.display=row.innerText.toLowerCase().includes(q)?'':'none'})}
let slideIndex=0;function showSlide(n){const slides=document.querySelectorAll('.institutional-slideshow .slide');const dots=document.querySelectorAll('.institutional-slideshow .dot');if(!slides.length)return;slideIndex=(n+slides.length)%slides.length;slides.forEach(s=>s.classList.remove('active'));dots.forEach(d=>d.classList.remove('active'));slides[slideIndex].classList.add('active');if(dots[slideIndex])dots[slideIndex].classList.add('active')}function nextSlide(delta){showSlide(slideIndex+delta)}
function setupBackTop(){const b=document.querySelector('.backtop');if(!b)return;window.addEventListener('scroll',()=>{b.style.display=window.scrollY>600?'inline-flex':'none'})}
function announcePoint(name){const box=document.getElementById('mapInfo'); if(box) box.innerHTML='<strong>'+name+'</strong><br>Questo punto mostra la posizione approssimativa nel progetto. Apri la scheda item o la mappa OSM per il dettaglio.'}
window.addEventListener('DOMContentLoaded',()=>{
  setupAccordions();
  setupBackTop();
  setupLanguageSwitcher();
  applyLanguage(localStorage.getItem('preferredLanguage') || 'it');
  showSlide(0);

  const slideshow = document.querySelector('.institutional-slideshow');
  const slides = document.querySelectorAll('.institutional-slideshow .slide');
  if (slideshow && slides.length > 1) {
    let autoSlideTimer = setInterval(()=>nextSlide(1), 5000);

    // Pausa al passaggio del mouse, così l'utente può leggere la card.
    slideshow.addEventListener('mouseenter', ()=>clearInterval(autoSlideTimer));
    slideshow.addEventListener('mouseleave', ()=>{
      autoSlideTimer = setInterval(()=>nextSlide(1), 5000);
    });
  }
})



/* --- Trilingual interface: IT / 中文 / EN --- */
const I18N = {
  "zh": {
    "Patrimoni in Dialogo": "对话中的遗产",
    "Rete digitale Cina–Italia": "中意文化遗产数字网络",
    "Home": "首页",
    "Catalogo ▾": "目录 ▾",
    "Catalogo": "目录",
    "Mappa": "地图",
    "Timeline": "时间线",
    "Dati": "数据",
    "Componenti": "组件",
    "Scarica CSV": "下载 CSV",
    "Scarica JSON": "下载 JSON",
    "Apri scheda": "打开条目",
    "Apri la fonte": "打开来源",
    "Fonte": "来源",
    "Fonte ufficiale": "官方来源",
    "Cina": "中国",
    "Italia": "意大利",
    "Tutti i paesi": "全部国家",
    "Patrimonio Mondiale UNESCO": "UNESCO 世界遗产",
    "Lista Tentativa UNESCO": "UNESCO 预备名单",
    "Contesto del gemellaggio": "结好关系背景",
    "Quadro istituzionale del progetto": "项目的制度背景",
    "Gemellaggio come relazione culturale": "作为文化关系的结好",
    "Continuità tra siti e città": "遗产地与城市关系的延续",
    "Dialogo al più alto livello": "高层对话",
    "Forum di Hangzhou": "杭州论坛",
    "Avvio della rete UNESCO": "UNESCO 网络的启动",
    "Nota metodologica:": "方法说明：",
    "Vai alla timeline completa": "查看完整时间线",
    "Tre relazioni principali": "三组核心关系",
    "Item principali": "主要条目",
    "Architettura del sito": "网站结构",
    "Catalogo degli item": "条目目录",
    "Navigazione attiva per ricerca libera e filtro per paese. Le schede sono ordinate per coppie verticali di gemellaggio: vie storiche, giardini d’acqua e paesaggi urbani lagunari.": "可通过自由搜索和国家筛选进行浏览。卡片按三组垂直配对关系排列：历史道路、水景园林与潟湖城市景观。",
    "Mappa eurasiatica dei gemellaggi": "中意结好关系的欧亚地图",
    "Navigazione spaziale interattiva": "互动空间导航",
    "Passa il mouse sulle stelle per vedere una scheda mobile; clicca per fissare una card informativa con il link alla scheda item.": "将鼠标悬停在五角星上可查看浮动卡片；点击可固定信息卡，并进入对应条目页面。",
    "Relazione di gemellaggio": "结好关系",
    "Tre coppie patrimoniali": "三组遗产配对",
    "Mappe dettagliate": "详细地图",
    "Cronologia della rete patrimoniale": "遗产网络时间线",
    "Accesso temporale alla collezione": "藏品的时间型访问方式",
    "Come leggere la timeline": "如何阅读时间线",
    "Vedi il catalogo": "查看目录",
    "Vedi la mappa": "查看地图",
    "Vedi i dati": "查看数据",
    "Nota di selezione": "筛选说明",
    "Tabella dei dati": "数据表",
    "Cerca nella tabella": "在表格中搜索",
    "Componenti e strumenti usati": "使用的组件与工具",
    "Idea progettuale": "项目理念",
    "CSV": "CSV",
    "JSON": "JSON",
    "Dublin Core XML": "Dublin Core XML",
    "TEI XML": "TEI XML",
    "Paese": "国家",
    "Periodo storico": "历史时期",
    "Parole chiave": "关键词",
    "Seleziona una stella": "选择一颗五角星",
    "Clicca su un patrimonio per visualizzare nome, paese, periodo storico e parole chiave.": "点击一个遗产点，查看名称、国家、历史时期与关键词。",
    "Apri scheda item": "打开条目页面",
    "↑ Top": "↑ 顶部",
    "Cerca per nome, luogo, tema…": "按名称、地点、主题搜索……",
    "Shudao 蜀道": "蜀道 Shudao",
    "Palazzo d’Estate 颐和园": "颐和园 Palazzo d’Estate",
    "Giardini classici di Suzhou 苏州古典园林": "苏州古典园林 Giardini classici di Suzhou",
    "Venezia e la sua Laguna": "威尼斯及其潟湖 Venezia e la sua Laguna",
    "Via Appia. Regina Viarum": "阿皮亚古道 Via Appia",
    "Villa d’Este, Tivoli": "埃斯特别墅 Villa d’Este",
    "Vie storiche": "历史道路",
    "Giardini e acqua": "园林与水",
    "Città d’acqua e giardini": "水城与园林",
    "Una rete digitale per descrivere, navigare e interpretare le relazioni fra siti culturali cinesi e italiani: vie storiche, giardini d’acqua e città d’acqua.": "一个用于描述、浏览和解释中意文化遗产关系的数字网络：历史道路、水景园林与水城。",
    "Esplora il catalogo": "浏览目录",
    "Apri la mappa": "打开地图",
    "Idea del progetto": "项目理念",
    "Il progetto non presenta soltanto sei luoghi patrimoniali: li trasforma in una collezione digitale strutturata, composta da item, metadati, fonti autorevoli, dati geografici e relazioni tipizzate.": "本项目并非只展示六处遗产地，而是将它们转化为一个结构化数字集合，由条目、元数据、权威来源、地理数据和类型化关系组成。",
    "Progetto didattico per Digital Humanities e Patrimonio Culturale.": "Digital Humanities e Patrimonio Culturale 课程项目。"
  },
  "en": {
    "Patrimoni in Dialogo": "Heritages in Dialogue",
    "Rete digitale Cina–Italia": "China–Italy Digital Heritage Network",
    "Home": "Home",
    "Catalogo ▾": "Catalogue ▾",
    "Catalogo": "Catalogue",
    "Mappa": "Map",
    "Timeline": "Timeline",
    "Dati": "Data",
    "Componenti": "Components",
    "Scarica CSV": "Download CSV",
    "Scarica JSON": "Download JSON",
    "Apri scheda": "Open record",
    "Apri la fonte": "Open source",
    "Fonte": "Source",
    "Fonte ufficiale": "Official source",
    "Cina": "China",
    "Italia": "Italy",
    "Tutti i paesi": "All countries",
    "Patrimonio Mondiale UNESCO": "UNESCO World Heritage",
    "Lista Tentativa UNESCO": "UNESCO Tentative List",
    "Contesto del gemellaggio": "Twinning Context",
    "Quadro istituzionale del progetto": "Institutional Framework of the Project",
    "Gemellaggio come relazione culturale": "Twinning as a Cultural Relation",
    "Continuità tra siti e città": "Continuity between Sites and Cities",
    "Dialogo al più alto livello": "High-level Dialogue",
    "Forum di Hangzhou": "Hangzhou Forum",
    "Avvio della rete UNESCO": "Launch of the UNESCO Network",
    "Nota metodologica:": "Methodological note:",
    "Vai alla timeline completa": "Go to the full timeline",
    "Tre relazioni principali": "Three Main Relations",
    "Item principali": "Main Items",
    "Architettura del sito": "Site Architecture",
    "Catalogo degli item": "Item Catalogue",
    "Navigazione attiva per ricerca libera e filtro per paese. Le schede sono ordinate per coppie verticali di gemellaggio: vie storiche, giardini d’acqua e paesaggi urbani lagunari.": "Active navigation through free search and country filter. Records are arranged by vertical twinning pairs: historic routes, water gardens, and lagoon urban landscapes.",
    "Mappa eurasiatica dei gemellaggi": "Eurasian Map of Twinnings",
    "Navigazione spaziale interattiva": "Interactive Spatial Navigation",
    "Passa il mouse sulle stelle per vedere una scheda mobile; clicca per fissare una card informativa con il link alla scheda item.": "Hover over the stars to view a floating card; click to pin an information card with a link to the item record.",
    "Relazione di gemellaggio": "Twinning relation",
    "Tre coppie patrimoniali": "Three Heritage Pairs",
    "Mappe dettagliate": "Detailed Maps",
    "Cronologia della rete patrimoniale": "Chronology of the Heritage Network",
    "Accesso temporale alla collezione": "Temporal Access to the Collection",
    "Come leggere la timeline": "How to Read the Timeline",
    "Vedi il catalogo": "View catalogue",
    "Vedi la mappa": "View map",
    "Vedi i dati": "View data",
    "Nota di selezione": "Selection note",
    "Tabella dei dati": "Data Table",
    "Cerca nella tabella": "Search the table",
    "Componenti e strumenti usati": "Components and Tools Used",
    "Idea progettuale": "Project Idea",
    "CSV": "CSV",
    "JSON": "JSON",
    "Dublin Core XML": "Dublin Core XML",
    "TEI XML": "TEI XML",
    "Paese": "Country",
    "Periodo storico": "Historical period",
    "Parole chiave": "Keywords",
    "Seleziona una stella": "Select a star",
    "Clicca su un patrimonio per visualizzare nome, paese, periodo storico e parole chiave.": "Click on a heritage site to view its name, country, historical period and keywords.",
    "Apri scheda item": "Open item record",
    "↑ Top": "↑ Top",
    "Cerca per nome, luogo, tema…": "Search by name, place, theme…",
    "Shudao 蜀道": "Shudao 蜀道",
    "Palazzo d’Estate 颐和园": "Summer Palace 颐和园",
    "Giardini classici di Suzhou 苏州古典园林": "Classical Gardens of Suzhou 苏州古典园林",
    "Venezia e la sua Laguna": "Venice and its Lagoon",
    "Via Appia. Regina Viarum": "Via Appia. Regina Viarum",
    "Villa d’Este, Tivoli": "Villa d’Este, Tivoli",
    "Vie storiche": "Historic routes",
    "Giardini e acqua": "Gardens and water",
    "Città d’acqua e giardini": "Water cities and gardens",
    "Una rete digitale per descrivere, navigare e interpretare le relazioni fra siti culturali cinesi e italiani: vie storiche, giardini d’acqua e città d’acqua.": "A digital network for describing, navigating and interpreting relations between Chinese and Italian cultural sites: historic routes, water gardens and water cities.",
    "Esplora il catalogo": "Explore the catalogue",
    "Apri la mappa": "Open the map",
    "Idea del progetto": "Project idea",
    "Il progetto non presenta soltanto sei luoghi patrimoniali: li trasforma in una collezione digitale strutturata, composta da item, metadati, fonti autorevoli, dati geografici e relazioni tipizzate.": "The project does not simply present six heritage places: it transforms them into a structured digital collection made of items, metadata, authoritative sources, geographic data and typed relations.",
    "Progetto didattico per Digital Humanities e Patrimonio Culturale.": "Course project for Digital Humanities and Cultural Heritage."
  }
};

function normalizeI18nKey(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function applyLanguage(lang) {
  const selected = ['it', 'zh', 'en'].includes(lang) ? lang : 'it';
  localStorage.setItem('preferredLanguage', selected);
  document.documentElement.setAttribute('lang', selected === 'zh' ? 'zh-CN' : selected);

  const dict = I18N[selected] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (!normalizeI18nKey(node.nodeValue)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    if (!node.__i18nOriginal) node.__i18nOriginal = node.nodeValue;
    const original = node.__i18nOriginal;
    const key = normalizeI18nKey(original);
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];

    if (selected === 'it') {
      node.nodeValue = original;
    } else if (dict[key]) {
      node.nodeValue = leading + dict[key] + trailing;
    } else {
      node.nodeValue = original;
    }
  });

  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    if (!el.dataset.i18nPlaceholderOriginal) el.dataset.i18nPlaceholderOriginal = el.getAttribute('placeholder') || '';
    const key = normalizeI18nKey(el.dataset.i18nPlaceholderOriginal);
    if (selected === 'it') el.setAttribute('placeholder', el.dataset.i18nPlaceholderOriginal);
    else if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === selected);
    btn.setAttribute('aria-pressed', btn.dataset.lang === selected ? 'true' : 'false');
  });
}

function setupLanguageSwitcher() {
  if (document.querySelector('.language-switcher')) return;
  const navlinks = document.querySelector('.navlinks');
  if (!navlinks) return;

  const switcher = document.createElement('div');
  switcher.className = 'language-switcher';
  switcher.setAttribute('aria-label', 'Language selector');
  switcher.innerHTML = `
    <button type="button" class="lang-btn" data-lang="it">IT</button>
    <button type="button" class="lang-btn" data-lang="zh">中</button>
    <button type="button" class="lang-btn" data-lang="en">EN</button>
  `;
  navlinks.appendChild(switcher);

  switcher.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

/* --- End trilingual interface --- */

