import React from "react";
import { StarWarsCharactersInfo } from "./src/about_hooks/example_app_using_hooks/StarWarsCharactersInfo";
import { StarWarsCharactersInfoWithCustomHooks } from "./src/about_hooks/example_app_using_hooks/StarWarsCharactersInfoWithCustomHooks";
import { HooksContainer } from "./src/about_hooks/HooksContainer";
import { AssignmentContainer } from "./src/diy_assignment/AssignmentContainer";
import { ContainerForOptionalTasks } from "./src/diy_assignment/optional_tasks/ContainerForOptionalTasks";
import { AssignmentContainerVersionTwo } from "./src/diy_assignment/version_two/AssignmentContainer";
import { ContainerForLifecycleMethods } from "./src/lifecycle_methods/ContainerForLifecycleMethods";
import { ContainerForMasonryLayout } from "./src/lifecycle_methods/masonry_layout/ContainerForMasonryLayout";
// import { AssignmentContainer } from "./diy_assignment/AssignmentContainer";
// import { AssignmentContainerVersionTwo } from "./diy_assignment/version_two/AssignmentContainer";
// import { ContainerForOptionalTasks } from "./diy_assignment/optional_tasks/ContainerForOptionalTasks";
// import { ContainerForLifecycleMethods } from "./lifecycle_methods/ContainerForLifecycleMethods";
// import { ContainerForMasonryLayout } from "./lifecycle_methods/masonry_layout/ContainerForMasonryLayout";
// import { HooksContainer } from "./about_hooks/HooksContainer";
// import { StarWarsCharactersInfo } from "./about_hooks/example_app_using_hooks/StarWarsCharactersInfo";
// import { StarWarsCharactersInfoWithCustomHooks } from "./about_hooks/example_app_using_hooks/StarWarsCharactersInfoWithCustomHooks";

export function HooksAndRecentWorkouts(props) {
  return (
    <div>
      <button onClick={(evt)=>props.clickHandler(props.show)}>show hooks and other recent workouts</button>
      <div style={props.show ? {display: "block"} : {display: "none"}}>
        {/* do-it-yourself assignment */}
        <AssignmentContainer />
        <hr />

        {/* do-it-yourself-assignment-version-two */}
        <AssignmentContainerVersionTwo />
        <hr />

        {/* do-it-yourself-assignment-optional-tasks */}
        <ContainerForOptionalTasks />
        <hr />

        {/* lifecycle methods */}
        <ContainerForLifecycleMethods />
        <hr />
        <ContainerForMasonryLayout />
        <hr />

        {/* using hooks */}
        <HooksContainer />

        {/* starwars character info example app using hooks and functional components */}
        <StarWarsCharactersInfo />
        <StarWarsCharactersInfoWithCustomHooks />
      </div>
    </div>
  );
}
