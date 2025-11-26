# 🧠 Day 02 — Notes, Corrections, Improvements & Ratings

## 🔍 1. Concepts Practiced Today
- Full HTML form structures  
- Input types: text, email, password, number, date, file  
- Radio & checkbox selections  
- Dropdown lists using `<select>`  
- Message fields using `<textarea>`  
- Field grouping with `<fieldset>` and `<legend>`  
- Validation: required, maxlength, min, max  
- Navigation using anchor IDs  
- Linking form to confirmation page  
- Basic HTML layout without CSS  

---

## ⚠️ 2. Mistakes & Improvements

### ❌ 1. Button inside an `<a>` element  
You used:
```
<a href="./confirmation.html">
  <button type="button">Submit</button>
</a>
```
This works, but is **not recommended**.  
Future fix: Use a real submit button or style a link like a button.

---

### ❌ 2. Missing `name=""` attributes
Most input fields do not have a `name`.  
Without it, a real form won’t send any data.

This is crucial for future backend handling.

---

### ❌ 3. Excessive use of `&nbsp;`
You used long chains of spaces to push the search bar to the right.

Better fix later with CSS:
- flexbox  
- margin-left: auto  
- float: right  

For HTML-only practice, acceptable for now.

---

### ❌ 4. Recommended Improvement: Use `<td>` instead of `<th>` for normal data  
In the Routine table you correctly used `<th>` for headers, but in `<tbody>` it’s better to use `<td>`.

---

### ❌ 5. Form not actually submitting data  
Because you used a link-based “submit”.

This is intentional for practice, but remember:
`<button type="submit">` is how real forms submit.

---

## ⭐ 3. Ratings for Today

| Skill Area | Rating | Notes |
|-----------|--------|-------|
| Understanding input types | ⭐⭐⭐⭐⭐⭐⭐⭐ 8/10 | Covered many fields |
| Form structure | ⭐⭐⭐⭐⭐⭐⭐⭐⭐ 9/10 | Clean and well organised |
| Navigation with anchors | ⭐⭐⭐⭐⭐⭐⭐⭐ 8/10 | Good implementation |
| Button logic | ⭐⭐⭐⭐⭐ 5/10 | Will improve later |
| Cleanliness & spacing | ⭐⭐⭐⭐⭐⭐ 6/10 | CSS needed later |
| Completion & effort | ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 10/10 | Full form + confirmation done |

---

## 🧩 4. Main Challenges Today
- Building a multi-field, multi-section form  
- Handling various input types  
- Organising HTML without CSS  
- Creating a working confirmation flow  
- Making the header navigation functional  

---

## 📌 5. What to Improve Next
- Add `name` attributes to all fields  
- Replace manual spacing with CSS in coming days  
- Use real submit buttons  
- Improve accessibility using `<label for="">` properly  
- Learn form layout styling (Day 03+)

---

## 🚀 6. Summary  
Day 2 was a strong follow-up to Day 1.  
You built a complete form, explored all important input types, improved structure, and learned practical form building.

**✔️ Day 02 — COMPLETED**  
Next: **Day 03 — CSS Basics & Styling**
