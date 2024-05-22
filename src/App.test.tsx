import { screen, waitFor } from "@testing-library/react"
import App from "./App"
import { renderWithProviders } from "./utils/test-utils"

test("App should have correct initial render", () => {
  renderWithProviders(<App />)

  // The app should be rendered correctly
  expect(screen.getByText(/murilo.b.andrade@gmail.com/i)).toBeInTheDocument()

  // Initial state: count should be 0, incrementValue should be 2
  expect(screen.getByLabelText("Increment value")).toHaveTextContent("0")
})

test("Increment value should work as expected", async () => {
  const { user } = renderWithProviders(<App />)

  // Click on "+" => Count should be 1
  await user.click(screen.getByLabelText("Increment value"))
  expect(screen.getByLabelText("Increment value")).toHaveTextContent("1")

})

