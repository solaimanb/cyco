import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Register from "./Register";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

// Mock the useAuth hook
const createUserMock = jest.fn();

jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: () => ({
    createUser: createUserMock,
  }),
}));

describe("Register Component", () => {
  beforeEach(() => {
    createUserMock.mockClear();
  });

  it("should render without errors", () => {
    const { getByLabelText, getByRole } = render(<Register />);
    const usernameInput = getByLabelText("Username");
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const confirmPasswordInput = getByLabelText("Confirm Password");
    const registerButton = getByRole("button", { name: "Register" });

    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it("should handle form submission", async () => {
    const fakeFormData = {
      username: "testuser",
      email: "test@example.com",
      password: "password123",
      confirmPassword: "password123",
    };

    const navigateMock = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => navigateMock,
    }));

    const { getByLabelText, getByRole } = render(<Register />);
    const usernameInput = getByLabelText("Username");
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    const confirmPasswordInput = getByLabelText("Confirm Password");
    const registerButton = getByRole("button", { name: "Register" });

    fireEvent.change(usernameInput, {
      target: { value: fakeFormData.username },
    });
    fireEvent.change(emailInput, { target: { value: fakeFormData.email } });
    fireEvent.change(passwordInput, {
      target: { value: fakeFormData.password },
    });
    fireEvent.change(confirmPasswordInput, {
      target: { value: fakeFormData.confirmPassword },
    });

    createUserMock.mockResolvedValueOnce({ user: "fakeUser" });

    fireEvent.click(registerButton);

    expect(createUserMock).toHaveBeenCalledWith(
      fakeFormData.email,
      fakeFormData.password
    );

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith("/");
    });
  });
});
