/* ============================================================
   ESG·CRE Knowledge Base — shared glossary + tooltip engine
   One source of truth for every acronym across both markets.
   - GLOSSARY.core : shared terms (Scope 1/2/3, ISSB, GHG Protocol…)
   - GLOSSARY.uk   : UK-only (MEES, iSBEM, BRUKL, EPC…)
   - GLOSSARY.uae  : UAE-only (MOCCAE, IEQT, MRV, Estidama…)
   Each module page sets  window.MARKET = 'uk' | 'uae'  before
   loading this file; tooltips then resolve against core + that market.
   ============================================================ */

const GLOSSARY = {
  core: {
    "GHG":        ["Greenhouse Gases", "Gases that trap heat — CO₂, methane, etc. The thing all this regulation measures."],
    "GHG Protocol":["Greenhouse Gas Protocol", "The global rulebook for Scope 1/2/3 carbon accounting underpinning almost every framework."],
    "Scope 1":    ["Scope 1 emissions", "Direct emissions from owned/controlled sources (on-site fuel, generators, refrigerant leakage)."],
    "Scope 2":    ["Scope 2 emissions", "Indirect emissions from purchased energy — electricity and (in the UAE) district cooling."],
    "Scope 3":    ["Scope 3 emissions", "All other value-chain emissions — often the largest and hardest share to measure."],
    "Scope 1/2/3":["Emission scopes", "Direct (1), purchased energy (2), and value-chain (3) emissions."],
    "ISSB":       ["International Sustainability Standards Board", "IFRS Foundation body authoring the global S1/S2 climate-disclosure baseline."],
    "IFRS":       ["International Financial Reporting Standards", "Global accounting-standards family, now extended to sustainability (S1/S2)."],
    "IFRS S1":    ["IFRS S1", "The general sustainability-disclosure standard (governance, strategy, risk, metrics)."],
    "IFRS S2":    ["IFRS S2", "The climate-specific disclosure standard — the climate-first half of the ISSB baseline."],
    "S1/S2":      ["IFRS S1 / S2", "The ISSB sustainability (S1) and climate (S2) disclosure standards."],
    "TCFD":       ["Task Force on Climate-related Financial Disclosures", "The 4-pillar climate-risk framework now absorbed into ISSB / S2."],
    "GRI":        ["Global Reporting Initiative", "A widely used sustainability-disclosure framework."],
    "SASB":       ["Sustainability Accounting Standards Board", "Industry-specific disclosure metrics, folded into the ISSB."],
    "CDP":        ["Carbon Disclosure Project", "A voluntary environmental-disclosure platform investors use."],
    "GRESB":      ["Global Real Estate Sustainability Benchmark", "The investor benchmark real-estate portfolios report to."],
    "LEED":       ["Leadership in Energy and Environmental Design", "The US Green Building Council's global green-building certification."],
    "BREEAM":     ["Building Research Establishment Environmental Assessment Method", "The UK-origin green-building certification, used internationally."],
    "WELL":       ["WELL Building Standard", "A health-and-wellbeing-focused building certification."],
    "CBAM":       ["Carbon Border Adjustment Mechanism", "EU tariff on embedded carbon in imports; mainly manufacturing/supply-chain."],
    "ISO 14064":  ["ISO 14064", "International standard for GHG quantification, monitoring and verification."],
    "ISO":        ["International Organization for Standardization", "Global standards body (e.g. ISO 14064, 14001, 50001)."],
    "BMS":        ["Building Management System", "Controls a building's HVAC/lighting/energy — a source of real metered data."],
    "MRV":        ["Measurement, Reporting & Verification", "The measure → report → verify compliance cycle at the heart of emissions law."],
    "Net Zero":   ["Net Zero", "Balancing emitted greenhouse gases with an equivalent amount removed."],
    "Stranded asset":["Stranded asset", "A building that can't be leased or financed because it fails efficiency thresholds."],
    "Single / double materiality":["Materiality lenses", "Single = impact on the company; double = also the company's impact on the world (EU view)."],
    "CRE":        ["Commercial Real Estate", "Income-producing non-residential property — the venture's market."],
    "REIT":       ["Real Estate Investment Trust", "Listed property-owning vehicle that distributes most income as dividends."],
    "SLL":        ["Sustainability-Linked Loan", "Debt whose margin is tied to hitting sustainability/efficiency targets."],
    "ESG":        ["Environmental, Social & Governance", "The umbrella term for non-financial corporate performance and disclosure."],
    "SME":        ["Small & Medium Enterprise", "The under-served mid-market segment the venture targets."],
    "CCUS":       ["Carbon Capture, Use & Storage", "Capturing CO₂ from sources for reuse or underground storage."],
    "CAGR":       ["Compound Annual Growth Rate", "Smoothed annual growth rate over a period."],
    "SSOT":       ["Single Source of Truth", "One authoritative data record per asset — the venture's core promise."],
    "NDC":        ["Nationally Determined Contribution", "A country's pledged emissions-reduction target under the Paris Agreement."],
    "GTM":        ["Go-To-Market", "The plan for reaching and selling to customers."],
    "B2B2B":      ["Business-to-Business-to-Business", "Selling through one business to reach another (e.g. tooling consultancies who serve owners)."],
  },

  uk: {
    "MEES":   ["Minimum Energy Efficiency Standards", "England & Wales rule: can't grant/continue a lease below an EPC threshold. The one instrument with real legal teeth."],
    "EPC":    ["Energy Performance Certificate", "The A–G energy rating of a building — the atomic data point the whole UK system reuses."],
    "iSBEM":  ["interface to the Simplified Building Energy Model", "The government-approved tool accredited assessors use to calculate non-domestic EPCs/BRUKL."],
    "SBEM":   ["Simplified Building Energy Model", "The underlying national calculation methodology for non-domestic building energy."],
    "BRUKL":  ["Building Regulations UK part L", "The compliance report (from SBEM software) proving a building meets Part L at design/build."],
    "UKSRS":  ["UK Sustainability Reporting Standards", "The UK's adoption of ISSB S1/S2 — forward-looking, investor-facing climate-risk disclosure."],
    "SECR":   ["Streamlined Energy & Carbon Reporting", "Mandatory annual energy/carbon disclosure in large companies' accounts since 2019."],
    "ESOS":   ["Energy Savings Opportunity Scheme", "Mandatory 4-yearly energy audit for large UK enterprises."],
    "SDR":    ["Sustainability Disclosure Requirements", "FCA regime governing sustainability claims and fund labels (anti-greenwash)."],
    "DESNZ":  ["Department for Energy Security & Net Zero", "Owns MEES/EPC policy and the UK emission factors updated each June."],
    "MHCLG":  ["Ministry of Housing, Communities & Local Government", "Owns Building Regulations incl. Part L (formerly DLUHC)."],
    "DLUHC":  ["Department for Levelling Up, Housing & Communities", "The former name of MHCLG (appears throughout the iSBEM guides)."],
    "FCA":    ["Financial Conduct Authority", "Drives disclosure for listed firms (SDR) and the listing rules UKSRS plugs into."],
    "CCC":    ["Climate Change Committee", "Independent statutory adviser setting the UK's carbon-budget direction."],
    "Part L": ["Building Regulations Part L", "The construction-stage energy gate, proved once via a BRUKL report."],
    "CSRD":   ["Corporate Sustainability Reporting Directive", "Big EU disclosure regime; bites UK firms only on EU exposure. Narrowed by the 2026 Omnibus."],
    "CRREM":  ["Carbon Risk Real Estate Monitor", "Maps an asset against decarbonisation pathways to flag stranding risk."],
    "DEFRA":  ["Department for Environment, Food & Rural Affairs", "Publishes the UK greenhouse-gas conversion factors."],
    "Landsec":["Landsec (Land Securities)", "One of the largest UK REITs — an institutional-landlord archetype."],
    "Segro":  ["SEGRO", "A major UK industrial/logistics REIT."],
  },

  uae: {
    "MOCCAE":  ["Ministry of Climate Change & Environment", "The UAE federal authority that owns the climate law, MRV methodologies and the IEQT platform."],
    "IEQT":    ["Integrated Emissions Quantification Tool", "MOCCAE's mandatory digital platform (mrv.ae) for emissions reporting under the climate law."],
    "NRCC":    ["National Register for Carbon Credits", "The UAE carbon-credit registry under Cabinet Resolution 67/2024 — the market track, mostly for large emitters."],
    "HCEE":    ["Huge Carbon Emission Entity", "An entity emitting ≥0.5 MtCO₂e/yr (Scope 1+2) — the heavy-obligation tier. Almost no single building qualifies."],
    "Estidama":["Estidama", "Abu Dhabi's sustainability framework ('sustainability' in Arabic), enforced via the Pearl Rating System."],
    "Pearl":   ["Pearl Rating System (PRS)", "Estidama's 1–5 Pearl building rating; min. 1 Pearl for new builds, 2 for government buildings."],
    "PBRS":    ["Pearl Building Rating System", "The buildings protocol within Estidama's Pearl Rating System."],
    "PQP":     ["Pearl Qualified Professional", "The licensed professional who facilitates Estidama certification — a gatekeeper to sit alongside, not replace."],
    "Al Sa'fat":["Al Sa'fat", "Dubai's green-building system; Silver is the mandatory baseline for every new permit from 2026."],
    "Barjeel": ["Barjeel", "Ras Al Khaimah's green-building regulations, mandatory since 2020."],
    "DEWA":    ["Dubai Electricity & Water Authority", "Dubai's utility — source of grid/district-cooling emission factors and the DSM retrofit programme."],
    "ADDC":    ["Abu Dhabi Distribution Company", "Abu Dhabi's electricity/water distributor — an emission-factor data source."],
    "DSM":     ["Demand Side Management", "Dubai's strategy to cut energy demand 30% by 2030 — the state retrofit lever for existing stock."],
    "EAD":     ["Environment Agency – Abu Dhabi", "Runs Abu Dhabi's emirate-level MRV (Enhanced Transparency Framework) for large facilities."],
    "SCA":     ["Securities & Commodities Authority", "UAE securities regulator — mandates listed-company sustainability reports and oversees the carbon market."],
    "ADX":     ["Abu Dhabi Securities Exchange", "Abu Dhabi's stock exchange; listed firms must publish annual sustainability reports."],
    "DFM":     ["Dubai Financial Market", "Dubai's stock exchange; its ESG Reporting Guide sets a benchmark metric set."],
    "ADGM":    ["Abu Dhabi Global Market", "Abu Dhabi's financial free zone with its own comply-or-explain ESG disclosure framework."],
    "DIFC":    ["Dubai International Financial Centre", "Dubai's financial free zone; the DFSA expects ESG integration by regulated firms."],
    "DFSA":    ["Dubai Financial Services Authority", "The DIFC's financial regulator."],
    "DMT":     ["Department of Municipalities & Transport", "Abu Dhabi authority that now administers Estidama."],
    "DMCC":    ["Dubai Multi Commodities Centre", "The UAE's largest free zone (24,000+ companies) — a Segment-D aggregator target."],
    "CBUAE":   ["Central Bank of the UAE", "Sets principles for managing climate-related financial risk; promotes sustainable finance."],
    "District cooling":["District cooling", "Centralised chilled-water supply (Empower, Tabreed) — a UAE-specific Scope 2 accounting knot."],
    "SHGC":    ["Solar Heat Gain Coefficient", "How much solar heat a window admits — a core lever in UAE envelope/cooling codes."],
    "Sukuk":   ["Sukuk", "A Sharia-compliant bond — relevant to UAE green-finance (green sukuk)."],
  }
};

/* ---------- build the active lookup for this page's market ---------- */
const MARKET = (window.MARKET || '').toLowerCase();
const LOOKUP = Object.assign({}, GLOSSARY.core, GLOSSARY[MARKET] || {});

/* ---------- single body-mounted tooltip (Atlas pattern) ---------- */
(function(){
  const PAD = 10;
  let tt = document.getElementById('tt');
  if(!tt){ tt = document.createElement('div'); tt.id='tt'; document.body.appendChild(tt); }
  let active = null;

  function fill(term){
    const e = LOOKUP[term] || LOOKUP[term.replace(/\u2019/g,"'")];
    if(!e) return false;
    tt.innerHTML = `<span class="tt-ac">${term}</span> <span class="tt-full">— ${e[0]}</span><span class="tt-desc">${e[1]}</span>`;
    return true;
  }
  function place(el){
    if(!fill(el.dataset.term)) return;
    tt.classList.add('show');
    const tw=tt.offsetWidth, th=tt.offsetHeight, vw=document.documentElement.clientWidth;
    const c=el.getBoundingClientRect(), cx=c.left+c.width/2;
    const left=Math.max(PAD, Math.min(cx-tw/2, vw-tw-PAD));
    let top=c.top-th-10, below=false;
    if(top<PAD){ top=c.bottom+10; below=true; }
    tt.style.left=left+'px'; tt.style.top=top+'px';
    tt.classList.toggle('below', below);
    tt.style.setProperty('--arrow', Math.max(14, Math.min(cx-left, tw-14))+'px');
    active=el;
  }
  function hide(){ tt.classList.remove('show'); active=null; }

  function bind(el){
    el.addEventListener('mouseenter', ()=>place(el));
    el.addEventListener('mouseleave', hide);
    el.addEventListener('click', e=>{ e.stopPropagation(); active===el?hide():place(el); });
  }
  document.querySelectorAll('.term').forEach(bind);
  document.addEventListener('click', hide);
  window.addEventListener('scroll', hide, {passive:true});
  window.addEventListener('resize', hide);

  // expose for the glossary page renderer
  window.__GLOSSARY = GLOSSARY;
})();
