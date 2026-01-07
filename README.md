Debouncing:
typing slow= iphone=200ms
typing fast = 150m(keystroke difference)

Performance :

- iphone pro max=14 letters \* 1000 people making api call = 10K api call
- with deboucing = 3 api \* 1000 =3k api call

Deboucing with 200ms

- if diff between two key stroke is < 200ms - Declne the api call
- > 200ms make an api call
