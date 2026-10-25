
(function(){
  var DATA = {
    fact: {
      sql: "SELECT * FROM fact_analytics_work;",
      rows: "1 fact · 3 measures · 5 dimensions",
      title: "The fact table: work measured by what it changed",
      sub: "DECISIONS ENABLED · ADOPTION · TRUST",
      body: "Everything on this page rolls up to three measures. Not dashboards shipped. Not tickets closed. <strong>Decisions enabled, adoption in real workflows, and trust in the numbers.</strong> The dimensions around it explain how those numbers got there.",
      list: [
        "<strong>decisions_enabled:</strong> output a team can look at and know what to do next.",
        "<strong>adoption:</strong> stakeholders coming back during real operating rhythms, unprompted.",
        "<strong>trust:</strong> definitions stable enough that meetings debate outcomes, not numbers."
      ],
      jump: "#model", jumpLabel: "Back to the model ↑"
    },
    platform: {
      sql: "SELECT * FROM dim_platform_builds;",
      rows: "1 dimension · 4 builds",
      title: "Platforms: built and made better",
      sub: "LERMA/ FROM SCRATCH · DBT / BIGQUERY · APIS → WAREHOUSE",
      body: "Sometimes I build from zero. Sometimes I make an established platform more useful. The flagship: <strong>automated timesheet ingestion from Webvantage/AQUA into a live Metabase workforce planning dashboard on GCP</strong>, with RBAC for the CFO and department heads.",
      list: [
        "<strong>Timesheet automation:</strong> replaced minutes of manual pulls by several people. Quarterly logged vs. planned metrics with the CFO.",
        "<strong>Paid media marts:</strong> dbt in BigQuery, explicit day-platform-campaign grain, governed metric marts.",
        "<strong>Pipelines that stay built:</strong> Cloud Run ingestion with watermarking, and a Python ELT that turns raw GA4 events into product KPI tables."
      ],
      jump: "#platform", jumpLabel: "Open dim_platform_builds ↓"
    },
    leadership: {
      sql: "SELECT * FROM dim_leadership;",
      rows: "1 dimension · 3 proof points",
      title: "Leadership: the founding story",
      sub: "FIRST BI HIRE → TEAM OF 3 → EXECUTIVE TRUST",
      body: "Most portfolios show dashboards. Mine left this part out for a long time, which was a mistake. I didn't inherit a function at LERMA/. <strong>I founded it.</strong> I set its standards, I hired and coach the team that runs it, and I present its work to executives.",
      list: [
        "<strong>First BI hire:</strong> built the partner model, governance, and single source of truth from zero.",
        "<strong>Team of 3 BI engineers:</strong> player-coach. Standards and review, and still shipping builds.",
        "<strong>Asked for by name:</strong> the CEO requested my presentation on the from-scratch client warehouse. The CDO called the platform recommendation “Amazing job.”"
      ],
      jump: "#leadership", jumpLabel: "Open dim_leadership ↓"
    },
    governance: {
      sql: "SELECT * FROM dim_governance;",
      rows: "1 dimension · 3 commitments",
      title: "Governance: the trust layer",
      sub: "CANONICAL METRICS · EXPLICIT GRAIN · ONE SOURCE OF TRUTH",
      body: "“If the model is messy, everything downstream is harder than it should be.” Governance is how that stays true as things grow: <strong>logic defined once, in governed models</strong>, never scattered across dashboard calculations where nobody can find it.",
      list: [
        "<strong>Make grain explicit:</strong> every model says what one row means. No hidden joins, no metric drift.",
        "<strong>Centralize metric logic:</strong> shared marts and canonical measures across teams.",
        "<strong>Layered modeling:</strong> Raw → Staging → Intermediate → Mart → BI, every time."
      ],
      jump: "#governance", jumpLabel: "Open dim_governance ↓"
    },
    partnership: {
      sql: "SELECT * FROM dim_partnership;",
      rows: "1 dimension · 2 products, daily users",
      title: "Partnership: dashboards are products",
      sub: "CFO · CGO · STAKEHOLDERS ARE CUSTOMERS",
      body: "“Dashboards are products. Stakeholders are customers.” I used to hope people would adopt what I built. Now I design for adoption before I write a line of SQL. Sometimes the right product is not a dashboard at all, like the <strong>lite CRM I built solo for the CGO</strong>. It is now his daily pipeline tool.",
      list: [
        "<strong>Lite CRM for the CGO:</strong> Excel pipeline doc to Supabase CRM, 50+ leads, Outlook sync, mobile view.",
        "<strong>CFO partnership:</strong> quarterly workforce metrics that line up logged hours against planned hours.",
        "<strong>Adoption checklist:</strong> Awareness → Usage → Trust → Decision, in that order."
      ],
      jump: "#partnership", jumpLabel: "Open dim_partnership ↓"
    },
    tooling: {
      sql: "SELECT * FROM dim_tooling;",
      rows: "1 dimension · 4 groups",
      title: "Tooling: broad, modern, in its place",
      sub: "A DIMENSION, NOT THE FACT TABLE",
      body: "Tools are the part of this page I care about least. Greenfield work still demands range: ingestion, modeling, warehousing, BI, and the occasional product build. The stack is evidence for the model above, <strong>never the headline</strong>.",
      list: [
        "<strong>Modeling:</strong> dbt, SQL, layered modeling, canonical metrics.",
        "<strong>Warehouses + BI:</strong> BigQuery, Looker, Metabase, SSRS, Excel, Snowflake, Power BI.",
        "<strong>Engineering:</strong> Python, REST APIs, Cloud Run, Streamlit, Fivetran, Supabase."
      ],
      jump: "#tooling", jumpLabel: "Open dim_tooling ↓"
    }
  };

  var tbls = document.querySelectorAll(".tbl");
  var sql = document.getElementById("q-sql");
  var rows = document.getElementById("q-rows");
  var title = document.getElementById("q-title");
  var sub = document.getElementById("q-sub");
  var body = document.getElementById("q-body");
  var list = document.getElementById("q-list");
  var jump = document.getElementById("q-jump");

  function select(key){
    var d = DATA[key];
    if(!d) return;
    for(var i=0;i<tbls.length;i++){
      tbls[i].classList.toggle("active", tbls[i].getAttribute("data-dim") === key);
    }
    tbls.forEach(function(table){
      table.setAttribute("aria-current", table.getAttribute("data-dim") === key ? "true" : "false");
    });
    sql.textContent = d.sql;
    rows.textContent = d.rows;
    title.textContent = d.title;
    sub.textContent = d.sub;
    body.innerHTML = d.body;
    list.innerHTML = "";
    d.list.forEach(function(item){
      var li = document.createElement("li");
      li.innerHTML = item;
      list.appendChild(li);
    });
    jump.setAttribute("href", d.jump);
    jump.textContent = d.jumpLabel;
  }

  for(var i=0;i<tbls.length;i++){
    (function(btn){
      btn.addEventListener("click", function(event){
        if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        select(btn.getAttribute("data-dim"));
        var q = document.querySelector(".query");
        if(q){ q.scrollIntoView({behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block:"nearest"}); }
      });
    })(tbls[i]);
  }

  // default selection: leadership, the story the old site was missing
  select("leadership");
})();

// Connect all five dimension tables to the fact table at their rendered sizes.
(function () {
  var grid = document.querySelector('.erd-grid');
  var svg = document.querySelector('.wires');
  var fact = document.querySelector('.tbl.fact');
  function drawConnections() {
    if (!window.matchMedia('(min-width: 901px)').matches) return;
    var zone = document.querySelector('.erd-zone').getBoundingClientRect();
    var center = fact.getBoundingClientRect();
    svg.setAttribute('viewBox', '0 0 ' + zone.width + ' ' + zone.height);
    svg.replaceChildren();
    document.querySelectorAll('.tbl:not(.fact)').forEach(function (table) {
      var rect = table.getBoundingClientRect();
      var below = table.dataset.dim === 'tooling';
      var left = rect.left < center.left;
      var x1 = (below ? rect.left + rect.width / 2 : left ? rect.right : rect.left) - zone.left;
      var y1 = (below ? rect.top : rect.top + rect.height / 2) - zone.top;
      var x2 = (below ? center.left + center.width / 2 : left ? center.left : center.right) - zone.left;
      var y2 = (below ? center.bottom : center.top + center.height / 2) - zone.top;
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      var middle = (x1 + x2) / 2;
      path.setAttribute('d', below ? 'M' + x1 + ',' + y1 + ' L' + x2 + ',' + y2 :
        'M' + x1 + ',' + y1 + ' C' + middle + ',' + y1 + ' ' + middle + ',' + y2 + ' ' + x2 + ',' + y2);
      svg.appendChild(path);
    });
  }
  new ResizeObserver(drawConnections).observe(grid);
  document.fonts.ready.then(drawConnections);
})();

// Mobile navigation and a reserved header position for the existing Top link.
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-sections');
  var topLink = document.querySelector('.back-to-top');
  var slot = document.querySelector('.mobile-top-slot');
  var home = document.createComment('Desktop Top link position');
  topLink.before(home);
  var mobile = window.matchMedia('(max-width: 900px)');
  function closeMenu(restoreFocus) {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  }
  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    menu.hidden = expanded;
    toggle.setAttribute('aria-expanded', String(!expanded));
  });
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu(true);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) closeMenu(true);
  });
  document.addEventListener('pointerdown', function (event) {
    if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) closeMenu(false);
  });
  function updateLayout() {
    closeMenu(false);
    toggle.hidden = !mobile.matches;
    if (mobile.matches) slot.appendChild(topLink);
    else home.after(topLink);
  }
  mobile.addEventListener('change', updateLayout);
  updateLayout();
})();
