# TrainBot — site de prezentare

Landing page bilingv (RO/EN) pentru **TrainBot**, ecosistem EdTech AI/ML pentru copii 7-14 ani.
Public țintă: școli de robotică & profesori. CTA: cere un pilot gratuit.

🔗 Live: https://trainbot.moldluca.tech

## Stack
Static, vanilla HTML/CSS/JS — fără build, fără dependențe. Găzduit pe GitHub Pages.

- `index.html` — pagina (8 secțiuni, chei `data-i18n`)
- `styles.css` — sistem vizual brand (purple futuristic), mascot, mockup-uri, animații
- `script.js` — switcher RO/EN (localStorage), scroll reveal, stări mascot, formular Formspree
- `CNAME` — `trainbot.moldluca.tech`

## Brand
- Culori: purple `#7B6CF0` → purple-blue `#6B86F0` (gradient)
- Fonturi: Bricolage Grotesque (display) + Hanken Grotesk (body), Google Fonts
- Mascot: recreat din `MascotView.swift` (app iOS) în CSS, cu stări animate (idle/thinking/learning/happy)

## TODO de configurat
1. **Formspree:** înlocuiește `FORM_ID` din `index.html` (`action="https://formspree.io/f/FORM_ID"`) cu endpoint-ul real după creare cont. Până atunci formularul face fallback la `mailto:`.
2. **Screenshots reale:** mockup-urile dashboard/app sunt ilustrative (prod down). Înlocuiește cu capturi reale după re-deploy `app.trainbot.moldluca.tech`.
3. **og-image.png:** adaugă o imagine social preview în `images/`.

## Dezvoltare locală
```bash
python3 -m http.server 8080
# deschide http://localhost:8080
```
