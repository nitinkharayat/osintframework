(() => {
  const categoryName = document.body.dataset.category;
  const allTools = (window.toolsDatabase || []).filter(tool => tool.category === categoryName);
  const category = (window.categories || []).find(item => item.name === categoryName) || {name:categoryName,description:'A curated set of tools for this field.'};
  const $ = selector => document.querySelector(selector);
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const safeURL = value => /^https?:\/\//i.test(String(value || '')) ? String(value) : '';
  const link = (url, label, secondary=false) => {
    const href=safeURL(url); if(!href) return '';
    return `<a href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer"${secondary?' class="secondary-link"':''}>${escapeHTML(label)} <span aria-hidden="true">↗</span></a>`;
  };
  const categoryHeadings = {
    'Reconnaissance':'Reconnaissance <em>& discovery.</em>',
    'Scanning & Enumeration':'Scanning <em>& enumeration.</em>',
    'Web Exploitation & Testing':'Web testing <em>& validation.</em>',
    'Cryptography & Hashing':'Cryptography <em>& hashing.</em>',
    'Network & Packet Analysis':'Network <em>& packet analysis.</em>',
    'Forensics & Log Analysis':'Forensics <em>& log analysis.</em>',
    'OSINT Frameworks & Aggregators':'OSINT frameworks <em>& aggregators.</em>',
    'Productivity & Utilities':'Productivity <em>& utilities.</em>'
  };
  $('#categoryTitle').innerHTML = categoryHeadings[categoryName] || escapeHTML(categoryName);
  $('#categoryCount').textContent = `TOOLS / ${String(allTools.length).padStart(2,'0')}`;
  const subcategories = [...new Set(allTools.map(tool=>tool.subcategory).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  $('#subcategoryFilter').insertAdjacentHTML('beforeend',subcategories.map(item=>`<option value="${escapeHTML(item)}">${escapeHTML(item)}</option>`).join(''));

  const installLabel = {debian:'Kali / Debian',arch:'Arch Linux',mac:'macOS',web:'Web access'};
  function installPanel(tool, key) {
    const command = tool.install && tool.install[key];
    if (command) return `<pre class="install-code">${escapeHTML(command)}</pre>`;
    if(key==='web' && safeURL(tool.website)) return `<p class="detail-overview">No local install is needed for the web entry point. Access it through the official site listed below.</p>`;
    return `<p class="license-note">No verified ${escapeHTML(installLabel[key] || key)} command is listed here. Follow the project’s official install guide.</p>`;
  }
  function toolCard(tool, index) {
    const command = tool.command || 'See the official documentation for a quick-start example.';
    const note = tool.commandNote || 'Review the current official documentation and use only authorized inputs and targets.';
    const level = tool.difficulty || 'Varies';
    const price = tool.price || 'Open-source project';
    const installKeys = ['debian','arch','mac','web'];
    const firstInstall = tool.install && tool.install.debian ? 'debian' : tool.install && tool.install.arch ? 'arch' : tool.install && tool.install.mac ? 'mac' : 'web';
    const panel = `<div class="install-panel" data-install-panel="${escapeHTML(tool.id)}">${installPanel(tool, firstInstall)}</div>`;
    const hasCommand = !/^(Open |Follow |See |Start with )/i.test(command);
    const open = new URLSearchParams(location.search).get('tool') === tool.id || location.hash === `#tool-${tool.id}`;
    const related = Array.isArray(tool.related) ? tool.related.filter(Boolean).slice(0,4) : [];
    const how = [
      'Confirm that the target, input file, account, or evidence copy is within your approved scope.',
      hasCommand ? 'Run the example in a controlled environment and review the tool output before drawing a conclusion.' : 'Read the upstream quick-start guide and follow its supported deployment or access workflow.',
      'Record the tool version, source, timestamp, relevant output, and any limitations.'
    ];
    return `<details class="tool-entry" id="tool-${escapeHTML(tool.id)}" data-tool="${escapeHTML(tool.id)}" ${open?'open':''}>
      <summary>
        <div class="tool-entry-head"><div class="tool-entry-labels"><span class="subcategory-tag">${escapeHTML(tool.subcategory || 'General')}</span><span class="license-tag">${escapeHTML(price.toLowerCase().includes('community')?'OPEN-SOURCE CORE':'OPEN SOURCE')}</span><span class="difficulty-tag">${escapeHTML(level)}</span></div><span class="tool-number">${String(index+1).padStart(2,'0')}</span></div>
        <div class="tool-entry-title-row"><h3>${escapeHTML(tool.name)}</h3><span class="open-marker" aria-hidden="true">＋</span></div>
        <p class="tool-entry-summary">${escapeHTML(tool.description || '')}</p>
      </summary>
      <div class="tool-entry-details">
        <p class="detail-overview">${escapeHTML(tool.purpose || tool.description || '')}</p>
        <div class="detail-grid">
          <section class="detail-box"><h4>Quick start / command</h4><div class="command-line"><code>${escapeHTML(command)}</code><button class="copy-command" type="button" data-copy-command="${escapeHTML(tool.id)}">COPY</button></div><p class="command-note">${escapeHTML(note)}</p></section>
          <section class="detail-box"><h4>How to use it</h4><ol class="how-to-list">${how.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ol></section>
          <section class="detail-box"><h4>Install / access notes</h4><div class="install-tabs" role="group" aria-label="Installation platforms">${installKeys.map(key=>`<button type="button" class="install-tab ${key===firstInstall?'active':''}" data-install-tab="${escapeHTML(tool.id)}:${key}">${installLabel[key]}</button>`).join('')}</div>${panel}<p class="license-note">Installation snippets are starting points, not a guarantee of package availability. Verify OS support and package names upstream.</p></section>
          <section class="detail-box"><h4>Project notes</h4><p><strong>Category:</strong> ${escapeHTML(tool.category)}<br><strong>Topic:</strong> ${escapeHTML(tool.subcategory || 'General')}<br><strong>Pricing:</strong> ${escapeHTML(price)}</p><p class="license-note">${escapeHTML(tool.licenseNote || 'Verify the project license and bundled components in the upstream repository before redistribution.')}</p>${related.length?`<p><strong>Related:</strong> ${related.map(escapeHTML).join(' · ')}</p>`:''}</section>
        </div>
        <div class="detail-links">${link(tool.website,'Official site')}${link(tool.docs || tool.website,'Documentation',true)}${link(tool.github,'Source code / repository',true)}</div>
      </div>
    </details>`;
  }

  const searchInput = $('#categorySearch');
  const subcategoryFilter = $('#subcategoryFilter');
  const toolList = $('#toolList');
  const empty = $('#toolEmpty');
  const resultCount = $('#toolResultCount');
  function filtered() {
    const q = searchInput.value.trim().toLowerCase();
    const sub = subcategoryFilter.value;
    return allTools.filter(tool => {
      const matchText = [tool.name,tool.subcategory,tool.description,tool.purpose,tool.command,tool.commandNote].join(' ').toLowerCase().includes(q);
      return (!q || matchText) && (!sub || tool.subcategory === sub);
    });
  }
  function render() {
    const results=filtered();
    toolList.innerHTML=results.map(toolCard).join('');
    empty.hidden=results.length!==0;
    toolList.hidden=results.length===0;
    resultCount.textContent=`${results.length} ${results.length===1?'tool':'tools'}`;
  }
  searchInput.addEventListener('input',render);
  subcategoryFilter.addEventListener('change',render);
  $('#clearCategoryFilters').addEventListener('click',()=>{searchInput.value='';subcategoryFilter.value='';render();searchInput.focus();});

  async function copyText(text) {
    try {
      if(navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else { const area=document.createElement('textarea'); area.value=text; area.style.position='fixed';area.style.opacity='0';document.body.appendChild(area);area.select();const okay=document.execCommand('copy');area.remove();if(!okay)throw new Error('copy failed'); }
      return true;
    } catch (_) { return false; }
  }
  document.addEventListener('click', async event => {
    const copyButton=event.target.closest('[data-copy-command]');
    if(copyButton){event.preventDefault();event.stopPropagation();const tool=allTools.find(item=>item.id===copyButton.dataset.copyCommand);if(!tool)return;const ok=await copyText(tool.command || '');copyButton.textContent=ok?'COPIED':'SELECT & COPY';if(!ok){const code=copyButton.closest('.command-line').querySelector('code');const range=document.createRange();range.selectNodeContents(code);const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);}setTimeout(()=>{copyButton.textContent='COPY';},1500);return;}
    const installButton=event.target.closest('[data-install-tab]');
    if(installButton){event.preventDefault();event.stopPropagation();const [id,key]=installButton.dataset.installTab.split(':');const tool=allTools.find(item=>item.id===id);if(!tool)return;const entry=installButton.closest('.tool-entry');entry.querySelectorAll('.install-tab').forEach(btn=>btn.classList.toggle('active',btn===installButton));const panel=entry.querySelector(`[data-install-panel="${CSS.escape(id)}"]`);panel.innerHTML=installPanel(tool,key);return;}
  });
  render();
  const selected = new URLSearchParams(location.search).get('tool');
  const targetId = selected || (location.hash.startsWith('#tool-') ? decodeURIComponent(location.hash.slice(6)) : '');
  if(targetId){
    const found=allTools.find(tool=>tool.id===targetId);
    if(found){
      const details=document.getElementById(`tool-${found.id}`);
      if(details){details.open=true;setTimeout(()=>details.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}),80);}
    }
  }
})();
