import { observer } from "mobx-react-lite";
import React from "react";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";
import ActivitiesDetails from "./details/ActivitiesDetails";
import ActivityForm from "./form/ActivityForm";

export default observer( function ActivityDashboard() {
 
 const {activityStore} = useStore();
 const {selectedActivity, editMode} = activityStore

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList/>
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && (
          <ActivitiesDetails/>
        )}
        {editMode && (
          <ActivityForm
          />
        )}
      </Grid.Column>
    </Grid>
  );
})
