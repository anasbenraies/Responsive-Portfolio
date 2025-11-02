import React, { FC } from "react";
import { Fade } from "react-reveal";
import { Card, Icon, Image } from "semantic-ui-react";

interface HCardProps {
  name: string;
  job: string;
  description: string;
}

const VCard: FC<HCardProps> = ({ name, job, description }) => {
  const contrast = { color: "black" };
  return (
    <Fade>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content style={contrast}>
          <Card.Header style={contrast}>{name}</Card.Header>
          <Card.Meta>
            <span className="date" style={contrast}>
              {job}
            </span>
          </Card.Meta>
          <Card.Description style={contrast}>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Icon name="user" />
            Welcome again to my website
          </div>
        </Card.Content>
      </Card>
    </Fade>

);}

export default VCard