/* ============================================================
   gate.js — a lightweight session password screen.
   HONEST SCOPE: this is a deterrent, not real security. It keeps
   casual visitors and crawlers out. The page content is still in
   the file, so a determined/technical visitor can bypass it.
   For real protection, content must be served behind a server
   check (e.g. Cloudflare Access / a paid host password).
   ============================================================ */
(function(){
  // --- config ---
  var PASSWORD = "compliance2026";        // <-- change this to your chosen password
  var KEY      = "esgcre_gate_ok";          // sessionStorage flag
  var TITLE    = "ESG·CRE Knowledge Base";
  var SUBTITLE = "Private research · enter password to continue";

  // already unlocked this browser session? do nothing.
  try { if (sessionStorage.getItem(KEY) === "1") return; } catch(e){}

  // hide the document body until unlocked (re-shown on success)
  var hideStyle = document.createElement("style");
  hideStyle.id = "gate-hide";
  hideStyle.textContent = "body > *:not(#gate){filter:blur(0);}"; // no-op placeholder; overlay covers all
  document.documentElement.appendChild(hideStyle);

  function buildGate(){
    var g = document.createElement("div");
    g.id = "gate";
    g.innerHTML =
      '<div class="gate-card">' +
        '<div class="gate-brand">'+TITLE+'</div>' +
        '<div class="gate-sub">'+SUBTITLE+'</div>' +
        '<label class="gate-label" for="gate-pw">Password</label>' +
        '<input id="gate-pw" type="password" autocomplete="off" autofocus>' +
        '<button id="gate-btn">Enter →</button>' +
        '<div id="gate-err" class="gate-err"></div>' +
      '</div>';
    document.body.appendChild(g);

    var input = g.querySelector("#gate-pw");
    var btn   = g.querySelector("#gate-btn");
    var err   = g.querySelector("#gate-err");

    function tryUnlock(){
      if (input.value === PASSWORD){
        try { sessionStorage.setItem(KEY, "1"); } catch(e){}
        g.parentNode && g.parentNode.removeChild(g);
        var hs = document.getElementById("gate-hide"); hs && hs.remove();
      } else {
        err.textContent = "Incorrect password.";
        input.value = ""; input.focus();
        g.querySelector(".gate-card").classList.remove("shake");
        void g.offsetWidth;
        g.querySelector(".gate-card").classList.add("shake");
      }
    }
    btn.addEventListener("click", tryUnlock);
    input.addEventListener("keydown", function(e){ if(e.key==="Enter") tryUnlock(); });
    input.focus();
  }

  var style = document.createElement("style");
  style.textContent =
    '#gate{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;' +
      'background:#1c1b18;background-image:radial-gradient(circle at 20% 15%,rgba(15,122,94,.18),transparent 45%),radial-gradient(circle at 85% 90%,rgba(29,95,166,.16),transparent 50%);' +
      'font-family:"IBM Plex Sans",-apple-system,sans-serif;}' +
    '.gate-card{width:min(370px,calc(100vw - 40px));background:#26241f;border:1px solid #3a372f;border-radius:16px;' +
      'padding:34px 30px 28px;box-shadow:0 20px 60px rgba(0,0,0,.5);}' +
    '.gate-card.shake{animation:gshake .35s;}' +
    '@keyframes gshake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-7px)}40%,80%{transform:translateX(7px)}}' +
    '.gate-brand{font-family:"Fraunces",Georgia,serif;font-weight:600;font-size:22px;color:#f4f1e9;letter-spacing:-.01em;}' +
    '.gate-sub{font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8f8b7e;margin:7px 0 24px;line-height:1.5;}' +
    '.gate-label{display:block;font-family:"IBM Plex Mono",monospace;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#a8a394;margin-bottom:7px;}' +
    '#gate-pw{width:100%;box-sizing:border-box;background:#1c1b18;border:1px solid #3a372f;border-radius:8px;' +
      'padding:11px 13px;color:#f4f1e9;font-size:15px;font-family:"IBM Plex Mono",monospace;outline:none;transition:border-color .15s;}' +
    '#gate-pw:focus{border-color:#0f7a5e;}' +
    '#gate-btn{width:100%;margin-top:14px;background:#0f7a5e;color:#fff;border:none;border-radius:8px;padding:11px;' +
      'font-family:"IBM Plex Mono",monospace;font-size:13px;font-weight:600;cursor:pointer;transition:background .15s;}' +
    '#gate-btn:hover{background:#0c6048;}' +
    '.gate-err{color:#e0896a;font-family:"IBM Plex Mono",monospace;font-size:11.5px;margin-top:12px;min-height:14px;text-align:center;}';
  document.documentElement.appendChild(style);

  if (document.body) buildGate();
  else document.addEventListener("DOMContentLoaded", buildGate);
})();
