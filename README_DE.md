# Objekte: Teil 1

In dieser Übung arbeitest du mit Objekten; du erstellst neue Objekte, extrahierst Schlüssel (keys) und Werte (values), konvertierst sie in verschiedene Formate, erstellst Methoden für ein Objekt, um Details auszugeben usw.

## Aufgaben

- Arbeite in `solution.js`

**1. Eigenschaften holen.**

Erstelle eine Funktion namens `getProperties`, die ein Array von **Schlüsseln (keys)** eines Javascript-Objekts zurückgibt.

- Beispiel Objekt

```javascript
getProperties({ name: "Mike", class: "4A", course: "English" }); //-> [ 'name', 'class', 'course' ]
```

**2. Werte holen.**

Erstelle eine Funktion namens `getValues`, die ein Array von **Werten (values)** eines Javascript-Objekts zurückgibt.

- Beispiel:

```javascript
getValues({ choice1: "Tee", choice2: "Kaffee", choice3: "Milch" }); // [ 'Tee', 'Kaffee', 'Milch' ]
```

**3. Konvertiere Schlüssel und Werte in Arrays.**

Erstelle eine Funktion namens `getKeyValuePairs`, die ein Objekt in ein Array von Schlüssel-Wert-Paaren umwandelt, wobei jedes Paar selbst ein Array ist. Gib dieses Array zurück.

- Beispiel:

```javascript
getKeyValuePairs({ cats: 1, dogs: 2, turtles: 4 }); //-> [ [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]
```

**4. Konvertiere Schlüssel und Werte in Objekte.**

Erstelle ein Objekt namens `person` mit einigen Eigenschaften und Werten, wie unten gezeigt. Schreibe eine Funktion namens `getKeyValueObjects`, die ein Array von Schlüssel-Wert Objekten zurückgibt.

- Beispiel:

```javascript
let person = {
  firstName: "Michael",
  lastName: "Smith",
  citizenship: "Germany",
  city: "Berlin",
  gender: "male",
  job: "driver",
  age: 28,
  height: 178,
  'eye colour': "brown",
};

getKeyValueObjects(person); //->
/**
[
  { firstName: 'Michael' },
  { lastName: 'Smith' },
  { citizenship: 'Germany' },
  { city: 'Berlin' },
  { gender: 'male' },
  { job: 'driver' },
  { age: 28 },
  { height: 178 },
  { 'eye colour': 'brown' },
];
*/
```

**5. Füge eine Methode hinzu.**

Füge dem Objekt `person` aus Aufgabe 4 eine Methode namens `printDetails` hinzu. Wenn du `person.printDetails()` aufrufst, sollte diese Methode die Werte der Objekte in einem String zurückgeben, wie unten gezeigt:

- Beispiel:

```javascript
person.printDetails(); //-> "Michael Smith is a citizen of Germany. They are male, 178cm tall and have brown eyes."
```

**6. Objekte zusammenführen (merge).**

Erstelle eine Funktion namens `mergeObjects`, die zwei Objekte als Argumente nimmt, sie zu einem neuen Objekt zusammenführt und es zurückgibt.

- Beispiel:

```javascript
let firstObject = { firstName: "John" };
let secondObject = { lastName: "Smith" };
mergeObjects(firstObject, secondObject); //-> {firstName: "John", lastName: "Smith"}
```

## Bonusfragen

**7. Offene Frage.**

Was passiert, wenn du zwei Objekte mit denselben Eigenschaftswerten zusammenführst? Erwartest du, dass sich durch das Zusammenführen der beiden Objekte eines oder beide der ursprünglichen Objekte verändern? Warum oder warum nicht? Kommentiere deine Antworten.

**8. Tausche Schlüssel und Werte.**

Schreibe eine Funktion namens `switchedCopy`, um eine Kopie eines Objekts zu erstellen. Bei der Kopie des Objekts müssen die Schlüssel und Werte vertauscht werden. Die Funktion sollte das neue Objekt zurückgeben.

- Beispiel:

```javascript
switchedCopy({
  location: "berlin",
  status: "occupied",
}); //-> { berlin: 'location', occupied: 'status' }
```

**9. Rückgabe von Schlüsseln und Werten.**

Schreibe eine Funktion namens `getKeysAndValues`, die ein Objekt als Argument nimmt und ein Array zurückgibt, das zwei Arrays enthält: eines für die Schlüssel des Objekts und das andere für die Werte des Objekts.

- Beispiele:

```javascript
getKeysAndValues({ a: 1, b: 2, c: 3 }); //-> [["a", "b", "c"], [1, 2, 3]]
getKeysAndValues({ key: true }); //-> [["key"], [true]]
```
