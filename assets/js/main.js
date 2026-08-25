(() => {
  const data = window.PORTFOLIO_CONTENT;
  if (!data) return;

  const byId = id => document.getElementById(id);

  const heroTitle = byId('hero-title');
  heroTitle.innerHTML = data.hero.titleHtml;
  byId('hero-lead').textContent = data.hero.lead;

  data.hero.pills.forEach(label => {
    const span = document.createElement('span');
    span.className = 'hero-pill';
    span.textContent = label;
    byId('hero-pills').appendChild(span);
  });

  data.strengths.forEach(item => {
    const article = document.createElement('article');
    article.className = 'strength-card';

    const index = document.createElement('div');
    index.className = 'strength-index';
    index.textContent = item.number;

    const icon = document.createElement('div');
    icon.className = 'strength-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = item.icon;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const accent = document.createElement('span');
    accent.className = 'card-accent';
    accent.setAttribute('aria-hidden', 'true');

    const desc = document.createElement('p');
    desc.textContent = item.description;

    const example = document.createElement('div');
    example.className = 'strength-example';
    const exampleLabel = document.createElement('strong');
    exampleLabel.textContent = 'EXAMPLE';
    const ul = document.createElement('ul');
    item.examples.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });
    example.append(exampleLabel, ul);

    article.append(index, icon, title, accent, desc, example);
    byId('strengths-list').appendChild(article);
  });

  const renderProcess = (targetId, items) => {
    const target = byId(targetId);
    items.forEach(item => {
      const article = document.createElement('article');
      article.className = 'process-card';

      const step = document.createElement('small');
      step.textContent = item.step;
      const title = document.createElement('strong');
      title.textContent = item.title;
      const desc = document.createElement('p');
      desc.textContent = item.description;

      article.append(step, title, desc);
      target.appendChild(article);
    });
  };

  renderProcess('work-process', data.work.process);
  renderProcess('llm-process', data.llm.process);

  byId('sample-input').textContent = data.work.sampleInput;
  byId('sample-output').textContent = data.work.sampleOutput;

  data.work.sampleRows.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    byId('sample-table-body').appendChild(tr);
  });

  byId('llm-intro').textContent = data.llm.intro;
  byId('llm-input').textContent = data.llm.input;
  byId('llm-inference').textContent = data.llm.inference;
  byId('llm-output').textContent = data.llm.output;
  byId('perf-before').textContent = data.llm.performanceBefore;
  byId('perf-after').textContent = data.llm.performanceAfter;
  byId('llm-summary').textContent = data.llm.summary;

  data.llm.issues.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    byId('llm-issues-body').appendChild(tr);
  });

  data.experience.forEach(item => {
    const article = document.createElement('article');
    article.className = 'experience-item';

    const date = document.createElement('div');
    date.className = 'experience-date';
    date.textContent = item.date;

    const body = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = item.title;
    const desc = document.createElement('p');
    desc.textContent = item.description;
    body.append(title, desc);

    article.append(date, body);
    byId('experience-list').appendChild(article);
  });

  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panelByTab = new Map([
    ['tab-process', byId('panel-process')],
    ['tab-result', byId('panel-result')],
    ['tab-llm', byId('panel-llm')]
  ]);

  function activateTab(tab) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      const panel = panelByTab.get(item.id);
      panel.hidden = !selected;
      panel.classList.toggle('is-active', selected);
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      let nextIndex = null;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex !== null) {
        event.preventDefault();
        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
      }
    });
  });

  activateTab(tabs[0]);
})();