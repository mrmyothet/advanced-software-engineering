### Functions

- Abstraction (reuse or not)
- Divide and Conquer
- Single Responsibility Principle (SRP)
- Small Unit - Understandable, Testable
- At most 20 lines
- dynamic language (5-10 lines)
- static language (10-20 lines)
- Do One Thing

---

### One Level of Abstraction per Function

- high level abstraction vs low level abstraction
- avoid two different abstraction level
- One Concern per function
  - db, validation, security, error handling, business logic etc

### Switch statements problem

- it violate OCP (Open-Close Principle)
- can solve by using polymorphism

### API Design

- easy to use, hard to misuse

### Flag arguments

- violate SRP (Single Responsibility Principle)

### Have No Side Effects

### Avoid output arguments

### Command Query Separation

- CQRS
- Idempotency - can call multiple times

### Prefer Exceptions to Returning Error Codes

- functional programming didn't use exception - because of not composable
- There is no exception handling in Go lang
- REST API and Microservices - have to use error code

### Structured Programming

- Control Structure
  - single entry / single exit
  - [do not use exception as control flow](exception_as_control.md)
