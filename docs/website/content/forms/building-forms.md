---
title: Ein Formular erstellen
sidebar_position: 2
parent: 📨 Formulare
grand_parent: Inhalte
permalink: /content/forms/building-forms
---

# Ein Formular erstellen
Um ein Formular zu erstellen gehe links im Menü unter `Plugins` auf `Formulare`. In der Liste der bereits erstellten Formulare gibt es einen einladenden Knopf der genau tut, was du willst: Ein Formular zu erstellen.

## 🏠 Aufbau
Formulare haben eigene Eigenschaften (Name, Deadline, ...), aber die Felder an sich, die man am Ende als Besucher der Website ausfüllt werden über [Fieldsets](/plugins/wiki/forms/fieldsets) definiert.

## 🛑 Ausfüllbeschränkungen
Möchtest du eine Beschränkung nicht anwenden, lasse das Feld einfach leer.
- **Maximale Anzahl**: Es wird nur die angegebene Anzahl an Einreichungen akzeptiert. Hilfreich z.B. für eine begrenzte Platzanzahl bei Veranstaltungen.
- **Maximales Ausfülldatum**: Alle Einreichungen die nach diesem Zeitpunkt kommen werden abgelehnt.

## 📧 E-Mails
### Bestätigungsmail
Die Bestätigungsmail geht immer an die Person, die das Formular ausfüllt. Damit das funktioniert, muss sie eine E-Mail-Adresse angeben können, d.h. dass das [Fieldset](/plugins/wiki/forms/fieldsets) ein E-Mail-Feld haben muss. Gibt es mehr als eins wird Wert des ersten Felds verwendet.

### Benachrichtigungsmail
Diese Mail wird an die eingetragene Adresse verschickt sobald jemand das Formular ausfüllt.