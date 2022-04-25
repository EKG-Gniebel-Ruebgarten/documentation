---
title: Glossar
sidebar_position: 4
---

# Glossar


## Eintrag / Inhalt
Ein Eintrag in einer Sammlung. Kann alles von einem `Beitrag` über eine `Veranstaltung` bis hin zu einer `Person` sein.

[Mehr zum Erstellen und Verwalten von Inhalten hier](content/create-and-edit)


## Inhaltstyp
Eine "Sorte" einer Sammlung. Beispielsweise sind `Seiten` ein Inhaltstyp, genau wie `Beiträge` und `Veranstaltungen` Inhaltstypen sind. Jeder Inhaltstyp hat andere Felder und Optionen und wird auf der Website anders dargestellt. Manche (wie `Seiten`, `Beiträge`, `Veranstaltungen`, ...) bekommen ihre eigene Seite. Andere (z.B. `Personen`, `Orte`, `Formulare`, ...) haben keine eigene Seite, sondern können in andere Inhalte eingebettet oder mit ihnen verknüpft werden. 


## Slug

:::note Hinweis

Slugs werden in der Regel automatisch erstellt. Du musst dich nicht um sie kümmern. Wenn es dich dennoch interessiert, lies weiter.

:::

Ein Slug ist ein Identifikationsname, der

- innerhalb eines Inhaltstyps eindeutig sein muss, d.h. nicht mehrmals verwendet werden kann (wird automatisch sichergestellt)
- wenn es einen Titel gibt automatisch aus diesem erstellt wird, sodass du dich darum nicht mehr kümmern musst
- keine Leer- und Sonderzeichen enthalten darf (wird automatisch sichergestellt)

Der Slug steht u.a. in der URL-Zeile des Browsers. Hat ein Beitrag beispielsweise einen Titel von "Rückschau zum Gemeindefest", wird der Slug automatisch `rueckschau-zum-gemeindefest` lauten. Möchte man den Beitrag dann verlinken, wäre der Link folgender:

`https://ekg-gniebel-ruebgarten.de/article/rueckschau-zum-gemeindefest`


## Fieldset
Siehe ["Was ist ein Fieldset?"](content/forms/fieldsets) in der Kategorie "Formulare".


## Token

:::note Hinweis

Tokens werden in der Regel automatisch erstellt. Du musst dich nicht um sie kümmern. Wenn es dich dennoch interessiert, lies weiter.

:::

Tokens sind einzigartige Identifikatoren, die automatisch aus zufälligen Zahlen und Buchstaben generiert werden. Damit hat er Ähnlichkeiten mit einem Slug (siehe Definition oben), ist aber genau wie ein Passwort so gut wie nicht zu erraten. `768029106571939889fc22ed4ce331ffdf2b081b` wäre ein Beispiel für einen solchen Token. Man sieht recht gut, dass er zufällig und nahezu unmöglich zu erraten ist.

**Wozu?**

Wenn sich jemand beispielsweise für den E-Mail-Newsletter anmeldet, braucht man auch wieder eine Möglichkeit, sich abzumelden. Nun könnte einfach sagen, dass man dazu seine E-Mail-Adresse angeben könnte, aber dann könnte jeder, der die E-Mail-Adresse kennt, den Nutzer abmelden. Es braucht also etwas, was nur der Newsletter-Empfänger und der Betreiber der Webseite weiß, und genau das ist der Token. Damit hat er in gewisser Weise Ähnlichkeit mit einem Passwort, nur dass man ihn nicht selbst wählt.
