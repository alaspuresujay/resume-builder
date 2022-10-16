import React from 'react';
import { getIcon } from 'src/styles/icons';
import { Flex, FlexVC } from 'src/styles/styles';
import Education from '../Education/Education';
interface EduNLinksProps {
  profiles: any;
  education: any;
}

const EduNLinks = ({ education, profiles }: EduNLinksProps): JSX.Element => {
  return (
    <Flex jc="space-between">
      <Education data={education} />
      <Flex className="social-icons">
        {profiles
          .filter((profile) => profile.url && profile.network !== 'linkedin')
          .map((profile: any) => (
            <a href={profile.url} key={profile.url}>
              {getIcon(profile.network)}
            </a>
          ))}
      </Flex>
    </Flex>
  );
};

export default EduNLinks;
