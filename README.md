# Json-Difference
Diferencias entre objetos JSON

Ejemplo salida:

```shell
{
  nombre: 'un_nombre2',
  apellido1: 'un_appellido1',
  edad: 23,
  id: 'sss-adada-sS1'
}
{
  nombre: 'un_nombre',
  apellido1: 'un_appellido1',
  edad: 25,
  id: 'sss-adada-sS'
}
Differences: {
  nombre: { from: 'un_nombre2', to: 'un_nombre' },
  edad: { from: 23, to: 25 },
  id: { from: 'sss-adada-sS1', to: 'sss-adada-sS' }
}
```