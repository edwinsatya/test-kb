import React from "react";
import Logo from "../../atoms/Logo";
import Title from "../../atoms/Title";
import InputSelect from "../../atoms/Input/Select";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center p-1 md:p-2">
        <Logo
          classProps={
            "w-8 h-8 md:w-12 md:h-12 xl:w-20 xl:h-20 bg-gray-400 border-1 border-gray-400"
          }
        />
        <Title
          classProps={
            "text-sm md:text-lg xl:text-4xl font-semibold ml-3 md:ml-5 xl:ml-6"
          }
          title="Kitabisa"
        />
      </div>
      <div className="flex items-center">
        <InputSelect />
      </div>
    </div>
  );
}
