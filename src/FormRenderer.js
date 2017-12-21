import React from "react";
import { Button, Tab, Form, Grid } from "semantic-ui-react";

const FormRenderer = ({ schema }) => {
  const fieldLabels = Object.keys(schema);
  const rows = new Set(fieldLabels.map(field => schema[field].position.row));
  const rowControls = Array.from(rows).map(value => {
    const rowFields = fieldLabels.filter(
      field => schema[field].position.row === value
    );
    const columns = new Set(
      rowFields.map(field => schema[field].position.column)
    );
    const columnControls = Array.from(columns).map(value => {
      const giri = rowFields.filter(
        field => schema[field].position.column === value
      );
    });
    const controls = rowFields.map(field => schema[field].control);
    const welcome = rowFields
      .sort((a, b) => schema[a].position.column > schema[b].position.column)
      .map((field, index) => {
        const Control = schema[field].control;
        return (
          <Grid.Column key={index}>
            <Form.Field>
              <label>{schema[field].label}</label>
              <Control placeholder={schema[field].label} />
            </Form.Field>
          </Grid.Column>
        );
      });
    const rows = new Set(fieldLabels.map(field => schema[field].position.row));
    return (
      <Grid.Row key={value} columns={welcome.length}>
        {/* {controls.map((Control, index) => (
          <Grid.Column key={index}>
            <Form.Field>
              <label>Welcome</label>
              <Control placeholder="asd" />
            </Form.Field>
          </Grid.Column>
        ))} */}
        {welcome}
      </Grid.Row>
    );
  });
  const tabs = new Set(fieldLabels.map(field => schema[field].groupName));
  const tabPanes = Array.from(tabs).map(tab => {
    const controls = fieldLabels
      .filter(field => schema[field].groupName === tab)
      .map(field => schema[field].control);
    return {
      menuItem: tab,
      render: () => (
        <Tab.Pane attached={false}>
          <div>
            {controls.map((Control, index) => (
              <Form.Field key={index}>
                <label>Welcome</label>
                <Control placeholder="asd" />
              </Form.Field>
            ))}
          </div>
        </Tab.Pane>
      )
    };
  });
  const fields = fieldLabels.reduce((acl, curr) => {}, {});
  console.log(tabPanes);
  return (
    <div>
      <Button content="asd" />
      <Tab menu={{ secondary: true, pointing: true }} panes={tabPanes} />
      <Form>
        <Grid>{rowControls}</Grid>
      </Form>
    </div>
  );
};

export default FormRenderer;
