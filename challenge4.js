/*
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

```
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

```
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

module.exports = function createXmasTree(height) {
  const base = height * 2 - 1;
  const tree = [];
  for (let i = 0; i < height; i++) {
    const s = height - i - 1;
    const line = '_'.repeat(s) + '*'.repeat(base - s * 2) + '_'.repeat(s);
    tree.push(line);
  }
  const bottomTree = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
  tree.push(bottomTree);
  tree.push(bottomTree);

  return tree.join('\n');
};
