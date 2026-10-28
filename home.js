(() => {
  const categories = window.categories || [];
  const tools = window.toolsDatabase || [];
  const $ = (selector) => document.querySelector(selector);
  const routes = {
    'Reconnaissance': {file:'recoo.html',theme:'recon',short:'RECON',art:'field-reconnaissance.svg',topics:['Public records','Domains & DNS','Identity clues']},
    'Scanning & Enumeration': {file:'scanning.html',theme:'scan',short:'SCAN',art:'field-scanning.svg',topics:['Ports','Services','Inventory']},
    'Web Exploitation & Testing': {file:'web-testing.html',theme:'web',short:'WEB LAB',art:'field-web-testing.svg',topics:['Crawling','Validation','App testing']},
    'Cryptography & Hashing': {file:'cryptography.html',theme:'crypto',short:'CRYPTO',art:'field-cryptography.svg',topics:['Hashes','Certificates','Encoding']},
    'Network & Packet Analysis': {file:'network-analysis.html',theme:'network',short:'PACKETS',art:'field-network-analysis.svg',topics:['Capture','Protocols','Traffic']},
    'Forensics & Log Analysis': {file:'forensics.html',theme:'forensics',short:'CASE FILE',art:'field-forensics.svg',topics:['Artifacts','Timelines','Recovery']},
    'OSINT Frameworks & Aggregators': {file:'frameworks.html',theme:'frameworks',short:'SYNTHESIS',art:'field-frameworks.svg',topics:['Case management','Feeds','Correlation']},
    'Productivity & Utilities': {file:'utilities.html',theme:'utilities',short:'WORKBENCH',art:'field-utilities.svg',topics:['CLI','Text tools','Automation']}
  };
  const categoryGrid = $('#categoryGrid');
  categoryGrid.innerHTML = categories.map((category, index) => {
    const meta = routes[category.name];
    const count = tools.filter(tool => tool.category === category.name).length;
    const [first, ...rest] = category.name.split(' ');
    const displayName = category.name === 'OSINT Frameworks & Aggregators' ? 'OSINT frameworks <em>& aggregators</em>' : category.name === 'Scanning & Enumeration' ? 'Scanning <em>& enumeration</em>' : category.name === 'Web Exploitation & Testing' ? 'Web testing <em>& validation</em>' : category.name === 'Cryptography & Hashing' ? 'Cryptography <em>& hashing</em>' : category.name === 'Network & Packet Analysis' ? 'Network <em>& packet analysis</em>' : category.name === 'Forensics & Log Analysis' ? 'Forensics <em>& log analysis</em>' : category.name === 'Productivity & Utilities' ? 'Productivity <em>& utilities</em>' : 'Reconnaissance <em>& discovery</em>';
    const summary = {
      'Reconnaissance':'Find the public traces that help explain a domain, host, or identity.',
      'Scanning & Enumeration':'Turn an approved scope into a clear inventory of reachable services.',
      'Web Exploitation & Testing':'Map routes and test web applications in a controlled lab.',
      'Cryptography & Hashing':'Inspect hashes, certificates, encodings, and cryptographic formats.',
      'Network & Packet Analysis':'Read packets, understand protocols, and make traffic explain itself.',
      'Forensics & Log Analysis':'Work from evidence copies, then reconstruct a careful timeline.',
      'OSINT Frameworks & Aggregators':'Gather indicators and connect findings without losing their source.',
      'Productivity & Utilities':'Small tools for repeatable work, clean notes, and fewer manual steps.'
    }[category.name];
    return `<a class="category-card cat-${meta.theme}" style="--accent:${category.color};--card-index:${index}" href="${meta.file}"><div class="category-card-head"><span class="category-number">${String(index+1).padStart(2,'0')} / 08</span><span class="category-art" aria-hidden="true"><img src="assets/${meta.art}" alt="" loading="eager"></span></div><h3>${displayName}</h3><p>${summary}</p><div class="category-card-foot"><span>${count} TOOLS · ${meta.short}</span><span class="arrow" aria-hidden="true">↗</span></div></a>`;
  }).join('');
  // Give each category's own illustration a brief scan/open beat before navigation.
  categoryGrid.addEventListener('click', event => {
    const card = event.target.closest('.category-card');
    if (!card || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (card.dataset.opening === 'true') return;
    card.dataset.opening = 'true';
    card.classList.add('is-opening');
    card.setAttribute('aria-busy', 'true');
    window.setTimeout(() => { window.location.href = card.href; }, 420);
  });
  $('#toolCount').textContent = String(tools.length).padStart(3,'0');

  const search = $('#toolSearch'), resultBox = $('#searchResults'), clear = $('#clearSearch');
  function hrefFor(tool){const route=routes[tool.category];return `${route.file}?tool=${encodeURIComponent(tool.id)}#tool-${encodeURIComponent(tool.id)}`;}
  function renderSearch(){
    const q = search.value.trim().toLowerCase(); clear.hidden = !q;
    if(!q){resultBox.hidden=true;resultBox.innerHTML='';return;}
    const matches = tools.filter(t => [t.name,t.category,t.subcategory,t.description].join(' ').toLowerCase().includes(q)).slice(0,7);
    resultBox.hidden=false;
    resultBox.innerHTML = matches.length ? matches.map(t=>`<a class="search-result" href="${hrefFor(t)}"><span>${escapeHTML(t.name)}</span><small>${escapeHTML(t.category)}</small></a>`).join('') : '<div class="search-empty">No match found. Try a category or a broader term.</div>';
  }
  function escapeHTML(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  search.addEventListener('input',renderSearch);
  clear.addEventListener('click',()=>{search.value='';renderSearch();search.focus();});
  document.addEventListener('click',event=>{if(!event.target.closest('.front-search'))resultBox.hidden=true;});
  search.addEventListener('keydown',event=>{if(event.key==='Escape'){search.value='';renderSearch();} if(event.key==='Enter'){const first=resultBox.querySelector('a'); if(first)location.href=first.href;}});
})();
