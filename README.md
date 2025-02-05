<h1 align="center">JavaScript </h1>

<details>
<summary>💡Tips: Repetition is necessary while learning Coding</summary>
  <ul>Instead of going in-depth in various topics, you should practice it more often!</ul>
</details>

If you want to Learn Any Programming Language you need to know very well two things

1. Data Type
2. Processing

## Type conversion in JS

String conversion is mostly obvious for Primitive Data Type

Boolean Conversion vs Numeric Conversion:
<table><thead><tr><th><strong>Feature</strong></th><th><strong>Boolean Conversion</strong></th><th><strong>Numeric Conversion</strong></th></tr></thead><tbody><tr><td><strong>Purpose</strong></td><td>True/False return karta hai</td><td>Number me convert karta hai</td></tr><tr><td><strong>Falsy Values</strong></td><td><code>false, 0, "", null, undefined, NaN</code></td><td><code>NaN</code> sirf <code>undefined</code> aur invalid strings me hota hai</td></tr><tr><td><strong><code>null</code> ka Result</strong></td><td><code>false</code></td><td><code>0</code></td></tr><tr><td><strong><code>undefined</code> ka Result</strong></td><td><code>false</code></td><td><code>NaN</code></td></tr><tr><td><strong><code>"0"</code> ka Result</strong></td><td><code>true</code> (kyunki yeh ek non-empty string hai)</td><td><code>0</code></td></tr><tr><td><strong>Example Usage</strong></td><td><code>if(value)</code> check ke liye</td><td>Math calculations aur comparisons ke liye</td></tr></tbody></table>

Refrence/Notes for JS Comparison:

- ✅ Comparison operators boolean value return karte hain.
- ✅ Strings dictionary order me compare hoti hain.
- ✅ Different types compare karne par number conversion hota hai ('2' > 1 true hoga).
- ✅ == loose equality check karta hai (type conversion ke saath), jabki === strict equality hai.
- ✅ null aur undefined ek doosre ke barabar hote hain, lekin kisi aur ke nahi.
- ✅ Comparisons me null aur undefined ka dhyan rakhna chahiye, warna unexpected results mil sakte hain.