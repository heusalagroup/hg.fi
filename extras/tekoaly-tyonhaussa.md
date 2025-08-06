---
title-meta: "ChaTGPT-tekoäly työnhaussa"
author-meta: "Jaakko Heusala"
date-meta: "5.8.2025"
toc: false
---

\thispagestyle{empty}
\clearpage
\pagenumbering{arabic}

\clearpage

```{=latex}
\newgeometry{left=1cm, right=1cm, top=1cm, bottom=1cm}
\vspace*{\fill}
\noindent
\makebox[\textwidth][s]{%
  \textcolor{black}{Digitaalinen Early Access -versio, 5.8.2025.}%
  \hfill%
  \textcolor{white}{\href{https://thejhh.me}{Jaakko Heusala}, \href{https://hg.fi}{Heusala Group Oy}.}%
}
\newpage
\restoregeometry
\newgeometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
```

\clearpage
\tableofcontents
\clearpage

## 1  Johdanto

### 1.1 Mitä generatiivinen tekoäly on ja miksi se mullistaa työnhaun

Generatiivinen tekoäly (GenAI) on koneoppimisen osa-alue, jossa mallit oppivat valtavista tekstiaineistoista luodakseen uutta, aiempaan aineistoon pohjautuvaa sisältöä – tekstiä, kuvia, koodia ja jopa strategiaehdotuksia. ChatGPT:n kaltaiset LLM-mallit (large language model) tuottavat ihmiselle luonnollista tekstiä sekunneissa, ymmärtäen samalla kysyjän kontekstia ja tavoitteita.

Työnhaussa GenAI siirtää painopisteen rutiinitöistä (CV:n muotoilu, hakuilmoitusten seulonta, hakemusten personointi) takaisin strategiseen ajatteluun. Sen sijaan, että istut tuntikausia hiomassa jokaista hakemusta käsin, voit syöttää olennaiset faktat mallille ja keskittyä hyvien urapäätösten tekemiseen – tai harjoitella haastattelutilanteita tekoälyavustajan kanssa kellonajasta riippumatta. Lopputuloksena syntyy enemmän kohdennettuja hakemuksia lyhyemmässä ajassa sekä parempi käsitys omasta markkina-arvosta.

### 1.2  Kenelle tämä kirja on ja miten sitä kannattaa käyttää

Generatiivinen tekoäly on siirtynyt nopeasti kokeiluista arjen rutiineihin.

* **75 % tietotyöntekijöistä** hyödyntää jo gen-AI-työkaluja työssään, selviää Microsoftin & LinkedInin *Work Trend Index 2024* -raportista. ([Microsoft][12])
* **40 % työnhakijoista** on käyttänyt tekoälyä – kuten ChatGPT:tä – CV:n, hakemusten tai haastatteluharjoitusten tukena, kertoo iHiren tuore 1 645 vastaajan *Inside the Multi-Generational Workforce 2025* -kysely. ([ihire.com][13])
* **71 % organisaatioista** käyttää generatiivista tekoälyä vähintään yhdessä liiketoimintafunktiossa (mm. HR), McKinseyn *State of AI 2025* -globaalikyselyn mukaan. ([McKinsey & Company][14])

\vspace{0.5em}
Tämä kirja on suunnattu:

* **Aktiivisille ja piileville työnhakijoille** – kaikilla aloilla, jotka haluavat rakentaa tekoäly-valmiin hakuprosessin.
* **Rekrytoijille ja uravalmentajille**, joille gen-AI on jo osa työkalupakkia.
* **Opiskelijoille** ja uranvaihtajille, jotka haluavat ymmärtää AI-avusteisen työnhaun pelisäännöt ennen ensimmäistä (tai seuraavaa) hakukierrosta.

\vspace{0.5em}
Näin saat eniten irti lukemisesta:

1. **Varmista tietoturva.** Jos ChatGPT ja tekoäly ei ole ennestään tuttuja, lue ensin tämä johdanto ja *2.3 Asetukset*-osio ja varmista, että ymmärrät ja olet määrittänyt tietoturva-asetukset oikein.
2. **Testaa luku kerrallaan.** Pidä ChatGPT-ikkuna auki ja kopioi prompt-mallit suoraan käyttöön sellaisenaan ja vastaa ChatGPT:n esittämiin kysymyksiin.
3. **Iteroi ja arvioi.** Tekoäly nopeuttaa, mutta ei korvaa harkintaa – tarkista faktat, viimeistele tyyli ja tuota lisäarvo ihmisnäkökulmalla.

[12]: https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part?utm_source=chatgpt.com "AI at Work Is Here. Now Comes the Hard Part - Microsoft"
[13]: https://www.ihire.com/resourcecenter/employer/pages/40-7-of-candidates-have-used-ai-in-their-job-search-but-adoption-varies-by-generation "40.7% of Candidates Have Used AI in Their Job Search – But Adoption Varies by Generation | iHire"
[14]: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai "The State of AI: Global survey | McKinsey"

\pagebreak
### 1.3  ChatGPT-versiot, online-työkalut ja mitä oikeasti tarvitset työnhakuun

| Versio                 | Viestikiintiö\*                           | Verkkohaku               | Huomio työnhaussa                                  |
|------------------------|-------------------------------------------|--------------------------|----------------------------------------------------|
| **Free**               | ≈ 10 viestiä / 3 h → sen jälkeen GPT-3.   | ✓ Päällä kaikilla        | Perushakujen teko onnistuu                         |
| **Plus**               | ≈ 80 viestiä / 3 h                        | ✓ Rajaton kiintiöllä\*   | Suositeltu, jos teet paljon hakuja päivittäin      |
| **Team**               | \~2× Plus-kiintiö / käyttäjä              | ✓ Rajaton\*\*            | Tiimeille, joissa jaetaan promptipohjia            |
| **Pro**                | Ei kiinteää kattoa (reilun käytön periaate) | ✓ Rajaton                | Ylivoimainen, jos tarvitset satoja hakukierroksia  |
| **Enterprise / Edu**   | 500 pyyntöä / 3 h (4.1)                   | ✓ Rajaton\*\*            | Suuret organisaatiot, regulaatio, vahva tietosuoja |

\* Viestikiintiöt koskevat GPT-4o-mallin kyselyjä, joihin myös Verkkohaut lasketaan. Kiintiön täyttyessä keskustelu jatkuu GPT-4.1 mini -mallilla.

\*\* Ylläpitäjä voi rajoittaa

Jo maksuttomalla ChatGPT-tasolla (GPT-4o-mallin verkkohaku) voit hoitaa hakuilmoitusten etsimisen ja tutustumisen; *Plus* tuo lähinnä lisää nopeutta ja viestikiintiötä.

*Valitse Plus- tai Free-taso, jos keskityt puhtaasti työnhakuun.* Päivitä Team/Enterprise-tasolle vain, jos useampi käyttäjä tarvitsee yhteistä, tietoturvallista työtilaa.

\vspace{0.5em}
**Mikä on verkkohaku-työkalu?**

Verkkohaku-työkalu on ChatGPT:n ominaisuus, joka mahdollistaa reaaliaikaisen verkkoselailun ja tietojen hakemisen verkosta. Se on erityisen hyödyllinen työnhaussa -- tarvitset Verkkohakua ilmoitusten etsimiseen verkosta, vaatimusten tarkistamiseen, ja hakemusten personointiin.

* **Työpaikkailmoitusten selaus**: Verkkohaku noutaa korkeintaan muutaman kymmenen URL-osoitetta, mikä täyttää “10 parasta paikkaa” -kaltaiset promptit kevyesti.
* **Hakemusten personointi**: Malli tarvitsee vain ilmoituksen linkin tai tekstin.
* **Nopeus**: Monimutkaisempi verkkohaku, kuten avointen työpaikkailmoitusten etsiminen, voi kestää 5-15 minuuttia.

\vspace{0.5em}
**Mikä on syvätutkimus?**

Syvätutkimus on hyödyllinen ChatGPT:n työkalu, jos haluat teettää pitkään vievän meta-analyysin, esim. vertailla kymmeniä toimialaraportteja.
Syvätutkimuksessa ChatGPT tutkii itsenäisesti verkkoa, lukee ja tiivistää useita artikkeleita, raportteja tai tutkimuksia.
Syvätutkimus vie 5–30 min/pyyntö ja kuluttaa erillisiä kredittejä. Lopuksi saat useamman sivun tiivistelmän, joka sisältää linkit lähteisiin ja mahdollisesti myös suosituksia, jonka voit tulostaa PDF- tai Docx-tiedostoksi.

[1]: https://www.indeed.com/career-advice/news/chatgpt-job-search?utm_source=chatgpt.com "How To Use ChatGPT in Your Job Search | Indeed.com"
[2]: https://www.forbes.com/sites/bernardmarr/2025/01/14/5-chatgpt-prompts-that-will-supercharge-your-job-search/?utm_source=chatgpt.com "5 ChatGPT Prompts That Will Supercharge Your Job Search - Forbes"
[3]: https://openai.com/chatgpt/pricing/?utm_source=chatgpt.com "Pricing - ChatGPT - OpenAI"
[4]: https://openai.com/index/introducing-chatgpt-search/?utm_source=chatgpt.com "Introducing ChatGPT search - OpenAI"
[5]: https://cincodias.elpais.com/smartlife/lifestyle/2025-04-28/deep-research-chatgpt-gratuita-truco.html?utm_source=chatgpt.com "Esta función Deep Research de la IA ChatGPT Pro pasa a ser gratuita, pero tiene truco"
[6]: https://help.openai.com/en/articles/6825453-chatgpt-release-notes?utm_source=chatgpt.com "ChatGPT — Release Notes - OpenAI Help Center"
[7]: https://openai.com/index/introducing-deep-research/?utm_source=chatgpt.com "Introducing deep research - OpenAI"
[8]: https://openai.com/index/introducing-chatgpt-agent/?utm_source=chatgpt.com "Introducing ChatGPT agent: bridging research and action - OpenAI"
[9]: https://www.businessinsider.com/ai-job-search-tool-apply-dream-role-2025-6?utm_source=chatgpt.com "I made an AI tool to run my job search, and it helped me get my dream role"
[10]: https://medium.com/prompt-engine/how-i-use-chatgpt-for-job-search-102945181978?utm_source=chatgpt.com "How I Use ChatGPT for Job Search. Prompts included | Jun, 2025"
[11]: https://www.tomsguide.com/ai/5-chatgpt-prompts-to-help-you-find-your-dream-job-and-how-to-use-them-effectively?utm_source=chatgpt.com "This ChatGPT hack gives new grads an edge in the job hunt - here's how"

\pagebreak
**Mikä on malli?**

Mallilla tarkoitetaan ChatGPT:n “aivoja”: laskennallista rakennetta, joka ymmärtää syötettyä tekstiä ja tuottaa vastauksia. Mallien koko ja teho vaihtelevat, ja niillä on suora vaikutus siihen, kuinka tarkasti ja joustavasti ChatGPT kykenee käsittelemään kysymyksiä ja luomaan sisältöä.

Ilmaisversiossa saatavilla on vain yksi malli, jonka käyttöliittymä kutsuu “ChatGPT”: tämä pohjautuu GPT-4o-teknologiaan. Kun ilmaisversion viestikiintiö täyttyy, malli vaihtuu väliaikaisesti kevyempään GPT-4.1 mini -versioon, kunnes raja nollautuu.

OpenAI julkaisee säännöllisesti uusia malliversioita ja parannuksia, joten käytettävissä olevat mallit ja niiden ominaisuudet päivittyvät ajan myötä.

Alla on vertailu keskeisistä ChatGPT-malleista ja niiden tuesta verkkohakuun (“Verkkohaku”-työkalu) sekä muihin tärkeisiin ominaisuuksiin.

| Malli      | Vuosi  | Free | Plus | Pro | Team | Enterprise | Verkkohaku | Edistynyt data-analyysi | Kuvat | Ääni |
|------------|--------|---|---|---|---|------|------|------|------|------|
| **GPT-4o** | 2024   | \* | ✓ | ✓ | ✓ |            | ✓          | ✓                        | ✓     | ✓    |
| **GPT-4.5** | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     |      |
| **o3-mini** | 2025   | ✓ | ✓ | ✓ | ✓ |            | ✓          | ✓                        | ✓     | ✓    |
| **o3**     | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **o3-pro** | 2025   |   |   | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **o4-mini** | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |

\* Ilmaisella tilillä on rajoitettu pääsy *GPT-4o*:hon, ja kun kiintiö loppuu palaudutaan *GPT-4.1 miniin*. Plussaan päivittäminen nostaa *GPT-4o*:n kiintiörajoja ja avaa mallit, joissa on laajempi päättely- ja työkalutuki.

<!--
https://community.openai.com/t/not-able-to-browse-the-web-anymore-what-is-going-on/616933?utm_source=chatgpt.com "Not able to browse the web anymore? What is going on? - ChatGPT"
https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq?utm_source=chatgpt.com "ChatGPT Free Tier FAQ"
https://en.wikipedia.org/wiki/GPT-4o?utm_source=chatgpt.com "GPT-4o"
https://www.wired.com/story/openai-gpt-45?utm_source=chatgpt.com "OpenAI Launches GPT-4.5 for ChatGPT-It's Huge and Compute-Intensive"
https://www.reuters.com/technology/openai-launches-new-ai-tool-facilitate-research-tasks-2025-02-03/?utm_source=chatgpt.com "OpenAI launches new AI tool to facilitate research tasks"
https://en.wikipedia.org/wiki/ChatGPT_Deep_Research?utm_source=chatgpt.com "ChatGPT Deep Research"
https://en.wikipedia.org/wiki/OpenAI_o3?utm_source=chatgpt.com "OpenAI o3"
-->

\pagebreak
**Miten suurta tietoa malli kykenee käsittelemään?**

| Malli     | Syöte<br>(tokenia) | Ulostulo<br>(tokenia) | Huomionarvoiset ominaisuudet                                                                                                                              |
|-----------|-------|-------|-----------------------------------|
| GPT-4o    | 128 000 |                    | Päivitetty tietopohja huhtikuu 2023; paranneltu ohjeiden noudattaminen; integroidut työkalut automaattiseen käyttöön; kustannustehokkaampi hinnoittelu    |
| o3        | 200 000 | 100 000            | Deliberatiivinen reasoning (private chain-of-thought); visuaalinen hahmontunnistus ja kuvien analyysi; täysi työkalutuki (web, Python, func. calling)     |
| o4-mini   | 200 000 | 100 000            | Nopea ja kustannustehokas päättely; erinomainen koodaus- ja visuaalianalyysitehtävissä; täysi ketjupäättely- ja työkalutuki (web, Python, image)          |
| o4-mini-high | 200 000 | 100 000            | “High-reasoning”-variantti o4-ministä: lisää laskentatehoa tarkkuuden kustannuksella                                                                      |
| GPT-4.5   | 128 000 |                    | Uusi väliversio GPT-4-sarjassa; parempi käskyjen noudattaminen ja suorituskyky; saatavilla ChatGPT Pro- ja Plus-käyttäjille                               |
| GPT-5     | ?     | ?                  | Tulossa 2025 Q3                                                                                                                                           |

Yksi token vastaa englanninkielisessä tekstissä keskimäärin noin neljää merkkiä ja noin ¾ sanaa. Tällöin 128 000 tokenia on noin 96 000 sanaa, mikä vastaa single-spaced-muodossa noin 192 A4-sivua (noin 500 sanaa per sivu).

Kun käytät ChatGPT:tä, taustalla malli käsittelee sekä uuden syötteen että mallin tuottaman vastauksen tokenit yhteismääränä. Esimerkiksi 10 000 tokenin syöte ja 5 000 tokenin vastaus kuluttavat yhteensä 15 000 tokenia. Mallin käyttö huomioi myös aiemman viestihistorian ja muistiin tallennetut tiedot, joita tarvittaessa supistetaan token-rajojen puitteissa.

<!--
[1]: https://platform.openai.com/docs/models/gpt-3.5-turbo?utm_source=chatgpt.com "Model - OpenAI API"
[2]: https://openai.com/index/new-models-and-developer-products-announced-at-devday/?utm_source=chatgpt.com "New models and developer products announced at DevDay"
[3]: https://www.wired.com/story/5-updates-gpt-4-turbo-openai-chatgpt-sam-altman?utm_source=chatgpt.com "5 Key Updates in GPT-4 Turbo, OpenAI's Newest Model"
[4]: https://platform.openai.com/docs/models/gpt-4.5-preview?utm_source=chatgpt.com "Model - OpenAI API"
[5]: https://openai.com/index/introducing-gpt-4-5/?utm_source=chatgpt.com "Introducing GPT-4.5"
[6]: https://platform.openai.com/docs/models/o3-mini?utm_source=chatgpt.com "Model - OpenAI API"
[7]: https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/models?utm_source=chatgpt.com "Azure OpenAI in Azure AI Foundry Models"
[8]: https://www.theverge.com/news/649941/openai-o3-o4-mini-model-images-reasoning?utm_source=chatgpt.com "OpenAI's upgraded o3 model can use images when reasoning"
[9]: https://openrouter.ai/openai/o3-pro?utm_source=chatgpt.com "o3 Pro - API, Providers, Stats"
[10]: https://platform.openai.com/docs/models/o3-pro?utm_source=chatgpt.com "Model - OpenAI API"
[11]: https://www.labellerr.com/blog/openai-o3-pro/?utm_source=chatgpt.com "OpenAI O3 Pro: The Most Advanced AI Reasoning Model Yet"
[12]: https://openai.com/index/introducing-o3-and-o4-mini/?utm_source=chatgpt.com "Introducing OpenAI o3 and o4-mini"
-->

\pagebreak
## 2  ChatGPT:n käyttöönotto ja perusasetukset

### 2.1  Tilin luonti, maksulliset tasot ja rajat

1. **Rekisteröidy** osoitteessa *chatgpt.com* – saat heti Free-tason käyttöön ([OpenAI][21]).
2. **Free-tasolla** voit käyttää GPT-4o:ta noin 10–16 viestiä joka kolmas tunti, minkä jälkeen keskustelu jatkuu GPT-4.1 mini-mallilla; Verkkohaku-selailu pysyy käytössä koko ajan ([Reddit][22], [OpenAI Community][23]).
3. **Plus (≈ 23 € / kk EU-hinta)** nostaa rajan 80 GPT-4o-viestiin kolmen tunnin jaksolle ja avaa Advanced-työkalut; tämä on useimmille aktiivisille työnhakijoille paras hinta–hyöty-tasapaino ([OpenAI Community][24], [CometAPI][25]).
4. **Team (29 € / kk vuosilaskutuksella)** lisää yhteisen työtilan, ylläpitäjän-kontrollit ja noin kaksinkertaiset kiintiöt per käyttäjä; valitse vain, jos jaat promptit ja tulokset muiden kanssa ([OpenAI Help Center][26]).
5. **Pro (200 \$ ≈ 229 €)** poistaa viestikatot reilun käytön puitteissa ja tarjoaa 125 syvätutkimus-kreditin kuukausikiintiön – tarpeen lähinnä data-intensiivisille teho-hakijoille ([Substack][27], [Reddit][28]).
6. **Enterprise/Edu** tarjoaa 500 GPT-4.1-pyyntöä per 3 h, rajattoman verkkohaun sekä täyden SSO- ja tietoturvatuen; sopii isoille organisaatioille ([Facebook][29]).

**Työnhaun kannalta riittää pelkkä Verkkohaku**, joka on päällä kaikissa paketeissa — päivitä Plus-tasolle vain, jos osut Free-version viestirajaan toistuvasti. Syvätutkimus on ylimitoitettu yksittäisten työpaikkailmoitusten seulontaan.

[21]: https://openai.com/chatgpt/pricing/?utm_source=chatgpt.com "Pricing - ChatGPT - OpenAI"
[22]: https://www.reddit.com/r/ChatGPT/comments/1crdxwd/i_hit_the_message_limit_on_free_gpt4o_after_only/?utm_source=chatgpt.com "I hit the message limit on Free GPT-4o after only 10 ... - Reddit"
[23]: https://community.openai.com/t/the-new-gpt-4o-message-limit/1193486?utm_source=chatgpt.com "The New GPT-4o Message Limit - OpenAI Developer Community"
[24]: https://community.openai.com/t/whys-gpt-4o-insanely-limited-to-free-users-and-even-plus-users-it-literally-barely-gives-you-5-messages-in-5-6-hours-to-the-free-users/769852?utm_source=chatgpt.com "Why's GPT 4o insanely limited to free users and even plus users? It ..."
[25]: https://www.cometapi.com/2025-chatgpt-plus-pro-team-version-comparison/?utm_source=chatgpt.com "2025 ChatGPT Plus, Pro, Team Version Guide: Usage Limits, Prices ..."
[26]: https://help.openai.com/en/articles/11391654-chatgpt-team-release-notes?utm_source=chatgpt.com "ChatGPT Team - Release Notes - OpenAI Help Center"
[27]: https://substack.com/home/post/p-154758121?utm_campaign=post&utm_medium=web&utm_source=chatgpt.com "HELP! OpenAI's ChatGPT Team Plan Just Took All Of My Data As ..."
[28]: https://www.reddit.com/r/ChatGPT/comments/1hq85l1/misleading_200_chatgpt_pro_plan_by_openai_is_it/?utm_source=chatgpt.com "Misleading $200 ChatGPT Pro Plan by OpenAI (is it really unlimited!)"
[29]: https://m.facebook.com/jonathanjmast/photos/chatgpt-model-usage-limitsever-hit-your-chatgpt-message-limit-and-wondered-why-w/24633847286221440/?utm_source=chatgpt.com "25 full research queries per month. * ChatGPT Agent"

\pagebreak
### 2.2  Työkalupakki: sisäänrakennetut ominaisuudet ja puhekäyttö

| Ominaisuus                                                                                                                                                                                         | Missä se löytyy?                      | Milloin siitä on hyötyä?                                                    |
|----|----| ---- |
| **Companion-ikkuna (macOS)**<br/> Option + Space avaa kelluvan ChatGPT-ikkunan, joka pysyy muiden sovellusten päällä.                                                                              | ChatGPT-työpöytäsovellus (macOS)      | Kun haluat analysoida työpaikkailmoituksen ilman selaimen vaihtamista.      |
| **Advanced Voice Mode**<br/> Puhu ja kuuntele vastaukset reaaliajassa GPT-4o-mallilla. Free-tasolla tarjolla “päivittäinen esikatselu”, Plus/Team-tasoilla laajempi käyttö.                        | Selain-, työpöytä- ja mobiilisovellukset | CV-korjausten tai haastatteluvastausten harjoitteluun ääneen.               |
| **ChatGPT oletusassistenttina Androidissa**<br/> Beta-versio 1.2025.070 mahdollistaa ChatGPT:n valinnan “Digital assistant app” -asetuksessa; avaus pitkällä Home-painalluksella tai pyyhkäisyllä. | Android-sovellus (beta ≥ 1.2025.070)  | Hands-free-kysymykset liikkeellä, esim. “tiivistä tämä ilmoitus”.           |
| **Record Mode (Team)**<br/> Nauhoittaa maks. 120 min ääntä, transkriboi ja laatii toimintalistat; ylläpitäjä voi kytkeä pois Workspace Controlsista.                                               | ChatGPT Team (macOS-sovellus)         | Nopeuttaa follow-up-viestien ja muistiinpanojen laatimista rekrypalavereista. |

Työnhaun minimi-paketti on selain- tai mobiilisovellus. Erillisiä selaimen lisäosia ei tarvita – Verkkohaku-työkalu ja yllä olevat sisäänrakennetut työkalut riittävät useimpiin hakurutiineihin. GPT-4o on saatavilla myös Free-tasolla rajatuin viestirajoin, joten pääset vauhtiin ilman maksullista tilausta.

[31]: https://x.com/OpenAI/status/1820914089612439622?lang=en&utm_source=chatgpt.com "OpenAI on X"
[32]: https://help.openai.com/en/articles/8400625-voice-mode-faq?utm_source=chatgpt.com "Voice Mode FAQ - OpenAI Help Center"
[33]: https://help.openai.com/en/articles/6825453-chatgpt-release-notes?utm_source=chatgpt.com "ChatGPT — Release Notes - OpenAI Help Center"
[34]: https://www.tomsguide.com/ai/chatgpt/how-to-make-chatgpt-your-default-assistant-on-android-instead-of-gemini?utm_source=chatgpt.com "How to make ChatGPT your default assistant on Android instead of Gemini"
[35]: https://9to5google.com/2025/03/14/chatgpt-default-assistant-android/?utm_source=chatgpt.com "ChatGPT can now replace Gemini as your default assistant on Android"
[36]: https://tactiq.io/learn/how-to-use-chatgpt-record-mode-to-get-meeting-transcripts?utm_source=chatgpt.com "How to Use ChatGPT Record Mode to Get Meeting Transcripts"
[37]: https://tldv.io/blog/chatgpt-record-mode-for-meetings/?utm_source=chatgpt.com "Tried ChatGPT Record Mode for Meetings. Here's My Honest Review"
[38]: https://www.lifewire.com/chatgpt-can-now-record-meetings-11748412?utm_source=chatgpt.com "Yes, ChatGPT Can Now Record-But You \"Can\" Turn It Off"
[39]: https://openai.com/index/hello-gpt-4o/?utm_source=chatgpt.com "Hello GPT-4o - OpenAI"

\pagebreak
### 2.3  Asetukset: kieli, tiedon tallennus, tietosuoja ja jakaminen tiimin kanssa

Ensiksi klikkaa **profiilikuvaasi vasemmassa alakulmassa**, avaa **Asetukset** ja tee kolme asiaa:

1. Vaihda käyttöliittymä ja vastauskieli suomeksi (tai mihin tahansa haluat). Tämän ohjeen esimerkit ovat suomeksi.
2. Poista *Auta parantamaan mallia kaikille* –liukusäädin käytöstä.
3. Tarkista, tallennetaanko keskustelusi 30 päiväksi vai lyhyemmäksi (Enterprise).

Näin minimoit sensitiivisen tiedon leviämisen ja varmistat, että ChatGPT vastaa haluamallasi kielellä ja sävyllä.

Tarkemmat ohjeet seuraavissa kappaleissa.

\vspace{0.5em}
**Kielen vaihto:**

* Avaa **Profiili ▸ Asetukset ▸ Yleinen ▸ Kieli** ja valitse asiointikieli pudotusvalikosta.
* Profiilikuva–painike löytyy ChatGPT:n selain- ja työpöytä-versiossa aina **vasemmasta alakulmasta**.

\vspace{0.5em}
**Tiedonhallinta & mallikoulutus:**

* Selaimessa: **Asetukset ▸ Tiedonhallinta ▸ Auta parantamaan mallia kaikille → Off**. Tällöin viestisi eivät päädy mallien jatkokoulutukseen.
* Kun poistat viestiketjun tai käytät *Väliaikainen keskustelu*-tilaa, aineisto säilyy OpenAI-palvelimilla enintään **30 päivää** ennen lopullista poistoa
* **Zero-Data-Retention (ZDR)** on saatavilla vain erillisillä API-päätteillä — ChatGPT:n käyttöliittymässä tätä valintaa ei ole

\vspace{0.5em}
**Jaa-linkkien riskit:**

* **Jaa → Luo linkki** luo julkisen URL-osoitteen; heinäkuussa 2025 nämä linkit indeksoituivat Googleen, jolloin yksityisiä ­keskusteluja löytyi hakukoneista.
* OpenAI poisti samassa kuussa “Discoverable”-valinnan ja lupasi pyytää hakukoneita poistamaan jo indeksoidut sivut.
* Jos jaat linkin, olet itse vastuussa sisällön anonymisoinnista.

\vspace{0.5em}
**Retention & hallintaoikeudet:**

| Tilaus                  | Kuka säätää säilytysajan? | Oletus               | Vähimmäisaika |
|-------------------------|------------------------|----------------------| ------------- |
| Free / Plus / Pro       | Käyttäjä               | Poistettu chat poistuu 30 pv:ssa | 30 pv         |
| Team                    | Käyttäjä (ylläpitäjä ei voi lyhentää) | 30 pv                | 30 pv         |
| Enterprise / Edu        | Workspace-ylläpitäjä   | Ylläpitäjä voi valita 0 pv → n pv | 0 pv          |

\vspace{0.5em}
**Muistilista:**

* Kytke *Auta parantamaan mallia kaikille* pois päältä, jos käsittelet luottamuksellista tietoa kuten CV- tai NDA-materiaalia.
* Älä jaa arkaluonteista dataa Jaa-linkillä.
* Tarvitset alle 30 päivän säilytysajan? Valitse Enterprise-paketti.

[41]: https://help.openai.com/en/articles/8357869-how-to-change-your-language-setting-in-chatgpt?utm_source=chatgpt.com "How to change your language setting in ChatGPT"
[42]: https://x.com/OpenAI/status/1880323050798973295?lang=en&utm_source=chatgpt.com "OpenAI - X"
[43]: https://techcrunch.com/2025/01/17/chatgpts-newest-feature-lets-user-assign-it-traits-like-chatty-and-gen-z/?utm_source=chatgpt.com "ChatGPT's newest feature lets users assign it traits like 'chatty' and ..."
[44]: https://help.openai.com/en/articles/7730893-data-controls-faq?utm_source=chatgpt.com "Data Controls FAQ | OpenAI Help Center"
[45]: https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt?utm_source=chatgpt.com "Chat and File Retention Policies in ChatGPT - OpenAI Help Center"
[46]: https://www.reddit.com/r/ChatGPT/comments/1l1jgh8/deleting_your_chatgpt_chat_history_doesnt/?utm_source=chatgpt.com "Deleting your ChatGPT chat history doesn't actually delete ... - Reddit"
[47]: https://platform.openai.com/docs/guides/your-data?utm_source=chatgpt.com "Zero Data Retention (ZDR) - OpenAI Platform"
[48]: https://omni.se/a/B0pLn9?utm_source=chatgpt.com "Open AI stoppar funktion som gjorde chattar sökbara"
[49]: https://searchengineland.com/google-indexing-shared-chatgpt-conversations-459839?utm_source=chatgpt.com "Your ChatGPT conversations may be visible in Google Search"
[50]: https://blog.stackaware.com/p/chatgpt-team-data-retention-security-compliance?utm_source=chatgpt.com "Use ChatGPT Team without having your data retained forever"
[51]: https://openai.com/enterprise-privacy/?utm_source=chatgpt.com "Enterprise privacy at OpenAI"
[52]: https://help.openai.com/en/articles/8266418-does-a-member-lose-access-to-chat-history-files-and-canvas-if-removed-from-a-workspace?utm_source=chatgpt.com "Does a member lose access to chat history, files and canvas if ..."

\pagebreak
## 3  Työnhakijan lähtötilanteen kartoitus

### 3.1  Osaamis- ja kokemusdata ChatGPT:n ymmärryksenä

Nopein tapa syöttää taustatietosi tekoälylle on antaa **julkiset URL-osoitteet** (julkinen LinkedIn, kotisivu, GitHub-url …) ja/tai **ladata liitetiedosto** (esim. CV). ChatGPT voi lukea molemmat.

**Muista kytkeä 🔍 Verkkohaku-työkalu päälle.** Verkkoselailu toimii myös **Väliaikainen keskustelu**-tilassa – saat “incognito-keskustelun”, jota ei tallenneta historiaan, mutta voit silti hakea verkosta.

\vspace{0.5em}
**Vaihe 1 – Varmista, että Verkkohaku-työkalu on päällä**

1. Avaa uusi keskustelu (tavallinen tai väliaikainen).
2. Tarkista, että 🔍 verkkohaku-kuvake on **päällä**
   *Jos kuvake puuttuu, varmista GPT-4o-malli tai sopiva tilitaso.*

\vspace{0.5em}
**Vaihe 2 – Raakapoiminta (ei tulkintaa)**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

````text
Toimit ansioluetteloni analyytikkona.  

TEHTÄVÄ A – RAAKA POIMINTA (älä muokkaa!):  

1. Käytä aina Verkkohaku-työkalua avataksesi keskustelussa mainitut profiilin 
   URL-osoitteet (esim. LinkedIn, portfolio). 
   - Jos URL-osoitteita ei ole, kysy ensin: “Voisitko antaa minulle profiilin 
     URL-osoitteet (esim. LinkedIn, portfolio) tai liittää CV-tiedoston?”  

2. Jos keskustelussa on CV-liitetiedosto (esim. PDF), pura se samalla.  

3. Kopioi täsmälleen näkyvät tekstit (rivinvaihdot säilyttäen):  
   - Profiilin otsikko (Headline)  
   - About / Summary  
   - Työkokemus (tehtävänimike, yritys, päivämäärät, kuvaus)  
   - Koulutus  
   - Skills-osio (jos löytyy)  
   - Kielet

4. ÄLÄ lisää, arvaa tai muotoile mitään uudelleen.  

5. Liitä kaikki yhteen ```raw```-koodilohkoon, jotta voin tarkistaa.
````

*Tarkista “`raw`”-lohkosta, ettei siellä ole keksittyä tekstiä. Korjaa tai lisää puuttuvat kohdat käsin.*

\pagebreak
**Vaihe 3 – Rakenteinen tiivistelmä Markdownina**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

````text
TEHTÄVÄ B – RAKENNETTU YHTEENVETO (Markdown):
• Käytä vain ```raw```-lohkossa (ja mahdollisissa käsin lisätyissä riveissä) 
  olevaa tietoa.
• Rakenna kolme osiota:

### 🛠️ Keskeiset taidot
- …

### 📚 Tukitaidot
- …

### 🏆 Saavutukset
- …

• Enintään ~80 merkkiä per luettelorivi.  
• Älä lisää uusia faktoja.
````

\vspace{0.5em}
**Miksi näin?**

1. **Verkkohaku + Väliaikainen keskustelu** = reaaliaikainen haku ilman pysyvää tallennetta.
2. **Kaksivaiheisuus** paljastaa hallusinaatiot, koska näet kerätyn tiedon ensin.
3. **Markdown** on helppo siirtää CV-pohjiin, sähköposteihin tai ChatGPT:n Mukauta ChatGPT:tä -kenttiin.
4. **Liitetiedosto (CV.pdf)** täydentää automaattisesti puuttuvat tiedot, jos profiileissa ei ole kaikkea.

\vspace{0.5em}
**Yksityisyysvinkki:** Älä syötä henkilötunnuksia tai luottamuksellista materiaalia. Julkiset profiilit + oma CV riittävät vahvoihin hakemuksiin.

\pagebreak
### 3.2 Uramotivaatiot ja elämäntilanne – promptit kirkastamiseen

Kopioi ja liitä alla oleva teksti **ChatGPT-keskusteluun** (voit pysyä samalla viestiketjulla). Prompti:

1. **Kysyy kuusi kysymystä yksi kerrallaan** – odottaa vastaustasi ennen seuraavaa.
2. Kun kaikki vastaukset on annettu, **tiivistää** ne (≤ 140 merkkiä / vastaus).
3. Rakentaa lopuksi Markdown-yhteenvedon, jossa on listat *Vaatimukset* ja *Plussaa*.

**Huomio** Tähän pyyntöön et tarvitse verkkohakua, joten voit jättää 🔍 Verkkohaku-työkalun pois päältä.

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit uravalmentajanani.

❶ Kysy minulta seuraavat kuusi kysymystä **yksi kerrallaan**.
  Odota vastaustani ennen seuraavaa kysymystä:

   1. Tärkein syy, miksi harkitsen työhakua
   2. Millainen työpäivä vie minut flow-tilaan
   3. Mitä haluan oppia seuraavien 12 kuukauden aikana
   4. Mistä en ole valmis tinkimään (palkka / sijainti / työaika / muu)
   5. Missä näen itseni kolmen vuoden päästä
   6. Mikä on toivomani kuukausipalkka (brutto €/kk)

❷ Kun olen vastannut kaikkiin kuuteen kysymykseen, 
  **älä esitä uusia kysymyksiä**. Tee sen sijaan näin:
   • Tiivistä jokainen vastaukseni enintään 140 merkkiin.  
   • Luo kaksi luettelo-osiota seuraavasti:

### 🛑 Vaatimukset
- …

### ✅ Plussaa
- …

   • Palauta koko ulostulo Markdown-muodossa.  
   • Älä keksi uutta tietoa – käytä vain antamiani vastauksia.
```

**Käyttövinkki:** Jos jatkat **samassa viestiketjussa**, ChatGPT muistaa motivaatiosi ilman lisätoimia. Tallenna yhteenveto *Mukauta ChatGPT:tä*-kenttään vain, jos haluat sen pysyvän käytössä myös muissa tai uusissa keskusteluissa.

\pagebreak
### 3.3 Tavoitteiden asettaminen: SMART + milestonet

Kopioi ja liitä tämä mille tahansa viestiketjun kohdalle.

* **Verkkohakua ei tarvita** → 🔍 Verkkohaku-työkalu voi olla pois päältä.
* ChatGPT saa käyttää **kaikkea aiemmin keskustelussa annettua tietoa** (osaamiset, motivaatio, palkkatoive jne.) ehdottaakseen luonnoksia vastauksillesi – voit hyväksyä, korjata tai kirjoittaa omasi.

```text
Toimit tavoitevalmentajanani.

❶ Kysy minulta seuraavat viisi kysymystä **yksi kerrallaan**.  
   • Jos sinulla on aiempaa kontekstia vastauksistani, 
     tarjoa kunkin kysymyksen perässä sulkeissa **esimerkkiluonnos**, 
     jota voin muokata.  
   • Odota, kunnes vastaan, ennen kuin siirryt seuraavaan kysymykseen.

   1. Mikä on konkreettinen päätavoitteesi työnhaussa? (Specific)  
   2. Millä mittarilla tiedät onnistuneesi? (Measurable)  
   3. Miten varmistat, että tavoite on realistisesti saavutettavissa? (Achievable)  
   4. Miksi juuri tämä tavoite on sinulle tärkeä urallasi? (Relevant)  
   5. Mihin päivämäärään mennessä tavoite pitää olla täytetty? (Time-bound)

❷ Kun olen vastannut kaikkiin viiteen kysymykseen, **älä pyydä lisätietoja**. 
  Sen sijaan:  
   • Yhdistä vastaukseni aiempaan keskustelutietoon (jos se täydentää tai tarkentaa 
     kohtia).  
   • Muodosta seuraava Markdown-lohko:

### 🎯 SMART-tavoite
- **Specific**: …
- **Measurable**: …
- **Achievable**: …
- **Relevant**: …
- **Time-bound**: …

Älä keksi uusia faktoja; käytä vain antamiani tai aiemmin keskustelussa esiin 
tulleita tietoja.  
```

**Käyttövinkki:** Kun saat SMART-lohkon, voit liittää sen muistiinpanoihin tai *Mukauta ChatGPT:tä*-kenttään, jos haluat ChatGPT:n huomioivan tavoitteesi automaattisesti myöhemmissä keskusteluissa.

\pagebreak
## 4  Tehokas työn etsiminen

### 4.1. Interaktiivinen työnhakuprompti

• Kysyy kaikki tarvittavat tiedot **yksi kerrallaan** (sisältäen esimerkkiluonnokset aiemmista vastauksista)

• Palauttaa tulokset löytyneistä työpaikoista

**Kopioi koko lohko ChatGPT-keskusteluun.** Verkkohaku-työkalun (🔍) ei tarvitse olla päällä vielä.

```text
Toimit kokeneena HR-rekrytoijana.

KYSYMYKSET (yksi kerrallaan):
• Jos keskustelussa on jo tietoa, tarjoa sulkeissa **esimerkkiluonnos** aiempien 
  vastausteni perusteella.  
• Jos tietoa ei ole, jätä sulkeet tyhjiksi tai kirjoita “(täydennä)”.  
• Odota vastaustani ennen seuraavaa kysymystä.

1. Mikä on nykyinen tittelisi ja tärkeimmät taitosi? (esimerkkiluonnos: …)  
2. Missä maantieteellisessä sijainnissa haluat työskennellä? (esimerkkiluonnos: …)  
3. Mikä on vähimmäispalkkatoiveesi (brutto €/kk)? (esimerkkiluonnos: …)  
4. Mitkä työehdot tai sisältötekijät ovat sinulle tärkeimpiä? (esimerkkiluonnos: …)  
5. Onko muita erityisiä rajoitteita tai toiveita? (esimerkkiluonnos: …)  
6. Mikä päivä tänään on? (esimerkkiluonnos: dd.mm.yyyy)

KUN kaikki viisi vastausta on saatu, suorita **TEHTÄVÄ**:  
1. Varmista, että 🔍 Verkkohaku-työkalu on päällä.  
2. Etsi **kymmenen** avoinna olevaa ilmoitusta, jotka täyttävät **kaikki** annetut 
   vaatimukset.  
3. Palauta tulos Markdown-taulukkona, sarakkeet:  
   • Rooli & Yritys.
   • Hakemuksen määräaika (jos tiedossa).
   • Jos palkka on ilmoitettu vuosipalkkana, jaa se 12:lla.
   • Palkka €/kk — jos raja täyttyy vain ylärajalla tai palkkaa ei ole ilmoitettu, 
     aloita rivi “*) ” ja kirjoita “neuvoteltavissa”.
   • Suora linkki ilmoitukseen.
4. Lisää taulukon alle lyhyt (max 120 merkkiä) arvio sopivuudestani kutakin 
   roolia varten.  
5. Älä sisällytä muuta tekstiä.
```

**Iterointi & tulosten hienosäätö**

Saatuasi ensimmäisen taulukon voit tarkentaa hakua ilman uuden datan syöttöä. Kirjoita vain uusi ohje, ja ChatGPT tekee haun samoilla pohjatiedoilla mutta päivitettyjen rajojen mukaan:

\vspace{0.5em}
* **Esimerkki 1 – sijainti**

  > *“Tee sama haku, mutta rajaa tulokset Suomessa sijaitseviin työnantajiin.”*

\vspace{0.5em}
* **Esimerkki 2 – roolin luonne**

  > *“Etsi uudelleen, mutta keskity vähemmän teknisiin ja enemmän ihmisläheisiin tehtäviin (esim. projektinhallinta, asiakasrajapinta).”*

\vspace{0.5em}
* **Esimerkki 3 – liian tiukat rajat / ei tuloksia**

  > *“Etsi uudelleen, mutta rajaa vähemmän tarkasti, jotta tuloksia tulisi enemmän.”*

Malli säilyttää tittelisi, palkkatoiveesi ja muut alkuperäiset vaatimukset, hakee uuden listan kymmenestä roolista ja palauttaa päivitetyn taulukon. Näin voit hioa sijainnin, vaativuustason, toimialan tai minkä tahansa muun kriteerin, kunnes tulokset ovat sinulle sopivia.

\pagebreak
### 4.2  Promptien modulointi – pilko iso tehtävä useaksi kierrokseksi

Kun haet työtä ChatGPT:n kanssa, yhdellä jättipromptilla on helppo saada sekava, liian pitkä vastaus. Modulointi tarkoittaa, että **jaat prosessin useaksi vaiheeksi**, jolloin malli pysyy paremmin kartalla ja sinä pystyt vaikuttamaan lopputulokseen kierros kerrallaan.

\vspace{0.5em}
**Näin pilkot tehtävän käytännössä:**

| Vaihe                    | Mitä kysyt?                                                                                                                     | Mitä saat?                           |
|--------------------------| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **A. Pura ilmoitus**     | “Lue tämä työpaikka-ilmoitus ja listaa vaatimukset vs. toiveet.”                                                                | Selkeä kahden sarakkeen taulukko.    |
| **B. Peilaa profiiliin** | “Vertaa listaa CV:ssäni näkyviin taitoihin. Mitkä 3 asiaa täsmäävät parhaiten? Entä suurin osaamisvajeni?”                      | Nopea soveltuvuus- ja puuteluettelo. |
| **C. Kirjoita hakemus**  | “Käytä vaiheiden A ja B tuloksia. Kirjoita 150 sanan saatekirje, jossa korostetaan täsmääviä taitoja ja selitetään osaamisvaje.” | Tiivis, kohdennettu saatekirje.      |
| **D. Tarkastusluuppi**   | “Ehdota parannuksia sävyyn ja pyri 10 % lyhyempään tekstiin.”                                                                   | Parannettu versio.                   |

**Muistisääntö:** Yksi kysymys = yksi selkeä ulostulo. Käytä tulosta seuraavan kysymyksen syötteenä.

\vspace{0.5em}
**Ketjutus: “tee A → odota → tee B”:**

ChatGPT ymmärtää ohjeen, jossa se *pysähtyy odottamaan*. Esimerkiksi:

```text
Tee ensin: tiivistä tämä 2 000 sanan artikkeli puoleen pituuteen.
Odota, kunnes sanon “jatka”.
Sen jälkeen: poimi artikkelista 5 tärkeintä hakusanaa ansioluettelooni.
```

Tätä voi käyttää, kun haluat lukea välituloksen ennen jatkoa.

\vspace{0.5em}
**“Critic & improve” -luuppi (itsepalautemalli):**

1. **Luonnos:** “Kirjoita 120 sanainen saatekirje.”
2. **Kriitikko:** “Arvioi teksti kolmen kriteerin kautta: selkeys, vaikuttavuus, avainsanat. Anna pisteet /5.”
3. **Parannus:** “Muokkaa tekstiä korottaaksesi joka pisteen vähintään neloseen.”

Toista, kunnes teksti täyttää kriteerisi – yleensä 2–3 kierrosta riittää.

\vspace{0.5em}
**Vältä nämä sudenkuopat:**

| Virhe                                    | Miten korjaat?                                         |
| ---------------------------------------- | ------------------------------------------------------ |
| Pyydät “tee kaikki” yhdellä kertaa       | Pilko A–D-vaiheiksi (taulukko yllä).                   |
| Unohdat antaa edellisen vaiheen tuloksen | Kopioi tai viittaa “kuten edellä vaiheessa A”.         |
| Luuppi ei pysähdy                        | Lisää selkeä komento “Odota vastaustani ennen jatkoa.” |

\pagebreak
## 5  CV- ja LinkedIn-profiilin optimointi

### 5.1 ATS-avainsanahaku ja ChatGPT-pohjainen analyysi

Automatisoidut rekrytointijärjestelmät (ATS) seulovat CV:si avainsanojen perusteella ennen kuin ihminen näkee sen. Alla 
oleva kaksivaiheinen työvaihe auttaa löytämään ilmoituksen tärkeät termit, vertaamaan niitä ansioluetteloosi ja hiomaan 
CV:n vastaamaan vaatimuksia.

\vspace{0.5em}
**Vaihe A – Poimi avainsanat työpaikka-ilmoituksesta.**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit ATS-analyytikkonani.

1. Tarkista tästä tai aiemmista viesteistä, onko
   • työpaikka-ilmoituksen teksti TAI
   • suora URL ilmoitukseen.

2. ELLEI ilmoitusta löydy, kysy YHDEN KERRAN:
   “Voitko antaa työpaikka-ilmoituksen URL-osoitteen tai kopioida ilmoituksen 
   tekstin tähän?”
   – Odota vastaustani ennen jatkamista.

3. Kun ilmoitus on saatu, vastaa lyhyesti “Kiitos, analysoin ilmoituksen” ja
   • poimi avainsanat neljään luokkaan  
     – Kovat taidot (tekniikat, työkalut)  
     – Pehmeät taidot  
     – Sertifikaatit / koulutus  
     – Yrityksen arvot & kulttuurisignaalit  
   • palauta tulos Markdown-taulukkona (“Luokka” | “Avainsanat”).

Älä tee muuta ennen kuin ilmoitus on saatu ja taulukko tehty.
```

\vspace{0.5em}
**Esimerkkituloste:**

| Luokka         | Avainsanat                         |
| -------------- | ---------------------------------- |
| Kovat taidot   | Python, SQL, Docker                |
| Pehmeät taidot | Tiimityö, viestintä                |
| Sertifikaatit  | AWS Solutions Architect            |
| Arvot          | Asiakaskeskeisyys, kestävä kehitys |

\pagebreak
**Vaihe B – Vertaa CV:täsi löydettyihin avainsanoihin.**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Vertaa CV:täni edelliseen avainsanataulukkoon.

1. Tarkista tästä tai aiemmista viesteistä, onko
   • CV-teksti TAI
   • liitetty CV-tiedosto (esim. CV.pdf).

2. ELLEI CV:tä löydy, kysy YHDEN KERRAN:
   “Voitko liittää CV.pdf-tiedoston tai kopioida CV-tekstin tähän?”
   – Odota vastaustani ennen jatkamista.

3. Kun CV on saatu, listaa:
   • puuttuvat kovat ja pehmeät taidot  
   • ehdotus, mihin kohtaan CV:tä ne voisi lisätä luontevasti 
     (enintään 2 ehdotusta / sana).

Palauta tulos Markdown-luettelona ja älä lisää muuta tekstiä.
```

ChatGPT ilmoittaa esimerkiksi:

* **Puuttuu:** Docker → lisää “Docker-konttien orkestrointi” Työkokemus-osioon
* **Puuttuu:** AWS Solutions Architect → lisää Sertifikaatit-osioon

\vspace{0.5em}
**Nopeat parannuskierrokset:**

1. Lisää ehdotetut termit CV-luonnokseen.
2. Lähetä päivitetty CV tiedostona ja pyydä: *“Tee uusi vertailu alkuperäiseen – mitä vielä puuttuu?”*
3. Toista, kunnes puuttuvien avainsanojen lista on tyhjä tai päätät jättää osan pois.

Kun nämä vaiheet on tehty, CV:si puhuu samaa kieltä kuin ilmoitus, ja todennäköisyys ohittaa ATS-suodatin kasvaa merkittävästi.

\pagebreak
### 5.2 Profiilin headline, tiivistelmä ja saavutukset

LinkedInin yläosan 300 merkkiä (headline + about -osiot) ratkaisevat, klikkaako rekrytoija profiilisi auki. Alla on **kaksi interaktiivista promptia**, jotka pyytävät sinulta lisätietoa vain silloin, kun se ei jo käy ilmi keskustelusta.

\vspace{0.5em}
**A) Interaktiivinen headline-generaattori**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit LinkedIn-uravalmentajanani.

1. Tarkista, löytyykö tästä tai aiemmista viesteistäni
   • CV-teksti TAI
   • LinkedIn-raakatieto.

2. ELLEI aineistoa löydy, kysy YHDEN KERRAN:
   “Voitko liittää CV-tekstisi tai kopioida LinkedIn-profiilin sisällön tähän?”
   – Odota vastaustani.

3. Kun aineisto on saatu, kirjoita 3 ehdotusta 120 merkin headlineksi:
   • #1: Avainsanapainotteinen
   • #2: Arvolupaus-painotteinen
   • #3: Persoonallisempi, tarinallinen

Näytä ehdotukset numeroituna listana ilman selitystekstiä.
```

\vspace{0.5em}
**B) Interaktiivinen 300 merkin “About”-tiivistelmä (STAR-kehys).**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit uravalmentajanani.

1. Tarkista, onko CV-/LinkedIn-teksti jo saatavilla keskustelussa.
   • ELLEI ole, kysy YHDEN KERRAN:
     “Voitko liittää CV-tekstisi tai LinkedIn-profiilin tähän?”
     – Odota vastaustani.

2. Tarkista aineistosta, löytyykö numerotuloksia (esim. %-säästöjä, €-lukuja).
   • ELLEI löydy, kysy YHDEN KERRAN:
     “Voitko antaa yhden konkreettisen tulosluvun (esim. ‘nostin myyntiä 18 %’)?”

3. Kun tarvittavat tiedot ovat käytössä, kirjoita 300 merkin tiivistelmä STAR-mallilla:
   • Situation: 1 lause taustasta  
   • Task/Action: 1 lause roolistasi/toimistasi  
   • Result: 1 lause numerotuloksesta  

Palauta teksti yhtenä kappaleena ilman lisäselityksiä.
```

\vspace{0.5em}
**C) Saavutus-bulletien “ruuvit”.**

| Vinkki                       | Esimerkki                                                                |
| ---------------------------- | ------------------------------------------------------------------------ |
| **Verbi + numero + tulos**   | “Alensin pilvikuluja **22 %** automatisoidulla Terraform-pipeline’illa.” |
| **Mittakaava näkyviin**      | “Johdin **7** kehittäjän tiimiä • 1,2 M€ budjetti.”                      |
| **Teknologia tai menetelmä** | “Optimoin kyselyt **SQL + Looker**-mallinnuksella.”                      |

\vspace{0.5em}
**D) Päivityssykli ChatGPT:n kanssa.**

1. Vie raakateksti ChatGPT:lle → pyydä “Kirjoita 5 bulletia 260 merkkiin”.
2. Pyydä: “Anna kaksi versiota: avainsanapainotteinen & tarinallinen.”
3. Valitse paras ja päivitä LinkedIn; toista, kun saat uusia tuloksia.

Näillä interaktiivisilla prompteilla ChatGPT varmistaa, että se saa tarvitsemansa tiedon **vain silloin kun sitä puuttuu**, eikä rasita sinua ylimääräisillä kysymyksillä.

\pagebreak
### 5.3  Visuaaliset ja tekniset liitteet – portfolio-linkit, koodinäytteet ja projektiesittelyt

Rekrytoija käyttää profiiliasi keskimäärin alle **60 sekuntia** – ellei silmä osu johonkin konkreettiseen todisteeseen osaamisestasi. Portfolio-linkit, GitHub-profiili ja esimerkkiprojektit nostavat uskottavuuttasi erityisesti teknisissä ja luovissa rooleissa. Alla saat **interaktiivisen promptin,** joka kerää tarvittavat projektitiedot, laatii napakat kuvaukset ja ehdottaa, mihin ne kannattaa sijoittaa (CV, LinkedIn, hakemus-liite).

\vspace{0.5em}
**Interaktiivinen portfolio-prompti.**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit portfoliokuraattorinani.

### Kyselyvaihe (yksi kysymys kerrallaan)
Jos alla olevaa tietoa ei löydy keskustelusta, kysy YHDEN KERRAN 
ja odota vastaustani:
1. Anna max 5 linkkiä, jotka haluat nostaa (GitHub-repo, Behance-portfolio, 
   tuotantosivusto, PDF-case study).  
2. Kirjoita jokaisesta linkistä 1–2 lauseen kuvaus: mikä ongelma, mikä ratkaisu, 
   mikä tulos.
   • Jos kuvausta ei ole, kysy: “Voitko lyhyesti kuvata projektin ongelman, 
     ratkaisun ja tuloksen?”  
3. Onko projektissa numeerisia tuloksia (säästetty €, kasvatettu % tms.)?  
   • Jos ei, ohita tämä kysymys.

### Tuotosvaihe
Kun linkit ja kuvaukset on saatu:
1. Tee taulukko (Markdown), sarakkeet:  
   • Projekti | Rooli | Tekniikat/työkalut | Tulos (numero tai lyhyt teksti) | Linkki  
2. Kirjoita jokaisesta projektista 120 merkin “headline” LinkedInin 
   “Featured”-osiota varten.  
3. Ehdota, mihin kohtaan CV:täni projekti kannattaa lisätä (Portfolio-osio, 
   Työkokemus, Tech Stack jne.).  

Älä lisää muuta tekstiä kuin taulukko, headline-luettelo ja sijoitusehdotukset.
```

\vspace{0.5em}
**Näin käytät tuloksia:**

| Askel                                                                | Mitä teet?                                              | Lopputulos                             |
|----------------------------------------------------------------------|---------------------------------------------------------| -------------------------------------- |
| **1.** Aja prompti – kopioi/liitä linkit ja kuvaukset                | Saat valmiin taulukon ja 120 merkin “headline”-tekstit  | Selkeä lista projekteista              |
| **2.** Lisää taulukko tai sen osat LinkedInin **Featured-osioon**    | Käytännön todiste osaamisesta näkyy profiilin yläosassa | Parempi “social proof”                 |
| **3.** Upota “headline + linkki” -parit CV:si Portfolio-osioon       | CV:ssä linkit ovat klikattavia                          | Rekrytoija pääsee suoraan näyttöihin   |
| **4.** Liitä relevantit projektit tai case studyt hakemuksen loppuun | Erityisen hyödyllinen design- ja dev-rooleissa          | Erottuu pelkkää teksti-CV:tä paremmin  |

**Huomioi turvallisuus** Poista projekteista tai case study -tutkimuksesta kaikki asiakkaan luottamukselliset tiedot ennen jakamista. Väliaikainen keskustelu -tilassa liitetyt dokumentit poistuvat 30 vuorokauden kuluessa.

\vspace{0.5em}
**Pikadiagnoosi: toimiiko portfolio?**

| Tarkistus                                                                     | Kyllä / Ei |
|-------------------------------------------------------------------------------| ---------- |
| Jokaisessa projektissa on **linkki**, **teknologia** ja **tulosluku**?        | ☐          |
| LinkedInissä näkyy vähintään **kaksi** esimerkkityötä “Featured”-osiolla?     | ☐          |
| CV:n Portfolio-osiossa on max **5** projektia – ei 30?                        | ☐          |
| Suosikkiprojektisi kertoo **MITÄ** teit, **MIKSI** ja **MILLAISIN TULOKSIN**? | ☐          |

Täytä “Ei”-ruudut käyttämällä yllä olevaa promptia ja lisää puuttuvat kuvaukset tai linkit. Kun kaikki ruudut ovat **Kyllä**, portfolio tukee hakemustasi tehokkaasti.

\pagebreak
### 5.4  Monikielisyys ja kääntäminen ChatGPT:llä

Yhä useampi työnantaja edellyttää – tai ainakin arvostaa – ansioluettelon ja hakemuksen englanninkielistä versiota. ChatGPT helpottaa kieliparien ylläpitoa, kunhan ohjeistat sen oikein ja tarkistat kulttuuriset vivahteet.

**A) Interaktiivinen käännösprompti (CV / saatekirje)**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit käännös- ja lokalisointiasiantuntijanani.

### Kyselyvaihe (yksi kysymys kerrallaan)
1. Tarkista, löytyykö tästä tai aiemmista viesteistäni käännettävä teksti 
   (CV-osio, saatekirje tai LinkedIn-tiivistelmä).
   • ELLEI löydy, kysy YHDEN KERRAN:
     “Voitko liittää suomen- tai englanninkielisen tekstin, jonka haluat 
     käännettäväksi?”

2. Kun teksti on saatu, kysy YHDEN KERRAN:
   “Mille kielelle käännetään (suomi ↔ englanti)?”

3. Kysy YHDEN KERRAN (jos ei vielä selviä):
   “Toivottu sävy / rekisteri? (esim. muodollinen, rento, ‘tech-savvy’, 
   ‘asiantuntija’).”

### Käännösvaihe
Kun kaikki tiedot on saatu:
1. Käännä teksti pyydetylle kielelle.
2. Säilytä alkuperäinen muotoilu (otsikot, luettelopisteet).
3. Mukauta kulttuuriset kohdat:
   • Päivämäärä- ja valuuttamuoto (30 June 2025 ↔ 30.6.2025, € ↔ EUR).  
   • Tittelien selitys: “Tietoliikenneinsinööri” → “Telecommunications Engineer”.
4. Palauta käännös + yhteenvedon taulukko, jossa:
   • “Alkuperäinen termi” | “Käännös” | “Kommentti/syitä muokkaukseen” 
     (jos teit lokalisoinnin).

Älä lisää muuta tekstiä.
```

\vspace{0.5em}
**B) Tarkistuslista – näin varmistat laadun**

| Kohta              | Mitä tarkistan?                       | Miksi?                                          |
| ------------------ | ------------------------------------- | ----------------------------------------------- |
| **Tittelit**       | Vastine ymmärretään kansainvälisesti? | “Software Developer” ≠ “Coder”                  |
| **Mittayksiköt**   | Mm ↔ in, € ↔ EUR                      | Vältä tulkintavirheitä                          |
| **Päivämäärät**    | 2024-01 ↔ Jan 2024                    | ATS-botit tunnistavat molemmat                  |
| **Sävy**           | Sama “sinä-/minä-taso”                | Vältä byrokratiasuomea vs. liian rennot fraasit |
| **Lisäarvotermit** | “kestävä kehitys” → “sustainability”  | Hakuvat avainsanoja myös englanniksi            |

**Pika­vinkki** Jos käännös kuulostaa “konekäännökseltä”, pyydä:
*“Paranna luettavuutta natiiville tasolle, mutta säilytä faktat.”*

\vspace{0.5em}
**C) Ylläpidä kahta versiota ilman manuaalista copy-pastea**

1. **Master-dokumentti** Pidä alkuperäisversio (suomi) Google Docsissa.
2. **Käännös-keskustelu** Sama ketju, jossa yllä oleva käännösprompti.
3. **Päivitä** Kun lisäät uuden saavutuksen suomeksi, kopioi se keskusteluun ja pyydä “Käännä uusi kappale.”
4. **Synkronoi** Liitä englanninkielinen päivitys LinkedIn/CV-tiedostoon.

Näin vältät kahden erillisen dokumentin jatkuvan kopioinnin ja varmistat, että molemmat kielet pysyvät ajantasaisina.

\vspace{0.5em}
**D) Usein kysytty: “Voiko ChatGPT kääntää myös suomi → ruotsi?”**

Kyllä. Vaihda vain tavoitekieli vaiheessa 2. Mallin tarkkuus ruotsiin ja muihin euroopan kieliin on riittävä CV-tasolle, mutta harvinaisemmissa kielissä (esim. japani) kannattaa pyytää natiivin oikoluku.

\pagebreak
## 6  Työpaikkailmoitusten analysointi

### 6.1  Vaatimusten purku – must-have vs nice-to-have

Työpaikka­ilmoitus on usein sekava sekoitus välttämättömiä ja “olisi kiva” -vaatimuksia. Kun saat ensin selvän listan kahteen sarakkeeseen, pystyt

1. päättämään nopeasti, kannattaako paikkaa hakea
2. kohdentamaan hakemuksessa täsmälleen oikeat taidot.

Alla teksti-osio + interaktiivinen prompti, joka pyytää puuttuvan ilmoituksen automaattisesti ja tuottaa taulukon “Pakollinen / Toivottu”.

\vspace{0.5em}
**Miksi tämä on hyödyllistä?**

| Hyöty                     | Mitä teet?                                       | Lopputulos                                |
| ------------------------- | ------------------------------------------------ | ----------------------------------------- |
| **Ajansäästö**            | Arvioi 5–10 ilmoitusta tunnissa                  | Hae vain realistisia paikkoja             |
| **Hakemuksen kohdennus**  | Nosta must-have-taidot saatteeseen               | Parempi osuma ATS:ssä ja rekrytarjonnassa |
| **Haastattelukysymykset** | Kysy rekryltä, miksi joku “toivottu” on listalla | Näytät valmistautuneelta                  |

\vspace{0.5em}
**Interaktiivinen annonsianalyysi-prompti**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit vaatimusanalyytikkonani.

### Kyselyvaihe (yksi kysymys kerrallaan)

1. Tarkista, onko tässä tai aiemmissa viesteissä
   • työpaikka-ilmoituksen teksti TAI
   • suora URL ilmoitukseen.
   Jos kumpikaan ei ole saatavilla, kysy YHDEN KERRAN:
   “Voitko liittää ilmoituksen URL-osoitteen tai kopioida tekstin tähän?”

2. Kun ilmoitus löytyy, kysy (vain jos puuttuu):
   “Onko sinulla erityisiä reunaehtoja (esim. palkkaraja, sijainti) joihin verrataan?”

### Analyysivaihe

Kun ilmoitus ja mahdolliset reunaehdot on saatu:
1. Poimi kaikki vaatimukset ja jaa kahteen sarakkeeseen:
   • **Pakollinen / Must-have**  
   • **Toivottu / Nice-to-have**
   – Pidä alkuperäinen muotoilu lyhyenä bulletina.
2. Merkitse tähdellä (*) kaikki kohdat, jotka rikkovat antamiasi reunaehtoja.
3. Palauta kahtena Markdown-taulukkona (Must-have, Nice-to-have).  
Älä lisää muuta tekstiä.
```

\vspace{0.5em}
**Esimerkkituloste**

| Pakollinen           |                           |
| -------------------- | ------------------------- |
| Python-kokemus       |                           |
| Docker ympäristö     |                           |
| *Sijainti: Berliini* | *(rikkoi sijaintirajani)* |

| Toivottu          |   |
| ----------------- | - |
| AWS-sertifikaatti |   |
| Go-kokemus        |   |

\vspace{0.5em}
**Käytä tulosta näin:**

1. **Pikatesti** – Jos tähdet osuvat pakollisiin riveihin, harkitse johtaako hakemus turhaan työhön.
2. **Hakemuksen runko** – Osoita vähintään 70 % must-have-taitoja saatteessa; viittaa nice-to-have-listasta 2–3 tärkeimpään.
3. **Haastattelukysymykset** – Valmista kysymys “Näin Go-kokemus on mainittu toivottuna – kuinka tärkeää se lopulta on?”

\pagebreak
### 6.2  Oma sopivuus & osaamisgapien tunnistaminen

Kun olet jakanut ilmoituksen vaatimukset “must-have vs nice-to-have” -taulukoihin, seuraava askel on verrata listaa omaan osaamis­profiiliisi. Tämän vaiheen tavoitteena on:

1. **Vahvistaa** vahvuudet, joita korostat hakemuksessa.
2. **Paikantaa** aukot – ja päättää, miten niistä puhut (tai peität) saatteessa ja haastattelussa.

\vspace{0.5em}
**Interaktiivinen sopivuusanalyysi-prompti:**

```text
Toimit soveltuvuusanalyytikkonani.

### Kyselyvaihe (yksi kysymys kerrallaan)

1. Tarkista, onko keskustelussa jo
   • edellisen vaiheen vaatimustaulukot (Must-have / Nice-to-have) JA
   • CV-tekstini tai LinkedIn-raakalohko.
   – Jos kumpaakin löytyi, siirry analyysivaiheeseen.

2. ELLEI vaatimustaulukkoa löydy, kysy YHDEN KERRAN:
   “Voitko liittää ilmoituksen vaatimustaulukon 
   tai linkata aiemman viestin, jossa se on?”

3. ELLEI CV-tekstiä löydy, kysy YHDEN KERRAN:
   “Voitko liittää CV-tekstisi tai LinkedIn-profiilin sisällön tähän?”

### Analyysivaihe

Kun vaatimukset ja CV ovat saatavilla:

1. Vertaa Must-have-listaa CV:heni.  
   • Merkitse ✔ jos taito löytyy, ✖ jos puuttuu.  
   • Jos taito on osittain hallussa, merkitse ~ ja anna selitys 
     (esim. “2 vuotta kokemusta”).  

2. Tee sama Nice-to-have-listalle.

3. Palauta tulos kahdessa Markdown-taulukossa:

#### Must-have vs CV

| Taito | Status | Kommentti |
|-------|--------|-----------|
| Python | ✔ | 5 v kokemusta |
| Docker | ✖ | Ei suoraa kokemusta |

#### Nice-to-have vs CV

| Taito | Status | Kommentti |
|-------|--------|-----------|
| AWS-sertifikaatti | ~ | Käynnissä, valmis Q4/2025 |

4. Lopuksi listaa max 3 vahvuutta ja max 3 osaamisaukkoa, 
   joihin keskittyä hakemuksessa.  
   • Muotoile ne “Vahvuudet:” / “Gapit:” -luetteloksi (ei selitystekstiä).

Älä sisällytä muuta tekstiä.
```

\vspace{0.5em}
**Näin käytät tulosta:**

| Toimi                       | Mitä teet?                                                                      | Hyöty                                          |
| --------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Saatekirje**              | Nosta ✔-merkityt must-have-taidot 1. kappaleeseen.                              | Rekry näkee, että täytät kriittiset kriteerit. |
| **Gap-strategia**           | Valitse max 2 ✖- tai \~-taitoa ja osoita, miten paikkaat ne (kurssi, projekti). | Näytät itseohjautuvalta ja rehelliseltä.       |
| **Haastattelun valmistelu** | Varaa selitys jokaiselle ✖-taitolle (“Näin olen oppimassa…”).                   | Vähennät yllätyksiä ja parannat luottamusta.   |

**Vinkki** Jos taulukossa on enemmän kuin 3 ✖-merkkiä must-have-sarjassa, harkitse ajan säästämistä ja siirry seuraavaan työpaikkaan. ChatGPT:n nopea analyysi auttaa välttämään turhaa “spray & pray” -hakemista.

\pagebreak
### 6.3  Yrityskulttuuri ja arvojen mätsäys – miten selvität “sopiiko talo sinulle”

Hyvä palkka ja sopiva rooli eivät riitä, jos työpaikan kulttuuri on täysin eri maailmasta kuin omat arvosi. ChatGPT voi auttaa kokoamaan hajallaan olevan tiedon (arvot, työntekijäarviot, teknologiapinot) ja vertaamaan sitä motivaatioosi.

\vspace{0.5em}
**A) Tietolähteet kulttuuri- ja arvoselvitykseen:**

| Lähde                           | Mitä näet?                             | Miten hyödynnät ChatGPT:ssä?                   |
| ------------------------------- |----------------------------------------|------------------------------------------------|
| **Yrityksen “About”/Ura-sivut** | Viralliset arvot, mission statement    | Syötä URL → pyydä tiivistys kolmella lauseella |
| **Glassdoor / Indeed Reviews**  | Anonyymit työntekijäarviot             | “Scrape top 5 plussaa ja miinusta”             |
| **LinkedIn Insights**           | Työntekijämäärä, vaihtuvuus            | “Mikä on henkilöstön kasvu 2 v aikana?”        |
| **GitHub / Stack Overflow**     | Teknologiat ja open-source-aktiivisuus | “Laske repo-star-määrä ja viimeisin commit”    |
| **Lehdistö & blogit**           | Skandaalit, vastuullisuus              | “Listaa kolme viimeistä ESG-keskustelua”       |

\pagebreak
**B) Interaktiivinen kulttuuri-analyysi-prompti.**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit yrityskulttuurianalyytikkonani.

### Kyselyvaihe (yksi kysymys kerrallaan)

1. Tarvitsen yrityksen tunnisteen.
   • Jos tästä tai aiemmista viesteistä ei löydy yrityksen nimeä eikä URL-osoitetta, 
     kysy YHDEN KERRAN:
     “Minkä yrityksen kulttuuria haluat analysoida? Anna nimi tai urasivun URL.”

2. Tarvitsen omat arvosi, jotta voin verrata.
   • Jos arvot (esim. motivaatio-tiivistelmä 3.2:sta) eivät ole keskustelussa, 
     kysy YHDEN KERRAN:
     “Mitkä kolme arvoa ovat sinulle tärkeimpiä työssä? 
     (esim. avoimuus, etätyö, kestävä kehitys)”

3. Varmista, että 🔍 Verkkohaku on päällä; jos se on pois, kysy luvan kytkeä.

### Analyysivaihe

1. Hae ja tiivistä:
   • Viralliset arvot & mission (3 bulletia).  
   • 3 yleisintä positiivista ja 3 negatiivista kommenttia Glassdoorissa (lyhyesti).  
   • Teknologia-/tuote-signaalit (1–2 lausetta GitHubista, jos relevantti).  
2. Vertaa työnantajan arvoja käyttäjän arvoihin:
   • Merkitse ✔ jos arvo täsmää, ✖ jos ei, ~ jos tuntematon.  
3. Palauta yksi Markdown-taulukko:

| Kategoria | Havainto | Mätsäys |
|-----------|----------|---------|
| Viralliset arvot | Avoimuus ✔ | ✔ |
| Työntekijät plussat | Hyvä work-life balance | ✔ |
| Työntekijät miinukset | Hidas päätöksenteko | ✖ |
| Tech-signaali | Aktiivinen OSS | ✔ |

4. Kirjoita lopuksi 120 merkin “kulttuuri-yhteenveto” (esim. “Arvot linjassa, 
   mutta byrokratiaa – varmistu päätöksenteosta haastattelussa.”).

Älä lisää muuta tekstiä.
```

\vspace{0.5em}
**C) Miten käytät tulosta:**

| Tilanne                | Mitä teet?                                           | Hyöty                          |
| ---------------------- | ---------------------------------------------------- | ------------------------------ |
| ✔ suurin osa täsmää    | Korosta kulttuuri-fit-kohtia hakemuksessa            | Näytät aidosti kiinnostuneelta |
| \~ paljon tuntematonta | Kysy haastattelussa: “Miten arvoja eletään arjessa?” | Hahmotat riskit ajoissa        |
| ✖ useita isoja eroja   | Päätä, haetko silti (palkka vs arvot).               | Vältät kulttuurishokin         |

**Vinkki**  Jos analyysi paljastaa negatiivisia työntekijäkokemuksia, pyydä ChatGPT:tä muotoilemaan kohtelias kysymys: “Huomasin Glassdoor-kommenteissa viittauksen hitaaseen päätöksentekoon. Voitteko kertoa, miten prosesseja on kehitetty viimeisen vuoden aikana?”

\pagebreak
### 6.4  Kysymysten generointi – lisätietopyynnöt rekrytoijalle

Kun ilmoitus ja oma sopivuusanalyysi ovat valmiina, on aika kerätä täsmäkysymyksiä, joilla:

* **selvennät epäselviä vaatimuksia**
* **testaat kulttuuri- ja arvo-matchin**
* **osoitat aktiivista kiinnostusta**

Hyvät kysymykset erottavat sinut hakijoista, jotka tyytyvät perus­small talkiin.

\vspace{0.5em}
**Interaktiivinen kysymysgeneraattorin prompti.**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit rekrytointi-kysymysanalyytikkonani.

### Kyselyvaihe (yksi kysymys kerrallaan)

1. Tarkista, onko keskustelussa jo
   • työpaikka-ilmoituksen teksti TAI URL  
   • kulttuuri-analyysitaulukkoni (6.3) TAI oma “arvot”-lista.

   ELLEI ilmoitusta löydy, kysy YHDEN KERRAN:  
   “Tarvitsen työpaikka-ilmoituksen URL-osoitteen tai tekstin. Voitko liittää sen?”

   ELLEI arvojani löydy, kysy YHDEN KERRAN:  
   “Mitkä 2–3 arvoa tai seikkaa haluat varmistaa haastattelussa? 
   (esim. etätyö, päätöksenteon nopeus)”

2. Kysy YHDEN KERRAN:  
   “Mihin tilanteeseen tarvitset kysymykset?  
    A) Hakemuksen follow-up-sähköposti  
    B) Haastattelun alku  
    C) Haastattelun lopetus (‘Onko sinulla kysyttävää?’)”

### Generointivaihe

Kun ilmoitus, arvot ja tilanne on selvillä:

1. Laadi 6 kohdennettua kysymystä:  
   • 2 roolin vaatimuksiin (selkeytä must-have / nice-to-have)  
   • 2 kulttuuri- tai arvo-mätseihin (perustuen arvolistaan)  
   • 2 kasvu- ja vaikutusmahdollisuuksiin (esim. urapolku, oppiminen)

2. Sijoita kysymykset numeroluetteloksi otsikon alle:

#### 🔍 Kysymykset [A/B/C]-tilanteeseen  

1. …  
2. …  
…

3. Älä lisää muuta tekstiä.
```

\vspace{0.5em}
**Esimerkkituloste (haastattelun lopetukseen):**

1. **“Miten tiimi mittaa onnistumista ensimmäisten 6 kuukauden aikana?”**
2. **“Miten etätyö käytännössä toimii, ja onko toimistopäiviä pakollisia?”**
3. **“Kuinka paljon autonomiaa on teknologia-arkkitehtuurin päätöksissä?”**
4. **“Miten yritys tukee ammatillista kehittymistä—onko budjettia kursseille?”**
5. **“Voitteko antaa esimerkin viimeaikaisesta ilmastovaikutuksia tukevasta projektista?”**
6. **“Mikä on seuraava askel, jos pääsemme yhteisymmärrykseen?”**

\vspace{0.5em}
**Vinkit kysymysten käyttöön:**

| Tilanne                  | Hyvä käytäntö                                         | Vältettävä                       |
| ------------------------ | ----------------------------------------------------- | -------------------------------- |
| **Follow-up-sähköposti** | 2–3 hyvin kohdennettua kysymystä; selkeä bullet-lista | 10 kysymyksen romaani            |
| **Haastattelun alku**    | Kysy roolin tavoitteista → osoita taustatyö           | “Mitäs te teette täällä?”        |
| **Haastattelun lopetus** | Varaa 2 kysymystä kulttuurista + 1 prosessikysymys    | Palkka-neuvottelu liian aikaisin |

\pagebreak
## 7  Hakemusten ja saatekirjeiden kirjoittaminen

Tulossa 7.8.2025.

* 7.1 Saatekirjeen rakenne ja CTA
* 7.2 Personointi skaalassa: muuttujapohjat ja massagenerointi
* 7.3 Sähköposti-mallit: hakemus, kiitosviesti, follow-up
* 7.4 Sävyn säätö: formaali, rento, luova

\pagebreak
## 8  Haastatteluihin valmistautuminen

Tulossa 8.8.2025.

* 8.1 Yritystutkimus ja toimialatrendit
* 8.2 Behavioural-kysymykset (STAR) vs tekniset kysymykset
* 8.3 Mock-haastattelu ChatGPT-näkökulmasta (teksti & puhe)
* 8.4 Vastausten palautesykli: itsearvio + ChatGPT-kritiikki

\pagebreak
## 9  Palkkavertailu ja markkinatieto

Tulossa 9.8.2025.

* 9.1 Palkkadata-lähteet ja validointi
* 9.2 ChatGPT-simuloidut palkkaneuvottelut
* 9.3 Kokonaiskompensaatio (osakeoptiot, bonukset, etuudet)

\pagebreak
## 10  Esimerkkipromptit ja workflow’t

Tulossa 10.8.2025.

* 10.1 Peruspromptit: ideointi, virheiden korjaus
* 10.2 Edistyneet workflow’t: end-to-end job search -putki (sis. tämän kirjassa annetun pitkän promptin)
* 10.3 Promptikirjasto: suomi vs englanti

\pagebreak
## 11  Eettiset, oikeudelliset ja tietosuojakysymykset

Tulossa 11.8.2025.

* 11.1 Henkilötiedot ja luottamuksellisuus
* 11.2 Tekijänoikeudet, plagiarismi, lähteiden merkitseminen
* 11.3 Malliharhat ja reilu käyttö – riskien minimointi

\pagebreak
## 12  ChatGPT:n rajat ja parhaat käytännöt

Tulossa 12.8.2025.

* 12.1 Faktojen varmistus ja luotettavuus
* 12.2 Yleisimmät virheet ja niiden välttäminen
* 12.3 Milloin käyttää perinteisiä menetelmiä/asiantuntijaa

\pagebreak
## 13  Tulevaisuuden suuntaukset

Tulossa 13.8.2025.

* 13.1 Generatiivinen tekoäly HR-putkessa (sourcing → onboarding)
* 13.2 Agentit ja automaattinen työnhaku
* 13.3 Uudet työkalut, API-integraatiot ja trendien seuranta

\pagebreak
## 14  Liitteet

Tulossa 14.8.2025.

* 14.1 Täydellinen esimerkkiprompti suomeksi ja englanniksi
* 14.2 Muistilista: työnhaku ChatGPT:llä 1-sivuinen PDF
* 14.3 Sanasto ja lyhenteet
* 14.4 Lisälukemisto ja työkalulinkit
