import React from 'react';
import styled from 'styled-components';
import { Flex, FlexHVC } from 'src/styles/styles';

const Badge = styled.span`
  padding: 4px;
  font-size: 98%;
  font-weight: 500;
  border: 1px solid ${(props: any) => props.theme.secondaryColor};
  border-radius: 4px;
`;

const SectionHolder = styled.div`
  padding: 0 10px;
`;

const SectionHeader = styled.div`
  padding: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.primaryColor};

  svg {
    font-size: 0.8rem;
  }
`;

export function SkillGroup({ items }: any) {
  return (
    <Flex rGap="5px" style={{ flexWrap: 'wrap', flexDirection: 'column' }}>
      {items.map((value: any) => (
        <>
          <SectionHolder>
            <SectionHeader>{value?.title}</SectionHeader>
            <Flex cGap="8px" style={{ flexWrap: 'wrap' }}>
              {value.tags.map((tag: any) => (
                <Badge key={tag.name}>{tag.name}</Badge>
              ))}
            </Flex>
          </SectionHolder>
        </>
      ))}
    </Flex>
  );
}
