"use client";

import React from "react";
import AuthForm from "@/components/auth/AuthForm";
import { signUpSchema } from "@/lib/validations";

const page = () => {
  return (
    <AuthForm
      type="SIGN-UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        // universityCard: null,
      }}
      onSubmit={() => {}}
    />
  );
};

export default page;
