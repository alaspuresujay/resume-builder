import React from 'react';
import Color from 'color';
import styled from 'styled-components';
import { Flex, FlexCol, FlexVC } from 'src/styles/styles';
import { getIcon } from 'src/styles/icons';

const Role = styled.h3`
  color: ${(props) => Color(props.theme.primaryColor).alpha(0.75).toString()};
  margin-bottom: 0;
  font-weight: 600;
`;

const Contact = ({ icon, value }: any) => (
  <FlexVC jc="flex-end" cGap="8px">
    {icon}
    <span>{value}</span>
  </FlexVC>
);

export function Intro({ intro, labels }: any) {
  const { username: lnUserName, url: lnUrl } = intro.profiles.find(
    (profile: any) => profile.network === 'linkedin'
  );
  return (
    <Flex jc="space-between">
      <FlexCol rGap="5px">
        <Role>{intro.label}</Role>
        {labels[11] && (
          <div>
            {labels[11]}:&nbsp;
            <strong>{intro.relExp}</strong>
          </div>
        )}
        {/* {labels[11] && (
          <div>
            {labels[11]}:&nbsp;{intro.totalExp}
          </div>
        )} */}
        {lnUrl && (
          <a href={lnUrl}>
            <Contact icon={getIcon('linkedin')} value={`linkedin.com/in/${lnUserName}/`} />
          </a>
        )}
      </FlexCol>

      <FlexCol jc="flex-end" rGap="5px">
        <Contact icon={getIcon('mobile')} value={intro.phone} />
        <Contact icon={getIcon('email')} value={intro.email} />
        <Contact icon={getIcon('location')} value={intro.location.city} />
      </FlexCol>
    </Flex>
  );
}
