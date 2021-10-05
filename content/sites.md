---
layout: default
title: 📄 Seiten
nav_order: 1
parent: Inhalte
permalink: /content/sites
---

# 📄 Seiten
{: .no_toc }
Seiten enthalten größtenteils statische Informationen. Im Gegensatz zu Artikeln bleiben die Informationen, die sie enthalten länger relevant.

## Seiten und ihre Verbindung mit anderen Inhaltstypen
{: .no_toc }
Seiten können sehr aufwendige Layouts haben. Aber was ist, wenn man beispielsweise bei einer Veranstaltung auch solche Layouts haben will?

Aus diesem Grund können `Veranstaltungen`, `Einrichtungen` und `Gruppen` mit einer `Seite` verlinkt werden. Dann wird beim Aufrufen der Veranstaltung/Einrichtung/Gruppe der Inhalt aus der verlinkten Seite geladen. Denke daran, dass in den meisten Fällen nur der Inhalt der Seite geladen wird und nicht mehr (also nicht Titel, Titelbild, Seiten-Beschreibung und weitere Felder die nicht unter "Inhalt" sind). Um Titel, Bild und Beschreibung festzulegen, ändere diese direkt in der Veranstaltung/Einrichtung/Gruppe.

In den meisten Fällen ist es natürlich sinnvoll, die Seite gleich wie die Veranstaltung/Einrichtung/Gruppe zu nennen, damit man sie leichter zuordnen kann.

## Eine Seite bauen
{: .no_toc }
Seiten geben dir die Möglichkeit, aufwendige und optisch ansprechende Layouts zu bauen. Die Grundlage hierfür ist die frei definierbare Zone unter `Inhalt`, in der du verschiedene `Blöcke` hinzugefügen kannst. Klicke dort einfach auf das `+`, um loszulegen.

![Zu Inhalt hinzufügen](/website-backend-documentation/assets/images/sites-add_to_content.png)
{: .text-center }

1. TOC
{:toc}

### Inhalts-Blöcke
ui-blocks-content

![Überschrift](/website-backend-documentation/assets/images/ui-blocks/heading.svg)

#### Überschrift
Eine große Überschrift mit kleinem Trennstrich darunter. Recht selbsterklärend. 😉

![Text](/website-backend-documentation/assets/images/ui-blocks/text.svg)

#### Text
Ein Textabschnitt, der mit Hilfe des Texteditors formatiert werden kann. Um die Formatierungsoptionen anzuzeigen wähle den Text aus, den du formatieren willst. Dann erscheint eine Leiste mit folgenden Optionen:

- `Normal`: Welche Funktion der Text hat.<br/>Ist er eine Überschrift oder ein normaler Abschnitt? Dementsprechend wird er nachher auch auf der Website dargestellt.
- `B`: Fett drucken
- `I`: Kursiv drucken
- `S`: Durchgestrichen
- `"`: Zitat einfügen
- Listenoptionen von links nach rechts: Nummerierte Aufzählung, Unnummerierte Aufzählung, Aufzählung eine Ebene höher rücken, Aufzählung eine Ebene tiefer rücken (macht eine "Unter-Liste")
- Link einfügen
- `Tₓ`: Gesamte Formatierung löschen

##### Bitte beachten
- Benutze fett und kursiv *nicht* gleichzeitig, um Text hervorzuheben.
- Drücke einmal ⏎ (Enter) auf deiner Tastatur, um einen neuen Absatz zu machen. Für eine neue Zeile drücke ⇧ + ⏎ (Umstelltaste (Shift) und Enter).<br/>Die Unterscheidung ist wichtig, da ein Absatz einen neuen Textabschnitt ankündigt (also von Bedeutung für die Struktur des Textes ist), während eine neue Zeile nur ein Werkzeug zur Formatierung ist.

##### Sonstige Felder
`Hintergrund`:
- `normal`: Kein Hintergrund
- `subtle`: Leichtes Grau
- `raised`: Weiß mit Schatten
- `accented`: Heller Text auf violetter Akzentfarbe

![Button](/website-backend-documentation/assets/images/ui-blocks/button.svg)

#### Button
Ein klickbarer Link mit verschiedenen Darstellungsoptionen.

`Text`: Der Text, der auf dem Button angezeigt wird

`Hintergrund`:
- `normal`: Kein Hintergrund
- `subtle`: Leichtes Grau
- `raised`: Mit Schatten, ändert die Farbe wenn die Maus darüber ist
- `accented`: Heller Text auf violetter Akzentfarbe

`Linkes Icon`, `Rechtes Icon`: Die Symbole, die neben dem Text angezeigt werden sollen. Zum Aufheben der Auswahl das `X` rechts neben der Suchfunktion klicken. Dadurch wird kein Icon mehr angezeigt.

`Link`: Wo der Benutzer der Website landen soll, wenn er auf den Button klickt

#### Bild
`Breite`:
- `wide`: Volle Breite des Bildschirms
- `normal`: Gleiche Breite wie der Großteil des restlichen Seiteninhalts
- `narrow`: Schmal

Bitte achte bei der Wahl der Breite des Bildes darauf, dass Bilder mit schlechter Auflösung in großer Darstellung nicht gut aussehen.

Wenn du mehrere Bilder einbetten willst benutze statt diesem Block bitte eine [Galerie](#galerie).

![Akkordeon](/website-backend-documentation/assets/images/ui-blocks/accordeon.svg)

#### Akkordeon
Benutze diesen Block für weiterführende Informationen, die nicht unbedingt von Anfang an sichtbar sein müssen. Der Besucher muss auf den Titel klicken, damit sich der der Inhalt ausklappt. Es können mehrere Einträge hinzugefügt werden.

![Fortschritt](/website-backend-documentation/assets/images/ui-blocks/progress.svg)

#### Fortschritt
Ein "Ladebalken" mit Beschriftung. Nützlich beispielsweise für Spendenaktionen.

`Beschriftung`: Was auf dem Balken angezeigt wird (z.B. Spendenstand)

`Prozent`: Wie viel des Balkens gefüllt sein soll (zwischen 0 und 100)


### Listen-Inhalt
ui-blocks-lists

Die verschiedenen Listen-Typen teilen sich oft Einstellungen. Deswegen werden sie hier nicht per Block, sondern einmal gesamt erklärt.

#### Darstellung
`Erscheinungsbild`:
- `grid`: Raster, in dem immer zwei Einträge nebeneinander sind
- `image_grid`: Wie `grid`, aber mit Bildern aus den Metadaten der Einträge (sofern definiert)
- `image_list`: Liste mit Bildern hinter den Einträgen und großen Zwischenabständen

#### Kategorien
Wird nur bei Inhaltstypen mit [Kategorien](/plugins/wiki/basics/categories) angezeigt.

`Anzuzeigende Kategorien`: Welche Kategorien benötigt werden, um in dieser Liste angezeigt zu werden. Frei lassen, wenn alle angezeigt werden sollen.

`Zu versteckende Kategorien`: Wenn ein Eintrag eine dieser Kategorien besitzt wird er nicht in dieser Liste angezeigt.

#### Mehr laden
`Limit`: Wie viele Einträge zunächst geladen werden sollen

`"Mehr Laden"-Button`: Ob der Benutzer mehr laden darf oder nicht. Dementsprechend wird ein Button angezeigt.

#### Besonderheiten
##### Seiten
`Müssen ... untergeordnet sein`: Seiten haben ein Hierarchie-System statt Kategorien. Das heißt, dass bspw. die Taufe-Seite der Lebenssationen-Seite untergeordnet ist. Über dieses Feld lassen sich basierend darauf die Seiten filtern.

##### Einrichtungen
`Karte anzeigen`: Festlegen, ob eine Karte über der Liste mit den Orten der Einrichtungen angezeigt werden soll. Probiere es einfach mal aus, es ist ziemlich cool...

### Eingebetteter Inhalt
ui-blocks-include

![Orte](/website-backend-documentation/assets/images/ui-blocks/locations.svg)

#### Orte
Einen oder mehrere Orte in einer Karte anzeigen.

[Mehr zu Orten](/plugins/wiki/other-types/locations)

#### Galerie
Eine Ansammlung von Bildern in wählbarem Layout.

![Formular](/website-backend-documentation/assets/images/ui-blocks/form.svg)

#### Formular
Ein Formular einbetten, das dann in der Seite direkt ausgefüllt werden kann. Siehe [Formulare erstellen](/plugins/wiki/forms/building-forms), falls du eins erstellen willst.

#### Einbetten
Kann andere Seiten in unsere Seite integrieren. Das ist z.B. für Video-Einbettungen von YouTube nützlich. Gib einfach die URL (der Text in der auf der Website in der Browser-Zeile steht) an.

![Personen](/website-backend-documentation/assets/images/ui-blocks/people.svg)

#### Personen
Zeige Visitenkarte der ausgewählten Person(en). Falls eine Person noch nicht existiert, gehe unter `Sammlungen` auf `Personen` und erstelle sie.

[Mehr zu Personen](/plugins/wiki/other-types/people)