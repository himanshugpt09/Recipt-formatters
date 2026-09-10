This project extracts that exact pattern into a reusable function, showing why functions exist in the first place: eliminating repetition and giving a piece of logic a name.

Main concept being drilled: Function declarations, parameters (inputs), and return (output) — the fundamental contract of "give me data in, I give you data back."


Features:

A reusable function parseAmount(raw) that takes a raw string and returns either a valid number or null if invalid
A reusable function formatCurrency(amount) that takes a number and returns a formatted "$X.XX" string
A small script that uses both functions across a list of raw grocery receipt line items