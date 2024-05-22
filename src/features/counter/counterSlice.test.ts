import type { AppStore } from "../../app/store"
import { makeStore } from "../../app/store"
import type { CounterSliceState } from "./counterSlice"
import {
  counterSlice,
  increment,
  selectCount,
} from "./counterSlice"

interface LocalTestContext {
  store: AppStore
}

describe<LocalTestContext>("counter reducer", it => {
  beforeEach<LocalTestContext>(context => {
    const initialState: CounterSliceState = {
      value: 3,
    }

    const store = makeStore({ counter: initialState })

    context.store = store
  })

  it("should handle initial state", () => {
    expect(counterSlice.reducer(undefined, { type: "unknown" })).toStrictEqual({
      value: 0,
    })
  })

  it("should handle increment", ({ store }) => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(increment())

    expect(selectCount(store.getState())).toBe(4)
  })

})
