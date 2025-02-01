"use client";

import { useState } from "react";

import ResetPasswordForm from "./ResetPasswordForm";
import ValidateTokenForm from "./ValidateTokenForm";

function ResetPasswordHandler() {
  const [isValidToken, setIsValidToken] = useState(false);
  const [token, setToken] = useState("");

  return (
    <>
      {!isValidToken ? (
        <ValidateTokenForm
          setIsValidToken={setIsValidToken}
          setToken={setToken}
        />
      ) : (
        <ResetPasswordForm token={token} />
      )}
    </>
  );
}

export default ResetPasswordHandler;
