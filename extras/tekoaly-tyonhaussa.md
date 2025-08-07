---
title-meta: "Tekoäly työnhaussa - ChatGPT:n käyttöopas työnhakijalle"
author-meta: "Jaakko Heusala"
date-meta: "6.8.2025"
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
  \textcolor{black}{Digitaalinen Early Access -versio, 6.8.2025.}%
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

> LinkedIn-kokeilussamme, jossa **12 työnhakijaa** testasi menetelmää, lähes jokainen löysi kiinnostavia, juuri heille sopivia työpaikkoja minuuteissa – ja eräs heistä huudahti palautekyselyssä: **"Ehdottomasti näen hyötyä!"** ChatGPT ei pelkästään säästä aikaa; se kaivaa esiin piilotetutkin mahdollisuudet, jotka perinteisissä hauissa jäisivät kokonaan näkemättä.

**Mitä tämä merkitsee sinulle?** Tämä opas esittelee saman ChatGPT-prosessin, jonka 12 työnhakijaa testasi. Palaute osoitti, että tekoäly paljasti rooleja, joihin **useimmat osallistujat päätyivät hakemaan**. Lisäksi osa osallistujista raportoi selkeästä ajansäästöstä. Kun otat menetelmän käyttöön, voit keskittyä strategisiin urapäätöksiin sen sijaan, että käytät tuntikausia perinteiseen selailuun.

Generatiivinen tekoäly on tekoälyn osa-alue, jossa mallit oppivat esimerkeistä tuottaakseen uutta sisältöä, joka muistuttaa ihmisen tuottamaa tekstiä, kuvia, koodia tai ääntä. ChatGPT:n kaltaiset LLM-mallit (large language model) tuottavat ihmiselle luonnollista tekstiä sekunneissa, ymmärtäen samalla kysyjän kontekstia ja tavoitteita.

GenAI vapauttaa sinut työnhaun puuduttavista rutiineista. Kun annat tekoälylle olennaiset faktat CV:stäsi ja toivotuista rooleista, saat valmiit hakemuspohjat minuuteissa – ja voit käyttää aikasi haastatteluharjoituksiin mihin vuorokaudenaikaan tahansa. Näin teet enemmän kohdennettuja hakemuksia lyhyemmässä ajassa ja hahmotat markkina-arvosi selkeämmin.

### 1.2  Kenelle tämä kirja on ja miten sitä kannattaa käyttää

Generatiivinen tekoäly on siirtynyt nopeasti kokeiluista arjen rutiineihin.

* **75 % tietotyöntekijöistä** hyödyntää jo gen-AI-työkaluja työssään, selviää Microsoftin & LinkedInin *Work Trend Index 2024* -raportista. ([Microsoft][12])
* **40 % työnhakijoista** on käyttänyt tekoälyä – kuten ChatGPT:tä – CV:n, hakemusten tai haastatteluharjoitusten tukena, kertoo iHiren tuore 1 645 vastaajan *Inside the Multi-Generational Workforce 2025* -kysely. ([ihire.com][13])
* **71 % organisaatioista** käyttää generatiivista tekoälyä vähintään yhdessä liiketoimintafunktiossa (mm. HR), McKinseyn *State of AI 2025* -globaalikyselyn mukaan. ([McKinsey & Company][14])

\vspace{0.5em}
Tämä kirja palvelee työnhakijoita, uranvaihtajia ja rekryammattilaisia, jotka haluavat hyödyntää tekoälyä hakuprosessin jokaisessa vaiheessa.

[12]: https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part?utm_source=chatgpt.com "AI at Work Is Here. Now Comes the Hard Part - Microsoft"
[13]: https://www.ihire.com/resourcecenter/employer/pages/40-7-of-candidates-have-used-ai-in-their-job-search-but-adoption-varies-by-generation "40.7% of Candidates Have Used AI in Their Job Search – But Adoption Varies by Generation | iHire"
[14]: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai "The State of AI: Global survey | McKinsey"

\pagebreak
### 1.3  Mitä ChatGPT-tasoja ja työkaluja tarvitset työnhakuun

Työnhaun kannalta riittää pelkkä **Verkkohaku-työkalu**, joka on päällä kaikissa ChatGPT-paketeissa. Maksuttomalla Free-tasolla voit hoitaa hakuilmoitusten etsimisen ja tutustumisen; Plus-taso tuo lähinnä lisää nopeutta ja viestikiintiötä.

**Verkkohaku-työkalu** on ChatGPT:n ominaisuus, joka mahdollistaa reaaliaikaisen verkkoselailun ja tietojen hakemisen verkosta. Se on erityisen hyödyllinen työnhaussa -- tarvitset Verkkohakua ilmoitusten etsimiseen verkosta, vaatimusten tarkistamiseen, ja hakemusten personointiin.

Tarkemmat versio- ja asetusvertailut löytyvät [liitteestä A](#liite-a-chatgpt-versioiden-vertailu-ja-tekniset-yksityiskohdat).

\vspace{0.5em}
> **Vinkki: Näin saat kirjasta eniten irti**
> 
> Lue kirjaa luku kerrallaan ja testaa kehotteet saman tien ChatGPT:ssä. Jos haluat syventyä asetuksiin tai Syvätutkimukseen, kurkkaa **liite A**. Ja kun 1-sivuinen muistilista ([liite 14.3](#muistilista-työnhaku-chatgptllä-1-sivuinen-pdf)) valmistuu, ota se nopeaksi kertaus-apulaiseksi.

### Kirjan etenemispolku yhdellä silmäyksellä

| Luku | Mitä opit? | Miksi tärkeää? |
|------|------------|-----------------|
| **1. Johdanto** | Mikä on GenAI-työnhaku, miksi se toimii | Ymmärrät pelisäännöt ennen syöksyä prompteihin |
| **2. ChatGPT-perusasetukset** | Tietoturva, Verkkohaku, liite A -viittaukset | Varmistat, ettet jaa arkaluonteista dataa vahingossa |
| **3. Profiilidata kuntoon** | CV + LinkedIn raakatiedot tekoälylle | AI toimii vain niin hyvin kuin syöte |
| **4. Kehotteiden ketjutus** | Nelivaiheinen prosessi: ilmoitus → vertailu → hakemus | Pääset eroon massahakemisesta |
| **5. CV & LinkedIn optimointi** | ATS-sanat, 300 merkin About, projektien esittely | Profiili puhuu samaa kieltä kuin rekrybotit |
| **6. Ilmoitusten analyysi** | Must-have vs nice-to-have, gap-strategia | Haku kohdistuu realistisiin paikkoihin |
| **7. Haastattelusimulaatiot** | Kritiikki-&-paranna-luupit | Harjoittelet vastaukset ennen live-tilannetta |
| **8. Palkkaneuvottelut** | Markkinadata + AI-sparraus | Myyt osaamisesi arvoonsa |
| **9–10. Workflow-kirjasto** | Valmiit suomi & englanti -promptit | Kopioi–liitä kun tarvitset nopeasti |
| **14. Liitteet** | Mallivertailut, syvätutkimus, 1-sivun muistilista | Lisätiedot silloin kun niitä kaipaat |

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

> **Seuraava askel →** Avaa ChatGPT, kopioi ensimmäinen kehote luvusta 2, ja testaa sitä omalla CV:lläsi heti tänään.

Nyt kun olet lukenut johdannon, olet valmis aloittamaan. Luku 2 opastaa sinut ChatGPT:n perusasetuksiin ja ensimmäisiin kehotteisiin. Muista: paras oppimistapa on kokeilla itse – jokainen kehote on testattu toimivaksi.

\pagebreak
## 2  ChatGPT:n käyttöönotto ja perusasetukset

### 2.1  Tilin luonti ja perusasetukset

**Rekisteröidy** osoitteessa *chatgpt.com* – saat heti Free-tason käyttöön. Työnhaun kannalta riittää pelkkä **Verkkohaku-työkalu**, joka on päällä kaikissa ChatGPT-paketeissa. Maksuttomalla Free-tasolla voit hoitaa hakuilmoitusten etsimisen ja tutustumisen; Plus-taso tuo lähinnä lisää nopeutta ja viestikiintiötä.

Tarkemmat versio- ja hintavertailut löytyvät [liitteestä A](#a.1-chatgpt-versioiden-vertailutaulukko).

### 2.2  Työkalupakki: sisäänrakennetut ominaisuudet

| Ominaisuus                                                                                                                                                                                         | Missä se löytyy?                      | Milloin siitä on hyötyä?                                                    |
|----|----| ---- |
| **Companion-ikkuna (macOS)**<br/> Option + Space avaa kelluvan ChatGPT-ikkunan, joka pysyy muiden sovellusten päällä.                                                                              | ChatGPT-työpöytäsovellus (macOS)      | Kun haluat analysoida työpaikkailmoituksen ilman selaimen vaihtamista.      |

| **ChatGPT oletusassistenttina Androidissa**<br/> Beta-versio 1.2025.070 mahdollistaa ChatGPT:n valinnan "Digital assistant app" -asetuksessa; avaus pitkällä Home-painalluksella tai pyyhkäisyllä. | Android-sovellus (beta ≥ 1.2025.070)  | Hands-free-kysymykset liikkeellä, esim. "tiivistä tämä ilmoitus".           |
| **Record Mode (Team)**<br/> Nauhoittaa maks. 120 min ääntä, transkriboi ja laatii toimintalistat; ylläpitäjä voi kytkeä pois Workspace Controlsista.                                               | ChatGPT Team (macOS-sovellus)         | Nopeuttaa follow-up-viestien ja muistiinpanojen laatimista rekrypalavereista. |

Työnhaun minimi-paketti on selain- tai mobiilisovellus. Erillisiä selaimen lisäosia ei tarvita – Verkkohaku-työkalu ja yllä olevat sisäänrakennetut työkalut riittävät useimpiin hakurutiineihin. GPT-4o on saatavilla myös Free-tasolla rajatuin viestirajoin, joten pääset vauhtiin ilman maksullista tilausta.

[31]: https://x.com/OpenAI/status/1820914089612439622?lang=en&utm_source=chatgpt.com "OpenAI on X"

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
**Ota mallikoulutus pois käytöstä**

**Miksi?** Kun poistat toiminnon käytöstä, OpenAI ei käytä keskustelujasi mallien koulutukseen. Tämä parantaa yksityisyyttä ja pienentää arkaluontoisen datan vuotoriskiä.

**Tee näin (5 vaihetta):**

1. Napauta oikeassa yläkulmassa profiilikuvaasi.
2. Valitse **Asetukset**.
3. Avaa **Tiedonhallinta**.
4. Kytke **Auta parantamaan mallia kaikille** *pois käytöstä*.
5. Sulje asetukset ja jatka keskustelua.

<!-- TODO: Lisää ruutukaappaus kytkimestä OFF-tilassa (alt-teksti: "Improve the model for everyone – kytkin pois päältä"). -->

::: {.warningbox title="Jaa-linkit ovat julkisia (ei hakukoneissa)"}
**Jaettu linkki on edelleen avoin kenelle tahansa linkin saaneelle**, vaikka se ei enää näy Google-hauissa.  
OpenAI poisti hakukone-indeksoinnin 31. 7. 2025 tietosuoja­huolten vuoksi.

**Muista:**  
1. Älä jaa arkaluontoista dataa linkillä.  
2. Tarkista säännöllisesti jaetut linkit: **Profiilikuva → Asetukset → Tiedonhallinta → Jaetut linkit**.  
3. Poista tarpeettomat linkit roskakorikuvakkeella.

<!-- TODO: Lisää kuvakaappaus Shared Links -hallinnasta (alt-teksti: Shared Links -lista, roskakorikuvake esillä). -->

:::

\vspace{0.5em}
**Jaa-linkkien riskit:**

* **Jaa → Luo linkki** luo julkisen URL-osoitteen; heinäkuussa 2025 nämä linkit indeksoituivat Googleen, jolloin yksityisiä keskusteluja löytyi hakukoneista.
* OpenAI poisti samassa kuussa "Discoverable"-valinnan ja lupasi pyytää hakukoneita poistamaan jo indeksoidut sivut.
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

**Muista kytkeä Verkkohaku-työkalu päälle.** Verkkoselailu toimii myös **Väliaikainen keskustelu**-tilassa – saat "incognito-keskustelun", jota ei tallenneta historiaan, mutta voit silti hakea verkosta.

\vspace{0.5em}
**Vaihe 1 – Varmista, että Verkkohaku-työkalu on päällä**

1. Avaa uusi keskustelu (tavallinen tai väliaikainen).
2. Tarkista, että verkkohaku-kuvake on **päällä**
   *Jos kuvake puuttuu, varmista GPT-4o-malli tai sopiva tilitaso.*

\vspace{0.5em}
**Vaihe 2 – Raakapoiminta (ei tulkintaa)**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit ansioluetteloni analyytikkona.  

TEHTÄVÄ A – RAAKA POIMINTA (älä muokkaa!):  

1. Käytä aina Verkkohaku-työkalua avataksesi keskustelussa mainitut profiilin 
   URL-osoitteet (esim. LinkedIn, portfolio). 
   - Jos URL-osoitteita ei ole, kysy ensin: "Voisitko antaa minulle profiilin 
     URL-osoitteet (esim. LinkedIn, portfolio) tai liittää CV-tiedoston?"  

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
```

*Tarkista "`raw`"-lohkosta, ettei siellä ole keksittyä tekstiä. Korjaa tai lisää puuttuvat kohdat käsin.*

\pagebreak
**Vaihe 3 – Rakenteinen tiivistelmä Markdownina**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
TEHTÄVÄ B – RAKENNETTU YHTEENVETO (Markdown):
• Käytä vain ```raw```-lohkossa (ja mahdollisissa käsin lisätyissä riveissä) 
  olevaa tietoa.
• Rakenna kolme osiota:

### Keskeiset taidot
- …

### Tukitaidot
- …

### Saavutukset
- …

• Enintään ~80 merkkiä per luettelorivi.  
• Älä lisää uusia faktoja.
```

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

**Huomio** Tähän pyyntöön et tarvitse verkkohakua, joten voit jättää Verkkohaku-työkalun pois päältä.

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

### Vaatimukset
- …

### Plussaa
- …

   • Palauta koko ulostulo Markdown-muodossa.  
   • Älä keksi uutta tietoa – käytä vain antamiani vastauksia.
```

**Käyttövinkki:** Jos jatkat **samassa viestiketjussa**, ChatGPT muistaa motivaatiosi ilman lisätoimia. Tallenna yhteenveto *Mukauta ChatGPT:tä*-kenttään vain, jos haluat sen pysyvän käytössä myös muissa tai uusissa keskusteluissa.

\pagebreak
### 3.3 Tavoitteiden asettaminen: SMART + milestonet

Kopioi ja liitä tämä mille tahansa viestiketjun kohdalle.

* **Verkkohakua ei tarvita** → Verkkohaku-työkalu voi olla pois päältä.
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

### SMART-tavoite
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

**Kopioi koko lohko ChatGPT-keskusteluun.** Verkkohaku-työkalun ei tarvitse olla päällä vielä.

```text
Toimit kokeneena HR-rekrytoijana.

KYSYMYKSET (yksi kerrallaan):
• Jos keskustelussa on jo tietoa, tarjoa sulkeissa **esimerkkiluonnos** aiempien 
  vastausteni perusteella.  
• Jos tietoa ei ole, jätä sulkeet tyhjiksi tai kirjoita "(täydennä)".  
• Odota vastaustani ennen seuraavaa kysymystä.

1. Mikä on nykyinen tittelisi ja tärkeimmät taitosi? (esimerkkiluonnos: …)  
2. Missä maantieteellisessä sijainnissa haluat työskennellä? (esimerkkiluonnos: …)  
3. Mikä on vähimmäispalkkatoiveesi (brutto €/kk)? (esimerkkiluonnos: …)  
4. Mitkä työehdot tai sisältötekijät ovat sinulle tärkeimpiä? (esimerkkiluonnos: …)  
5. Onko muita erityisiä rajoitteita tai toiveita? (esimerkkiluonnos: …)  
6. Mikä päivä tänään on? (esimerkkiluonnos: dd.mm.yyyy)

KUN kaikki viisi vastausta on saatu, suorita **TEHTÄVÄ**:  
1. Varmista, että Verkkohaku-työkalu on päällä.  
2. Etsi **kymmenen** avoinna olevaa ilmoitusta, jotka täyttävät **kaikki** annetut 
   vaatimukset.
     - Hyödynnä osoitteessa https://hg.fi/prompts/job-sites.txt julkaistuja 
       työnhakusivustoja, mutta älä rajoitu niihin.
3. Palauta tulos Markdown-taulukkona, sarakkeet:  
   • Rooli & Yritys.
   • Hakemuksen määräaika (jos tiedossa).
   • Jos palkka on ilmoitettu vuosipalkkana, jaa se 12:lla.
   • Palkka €/kk — jos raja täyttyy vain ylärajalla tai palkkaa ei ole ilmoitettu, 
     aloita rivi "*) " ja kirjoita "neuvoteltavissa".
   • Suora linkki ilmoitukseen.
4. Lisää taulukon alle lyhyt (max 120 merkkiä) arvio sopivuudestani kutakin 
   roolia varten.  
5. Älä sisällytä muuta tekstiä.
```

**Iterointi & tulosten hienosäätö**

Saatuasi ensimmäisen taulukon voit tarkentaa hakua ilman uuden datan syöttöä. Kirjoita vain uusi ohje, ja ChatGPT tekee haun samoilla pohjatiedoilla mutta päivitettyjen rajojen mukaan:

\vspace{0.5em}
* **Esimerkki 1 – sijainti**

  > *"Tee sama haku, mutta rajaa tulokset Suomessa sijaitseviin työnantajiin."*

\vspace{0.5em}
* **Esimerkki 2 – roolin luonne**

  > *"Etsi uudelleen, mutta keskity vähemmän teknisiin ja enemmän ihmisläheisiin tehtäviin (esim. projektinhallinta, asiakasrajapinta)."*

\vspace{0.5em}
* **Esimerkki 3 – liian tiukat rajat / ei tuloksia**

  > *"Etsi uudelleen, mutta rajaa vähemmän tarkasti, jotta tuloksia tulisi enemmän."*

Malli säilyttää tittelisi, palkkatoiveesi ja muut alkuperäiset vaatimukset, hakee uuden listan kymmenestä roolista ja palauttaa päivitetyn taulukon. Näin voit hioa sijainnin, vaativuustason, toimialan tai minkä tahansa muun kriteerin, kunnes tulokset ovat sinulle sopivia.

\pagebreak
### 4.2  Promptien modulointi – pilko iso tehtävä useaksi kierrokseksi

Kun haet työtä ChatGPT:n kanssa, yhdellä jättipromptilla on helppo saada sekava, liian pitkä vastaus. Modulointi tarkoittaa, että **jaat prosessin useaksi vaiheeksi**, jolloin malli pysyy paremmin kartalla ja sinä pystyt vaikuttamaan lopputulokseen kierros kerrallaan.

\vspace{0.5em}
**Näin pilkot tehtävän käytännössä:**

| Vaihe                    | Mitä kysyt?                                                                                                                     | Mitä saat?                           |
|--------------------------| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **A. Pura ilmoitus**     | "Lue tämä työpaikka-ilmoitus ja listaa vaatimukset vs. toiveet."                                                                | Selkeä kahden sarakkeen taulukko.    |
| **B. Peilaa profiiliin** | "Vertaa listaa CV:ssäni näkyviin taitoihin. Mitkä 3 asiaa täsmäävät parhaiten? Entä suurin osaamisvajeni?"                      | Nopea soveltuvuus- ja puuteluettelo. |
| **C. Kirjoita hakemus**  | "Käytä vaiheiden A ja B tuloksia. Kirjoita 150 sanan saatekirje, jossa korostetaan täsmääviä taitoja ja selitetään osaamisvaje." | Tiivis, kohdennettu saatekirje.      |
| **D. Tarkastusluuppi**   | "Ehdota parannuksia sävyyn ja pyri 10 % lyhyempään tekstiin."                                                                   | Parannettu versio.                   |

**Muistisääntö:** Yksi kysymys = yksi selkeä ulostulo. Käytä tulosta seuraavan kysymyksen syötteenä.

\vspace{0.5em}
**Ketjutus: "tee A → odota → tee B":**

ChatGPT ymmärtää ohjeen, jossa se *pysähtyy odottamaan*. Esimerkiksi:

```text
Tee ensin: tiivistä tämä 2 000 sanan artikkeli puoleen pituuteen.
Odota, kunnes sanon "jatka".
Sen jälkeen: poimi artikkelista 5 tärkeintä hakusanaa ansioluettelooni.
```

Tätä voi käyttää, kun haluat lukea välituloksen ennen jatkoa.

\vspace{0.5em}
**"Critic & improve" -luuppi (itsepalautemalli):**

1. **Luonnos:** "Kirjoita 120 sanainen saatekirje."
2. **Kriitikko:** "Arvioi teksti kolmen kriteerin kautta: selkeys, vaikuttavuus, avainsanat. Anna pisteet /5."
3. **Parannus:** "Muokkaa tekstiä korottaaksesi joka pisteen vähintään neloseen."

Toista, kunnes teksti täyttää kriteerisi – yleensä 2–3 kierrosta riittää.

\vspace{0.5em}
**Vältä nämä sudenkuopat:**

| Virhe                                    | Miten korjaat?                                         |
| ---------------------------------------- | ------------------------------------------------------ |
| Pyydät "tee kaikki" yhdellä kertaa       | Pilko A–D-vaiheiksi (taulukko yllä).                   |
| Unohdat antaa edellisen vaiheen tuloksen | Kopioi tai viittaa "kuten edellä vaiheessa A".         |
| Luuppi ei pysähdy                        | Lisää selkeä komento "Odota vastaustani ennen jatkoa." |

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
   "Voitko antaa työpaikka-ilmoituksen URL-osoitteen tai kopioida ilmoituksen 
   tekstin tähän?"
   – Odota vastaustani ennen jatkamista.

3. Kun ilmoitus on saatu, vastaa lyhyesti "Kiitos, analysoin ilmoituksen" ja
   • poimi avainsanat neljään luokkaan  
     – Kovat taidot (tekniikat, työkalut)  
     – Pehmeät taidot  
     – Sertifikaatit / koulutus  
     – Yrityksen arvot & kulttuurisignaalit  
   • palauta tulos Markdown-taulukkona ("Luokka" | "Avainsanat").

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
   "Voitko liittää CV.pdf-tiedoston tai kopioida CV-tekstin tähän?"
   – Odota vastaustani ennen jatkamista.

3. Kun CV on saatu, listaa:
   • puuttuvat kovat ja pehmeät taidot  
   • ehdotus, mihin kohtaan CV:tä ne voisi lisätä luontevasti 
     (enintään 2 ehdotusta / sana).

Palauta tulos Markdown-luettelona ja älä lisää muuta tekstiä.
```

ChatGPT ilmoittaa esimerkiksi:

* **Puuttuu:** Docker → lisää "Docker-konttien orkestrointi" Työkokemus-osioon
* **Puuttuu:** AWS Solutions Architect → lisää Sertifikaatit-osioon

\vspace{0.5em}
**Nopeat parannuskierrokset:**

1. Lisää ehdotetut termit CV-luonnokseen.
2. Lähetä päivitetty CV tiedostona ja pyydä: *"Tee uusi vertailu alkuperäiseen – mitä vielä puuttuu?"*
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
   "Voitko liittää CV-tekstisi tai kopioida LinkedIn-profiilin sisällön tähän?"
   – Odota vastaustani.

3. Kun aineisto on saatu, kirjoita 3 ehdotusta 120 merkin headlineksi:
   • #1: Avainsanapainotteinen
   • #2: Arvolupaus-painotteinen
   • #3: Persoonallisempi, tarinallinen

Näytä ehdotukset numeroituna listana ilman selitystekstiä.
```

\vspace{0.5em}
**B) Interaktiivinen 300 merkin "About"-tiivistelmä (STAR-kehys).**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit uravalmentajanani.

1. Tarkista, onko CV-/LinkedIn-teksti jo saatavilla keskustelussa.
   • ELLEI ole, kysy YHDEN KERRAN:
     "Voitko liittää CV-tekstisi tai LinkedIn-profiilin tähän?"
     – Odota vastaustani.

2. Tarkista aineistosta, löytyykö numerotuloksia (esim. %-säästöjä, €-lukuja).
   • ELLEI löydy, kysy YHDEN KERRAN:
     "Voitko antaa yhden konkreettisen tulosluvun (esim. 'nostin myyntiä 18 %')?"

3. Kun tarvittavat tiedot ovat käytössä, kirjoita 300 merkin tiivistelmä STAR-mallilla:
   • Situation: 1 lause taustasta  
   • Task/Action: 1 lause roolistasi/toimistasi  
   • Result: 1 lause numerotuloksesta  

Palauta teksti yhtenä kappaleena ilman lisäselityksiä.
```

\vspace{0.5em}
**C) Saavutus-bulletien "ruuvit".**

| Vinkki                       | Esimerkki                                                                |
| ---------------------------- | ------------------------------------------------------------------------ |
| **Verbi + numero + tulos**   | "Alensin pilvikuluja **22 %** automatisoidulla Terraform-pipeline'illa." |
| **Mittakaava näkyviin**      | "Johdin **7** kehittäjän tiimiä • 1,2 M€ budjetti."                      |
| **Teknologia tai menetelmä** | "Optimoin kyselyt **SQL + Looker**-mallinnuksella."                      |

\vspace{0.5em}
**D) Päivityssykli ChatGPT:n kanssa.**

1. Vie raakateksti ChatGPT:lle → pyydä "Kirjoita 5 bulletia 260 merkkiin".
2. Pyydä: "Anna kaksi versiota: avainsanapainotteinen & tarinallinen."
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
   • Jos kuvausta ei ole, kysy: "Voitko lyhyesti kuvata projektin ongelman, 
     ratkaisun ja tuloksen?"  
3. Onko projektissa numeerisia tuloksia (säästetty €, kasvatettu % tms.)?  
   • Jos ei, ohita tämä kysymys.

### Tuotosvaihe
Kun linkit ja kuvaukset on saatu:
1. Tee taulukko (Markdown), sarakkeet:  
   • Projekti | Rooli | Tekniikat/työkalut | Tulos (numero tai lyhyt teksti) | Linkki  
2. Kirjoita jokaisesta projektista 120 merkin "headline" LinkedInin 
   "Featured"-osiota varten.  
3. Ehdota, mihin kohtaan CV:täni projekti kannattaa lisätä (Portfolio-osio, 
   Työkokemus, Tech Stack jne.).  

Älä lisää muuta tekstiä kuin taulukko, headline-luettelo ja sijoitusehdotukset.
```

\vspace{0.5em}
**Näin käytät tuloksia:**

| Askel                                                                | Mitä teet?                                              | Lopputulos                             |
|----------------------------------------------------------------------|---------------------------------------------------------| -------------------------------------- |
| **1.** Aja prompti – kopioi/liitä linkit ja kuvaukset                | Saat valmiin taulukon ja 120 merkin "headline"-tekstit  | Selkeä lista projekteista              |
| **2.** Lisää taulukko tai sen osat LinkedInin **Featured-osioon**    | Käytännön todiste osaamisesta näkyy profiilin yläosassa | Parempi "social proof"                 |
| **3.** Upota "headline + linkki" -parit CV:si Portfolio-osioon       | CV:ssä linkit ovat klikattavia                          | Rekrytoija pääsee suoraan näyttöihin   |
| **4.** Liitä relevantit projektit tai case studyt hakemuksen loppuun | Erityisen hyödyllinen design- ja dev-rooleissa          | Erottuu pelkkää teksti-CV:tä paremmin  |

**Huomioi turvallisuus** Poista projekteista tai case study -tutkimuksesta kaikki asiakkaan luottamukselliset tiedot ennen jakamista. Väliaikainen keskustelu -tilassa liitetyt dokumentit poistuvat 30 vuorokauden kuluessa.

\vspace{0.5em}
**Pikadiagnoosi: toimiiko portfolio?**

| Tarkistus                                                                     | Kyllä / Ei |
|-------------------------------------------------------------------------------| ---------- |
| Jokaisessa projektissa on **linkki**, **teknologia** ja **tulosluku**?        | ☐          |
| LinkedInissä näkyy vähintään **kaksi** esimerkkityötä "Featured"-osiolla?     | ☐          |
| CV:n Portfolio-osiossa on max **5** projektia – ei 30?                        | ☐          |
| Suosikkiprojektisi kertoo **MITÄ** teit, **MIKSI** ja **MILLAISIN TULOKSIN**? | ☐          |

Täytä "Ei"-ruudut käyttämällä yllä olevaa promptia ja lisää puuttuvat kuvaukset tai linkit. Kun kaikki ruudut ovat **Kyllä**, portfolio tukee hakemustasi tehokkaasti.

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
     "Voitko liittää suomen- tai englanninkielisen tekstin, jonka haluat 
     käännettäväksi?"

2. Kun teksti on saatu, kysy YHDEN KERRAN:
   "Mille kielelle käännetään (suomi ↔ englanti)?

3. Kysy YHDEN KERRAN (jos ei vielä selviä):
   "Toivottu sävy / rekisteri? (esim. muodollinen, rento, 'tech-savvy', 
   'asiantuntija')."

### Käännösvaihe
Kun kaikki tiedot on saatu:
1. Käännä teksti pyydetylle kielelle.
2. Säilytä alkuperäinen muotoilu (otsikot, luettelopisteet).
3. Mukauta kulttuuriset kohdat:
   • Päivämäärä- ja valuuttamuoto (30 June 2025 ↔ 30.6.2025, € ↔ EUR).  
   • Tittelien selitys: "Tietoliikenneinsinööri" → "Telecommunications Engineer".
4. Palauta käännös + yhteenvedon taulukko, jossa:
   • "Alkuperäinen termi" | "Käännös" | "Kommentti/syitä muokkaukseen" 
     (jos teit lokalisoinnin).

Älä lisää muuta tekstiä.
```

\vspace{0.5em}
**B) Tarkistuslista – näin varmistat laadun**

| Kohta              | Mitä tarkistan?                       | Miksi?                                          |
| ------------------ | ------------------------------------- | ----------------------------------------------- |
| **Tittelit**       | Vastine ymmärretään kansainvälisesti? | "Software Developer" ≠ "Coder"                  |
| **Mittayksiköt**   | Mm ↔ in, € ↔ EUR                      | Vältä tulkintavirheitä                          |
| **Päivämäärät**    | 2024-01 ↔ Jan 2024                    | ATS-botit tunnistavat molemmat                  |
| **Sävy**           | Sama "sinä-/minä-taso"                | Vältä byrokratiasuomea vs. liian rennot fraasit |
| **Lisäarvotermit** | "kestävä kehitys" → "sustainability"  | Hakuvat avainsanoja myös englanniksi            |

**Pika­vinkki** Jos käännös kuulostaa "konekäännökseltä", pyydä:
*"Paranna luettavuutta natiiville tasolle, mutta säilytä faktat."*

\vspace{0.5em}
**C) Ylläpidä kahta versiota ilman manuaalista copy-pastea**

1. **Master-dokumentti** Pidä alkuperäisversio (suomi) Google Docsissa.
2. **Käännös-keskustelu** Sama ketju, jossa yllä oleva käännösprompti.
3. **Päivitä** Kun lisäät uuden saavutuksen suomeksi, kopioi se keskusteluun ja pyydä "Käännä uusi kappale."
4. **Synkronoi** Liitä englanninkielinen päivitys LinkedIn/CV-tiedostoon.

Näin vältät kahden erillisen dokumentin jatkuvan kopioinnin ja varmistat, että molemmat kielet pysyvät ajantasaisina.

\vspace{0.5em}
**D) Usein kysytty: "Voiko ChatGPT kääntää myös suomi → ruotsi?"**

Kyllä. Vaihda vain tavoitekieli vaiheessa 2. Mallin tarkkuus ruotsiin ja muihin euroopan kieliin on riittävä CV-tasolle, mutta harvinaisemmissa kielissä (esim. japani) kannattaa pyytää natiivin oikoluku.

\pagebreak
## 6  Työpaikkailmoitusten analysointi

### 6.1  Vaatimusten purku – must-have vs nice-to-have

Työpaikka­ilmoitus on usein sekava sekoitus välttämättömiä ja "olisi kiva" -vaatimuksia. Kun saat ensin selvän listan kahteen sarakkeeseen, pystyt

1. päättämään nopeasti, kannattaako paikkaa hakea
2. kohdentamaan hakemuksessa täsmälleen oikeat taidot.

Alla teksti-osio + interaktiivinen prompti, joka pyytää puuttuvan ilmoituksen automaattisesti ja tuottaa taulukon "Pakollinen / Toivottu".

\vspace{0.5em}
**Miksi tämä on hyödyllistä?**

| Hyöty                     | Mitä teet?                                       | Lopputulos                                |
| ------------------------- | ------------------------------------------------ | ----------------------------------------- |
| **Ajansäästö**            | Arvioi 5–10 ilmoitusta tunnissa                  | Hae vain realistisia paikkoja             |
| **Hakemuksen kohdennus**  | Nosta must-have-taidot saatteeseen               | Parempi osuma ATS:ssä ja rekrytarjonnassa |
| **Haastattelukysymykset** | Kysy rekryltä, miksi joku "toivottu" on listalla | Näytät valmistautuneelta                  |

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
   "Voitko liittää ilmoituksen URL-osoitteen tai kopioida tekstin tähän?"

2. Kun ilmoitus löytyy, kysy (vain jos puuttuu):
   "Onko sinulla erityisiä reunaehtoja (esim. palkkaraja, sijainti) joihin verrataan?"

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
3. **Haastattelukysymykset** – Valmista kysymys "Näin Go-kokemus on mainittu toivottuna – kuinka tärkeää se lopulta on?"

\pagebreak
### 6.2  Oma sopivuus & osaamisgapien tunnistaminen

Kun olet jakanut ilmoituksen vaatimukset "must-have vs nice-to-have" -taulukoihin, seuraava askel on verrata listaa omaan osaamis­profiiliisi. Tämän vaiheen tavoitteena on:

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
   "Voitko liittää ilmoituksen vaatimustaulukon 
   tai linkata aiemman viestin, jossa se on?"

3. ELLEI CV-tekstiä löydy, kysy YHDEN KERRAN:
   "Voitko liittää CV-tekstisi tai LinkedIn-profiilin sisällön tähän?"

### Analyysivaihe

Kun vaatimukset ja CV ovat saatavilla:

1. Vertaa Must-have-listaa CV:heni.  
   • Merkitse ✔ jos taito löytyy, ✖ jos puuttuu.  
   • Jos taito on osittain hallussa, merkitse ~ ja anna selitys 
     (esim. "2 vuotta kokemusta").  

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
   • Muotoile ne "Vahvuudet:" / "Gapit:" -luetteloksi (ei selitystekstiä).

Älä sisällytä muuta tekstiä.
```

\vspace{0.5em}
**Näin käytät tulosta:**

| Toimi                       | Mitä teet?                                                                      | Hyöty                                          |
| --------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Saatekirje**              | Nosta ✔-merkityt must-have-taidot 1. kappaleeseen.                              | Rekry näkee, että täytät kriittiset kriteerit. |
| **Gap-strategia**           | Valitse max 2 ✖- tai \~-taitoa ja osoita, miten paikkaat ne (kurssi, projekti). | Näytät itseohjautuvalta ja rehelliseltä.       |
| **Haastattelun valmistelu** | Varaa selitys jokaiselle ✖-taitolle ("Näin olen oppimassa…").                   | Vähennät yllätyksiä ja parannat luottamusta.   |

**Vinkki** Jos taulukossa on enemmän kuin 3 ✖-merkkiä must-have-sarjassa, harkitse ajan säästämistä ja siirry seuraavaan työpaikkaan. ChatGPT:n nopea analyysi auttaa välttämään turhaa "spray & pray" -hakemista.

\pagebreak
### 6.3  Yrityskulttuuri ja arvojen mätsäys – miten selvität "sopiiko talo sinulle"

Hyvä palkka ja sopiva rooli eivät riitä, jos työpaikan kulttuuri on täysin eri maailmasta kuin omat arvosi. ChatGPT voi auttaa kokoamaan hajallaan olevan tiedon (arvot, työntekijäarviot, teknologiapinot) ja vertaamaan sitä motivaatioosi.

\vspace{0.5em}
**A) Tietolähteet kulttuuri- ja arvoselvitykseen:**

| Lähde                           | Mitä näet?                             | Miten hyödynnät ChatGPT:ssä?                   |
| ------------------------------- |----------------------------------------|------------------------------------------------|
| **Yrityksen "About"/Ura-sivut** | Viralliset arvot, mission statement    | Syötä URL → pyydä tiivistys kolmella lauseella |
| **Glassdoor / Indeed Reviews**  | Anonyymit työntekijäarviot             | "Scrape top 5 plussaa ja miinusta"             |
| **LinkedIn Insights**           | Työntekijämäärä, vaihtuvuus            | "Mikä on henkilöstön kasvu 2 v aikana?"        |
| **GitHub / Stack Overflow**     | Teknologiat ja open-source-aktiivisuus | "Laske repo-star-määrä ja viimeisin commit"    |
| **Lehdistö & blogit**           | Skandaalit, vastuullisuus              | "Listaa kolme viimeistä ESG-keskustelua"       |

\pagebreak
**B) Interaktiivinen kulttuuri-analyysi-prompti.**

Kopioi ja liitä alla oleva teksti ChatGPT-keskusteluun:

```text
Toimit yrityskulttuurianalyytikkonani.

### Kyselyvaihe (yksi kysymys kerrallaan)

1. Tarvitsen yrityksen tunnisteen.
   • Jos tästä tai aiemmista viesteistä ei löydy yrityksen nimeä eikä URL-osoitetta, 
     kysy YHDEN KERRAN:
     "Minkä yrityksen kulttuuria haluat analysoida? Anna nimi tai urasivun URL."

2. Tarvitsen omat arvosi, jotta voin verrata.
   • Jos arvot (esim. motivaatio-tiivistelmä 3.2:sta) eivät ole keskustelussa, 
     kysy YHDEN KERRAN:
     "Mitkä kolme arvoa ovat sinulle tärkeimpiä työssä? 
     (esim. avoimuus, etätyö, kestävä kehitys)"

3. Varmista, että Verkkohaku on päällä; jos se on pois, kysy luvan kytkeä.

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

4. Kirjoita lopuksi 120 merkin "kulttuuri-yhteenveto" (esim. "Arvot linjassa, 
   mutta byrokratiaa – varmistu päätöksenteosta haastattelussa.").

Älä lisää muuta tekstiä.
```

\vspace{0.5em}
**C) Miten käytät tulosta:**

| Tilanne                | Mitä teet?                                           | Hyöty                          |
| ---------------------- | ---------------------------------------------------- | ------------------------------ |
| ✔ suurin osa täsmää    | Korosta kulttuuri-fit-kohtia hakemuksessa            | Näytät aidosti kiinnostuneelta |
| \~ paljon tuntematonta | Kysy haastattelussa: "Miten arvoja eletään arjessa?" | Hahmotat riskit ajoissa        |
| ✖ useita isoja eroja   | Päätä, haetko silti (palkka vs arvot).               | Vältät kulttuurishokin         |

**Vinkki**  Jos analyysi paljastaa negatiivisia työntekijäkokemuksia, pyydä ChatGPT:tä muotoilemaan kohtelias kysymys: "Huomasin Glassdoor-kommenteissa viittauksen hitaaseen päätöksentekoon. Voitteko kertoa, miten prosesseja on kehitetty viimeisen vuoden aikana?"

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
   • kulttuuri-analyysitaulukkoni (6.3) TAI oma "arvot"-lista.

   ELLEI ilmoitusta löydy, kysy YHDEN KERRAN:  
   "Tarvitsen työpaikka-ilmoituksen URL-osoitteen tai tekstin. Voitko liittää sen?"

   ELLEI arvojani löydy, kysy YHDEN KERRAN:  
   "Mitkä 2–3 arvoa tai seikkaa haluat varmistaa haastattelussa? 
   (esim. etätyö, päätöksenteon nopeus)"

2. Kysy YHDEN KERRAN:  
   "Mihin tilanteeseen tarvitset kysymykset?  
    A) Hakemuksen follow-up-sähköposti  
    B) Haastattelun alku  
    C) Haastattelun lopetus ('Onko sinulla kysyttävää?')"

### Generointivaihe

Kun ilmoitus, arvot ja tilanne on selvillä:

1. Laadi 6 kohdennettua kysymystä:  
   • 2 roolin vaatimuksiin (selkeytä must-have / nice-to-have)  
   • 2 kulttuuri- tai arvo-mätseihin (perustuen arvolistaan)  
   • 2 kasvu- ja vaikutusmahdollisuuksiin (esim. urapolku, oppiminen)

2. Sijoita kysymykset numeroluetteloksi otsikon alle:

#### Kysymykset [A/B/C]-tilanteeseen  

1. …  
2. …  
…

3. Älä lisää muuta tekstiä.
```

\vspace{0.5em}
**Esimerkkituloste (haastattelun lopetukseen):**

1. **"Miten tiimi mittaa onnistumista ensimmäisten 6 kuukauden aikana?"**
2. **"Miten etätyö käytännössä toimii, ja onko toimistopäiviä pakollisia?"**
3. **"Kuinka paljon autonomiaa on teknologia-arkkitehtuurin päätöksissä?"**
4. **"Miten yritys tukee ammatillista kehittymistä—onko budjettia kursseille?"**
5. **"Voitteko antaa esimerkin viimeaikaisesta ilmastovaikutuksia tukevasta projektista?"**
6. **"Mikä on seuraava askel, jos pääsemme yhteisymmärrykseen?"**

\vspace{0.5em}
**Vinkit kysymysten käyttöön:**

| Tilanne                  | Hyvä käytäntö                                         | Vältettävä                       |
| ------------------------ | ----------------------------------------------------- | -------------------------------- |
| **Follow-up-sähköposti** | 2–3 hyvin kohdennettua kysymystä; selkeä bullet-lista | 10 kysymyksen romaani            |
| **Haastattelun alku**    | Kysy roolin tavoitteista → osoita taustatyö           | "Mitäs te teette täällä?"        |
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
* 8.3 Mock-haastattelu ChatGPT-näkökulmasta
* 8.4 Vastausten palautesykli: itsearvio + ChatGPT-kritiikki

\pagebreak
## 9  Palkkavertailu ja markkinatieto

Tulossa 9.8.2025.

* 9.1 Palkkadata-lähteet ja validointi
* 9.2 ChatGPT-simuloidut palkkaneuvottelut
* 9.3 Kokonaiskompensaatio (osakeoptiot, bonukset, etuudet)

\pagebreak
## 10  Esimerkkipromptit ja workflow't

Tulossa 10.8.2025.

* 10.1 Peruspromptit: ideointi, virheiden korjaus
* 10.2 Edistyneet workflow't: end-to-end job search -putki (sis. tämän kirjassa annetun pitkän promptin)
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

### 14.1  Liite A: ChatGPT-versioiden vertailu ja tekniset yksityiskohdat

#### A.1  ChatGPT-versioiden vertailutaulukko

| Versio                 | Viestikiintiö\*                           | Verkkohaku               | Huomio työnhaussa                                  |
|------------------------|-------------------------------------------|--------------------------|----------------------------------------------------|
| **Free**               | ≈ 10 viestiä / 3 h → sen jälkeen GPT-4.1 mini   | ✓ Päällä kaikilla        | Perushakujen teko onnistuu                         |
| **Plus**               | ≈ 80 viestiä / 3 h                        | ✓ Rajaton kiintiöllä\*   | Suositeltu, jos teet paljon hakuja päivittäin      |
| **Team**               | \~2× Plus-kiintiö / käyttäjä              | ✓ Rajaton\*\*            | Tiimeille, joissa jaetaan promptipohjia            |
| **Pro**                | Ei kiinteää kattoa (reilun käytön periaate) | ✓ Rajaton                | Ylivoimainen, jos tarvitset satoja hakukierroksia  |
| **Enterprise / Edu**   | 500 pyyntöä / 3 h (4.1)                   | ✓ Rajaton\*\*            | Suuret organisaatiot, regulaatio, vahva tietosuoja |

\* Viestikiintiöt koskevat GPT-4o-mallin kyselyjä, joihin myös Verkkohaut lasketaan. Kiintiön täyttyessä keskustelu jatkuu GPT-4.1 mini -mallilla.

\*\* Ylläpitäjä voi rajoittaa

#### A.1.1  Yksityiskohtainen hintavertailu

| Taso                   | Hinta (EU)                | Viestikiintiö            | Tärkeimmät ominaisuudet                             |
|------------------------|---------------------------|--------------------------|----------------------------------------------------|
| **Free**               | 0 €                       | ≈ 10 viestiä / 3 h       | Perus Verkkohaku, GPT-4.1 mini rajan jälkeen       |
| **Plus**               | ≈ 23 € / kk               | ≈ 80 viestiä / 3 h       | Advanced-työkalut, paras hinta–hyöty-tasapaino     |
| **Team**               | 29 € / kk (vuosilaskutus) | \~2× Plus-kiintiö        | Yhteinen työtila, ylläpitäjän-kontrollit           |
| **Pro**                | 200 \$ ≈ 229 €            | Ei kiinteää kattoa       | Data-intensiivisille tehohakijoille                |
| **Enterprise / Edu**   | Sopimuksen mukaan         | 500 pyyntöä / 3 h (4.1)  | SSO, tietoturva, Zero-Data-Retention               |

**Suositus työnhakuun:** Aloita Free-tasolla ja päivitä Plus-tasolle, jos osut viestirajaan toistuvasti. Team/Enterprise vain, jos useampi käyttäjä tarvitsee yhteistä työtilaa.

#### A.2  Syvätutkimus-työkalu

Syvätutkimus on hyödyllinen ChatGPT:n työkalu, jos haluat teettää pitkään vievän meta-analyysin, esim. vertailla kymmeniä toimialaraportteja.
Syvätutkimuksessa ChatGPT tutkii itsenäisesti verkkoa, lukee ja tiivistää useita artikkeleita, raportteja tai tutkimuksia.
Syvätutkimus vie 5–30 min/pyyntö ja kuluttaa erillisiä kredittejä. Lopuksi saat useamman sivun tiivistelmän, joka sisältää linkit lähteisiin ja mahdollisesti myös suosituksia, jonka voit tulostaa PDF- tai Docx-tiedostoksi.

#### A.3  ChatGPT-mallien vertailu

Mallilla tarkoitetaan ChatGPT:n "aivoja": laskennallista rakennetta, joka ymmärtää syötettyä tekstiä ja tuottaa vastauksia. Mallien koko ja teho vaihtelevat, ja niillä on suora vaikutus siihen, kuinka tarkasti ja joustavasti ChatGPT kykenee käsittelemään kysymyksiä ja luomaan sisältöä.

Ilmaisversiossa saatavilla on vain yksi malli, jonka käyttöliittymä kutsuu "ChatGPT": tämä pohjautuu GPT-4o-teknologiaan. Kun ilmaisversion viestikiintiö täyttyy, malli vaihtuu väliaikaisesti kevyempään GPT-4.1 mini -versioon, kunnes raja nollautuu.

OpenAI julkaisee säännöllisesti uusia malliversioita ja parannuksia, joten käytettävissä olevat mallit ja niiden ominaisuudet päivittyvät ajan myötä.

Alla on vertailu keskeisistä ChatGPT-malleista ja niiden tuesta verkkohakuun ("Verkkohaku"-työkalu) sekä muihin tärkeisiin ominaisuuksiin.

| Malli      | Vuosi  | Free | Plus | Pro | Team | Enterprise | Verkkohaku | Edistynyt data-analyysi | Kuvat | Ääni |
|------------|--------|---|---|---|---|------|------|------|------|------|
| **GPT-4o** | 2024   | \* | ✓ | ✓ | ✓ |            | ✓          | ✓                        | ✓     | ✓    |
| **GPT-4.5** | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     |      |
| **o3-mini** | 2025   | ✓ | ✓ | ✓ | ✓ |            | ✓          | ✓                        | ✓     | ✓    |
| **o3**     | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **o3-pro** | 2025   |   |   | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **o4-mini** | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **GPT-5**  | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **GPT-5-mini** | 2025 |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **GPT-5-nano** | 2025 |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **GPT-5-chat** | 2025 |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |

\* Ilmaisella tilillä on rajoitettu pääsy *GPT-4o*:hon, ja kun kiintiö loppuu palaudutaan *GPT-4.1 miniin*. Plussaan päivittäminen nostaa *GPT-4o*:n kiintiörajoja ja avaa mallit, joissa on laajempi päättely- ja työkalutuki.

#### A.3.1 GPT-5-mallit ja niiden ominaisuudet

OpenAI:n uusin ja edistynein malli, **GPT-5**, julkaistaan 7.8.2025. GPT-5 tarjoaa merkittäviä parannuksia päättelykyvyssä, koodinlaadussa ja käyttäjäkokemuksessa. Se käsittelee monimutkaisia koodaus- ja päättelytehtäviä minimaalisella ohjeistuksella, tarjoaa selkeitä selityksiä ja esittelee parannellut agenttitoiminnot.

**GPT-5-mallin variantit:**

| Variantti | Tarkoitus | Erityisominaisuudet |
|-----------|-----------|---------------------|
| **gpt-5** | Logiikka ja monivaiheiset tehtävät | Paranneltu päättelykyky, agenttitoiminnot |
| **gpt-5-mini** | Kustannustietoiset sovellukset | Kevyt versio, säilyttää keskeiset ominaisuudet |
| **gpt-5-nano** | Nopeusoptimoitu | Matala viive, ihanteellinen reaaliaikaisille sovelluksille |
| **gpt-5-chat** | Yrityskeskustelut | Edistynyt, luonnollinen, monimuotoinen ja kontekstitietoinen keskustelu |

**Työnhaun kannalta tärkeimmät parannukset:**
- **Parempi päättelykyky:** Ymmärtää monimutkaisempia työnhakustrategioita ja -prosesseja
- **Koodinlaatu:** Tehokkaampi apu CV:n ja hakemusten optimoinnissa
- **Agenttitoiminnot:** Automaattinen verkkojen tutkiminen ja tiedon kerääminen
- **Selkeät selitykset:** Parempi perustelu suosituksille ja päätöksille

**Saatavuus:** GPT-5-mallit julkaistaan 7.8.2025.

#### A.4  Token-rajoitukset ja tiedonkäsittely

**Miten suurta tietoa malli kykenee käsittelemään?**

| Malli     | Syöte<br>(tokenia) | Ulostulo<br>(tokenia) | Huomionarvoiset ominaisuudet                                                                                                                              |
|-----------|-------|-------|-----------------------------------|
| GPT-4o    | 128 000 |                    | Päivitetty tietopohja huhtikuu 2023; paranneltu ohjeiden noudattaminen; integroidut työkalut automaattiseen käyttöön; kustannustehokkaampi hinnoittelu    |
| o3        | 200 000 | 100 000            | Deliberatiivinen reasoning (private chain-of-thought); visuaalinen hahmontunnistus ja kuvien analyysi; täysi työkalutuki (web, Python, func. calling)     |
| o4-mini   | 200 000 | 100 000            | Nopea ja kustannustehokas päättely; erinomainen koodaus- ja visuaalianalyysitehtävissä; täysi ketjupäättely- ja työkalutuki (web, Python, image)          |
| o4-mini-high | 200 000 | 100 000            | "High-reasoning"-variantti o4-ministä: lisää laskentatehoa tarkkuuden kustannuksella                                                                      |
| GPT-4.5   | 128 000 |                    | Uusi väliversio GPT-4-sarjassa; parempi käskyjen noudattaminen ja suorituskyky; saatavilla ChatGPT Pro- ja Plus-käyttäjille                               |
| **GPT-5** | 128 000 | 100 000            | OpenAI:n edistynein malli; paranneltu päättelykyky ja koodinlaatu; agenttitoiminnot ja monivaiheiset tehtävät; julkaistaan 7.8.2025 |
| **GPT-5-mini** | 128 000 | 100 000        | Kevyt versio kustannustietoisille sovelluksille; säilyttää GPT-5:n keskeiset ominaisuudet pienemmällä resurssitarpeella |
| **GPT-5-nano** | 128 000 | 100 000        | Nopeusoptimoitu versio; ihanteellinen matalan viiveen sovelluksille; säilyttää perustoiminnallisuudet |
| **GPT-5-chat** | 128 000 | 100 000        | Edistynyt, luonnollinen, monimuotoinen ja kontekstitietoinen keskustelu; yrityssovellukset |

Yksi token vastaa englanninkielisessä tekstissä keskimäärin noin neljää merkkiä ja noin ¾ sanaa. Tällöin 128 000 tokenia on noin 96 000 sanaa, mikä vastaa single-spaced-muodossa noin 192 A4-sivua (noin 500 sanaa per sivu).

Kun käytät ChatGPT:tä, taustalla malli käsittelee sekä uuden syötteen että mallin tuottaman vastauksen tokenit yhteismääränä. Esimerkiksi 10 000 tokenin syöte ja 5 000 tokenin vastaus kuluttavat yhteensä 15 000 tokenia. Mallin käyttö huomioi myös aiemman viestihistorian ja muistiin tallennetut tiedot, joita tarvittaessa supistetaan token-rajojen puitteissa.

### 14.2  Täydellinen esimerkkiprompti suomeksi ja englanniksi

Tulossa 14.8.2025.

### 14.3  Muistilista: työnhaku ChatGPT:llä 1-sivuinen PDF

Tulossa 14.8.2025.

### 14.4  Sanasto ja lyhenteet

Tulossa 14.8.2025.

### 14.5  Lisälukemisto ja työkalulinkit

Tulossa 14.8.2025.

### 14.6  Työnhakusivustojen luettelo

Tämä liite sisältää kattavan luettelon työnhakusivustoista, jotka ovat erityisen hyödyllisiä tekoälyavusteisen työnhaun yhteydessä. Sivustot on jaettu kategorioihin selkeyden vuoksi.

#### Yleiset työnhakusivustot

| Sivusto | Kuvaus |
|---------|--------|
| [GitHub Careers](https://www.github.careers/careers-home/jobs) | GitHub:n virallinen työnhakusivusto, erityisesti teknologia-alan rooleille ja kehittäjille |
| [Oikotie Työpaikat](https://tyopaikat.oikotie.fi/) | Suomen suurin työnhakusivusto, kattaa kaikki toimialat ja työpaikat Suomessa |
| [LinkedIn Jobs](https://www.linkedin.com/jobs/) | Ammattilaisverkoston työnhakutoiminto, erinomainen verkostojen rakentamiseen |
| [Indeed](https://www.indeed.com) | Maailman suurin työnhakusivusto, kattaa globaaleja mahdollisuuksia |

#### Teknologia-alan erikoissivustot

| Sivusto | Kuvaus |
|---------|--------|
| [Golang Cafe](https://golang.cafe/) | Go-ohjelmointikielen erikoissivusto, Go-kehittäjien työpaikat |
| [TeamIT](https://teamit.fi/en/recruiting/) | Suomen IT-alan rekrytointipalvelu, teknologia- ja digitaalialan roolit |
| [Mozilla Careers](https://www.mozilla.org/en-US/careers/listings/) | Mozilla:n työpaikat, avoimen lähdekoodin ja web-teknologioiden roolit |

#### Freelancer- ja projektisivustot

| Sivusto | Kuvaus |
|---------|--------|
| [DigiaHub](https://digiahub.com/Project/OpenProjects) | Suomen digitaalialan projektisivusto, freelancer-mahdollisuudet |
| [Finitec Gigs](https://www.finitec.fi/en/gigs) | Suomen IT-konsulttitalon projektisivusto, freelancer-roolit |
| [Verama](https://app.verama.com/job-requests) | Suomen teknologia-alan projektisivusto, freelancer-mahdollisuudet |
| [NordGigs](https://nordgigs.com/projects) | Pohjoismaiden projektisivusto, freelancer-roolit |
| [Gofore Gigs](https://gigs.gofore.com/gigs/) | Gofore-konsulttitalon projektisivusto, freelancer-mahdollisuudet |
| [Witted Partners](https://wittedpartners.com/) | Suomen teknologia-konsulttitalon projektisivusto |
| [Solita Friends](https://www.solita.fi/friends-of-solita/) | Solita-konsulttitalon freelancer-verkosto |
| [Right People Group](https://rightpeoplegroup.com/open-assignments) | Suomen IT-konsulttitalon projektisivusto |
| [Plantrs](https://plantrs.com) | Suomen teknologia-alan projektisivusto |
| [Conexus DX](https://www.conexusdx.com) | Suomen digitaalialan konsulttitalon projektisivusto |
| [Endeavour Recruitment](https://www.endeavourrecruitment.com) | Kansainvälinen rekrytointipalvelu, teknologia-alan roolit |
| [NineDots](https://ninedots.io) | Suomen teknologia-alan projektisivusto |

#### Suuret teknologiayritykset

| Sivusto | Kuvaus |
|---------|--------|
| [Nokia Careers](https://careers.nokia.com) | Nokian työpaikat, telekommunikaatio- ja teknologia-alan roolit |
| [Samsung Careers](https://careers.samsung.com) | Samsungin työpaikat, elektroniikka- ja teknologia-alan roolit |
| [Apple Jobs](https://jobs.apple.com) | Applen työpaikat, laitteisto- ja ohjelmistokehitys |
| [Google Careers](https://careers.google.com) | Googlen työpaikat, ohjelmistokehitys ja AI |
| [Microsoft Careers](https://careers.microsoft.com) | Microsoftin työpaikat, ohjelmistokehitys ja pilvipalvelut |
| [OpenAI Careers](https://openai.com/careers) | OpenAI:n työpaikat, tekoäly- ja koneoppimisen roolit |
| [DeepMind Careers](https://careers.deepmind.com) | DeepMindin työpaikat, tekoälytutkimus ja -kehitys |
| [Spotify Jobs](https://jobs.spotify.com) | Spotifyn työpaikat, musiikki- ja ohjelmistoteknologia |
| [Wolt Jobs](https://wolt.com/en/jobs) | Woltin työpaikat, kuljetus- ja ohjelmistoteknologia |
| [Supercell Careers](https://supercell.com/en/careers) | Supercellin työpaikat, pelikehitys |
| [AWS Careers](https://aws.amazon.com/careers) | Amazon Web Servicesin työpaikat, pilviteknologia |
| [Meta Careers](https://careers.meta.com) | Metan työpaikat, sosiaalinen media ja VR/AR |
| [Stripe Jobs](https://stripe.com/jobs) | Stripen työpaikat, maksupalvelut ja ohjelmistokehitys |
| [Revolut Careers](https://revolut.com/careers) | Revolutin työpaikat, fintech ja ohjelmistokehitys |
| [Adyen Jobs](https://jobs.adyen.com) | Adyenin työpaikat, maksupalvelut ja teknologia |
| [Wise Jobs](https://wise.com/jobs) | Wisen työpaikat, rahansiirrot ja fintech |
| [Databricks Jobs](https://jobs.databricks.com) | Databricksin työpaikat, data-analyysi ja pilviteknologia |
| [Snowflake Careers](https://careers.snowflake.com) | Snowflaken työpaikat, pilvipohjainen data-analyysi |
| [Palantir Careers](https://www.palantir.com/careers) | Palantirin työpaikat, data-analyysi ja ohjelmistokehitys |
| [Atlassian Careers](https://careers.atlassian.com) | Atlassianin työpaikat, ohjelmistokehitystyökalut |
| [GitLab Jobs](https://jobs.gitlab.com) | GitLabin työpaikat, DevOps ja ohjelmistokehitys |
| [Figma Jobs](https://boards.greenhouse.io/figma) | Figman työpaikat, suunnittelu- ja ohjelmistotyökalut |
| [Tesla Careers](https://careers.tesla.com) | Teslan työpaikat, sähköajoneuvot ja energia |
| [NVIDIA Careers](https://careers.nvidia.com) | NVIDIAn työpaikat, GPU-teknologia ja AI |
| [AMD Careers](https://careers.amd.com) | AMD:n työpaikat, prosessorit ja grafiikkakortit |
| [ASML Careers](https://www.asml.com/en/careers) | ASML:n työpaikat, puolijohdeteknologia |
| [ARM Careers](https://careers.arm.com) | ARM:n työpaikat, prosessoriarkkitehtuuri |
| [Infineon Careers](https://careers.infineon.com) | Infineonin työpaikat, puolijohdeteknologia |

#### Teollisuus- ja energia-alan yritykset

| Sivusto | Kuvaus |
|---------|--------|
| [Siemens Careers](https://careers.siemens.com) | Siemensin työpaikat, teollisuusautomaatio ja energia |
| [Ericsson Careers](https://careers.ericsson.com) | Ericssonin työpaikat, telekommunikaatio ja 5G |
| [Huawei Talent](https://www.huawei.com/en/talent) | Huawein työpaikat, telekommunikaatio ja teknologia |
| [Airbus Careers](https://careers.airbus.com) | Airbusin työpaikat, ilmailu- ja avaruusteknologia |
| [Boeing Careers](https://careers.boeing.com) | Boeingin työpaikat, ilmailu- ja puolustusteknologia |
| [Lockheed Martin Careers](https://careers.lockheedmartin.com) | Lockheed Martinin työpaikat, puolustus- ja avaruusteknologia |
| [Shell Careers](https://careers.shell.com) | Shellin työpaikat, energia ja öljy |
| [BP Careers](https://careers.bp.com) | BP:n työpaikat, energia ja öljy |

#### Pankki- ja rahoitussektori

| Sivusto | Kuvaus |
|---------|--------|
| [Nordea Careers](https://careers.nordea.com) | Nordean työpaikat, pankki- ja rahoituspalvelut |
| [OP Careers](https://op-careers.fi) | OP:n työpaikat, pankki- ja vakuutuspalvelut |
| [Danske Bank Careers](https://www.danskebank.com/careers) | Danske Bankin työpaikat, pankki- ja rahoituspalvelut |
| [Swedbank Careers](https://careers.swedbank.com) | Swedbankin työpaikat, pankki- ja rahoituspalvelut |
| [SEB Jobs](https://jobs.sebgroup.com) | SEB:n työpaikat, pankki- ja rahoituspalvelut |
| [Handelsbanken Careers](https://careers.handelsbanken.com) | Handelsbankenin työpaikat, pankki- ja rahoituspalvelut |
| [Klarna Careers](https://www.klarna.com/careers) | Klarnan työpaikat, fintech ja maksupalvelut |
| [PayPal Careers](https://careers.paypal.com) | PayPalin työpaikat, fintech ja maksupalvelut |
| [Mastercard Jobs](https://jobs.mastercard.com) | Mastercardin työpaikat, maksupalvelut ja fintech |
| [Visa Careers](https://careers.visa.com) | Visan työpaikat, maksupalvelut ja fintech |
| [London Stock Exchange Jobs](https://londonstockexchange.wd3.myworkdayjobs.com/LSEG) | LSEG:n työpaikat, pörssi- ja rahoituspalvelut |
| [Bloomberg Jobs](https://jobs.bloomberg.com) | Bloombergin työpaikat, rahoitusdata ja media |
| [Goldman Sachs Careers](https://careers.goldmansachs.com) | Goldman Sachsin työpaikat, investointipankki |
| [Morgan Stanley Careers](https://careers.morganstanley.com) | Morgan Stanleyn työpaikat, investointipankki |
| [JPMorgan Careers](https://careers.jpmorgan.com) | JPMorganin työpaikat, investointipankki |
| [Deutsche Bank Careers](https://careers.deutschebank.com) | Deutsche Bankin työpaikat, investointipankki |
| [Credit Suisse Careers](https://careers.credit-suisse.com) | Credit Suissen työpaikat, investointipankki |

#### Lääke- ja bioteknologia-alan yritykset

| Sivusto | Kuvaus |
|---------|--------|
| [Thermo Fisher Careers](https://careers.thermofisher.com) | Thermo Fisherin työpaikat, lääketieteelliset laitteet |
| [Roche Careers](https://careers.roche.com) | Rochen työpaikat, lääketeollisuus ja diagnostiikka |
| [Novartis Careers](https://careers.novartis.com) | Novartisin työpaikat, lääketeollisuus |
| [Bayer Careers](https://careers.bayer.com) | Bayerin työpaikat, lääketeollisuus ja maatalous |
| [GSK Careers](https://careers.gsk.com) | GSK:n työpaikat, lääketeollisuus |
| [Pfizer Careers](https://careers.pfizer.com) | Pfizerin työpaikat, lääketeollisuus |
| [AstraZeneca Careers](https://careers.astrazeneca.com) | AstraZenecan työpaikat, lääketeollisuus |
| [Sanofi Jobs](https://jobs.sanofi.com) | Sanofin työpaikat, lääketeollisuus |
| [Lilly Jobs](https://careers.lilly.com) | Lillyn työpaikat, lääketeollisuus |
| [Abbott Jobs](https://jobs.abbott) | Abbottin työpaikat, lääketieteelliset laitteet |
| [Medtronic Careers](https://careers.medtronic.com) | Medtronicin työpaikat, lääketieteelliset laitteet |
| [Philips Jobs](https://careers.philips.com) | Philipsin työpaikat, lääketieteelliset laitteet |
| [Becton Dickinson Jobs](https://jobs.becton.com) | Becton Dickinsonin työpaikat, lääketieteelliset laitteet |
| [Bosch Healthcare Careers](https://careers.bosch-healthcare.com) | Bosch Healthcaren työpaikat, lääketieteelliset laitteet |

#### Maatalous- ja kemianalan yritykset

| Sivusto | Kuvaus |
|---------|--------|
| [Yara Careers](https://www.yara.com/careers) | Yaran työpaikat, lannoitteet ja maatalous |
| [Valio Careers](https://careers.valio.com) | Valion työpaikat, maitotalous ja elintarviketeollisuus |
| [KWS Careers](https://careers.kws.com) | KWS:n työpaikat, siementalous ja kasvinjalostus |
| [Corteva Careers](https://careers.corteva.com) | Cortevan työpaikat, maatalous ja kasvinsuojelu |
| [Syngenta Careers](https://careers.syngenta.com) | Syngentan työpaikat, maatalous ja kasvinsuojelu |
| [Cargill Jobs](https://jobs.cargill.com) | Cargillin työpaikat, elintarviketeollisuus ja maatalous |
| [John Deere Careers](https://careers.john-deere.com) | John Deeren työpaikat, maatalouskoneet |
| [AGCO Careers](https://careers.agco.com) | AGCO:n työpaikat, maatalouskoneet |
| [BASF Careers](https://careers.basf.com) | BASF:n työpaikat, kemianalan ja materiaalit |
| [Bunge Careers](https://careers.bunge.com) | Bungen työpaikat, elintarviketeollisuus ja maatalous |
| [ADM Careers](https://careers.adm.com) | ADM:n työpaikat, elintarviketeollisuus ja maatalous |

#### Rekrytointipalvelut ja työkalut

| Sivusto | Kuvaus |
|---------|--------|
| [Lever Jobs](https://jobs.lever.co) | Leverin työpaikat, rekrytointiteknologia |
| [Greenhouse Jobs](https://boards.greenhouse.io) | Greenhousen työpaikat, rekrytointiteknologia |

#### Julkishallinto ja kansainväliset organisaatiot

| Sivusto | Kuvaus |
|---------|--------|
| [EU Careers](https://jobs.european-union.europa.eu) | Euroopan unionin työpaikat, julkishallinto |
| [ESA Careers](https://careers.esa.int) | Euroopan avaruusjärjestön työpaikat, avaruusteknologia |

#### Vaihtoehtoiset työnhakusivustot

| Sivusto | Kuvaus |
|---------|--------|
| [Instaffo Jobs](https://jobs.instaffo.com) | Suomen työnhakusivusto, erityisesti IT- ja teknologia-alan rooleille |
| [Portfolio Jobs](https://portfoliojobs.tcv.com) | TCV:n portfolio-yritysten työpaikat, teknologia-alan startupit |
| [ODS.ai](https://ods.ai) | Tekoäly- ja data-alan erikoissivusto |
| [Carbonfact](https://www.carbonfact.com) | Ympäristö- ja kestävän kehityksen alan työpaikat |

**Huomio:** Tämä luettelo sisältää sekä suoria työnhakusivustoja että yritysten omia työpaikkasivuja. Freelancer-sivustot ovat erityisen hyödyllisiä projektipohjaisen työnhaun kannalta, kun taas suurten yritysten sivustot tarjoavat mahdollisuuksia pysyviin rooleihin. Tekoälyavusteisen työnhaun yhteydessä nämä sivustot voidaan hyödyntää ChatGPT:n Verkkohaku-työkalulla ilmoitusten etsimiseen ja analysointiin.
