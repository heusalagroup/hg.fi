# Tekoäly työnhaussa - Landing Page

Tämä on "Tekoäly työnhaussa" e-kirjaprojektin landing-sivusto, joka sijaitsee osoitteessa `/kirjat/tyonhaku/`.

## Projektin kuvaus

Landing-sivusto on suunniteltu markkinoimaan "ChatGPT työnhaun opas" e-kirjaa, joka on early access -versiossa myynnissä hintaan 19 € sis. ALV 10%. Sivusto on rakennettu itsenäisenä SPA-sivustona pääsivuston alla.

## Sivuston rakenne

```
docs/kirjat/tyonhaku/
├── index.html          # Pääsivu
├── style.css           # Tyylitiedosto
├── script.js           # JavaScript-toiminnallisuus
├── assets/             # Kuvat ja muut resurssit
└── README.md           # Tämä tiedosto
```

## Sivun osiot

1. **Hero-osio** - Kirjan nimi, kuvaus ja CTA-painike
2. **Kärkihyödyt** - Kolme pääasiallista hyötyä kirjasta
3. **Sisältöesittely** - Luvut 1-6 ja julkaisuvaihe
4. **Kohderyhmä** - Kenelle kirja on suunnattu
5. **Arvostelut** - Testimonials (placeholder)
6. **Lopullinen CTA** - Ostopainike sivun alaosassa

## Tekniset ominaisuudet

- **Responsiivinen design** - Toimii kaikilla laitteilla
- **Moderni CSS** - CSS Grid, Flexbox, CSS Variables
- **Interaktiiviset animaatiot** - Hover-efektit ja scroll-animaatiot
- **SEO-optimoitu** - Meta-tagit, structured data
- **Saavutettavuus** - WCAG-yhteensopiva
- **Nopea lataus** - Optimoitu suorituskyky

## Väripaletti

- **Pääväri (sininen)**: `#2563eb` - Luottamusta ja ammattimaisuutta
- **Korosteväri (oranssi)**: `#f59e0b` - Energiaa ja innovaatiota
- **Vihreä**: `#16a34a` - Positiivisuutta ja kasvua
- **Taustavärit**: Vaalea sininen ja harmaa

## CTA-linkit

Kaikki ostopainikkeet ohjaavat Holvi-verkkokauppaan:
- **URL**: https://holvi.com/shop/hangovergames/product/3f80f1d077f1b9765468a2f9010127f5/
- **Hinta**: 19 € sis. ALV 10%

## Kehitys

### Paikallinen kehitys
1. Avaa `docs/kirjat/tyonhaku/index.html` selaimessa
2. Muutokset näkyvät välittömästi

### Tuotantoon julkaisu
Sivusto julkaistaan automaattisesti kun `docs/`-hakemisto päivitetään.

## Muutokset ja päivitykset

### Sisällön päivitys
- Muokkaa `index.html`-tiedostoa sisällön muuttamiseksi
- CSS-muutokset tehdään `style.css`-tiedostoon
- JavaScript-toiminnallisuus `script.js`-tiedostossa

### Kuvien lisäys
1. Lisää kuvat `assets/`-hakemistoon
2. Päivitä HTML:ssä olevat kuvaviittaukset
3. Optimoi kuvat web-käyttöön

## SEO ja analytiikka

### Meta-tagit
- Title: "Tekoäly työnhaussa – ChatGPT työnhaun opas e-kirjana"
- Description: Sisältää kirjan kuvauksen ja avainsanat
- Open Graph: Facebook- ja Twitter-jakamista varten

### Structured Data
- Schema.org Book-tyyppi
- Hinta, saatavuus ja julkaisutiedot

### Seuranta
- CTA-klikkien seuranta JavaScript:ssä
- Google Analytics -integraatio voidaan lisätä

## Saavutettavuus

- **Näppäimistönavigointi** - Kaikki elementit saavutettavissa näppäimistöllä
- **Screen reader -tuki** - Semanttinen HTML-rakenne
- **Kontrastit** - Riittävä kontrasti teksteissä
- **Liikkeiden vähentäminen** - `prefers-reduced-motion` -tuki

## Suorituskyky

- **Kriittisten resurssien preload** - CSS ja kuvat
- **Lazy loading** - Kuvat ladataan tarvittaessa
- **Optimoitu CSS** - Minimoidut animaatiot
- **Nopea lataus** - Inline SVG:t ja optimoidut kuvat

## Tulevat ominaisuudet

- [ ] Kansikuvan lisäys
- [ ] Lisää arvosteluja
- [ ] Video-esittely
- [ ] Latausnäyte (PDF)
- [ ] Yhteystietolomake
- [ ] Analytics-integraatio

## Yhteystiedot

- **Kehittäjä**: Heusala Group
- **Email**: jhh@hg.fi
- **Web**: https://hg.fi

---

*Päivitetty: 2025-01-27* 