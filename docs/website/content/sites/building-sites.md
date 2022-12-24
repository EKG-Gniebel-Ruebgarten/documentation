---
title: Eine Seite bauen
sidebar_position: 1
---

# Eine Seite bauen

Seiten geben dir die Möglichkeit, aufwendige und optisch ansprechende Layouts zu bauen. Die Grundlage hierfür ist die frei definierbare Zone unter `Inhalt`, in der du verschiedene `Blöcke` hinzugefügen kannst. Klicke dort einfach auf das `+`, um loszulegen.

![Zu Inhalt hinzufügen](//img/sites-add_to_content.png)

## Inhalts-Blöcke

![Überschrift](//img/ui-blocks/heading.svg)

### Überschrift
Eine große Überschrift mit kleinem Trennstrich darunter. Recht selbsterklärend. 😉

![Text](//img/ui-blocks/text.svg)

### Text
Ein Textabschnitt, der mit Hilfe des Texteditors formatiert werden kann. Um die Formatierungsoptionen anzuzeigen wähle den Text aus, den du formatieren willst. Dann erscheint eine Leiste mit folgenden Optionen:
- `B`: Fett drucken
- `I`: Kursiv drucken
- `Tₓ`: Gesamte Formatierung löschen

Außerdem gibt es in der oberen Leiste folgende Funktionen:
- `Absatz`: Welche Funktion der Text hat.<br/>Ist er eine Überschrift oder ein normaler Abschnitt? Dementsprechend wird er nachher auch auf der Website dargestellt.
- Listenoptionen von links nach rechts
  - Unnummerierte Aufzählung
  - Nummerierte Aufzählung
  - Aufzählung eine Ebene höher rücken
  - Aufzählung eine Ebene tiefer rücken (macht eine "Unter-Liste")
- `-`: Trennlinie einfügen
- Medien einfügen
- `"`: Zitat einfügen
- Link einfügen

#### Bitte beachten
- Benutze fett und kursiv *nicht* gleichzeitig, um Text hervorzuheben.
- Drücke einmal ⏎ (Enter) auf deiner Tastatur, um einen neuen Absatz zu machen. Für eine neue Zeile drücke ⇧ + ⏎ (Umstelltaste (Shift) und Enter).<br/>Die Unterscheidung ist wichtig, da ein Absatz einen neuen Textabschnitt ankündigt (also von Bedeutung für die Struktur des Textes ist), während eine neue Zeile nur ein Werkzeug zur Formatierung ist.

#### Sonstige Felder
`Hintergrund`:
- `Normal`: Kein Hintergrund
- `Minimal`: Leichtes Grau
- `Hervorgehoben`: Weiß mit Schatten
- `Akzent-Farbe`: Heller Text auf violetter Akzentfarbe

![Button](//img/ui-blocks/button.svg)

### Button
Ein klickbarer Link mit verschiedenen Darstellungsoptionen.

`Text`: Der Text, der auf dem Button angezeigt wird

`Link`: Wo der Benutzer der Website landen soll, wenn er auf den Button klickt

`Linkes Icon`, `Rechtes Icon`: Die Symbole, die neben dem Text angezeigt werden sollen. Zum Aufheben der Auswahl das `X` rechts neben der Suchfunktion klicken. Dadurch wird kein Icon mehr angezeigt.

`Hintergrund`:
- `Normal`: Kein Hintergrund
- `Minimal`: Leichtes Grau
- `Hervorgehoben`: Weiß mit Schatten, ändert die Farbe wenn die Maus darüber ist
- `Akzent-Farbe`: Heller Text auf violetter Akzentfarbe

### Bild
`Breite`:
- `Breit`: Volle Breite des Bildschirms
- `Normal`: Gleiche Breite wie der Großteil des restlichen Seiteninhalts
- `Schmal`: Schmal

Bitte achte bei der Wahl der Breite des Bildes darauf, dass Bilder mit schlechter Auflösung in großer Darstellung nicht gut aussehen.

Wenn du mehrere Bilder einbetten willst benutze statt diesem Block bitte eine [Galerie](#galerie).

![Akkordeon](//img/ui-blocks/accordeon.svg)

### Akkordeon
Benutze diesen Block für weiterführende Informationen, die nicht unbedingt von Anfang an sichtbar sein müssen. Der Besucher muss auf den Titel klicken, damit sich der der Inhalt ausklappt. Es können mehrere Einträge hinzugefügt werden.

![Fortschritt](//img/ui-blocks/progress.svg)

### Fortschritt
Ein "Ladebalken" mit Beschriftung. Nützlich beispielsweise für Spendenaktionen.

`Beschriftung`: Was auf dem Balken angezeigt wird (z.B. Spendenstand)

`Prozent`: Wie viel des Balkens gefüllt sein soll (zwischen 0 und 100)


## Listen-Inhalt

Die verschiedenen Listen-Typen teilen sich oft Einstellungen. Deswegen werden sie hier nicht per Block, sondern einmal gesamt erklärt.

### Darstellung
`Erscheinungsbild`:
- `Raster`: Raster, in dem immer zwei Einträge nebeneinander sind
- `Raster mit Bildern`: Wie `Raster`, aber mit Bildern aus den Metadaten der Einträge (sofern definiert)
- `Liste mit Bildern`: Liste mit Bildern im Hintergrund und großen Zwischenabständen

### Kategorien
Wird nur bei Inhaltstypen mit [Kategorien](../categories) angezeigt.

`Anzuzeigende Kategorien`: Welche Kategorien benötigt werden, um in dieser Liste angezeigt zu werden. Frei lassen, wenn alle angezeigt werden sollen.

`Zu versteckende Kategorien`: Wenn ein Eintrag eine dieser Kategorien besitzt wird er nicht in dieser Liste angezeigt.

### Mehr laden
`Limit`: Wie viele Einträge zunächst geladen werden sollen

`"Mehr Laden"-Button`: Ob der Benutzer mehr laden darf oder nicht. Dementsprechend wird ein Button angezeigt.

### Besonderheiten
#### Seiten
`Müssen ... untergeordnet sein`: Seiten haben ein Hierarchie-System statt Kategorien. Das heißt, dass bspw. die Taufe-Seite der Lebenssationen-Seite untergeordnet ist. Über dieses Feld lassen sich basierend darauf die Seiten filtern.

#### Einrichtungen
`Karte anzeigen`: Festlegen, ob eine Karte über der Liste mit den Orten der Einrichtungen angezeigt werden soll. Probiere es einfach mal aus, es ist ziemlich cool...

## Eingebetteter Inhalt

![Orte](//img/ui-blocks/locations.svg)

### Orte
Einen oder mehrere Orte in einer Karte anzeigen.

[Mehr zu Orten](../locations)

### Galerie
Eine Ansammlung von Bildern in wählbarem Layout.

![Formular](//img/ui-blocks/form.svg)

### Formular
Ein Formular einbetten, das dann in der Seite direkt ausgefüllt werden kann. Siehe [Formulare erstellen](../forms/building-forms), falls du eins erstellen willst.

### Einbetten
Kann andere Seiten in unsere Seite integrieren. Das ist z.B. für Video-Einbettungen von YouTube nützlich. Gib einfach die URL (der Text in der auf der Website in der Browser-Zeile steht) an.

![Personen](//img/ui-blocks/people.svg)

### Personen
Zeige Visitenkarte der ausgewählten Person(en). Falls eine Person noch nicht existiert, gehe unter `Sammlungen` auf `Personen` und erstelle sie.

[Mehr zu Personen](../people)
