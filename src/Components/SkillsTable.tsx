import React from "react";
import { Slide } from "react-reveal";
import { Table, type SemanticCOLORS } from "semantic-ui-react";

interface TableXProps {
  Color: SemanticCOLORS | undefined;
  headers: string[];
  body: string[][];
}

export const SkillsTable: React.FC<TableXProps> = ({ Color, headers, body }) => {
  //body table of tables
  return (
    <Slide top>
      <div>
        <Table color={Color} key={Color} inverted>
          <Table.Header>
            <Table.Row>
              {headers?.map((header, index) => (
                <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {body?.map((row, index) => (
              <Table.Row key={index}>
                {row.map((cell, indexCell) => (
                  <Table.Cell key={indexCell}>{cell}</Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Slide>
  );
};

