import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import JobPostingService from "./../services/jobPostingService";
import { Card, Icon, Label, Button, Rating } from "semantic-ui-react";

export default function JobPostingList() {
  const [jobPostings, setJobPostings] = useState([]);

  let jobPostingService = new JobPostingService();

  useEffect(() => {
    jobPostingService.getAllActiveOnesSortedByPostingDate().then((result) => setJobPostings(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow="3">
        {jobPostings.map((jobPosting) => (
          <Card raised key={jobPosting.id} as={NavLink} to={"#"}>
            <Card.Content>
              <Card.Header className="montserrat">
                {jobPosting.jobTitle?.title}
              </Card.Header>
              <Card.Meta>
                {jobPosting.employer?.companyName}
                <br />
                <strong>Number of Open Positions </strong>
                <Label circular color="pink" className="orbitron">
                  {jobPosting.numberOfOpenPositions}
                </Label>
              </Card.Meta>
              <Card.Description className="orbitron">
                <strong>Posting Date </strong>
                {new Date(jobPosting.postingDate).toDateString()}
                <br />
                <strong>Closing Date </strong>
                {new Date(jobPosting.closingDate).toDateString()}
              </Card.Description>
            </Card.Content>
            <Card.Content textAlign="right">
              <Rating maxRating={1} defaultRating={0} icon="star" size="huge" onClick={""} />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
