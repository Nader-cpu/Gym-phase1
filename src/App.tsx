import GenericDropdown from "./components/dropdown";
import GenericTable from "./components/dataTable";

import data from "./components/data";
import GenericInstructions from "./components/GenericInstructions";

function App() {
<<<<<<< HEAD
  return (
    <>
      <div
        style={{
          color: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>Create Program</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          overflow: "wrap",
        }}
      >
        <GenericDropdown placeHolder={"Biceps"} exercises={data.biceps} />
        <GenericDropdown placeHolder={"Triceps"} exercises={data.triceps} />
        <GenericDropdown placeHolder={"Back"} exercises={data.back} />
        <GenericDropdown placeHolder={"Chest"} exercises={data.chest} />
        <GenericDropdown placeHolder={"Legs"} exercises={data.legs} />
        <GenericDropdown placeHolder={"Shoulders"} exercises={data.shoulders} />
        <GenericDropdown placeHolder={"Abs"} exercises={data.abs} />
        <GenericDropdown placeHolder={"Traps"} exercises={data.traps} />
      </div>
=======
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}>
				<h2>Create Program</h2>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100vw",
					overflow: "wrap",
				}}>
				<GenericDropdown placeHolder={"Biceps"} exercises={data.biceps} />
				<GenericDropdown placeHolder={"Triceps"} exercises={data.triceps} />
				<GenericDropdown placeHolder={"Back"} exercises={data.back} />
				<GenericDropdown placeHolder={"Chest"} exercises={data.chest} />
				<GenericDropdown placeHolder={"Legs"} exercises={data.legs} />
				<GenericDropdown placeHolder={"Shoulders"} exercises={data.shoulders} />
				<GenericDropdown placeHolder={"Abs"} exercises={data.abs} />
				<GenericDropdown placeHolder={"Traps"} exercises={data.traps} />
			</div>
>>>>>>> ad14dcff6c1ec30416ce9339a14ae927879dc1a7

			<br />
			<GenericInstructions />

			<GenericTable />
		</>
	);
}

export default App;
