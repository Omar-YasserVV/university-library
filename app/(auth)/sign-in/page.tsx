"use client";

import React from "react";
import AuthForm from "@/components/auth/AuthForm";
import { signInSchema } from "@/lib/validations";

const page = () => {
  return (
    <AuthForm
      type="SIGN-IN"
      schema={signInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={() => {}}
    />
  );
};

export default page;
