import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

// Mock the useAuth hook
const signInMock = jest.fn();

jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: () => ({
    signIn: signInMock,
  }),
}));

describe("Login Component", () => {
  it("should render without errors", () => {
    const { getByLabelText, getByRole } = render(<Login />);
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByRole("button", { name: "Login" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("should handle login with valid credentials", async () => {
    const fakeUser = { id: "123", email: "test@example.com" };

    signInMock.mockResolvedValueOnce({ user: fakeUser });

    const { getByLabelText, getByRole } = render(<Login />);
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(signInMock).toHaveBeenCalledWith(
        "test@example.com",
        "password123"
      );
      // Add assertions to check if the success notification is displayed
    });
  });

  it("should display an error message with invalid credentials", async () => {
    const errorMessage = "Invalid email or password";

    signInMock.mockRejectedValueOnce(new Error(errorMessage));

    const { getByLabelText, getByRole, getByText } = render(<Login />);
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const loginButton = getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "incorrectPassword" } });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(signInMock).toHaveBeenCalledWith(
        "test@example.com",
        "incorrectPassword"
      );
      expect(getByText(errorMessage)).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
