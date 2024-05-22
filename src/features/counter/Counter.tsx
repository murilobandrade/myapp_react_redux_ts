import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./Counter.module.css"
import { increment, selectCount } from "./counterSlice"

export const Counter = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Click count: {count}
        </button>
      </div>
    </div>
  )
}
