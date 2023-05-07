import React from "react";
import { Dropdown } from "primereact/dropdown";
import "../styles/dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../store/store";

interface Props {
  placeHolder: string;
  exercises: any;
}

export default function GenericDropdown({ placeHolder, exercises }: Props) {
  const dispatch = useDispatch();
  const selectedExercises = useSelector(
    (state: any) => state.exerciseReducer.data
  );
  const handleSelectChange = (value: string) => {
    console.log("I'm in handleSelectChange");
    dispatch(addExercise(value));
  };

  return (
    <>
      <div
        className="card flex justify-content-center align-items-center gap-4"
        style={{
          marginLeft: "20vw",
          margin: "15px 15px",
          display: "inline-Block",
        }}
      >
        <Dropdown
          value={exercises}
          onChange={(e) => handleSelectChange(e.value)}
          options={exercises}
          optionLabel="name"
          placeholder={placeHolder}
          filter
          optionDisabled={(option) =>
            selectedExercises.find((e: { name: any }) => e.name === option.name)
          }
          className="w-full m-4"
          style={{ width: "150px" }}
        />
      </div>
    </>
  );
}
