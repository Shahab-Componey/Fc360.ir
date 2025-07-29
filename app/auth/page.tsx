"use client";

import React, {useState} from "react";
export default function page() {
  type TTab = "SignIn" | "SignUp";
  const [activeTab, setActiveTab] = useState<TTab>("SignIn");
  const AuthTab = () => (
    <div className="flex justify-center items-center w-full text-center">
      {activeTab === "SignIn" && (
        <div>
          <div>ورود</div>
          <button onClick={() => setActiveTab("SignUp")}>ثبت نام</button>
        </div>
      )}
      {activeTab === "SignUp" && (
        <div>
          <div>ثبت نام</div>
          <button onClick={() => setActiveTab("SignIn")}>ورود</button>
        </div>
      )}
    </div>
  );

  return <div className="flex justify-center items-center text-Regular">{<AuthTab></AuthTab>}</div>;
}
