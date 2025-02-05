<h1 align="center">JavaScript </h1>

<details>
<summary>💡Tips: Repetition is necessary while learning Coding</summary>
  <ul>Instead of going in-depth in various topics, you should practice it more often!</ul>
</details>

If you want to Learn Any Programming Language you need to know very well two things

1. Data Type
2. Processing

## Type conversion in JS

String conversion is mostly obvious for Primitive or Non Primitive Data Type

Boolean Conversion vs Numeric Conversion:
<table><thead><tr><th><strong>Feature</strong></th><th><strong>Boolean Conversion</strong></th><th><strong>Numeric Conversion</strong></th></tr></thead><tbody><tr><td><strong>Purpose</strong></td><td>True/False return karta hai</td><td>Number me convert karta hai</td></tr><tr><td><strong>Falsy Values</strong></td><td><code>false, 0, "", null, undefined, NaN</code></td><td><code>NaN</code> sirf <code>undefined</code> aur invalid strings me hota hai</td></tr><tr><td><strong><code>null</code> ka Result</strong></td><td><code>false</code></td><td><code>0</code></td></tr><tr><td><strong><code>undefined</code> ka Result</strong></td><td><code>false</code></td><td><code>NaN</code></td></tr><tr><td><strong><code>"0"</code> ka Result</strong></td><td><code>true</code> (kyunki yeh ek non-empty string hai)</td><td><code>0</code></td></tr><tr><td><strong>Example Usage</strong></td><td><code>if(value)</code> check ke liye</td><td>Math calculations aur comparisons ke liye</td></tr></tbody></table>

Refrence/Notes for JS Comparison:

- ✅ Comparison operators boolean value return karte hain.
- ✅ Strings dictionary order me compare hoti hain.
- ✅ Different types compare karne par number conversion hota hai ('2' > 1 true hoga).
- ✅ == loose equality check karta hai (type conversion ke saath), jabki === strict equality hai.
- ✅ null aur undefined ek doosre ke barabar hote hain, lekin kisi aur ke nahi.
- ✅ Comparisons me null aur undefined ka dhyan rakhna chahiye, warna unexpected results mil sakte hain.

[Typeof value for datatype [Ask in Interview read]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)


If-else vs Switch

<table><thead><tr><th>Feature</th><th><code>if</code> Statement</th><th><code>switch</code> Statement</th></tr></thead><tbody><tr><td><strong>Use Case</strong></td><td>Multiple conditions check karne ke liye.</td><td>Ek expression ko multiple values se compare karne ke liye.</td></tr><tr><td><strong>Condition Type</strong></td><td>Koi bhi condition (complex ya simple).</td><td>Ek expression ko fixed values se compare karna.</td></tr><tr><td><strong>Readability</strong></td><td>Complex conditions mein zyada readable.</td><td>Fixed values ke liye zyada readable.</td></tr><tr><td><strong>Performance</strong></td><td>Har condition check hoti hai.</td><td>Direct matching, faster in some cases.</td></tr><tr><td><strong>Default Case</strong></td><td><code>else</code> block mein handle hota hai.</td><td><code>default</code> case mein handle hota hai.</td></tr><tr><td><strong>Break Statement</strong></td><td>Not needed.</td><td>Har <code>case</code> ke baad <code>break</code> lagana padta hai (optional).</td></tr></tbody></table>