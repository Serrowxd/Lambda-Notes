# Redux

### Redux is State Management.

## Predictable States

React —— Redux
[UI] + [Data (State)]

The UI is going to be a product of the Data, because we are using React.

`data = { isLocked: true, isOpen: true }` // this is the shape of the data.

Component is essentially a function that takes some data, then returns a piece of the UI. This is essentially what react or a react component does.

Component = (optionalData) => UI

Redux thinks in transitions.
FSM (Finite State Machine) - think about your states first.

Current State | Action (Input) | New State

: — | :—: | :—

Locked | - -> | Unlocked
Unlocked | - -> | Locked

---

Redux is best for large scale applications, or when you’re drilling components down.

Finite State Machine and Pub/Sub patterns // Publisher/Subscriber

# Redux:

* Store
  * Initial State
  * Get State
  * Update State
  * Notify Listeners/Subscribers of State Changes
* Actions and Action Creators
* Reducers
  React Bindings for Redux.

---

A reducer is a function that takes a state and then defines a shape of the state.

`npm install redux`
`npm install react-redux`

You can also mesh these two to make it faster

`npm install redux react-redux`

---

Do you need `state`? Use `class` components.

Redux is `*not*` a finite state machine, but the thinking in states helps understand how Redux works.

Every time you want something to happen, you have to dispatch an action.

An Action is an Object.

---

`Action`: An object that must have a type, normally a string.

`Action Creator`: Function that returns an action object.

`Component` - dispatches an action -> Reducers - update -> Application State Tree (store)
