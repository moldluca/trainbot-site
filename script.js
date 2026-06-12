/* ===================================================================
   TrainBot site — i18n, reveal, mascot states, form
   =================================================================== */

/* ---------- i18n dictionary (RO default, EN secondary) ---------- */
const I18N = {
  ro: {
    "nav.how": "Cum funcționează", "nav.teachers": "Pentru profesori", "nav.pricing": "Prețuri", "nav.safety": "Siguranță", "nav.cta": "Cere un pilot",
    "hero.eyebrow": "EdTech · AI pentru clasa ta",
    "hero.title": "Inteligența artificială,<br />predată cu mâinile.",
    "hero.sub": "Copiii de 7–14 ani își antrenează propriile modele AI direct pe iPad, în clasă. Tu, profesorul, vezi tot și controlezi tot. Sigur și conform GDPR.",
    "hero.cta1": "Cere un pilot gratuit", "hero.cta2": "Vezi cum funcționează →",
    "hero.trust1": "Zero date personale de la copii", "hero.trust2": "Pe device, în clasă", "hero.trust3": "Sub controlul profesorului",
    "hero.mascot": "Salut! Sunt TB. Hai să antrenăm un model.",
    "problem.tag": "Provocarea",
    "problem.title": "AI-ul e peste tot. Dar cum îl predai unui copil de 9 ani?",
    "problem.lead": "Manualele explică teorie. Slide-urile arată definiții. Dar inteligența artificială se înțelege făcând-o — antrenând, greșind, corectând. Fără un instrument potrivit, profesorul rămâne cu metafore, iar copilul cu întrebări.",
    "problem.c1t": "Prea abstract", "problem.c1p": "„Rețea neuronală” nu înseamnă nimic pentru un copil care n-a văzut niciodată un model învățând.",
    "problem.c2t": "Fără instrumente sigure", "problem.c2p": "Uneltele AI pentru adulți cer cont, date personale și acces nelimitat la internet. Nepotrivit pentru clasă.",
    "problem.c3t": "Profesorul nu vede progresul", "problem.c3p": "Fără tablou de bord, nu știi cine a înțeles, cine s-a blocat și ce model a construit fiecare elev.",
    "how.tag": "Cum funcționează", "how.title": "Trei pași. Un model antrenat de copil.",
    "how.s1t": "Copilul antrenează", "how.s1p": "Pe iPad, elevul colectează exemple (poze sau text) și antrenează un model real, on-device, cu CoreML. Vede cum modelul „învață” în timp real.",
    "how.s2t": "Copilul testează", "how.s2p": "Apoi îl pune la încercare cu exemple noi. „A ghicit corect?” Butonul de feedback îl învață că un model bun cere date bune.",
    "how.s3t": "Profesorul vede tot", "how.s3p": "În tabloul de bord, vezi clasele, temele și progresul fiecărui elev — ce model a construit, cât de bine performează, unde s-a blocat.",
    "teachers.tag": "Pentru profesori", "teachers.title": "Tabloul de bord care îți dă controlul.",
    "teachers.lead": "Creezi clase și conturi de elev în câteva secunde — fără emailuri, fără date personale de la copii. Apoi urmărești totul dintr-un singur loc.",
    "teachers.f1": "<strong>Clase &amp; conturi elevi</strong> — username și parolă create de tine, stil Tinkercad.",
    "teachers.f2": "<strong>Teme</strong> — dai sarcini de antrenare și vezi cine a predat.",
    "teachers.f3": "<strong>Monitorizare în timp real</strong> — modelele și progresul fiecărui elev.",
    "teachers.f4": "<strong>Modul AI conversațional</strong> — sesiuni sigure, moderate, vizibile pentru tine.",
    "teachers.cta": "Vreau acces de profesor", "teachers.url": "app.trainbot.moldluca.tech",
    "teachers.m1": "Clase", "teachers.m2": "Elevi", "teachers.m3": "Modele", "teachers.note": "Mockup ilustrativ",
    "kids.tag": "Pentru copii", "kids.title": "O aplicație în care AI-ul prinde viață.",
    "kids.lead": "Pe iPhone sau iPad, copilul antrenează modele direct pe device — fără ca pozele lui să plece pe internet. Iar când vrea să „discute” cu un AI, totul e filtrat și sigur.",
    "kids.f1": "<strong>Antrenare on-device</strong> — CoreML, pozele rămân pe iPad.",
    "kids.f2": "<strong>Mascotul TB</strong> — un ghid prietenos prin fiecare pas.",
    "kids.f3": "<strong>Modul conversațional sigur</strong> — moderare AI pe ce intră și ce iese.",
    "kids.note": "App iOS · ilustrativ", "kids.appstate": "Modelul învață…", "kids.appbtn": "Antrenează",
    "safety.tag": "Siguranță & conformitate", "safety.title": "Construit pentru clasă. Sigur prin design.",
    "safety.lead": "Știm că o școală nu poate face compromisuri pe siguranța datelor copiilor. De aceea TrainBot e gândit GDPR-first.",
    "safety.c1t": "Zero date personale de la copii", "safety.c1p": "Conturile elevilor sunt username + parolă create de profesor. Fără email, fără nume real obligatoriu.",
    "safety.c2t": "Moderare AI dublă", "safety.c2p": "Filtrare pe cuvinte-cheie plus moderare AI, pe ce intră ȘI pe ce iese. La dubiu, mesajul e blocat.",
    "safety.c3t": "GDPR-K & DPA per școală", "safety.c3p": "Școala rămâne operatorul de date, în context educațional. Documentație de conformitate inclusă.",
    "safety.c4t": "Pe device, în control", "safety.c4p": "Antrenarea modelelor se întâmplă pe iPad. Datele de antrenare nu pleacă de pe dispozitiv.",
    "pricing.tag": "Prețuri", "pricing.title": "Primul an e pe noi.",
    "pricing.lead": "Începe cu un an pilot gratuit pentru o clasă. Apoi alegi planul potrivit școlii tale — prețuri fixe, fără surprize.",
    "pricing.badge": "Recomandat",
    "pricing.p1name": "Pilot", "pricing.p1price": "Gratuit", "pricing.p1per": "primul an", "pricing.p1desc": "Pentru o clasă, ca să testezi totul fără risc.",
    "pricing.p1f1": "1 clasă, până la 30 de elevi", "pricing.p1f2": "Toate funcțiile incluse", "pricing.p1f3": "Onboarding și suport la start", "pricing.p1f4": "Fără card, fără obligații", "pricing.p1cta": "Începe pilotul",
    "pricing.p2name": "Clasă", "pricing.p2price": "590 lei", "pricing.p2per": "/ clasă / an", "pricing.p2desc": "Pentru profesorul care vrea AI în clasa lui.",
    "pricing.p2f1": "1 clasă, până la 35 de elevi", "pricing.p2f2": "Dashboard complet + teme", "pricing.p2f3": "Modul AI conversațional", "pricing.p2f4": "Suport pe email", "pricing.p2cta": "Alege Clasă",
    "pricing.p3name": "Școală", "pricing.p3price": "2.490 lei", "pricing.p3per": "/ an", "pricing.p3desc": "Pentru o școală întreagă, cu clase nelimitate.",
    "pricing.p3f1": "Clase și profesori nelimitați", "pricing.p3f2": "Training pentru profesori", "pricing.p3f3": "DPA și suport prioritar", "pricing.p3f4": "Panou de administrare", "pricing.p3cta": "Contactează-ne",
    "pricing.foot": "Prețuri orientative, fără TVA. Reduceri pentru ONG-uri și școli din mediul rural.",
    "pilot.tag": "Pilot gratuit", "pilot.title": "Adu TrainBot în clasa ta.",
    "pilot.lead": "Lasă-ne datele tale și revenim cu un plan de pilot pentru școala ta. Fără costuri, fără obligații.",
    "pilot.name": "Nume", "pilot.school": "Școală / organizație", "pilot.email": "Email", "pilot.msg": "Mesaj (opțional)", "pilot.submit": "Trimite cererea",
    "footer.tag": "AI hands-on pentru școli. Un proiect din ecosistemul moldluca.", "footer.status": "Platformă în dezvoltare · 2026",
    "_form.sending": "Se trimite…", "_form.ok": "Mulțumim! Revenim curând. 🎉", "_form.err": "Ceva n-a mers. Scrie-ne direct pe email.",
  },
  en: {
    "nav.how": "How it works", "nav.teachers": "For teachers", "nav.pricing": "Pricing", "nav.safety": "Safety", "nav.cta": "Request a pilot",
    "hero.eyebrow": "EdTech · AI for your classroom",
    "hero.title": "Artificial intelligence,<br />taught hands-on.",
    "hero.sub": "Kids aged 7–14 train their own AI models right on an iPad, in class. You, the teacher, see everything and stay in control. Safe and GDPR-compliant.",
    "hero.cta1": "Request a free pilot", "hero.cta2": "See how it works →",
    "hero.trust1": "Zero personal data from kids", "hero.trust2": "On-device, in class", "hero.trust3": "Teacher stays in control",
    "hero.mascot": "Hi! I'm TB. Let's train a model.",
    "problem.tag": "The challenge",
    "problem.title": "AI is everywhere. But how do you teach it to a 9-year-old?",
    "problem.lead": "Textbooks explain theory. Slides show definitions. But artificial intelligence is understood by doing it — training, failing, correcting. Without the right tool, the teacher is left with metaphors and the child with questions.",
    "problem.c1t": "Too abstract", "problem.c1p": "\"Neural network\" means nothing to a child who has never watched a model learn.",
    "problem.c2t": "No safe tools", "problem.c2p": "AI tools built for adults require accounts, personal data and open internet access. Wrong fit for a classroom.",
    "problem.c3t": "Teachers can't see progress", "problem.c3p": "Without a dashboard, you don't know who understood, who got stuck, and what model each student built.",
    "how.tag": "How it works", "how.title": "Three steps. A model trained by the child.",
    "how.s1t": "The child trains", "how.s1p": "On the iPad, the student collects examples (photos or text) and trains a real, on-device model with CoreML. They watch the model \"learn\" in real time.",
    "how.s2t": "The child tests", "how.s2p": "Then they put it to the test with new examples. \"Did it guess right?\" The feedback button teaches that a good model needs good data.",
    "how.s3t": "The teacher sees all", "how.s3p": "In the dashboard you see classes, assignments and each student's progress — what model they built, how well it performs, where they got stuck.",
    "teachers.tag": "For teachers", "teachers.title": "The dashboard that puts you in control.",
    "teachers.lead": "Create classes and student accounts in seconds — no emails, no personal data from kids. Then follow everything from one place.",
    "teachers.f1": "<strong>Classes &amp; student accounts</strong> — username and password you create, Tinkercad-style.",
    "teachers.f2": "<strong>Assignments</strong> — set training tasks and see who submitted.",
    "teachers.f3": "<strong>Real-time monitoring</strong> — every student's models and progress.",
    "teachers.f4": "<strong>Conversational AI module</strong> — safe, moderated sessions, visible to you.",
    "teachers.cta": "I want teacher access", "teachers.url": "app.trainbot.moldluca.tech",
    "teachers.m1": "Classes", "teachers.m2": "Students", "teachers.m3": "Models", "teachers.note": "Illustrative mockup",
    "kids.tag": "For kids", "kids.title": "An app where AI comes to life.",
    "kids.lead": "On iPhone or iPad, the child trains models directly on the device — their photos never leave it. And when they want to \"chat\" with an AI, everything is filtered and safe.",
    "kids.f1": "<strong>On-device training</strong> — CoreML, photos stay on the iPad.",
    "kids.f2": "<strong>The TB mascot</strong> — a friendly guide through every step.",
    "kids.f3": "<strong>Safe conversational mode</strong> — AI moderation on input and output.",
    "kids.note": "iOS app · illustrative", "kids.appstate": "The model is learning…", "kids.appbtn": "Train",
    "safety.tag": "Safety & compliance", "safety.title": "Built for the classroom. Safe by design.",
    "safety.lead": "We know a school can't compromise on children's data safety. That's why TrainBot is GDPR-first.",
    "safety.c1t": "Zero personal data from kids", "safety.c1p": "Student accounts are username + password created by the teacher. No email, no required real name.",
    "safety.c2t": "Double AI moderation", "safety.c2p": "Keyword filtering plus AI moderation, on both input AND output. When in doubt, the message is blocked.",
    "safety.c3t": "GDPR-K & per-school DPA", "safety.c3p": "The school remains the data controller, in an educational context. Compliance documentation included.",
    "safety.c4t": "On-device, in control", "safety.c4p": "Model training happens on the iPad. Training data never leaves the device.",
    "pricing.tag": "Pricing", "pricing.title": "The first year is on us.",
    "pricing.lead": "Start with a free one-year pilot for a class. Then pick the plan that fits your school — fixed prices, no surprises.",
    "pricing.badge": "Recommended",
    "pricing.p1name": "Pilot", "pricing.p1price": "Free", "pricing.p1per": "first year", "pricing.p1desc": "For one class, to test everything risk-free.",
    "pricing.p1f1": "1 class, up to 30 students", "pricing.p1f2": "All features included", "pricing.p1f3": "Onboarding and launch support", "pricing.p1f4": "No card, no obligation", "pricing.p1cta": "Start the pilot",
    "pricing.p2name": "Class", "pricing.p2price": "590 RON", "pricing.p2per": "/ class / year", "pricing.p2desc": "For the teacher who wants AI in their classroom.",
    "pricing.p2f1": "1 class, up to 35 students", "pricing.p2f2": "Full dashboard + assignments", "pricing.p2f3": "Conversational AI module", "pricing.p2f4": "Email support", "pricing.p2cta": "Choose Class",
    "pricing.p3name": "School", "pricing.p3price": "2,490 RON", "pricing.p3per": "/ year", "pricing.p3desc": "For a whole school, with unlimited classes.",
    "pricing.p3f1": "Unlimited classes and teachers", "pricing.p3f2": "Teacher training", "pricing.p3f3": "DPA and priority support", "pricing.p3f4": "Admin panel", "pricing.p3cta": "Contact us",
    "pricing.foot": "Indicative prices, VAT excluded. Discounts for NGOs and rural schools.",
    "pilot.tag": "Free pilot", "pilot.title": "Bring TrainBot to your classroom.",
    "pilot.lead": "Leave us your details and we'll come back with a pilot plan for your school. No cost, no obligation.",
    "pilot.name": "Name", "pilot.school": "School / organization", "pilot.email": "Email", "pilot.msg": "Message (optional)", "pilot.submit": "Send request",
    "footer.tag": "Hands-on AI for schools. A project from the moldluca ecosystem.", "footer.status": "Platform in development · 2026",
    "_form.sending": "Sending…", "_form.ok": "Thanks! We'll be in touch soon. 🎉", "_form.err": "Something went wrong. Email us directly.",
  },
};

let currentLang = localStorage.getItem("tb_lang") || "ro";

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", String(on));
  });
  localStorage.setItem("tb_lang", lang);
}

document.querySelectorAll(".lang-switch button").forEach((b) =>
  b.addEventListener("click", () => applyLang(b.dataset.lang))
);

/* ---------- nav scrolled shadow ---------- */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- scroll reveal ---------- */
const revealEls = [
  ".problem-card", ".step", ".split-copy", ".split-visual",
  ".safety-card", ".price-card", ".pilot-card", ".section-head", ".problem .section-lead",
];
document.querySelectorAll(revealEls.join(",")).forEach((el, i) => {
  el.classList.add("reveal");
  if (el.classList.contains("problem-card") || el.classList.contains("step") || el.classList.contains("safety-card") || el.classList.contains("price-card")) {
    el.classList.add(["d1", "d2", "d3"][i % 3]);
  }
});
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- hero mascot: cycle states gently + react on hover ---------- */
const heroMascot = document.getElementById("heroMascot");
if (heroMascot) {
  const cycle = ["idle", "learning", "happy", "idle", "thinking"];
  let ci = 0;
  let timer = setInterval(() => { ci = (ci + 1) % cycle.length; heroMascot.dataset.state = cycle[ci]; }, 3200);
  heroMascot.addEventListener("mouseenter", () => { heroMascot.dataset.state = "happy"; });
  heroMascot.parentElement.addEventListener("mouseleave", () => { heroMascot.dataset.state = cycle[ci]; });
}

/* ---------- how section: mascot + active step auto-cycle while in view ---------- */
const steps = [...document.querySelectorAll(".how .step")];
const howMascot = document.getElementById("howMascot");
const howSection = document.getElementById("how");
if (steps.length && howSection) {
  let idx = 0, timer = null;
  const setActive = (i) => {
    steps.forEach((s, k) => s.classList.toggle("is-active", k === i));
    if (howMascot) howMascot.dataset.state = steps[i].dataset.mascot || "idle";
  };
  const start = () => { if (timer) return; setActive(idx); timer = setInterval(() => { idx = (idx + 1) % steps.length; setActive(idx); }, 2400); };
  const stop = () => { clearInterval(timer); timer = null; };
  const howIo = new IntersectionObserver(
    (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
    { threshold: 0.3 }
  );
  howIo.observe(howSection);
  // hover pauses auto-cycle and focuses that step
  steps.forEach((s, i) => {
    s.addEventListener("mouseenter", () => { stop(); idx = i; setActive(i); });
    s.addEventListener("mouseleave", () => start());
  });
}

/* ---------- pilot form (Formspree) ---------- */
const form = document.getElementById("pilotForm");
const statusEl = document.getElementById("formStatus");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dict = I18N[currentLang];
    const action = form.getAttribute("action");

    // Dacă endpoint-ul Formspree nu e configurat încă, fallback la mailto.
    if (!action || action.includes("FORM_ID")) {
      const fd = new FormData(form);
      const body = encodeURIComponent(`Nume: ${fd.get("name")}\nȘcoală: ${fd.get("school")}\nEmail: ${fd.get("email")}\n\n${fd.get("message") || ""}`);
      window.location.href = `mailto:moldemil@gmail.com?subject=${encodeURIComponent("Cerere pilot TrainBot")}&body=${body}`;
      return;
    }

    statusEl.className = "form-status";
    statusEl.textContent = dict["_form.sending"];
    try {
      const res = await fetch(action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (res.ok) { form.reset(); statusEl.className = "form-status ok"; statusEl.textContent = dict["_form.ok"]; }
      else throw new Error("bad status");
    } catch {
      statusEl.className = "form-status err"; statusEl.textContent = dict["_form.err"];
    }
  });
}

/* ---------- init ---------- */
applyLang(currentLang);
