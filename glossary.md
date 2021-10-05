---
layout: default
title: Glossar
nav_order: 2
permalink: /glossar
---

# Glossar
{: .no_toc }

## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

## Eintrag / Inhalt
Ein Eintrag in einer Sammlung. Kann alles von `Beitrag` über `Veranstaltung` bis hin zu `Person` sein.

[Mehr zum Erstellen und Verwalten von Inhalten hier](/plugins/wiki/basics/create-and-edit)

---

## Inhaltstyp
Eine Sammlung-Sorte. Beispielsweise sind `Seiten` ein Inhaltstyp, genau wie `Beiträge` und `Veranstaltungen` Inhaltstypen sind. Jeder Inhaltstyp hat andere Felder und Optionen und wird auf der Website anders dargestellt. Manche (wie `Seiten`, `Beiträge`, `Veranstaltungen`, ...) bekommen ihre eigene "Seite" (nicht zu verwechseln mit dem Inhaltstyp). Andere (z.B. `Personen`, `Orte`, `Formulare`, ...) haben keine eigene "Seite", sondern können in andere eingebettet werden. 

---

## Slug
Ein Slug ist ein Identifikationsname, der

- wenn es einen Titel gibt automatisch aus diesem erstellt wird, sodass du dich darum nicht mehr kümmern musst
- keine Leer- und Sonderzeichen enthalten darf (wird automatisch sichergestellt)
- innerhalb eines Inhaltstyps nicht mehrmals werden kann (wird automatisch sichergestellt)

Der Slug steht u.a. in der URL-Zeile des Browsers. Hat ein Beitrag beispielsweise einen Titel von "Rückschau zum Gemeindefest", wird der Slug automatisch `rueckschau-zum-gemeindefest` lauten. Möchte man den Beitrag dann verlinken, wäre der Link, der aus dem Slug generiert wird folgender:

`https://ekg-gniebel-ruebgarten.de/article/rueckschau-zum-gemeindefest`

---

## Fieldset
Siehe ["Was ist ein Fieldset?"](/plugins/wiki/forms/fieldsets)

---

## Token
*Normalerweise werden Tokens voll automatisch generiert. Das bedeutet, dass du dich eigentlich um Tokens nicht kümmern musst. Wenn du dennoch wissen willst, was ein Token ist, hier die Erklärung:*

Tokens sind ein einzigartige Identifikatoren, die automatisch aus zufälligen Zahlen und Buchstaben generiert werden. Damit hat er Ähnlichkeiten mit einem Slug (siehe Definition oben), ist aber so gut wie nicht zu erraten. `768029106571939889fc22ed4ce331ffdf2b081b` wäre ein Beispiel für einen solchen Token. Man sieht recht gut, dass er zufällig und nahezu unmöglich zu erraten ist.

**Wozu?**

Wenn sich jemand beispielsweise für den E-Mail-Newsletter anmeldet, braucht man auch wieder eine Möglichkeit, sich abzumelden. Nun könnte einfach sagen, dass man dazu seine E-Mail-Adresse angeben könnte, aber dann könnte jeder, der die E-Mail-Adresse kennt, den Nutzer abmelden. Es braucht also etwas, was nur der Newsletter-Empfänger und der Betreiber der Webseite weiß, und genau das ist der Token. Damit hat er in gewisser Weise Ähnlichkeit mit einem Passwort, nur dass man ihn nicht selbst wählt.
