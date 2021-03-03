

function helloWorldWithDelay() {
 const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world');
    },  1000);
 });
 return promise;
}

const text = helloWorldWithDelay();
console.log(text);

text
  .then(r => r.replace('world', 'jordbruksverket'))
  .then(r => r.replace('jordbruksverket', 'JBV'))
  .then(r => console.log(r));


---

Övning 3:

- Lägg till en artificiell delay i servicen
- Invänta promise i komponenten
- Visa 'laddningstext' medans vi väntar på promiset
