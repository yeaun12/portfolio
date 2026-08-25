(() => {
  const root = window.PORTFOLIO_CONTENT;
  if (!root) return;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value ?? '';
  };

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) heroTitle.innerHTML = root.hero.titleHtml;
  setText('hero-lead', root.hero.lead);

  const pills = document.getElementById('hero-pills');
  if (pills) {
    pills.innerHTML = '';
    root.hero.pills.forEach(text => {
      const span = document.createElement('span');
      span.className = 'pill';
      span.textContent = text;
      pills.appendChild(span);
    });
  }

  const strengths = document.getElementById('strengths-list');
  if (strengths) {
    strengths.innerHTML = '';
    root.strengths.forEach((item, i) => {
      const article = document.createElement('article');
      article.className = 'strength';
      article.innerHTML = `
        <div class="icon i${Math.min(i + 1, 3)}">${item.number}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>`;
      strengths.appendChild(article);
    });
  }

  const workProcess = document.getElementById('work-process');
  if (workProcess) {
    workProcess.innerHTML = '';
    root.work.process.forEach(item => {
      const article = document.createElement('article');
      article.className = 'step';
      article.innerHTML = `<small>${item.step}</small><strong>${item.title}</strong><p>${item.description}</p>`;
      workProcess.appendChild(article);
    });
  }

  setText('sample-input', root.work.sampleInput);
  setText('sample-output', root.work.sampleOutput);
  const sampleBody = document.getElementById('sample-table-body');
  if (sampleBody) {
    sampleBody.innerHTML = '';
    root.work.sampleRows.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      sampleBody.appendChild(tr);
    });
  }

  setText('llm-intro', root.llm.intro);
  const llmProcess = document.getElementById('llm-process');
  if (llmProcess) {
    llmProcess.innerHTML = '';
    root.llm.process.forEach(item => {
      const article = document.createElement('article');
      article.className = 'step';
      article.innerHTML = `<small>${item.step}</small><strong>${item.title}</strong><p>${item.description}</p>`;
      llmProcess.appendChild(article);
    });
  }

  const issuesBody = document.getElementById('llm-issues-body');
  if (issuesBody) {
    issuesBody.innerHTML = '';
    root.llm.issues.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      issuesBody.appendChild(tr);
    });
  }

  setText('llm-input', root.llm.input);
  setText('llm-inference', root.llm.inference);
  setText('llm-output', root.llm.output);
  setText('perf-before', root.llm.performanceBefore);
  setText('perf-after', root.llm.performanceAfter);
  setText('llm-summary', root.llm.summary);

  const expList = document.getElementById('experience-list');
  if (expList) {
    expList.innerHTML = '';
    root.experience.forEach(item => {
      const article = document.createElement('article');
      article.className = 'experience';
      article.innerHTML = `<div class="date">${item.date}</div><div><h3>${item.title}</h3><p>${item.description}</p></div>`;
      expList.appendChild(article);
    });
  }

  const renderList = (id, items) => {
    const ul = document.getElementById(id);
    if (!ul) return;
    ul.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  };
  renderList('public-list', root.scope.public);
  renderList('private-list', root.scope.private);

  const tabs = [...document.querySelectorAll('.tab')];
  const panels = {
    'tab-process': document.getElementById('process-panel'),
    'tab-result': document.getElementById('result-panel'),
    'tab-llm': document.getElementById('llm-panel')
  };
  function activate(id){
    tabs.forEach(t => {
      const active = t.id === id;
      t.setAttribute('aria-selected', String(active));
      const panel = panels[t.id];
      if (panel) {
        panel.classList.toggle('active', active);
        panel.hidden = !active;
      }
    });
  }
  tabs.forEach(tab => {
    tab.addEventListener('click', () => activate(tab.id));
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const idx = tabs.indexOf(tab);
        const next = e.key === 'ArrowRight'
          ? (idx + 1) % tabs.length
          : (idx - 1 + tabs.length) % tabs.length;
        tabs[next].focus();
        activate(tabs[next].id);
      }
    });
  });
})();
