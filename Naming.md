# Naming

https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555

- System 1 and System 2
- short-term memory -> Maximum 7 items
- readability != understandability
- Intention-Revealing Names
- Standard Naming Convention

code ကိုဖတ်မယ့်သူက ဖတ်ရင် အများကြီး စဥ်းစားစရာမလိုပဲ နားလည်မယ့် naming တွေကို စဥ်းစားရမယ်

- Avoid Disinformation
- Make Meaningful Distinction
- Use Pronouncable Names
- Use Searchable Names
- Avoid Encoding
- Avoid Mental Mapping
- Clarity is king - both in programming and communication
- Pick one word per concept - (fetch vs retrieve vs get)
- Use Solution Domain Name (repository, controller etc)
- Use Problem Domain Name (Payroll, names from business domain)
- Add Meaningful Context (addFirstName, addLastName, addState)

---

## [Clean Code - Book Insights (Chapter 2 - Naming)](https://www.youtube.com/watch?v=LNDIHqcOUBY)

### 1. Name should tell the intent

- why it exists, what it does and how to use it
- Eg. good name would be employeePaymentInfo vs ePay

### 2. Avoid confusing names - choose clear names

- Using names that already imply something - eg. naming something `unix`, `testList` (even if it not a list)
- Say what you mean and mean what you say - eg. deleteItems over bustThemDown, kill over whack

### 3. Use good distinctions - Avoid using number at end

- eg. list1, list2 instead - productIds, productDetails etc.
- eg. productInfo and productDetails - means same, distinction is harder between these two variables

### 4. Use pronounceable names

- Programming is a social activity
- eg. don't use variable name as dobyymm for DateOfBirthInYearsMonths

### 5. Use Searchable names

- don't name variables as `e`, `z` etc, use - `Event`, `MaxStudents` etc.

### 6. Don't encode types in names

- remember containers of variables can change
- eg. phoneString, paymentInt etc are bad names, payment can be made float in future

### 7. Avoid prefix to names

- eg. m_description => member_description (easier to understand)

### 8. Class names - `nouns` / Funcion names - `verbs`

- class names - student, car, employee
- function names - postPayment, deletePage

### 9. Use names consistently

- Pick one concept and stick to it
- eg. `controller` everywhere vs manager and controller uses interchangeably, driver and controller used in same place

### 10. Don't use same name to mean two different things

- eg. `payInfo` to represent amount to pay and payInfo to also represent who to pay and bank info, => `employeePaymentAmount` and `employeeBankDetails`

### 11. Use Domain specific names

- Remember the code is going to be read by computer engineers, helps them give context quickly
- eg. accountVisitor (indicating visitor pattern), jobQueue (indicating a queue), nameBuilder (indicating a builder)

### 12. Avoid - Too long names

---

### How to encourage to use good names

- Naming Convention documents
- Code review
