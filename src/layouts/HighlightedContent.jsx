import React from "react";
import { Grid, Image, Divider, Segment, Header, Input } from "semantic-ui-react";

export default function HighlightedContent() {
  return (
    <div>
      <Grid>
        <Grid.Row stretched columns="2">
          <Grid.Column>
            <Image src="resumes.svg" />
          </Grid.Column>
          <Grid.Column>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            <Segment basic>
              <Header color="violet" as="h1" textAlign="right">
                <span className="headline-1">Look for a</span>
              </Header>
              <br />
              <Header color="pink" as="h1" textAlign="right">
                <span className="headline-2">Job</span>
              </Header>
            </Segment>
            <Segment raised circular>
              <Input transparent type="text" icon="search" size="big" placeholder="Search . . ." />
            </Segment>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
