import React from 'react';
import shallow from 'zustand/shallow';
import {
  useIntro,
  useWork,
  useSkills,
  useActivities,
  useEducation,
  useLabels,
} from 'src/stores/data.store';
import { Flex, FlexCol } from 'src/styles/styles';

import styled from 'styled-components';
import { Education, Intro } from '../components/template4';
import { getIcon } from 'src/styles/icons';
import { Exp } from '../components/template4/exp';
import { SkillGroup } from '../components/skills/SkillGroup';
import { Description } from '../components/description/Description';
import { ModernHeader } from '../components/template4/shared/Section/Section';

const ResumeContainer = styled(Flex)`
  /* height: 100%; */
  padding: 20px;
  row-gap: 20px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  /* background-color: aliceblue; */

  @media print {
    border: none;
  }
`;

const labelsIcon = [
  'work',
  'key',
  'certificate',
  'identity',
  'career',
  'expert',
  'skill',
  'branch',
  'tool',
  'education',
];
export function Template4() {
  // Uncomment below lines to access data
  const intro = useIntro((state: any) => state.intro);
  const education = useEducation((state: any) => state.education);
  const experience = useWork((state: any) => state);
  const [involvements, achievements] = useActivities(
    (state: any) => [state.involvements, state.achievements],
    shallow
  );
  const [languages, frameworks, libraries, databases, technologies, practices, tools] = useSkills(
    (state: any) => [
      state.languages,
      state.frameworks,
      state.libraries,
      state.databases,
      state.technologies,
      state.practices,
      state.tools,
    ],
    shallow
  );
  const labels = useLabels((state: any) => state.labels);

  const skills = [
    {
      title: labels[6],
      tags: [...technologies, ...libraries, ...databases],
    },
    {
      title: labels[8],
      tags: tools,
    },
    {
      title: labels[7],
      tags: practices,
    },
  ];

  const sections = [
    {
      title: labels[0],
      icon: labelsIcon[0],
      component: <Exp companies={experience.companies} />,
      styles: {},
    },
    {
      title: 'Technical Skills',
      icon: labelsIcon[6],
      component: <SkillGroup items={skills} />,
    },
    {
      title: labels[1],
      icon: labelsIcon[1],
      component: <Description description={involvements} />,
    },
    {
      title: labels[9],
      icon: labelsIcon[9],
      component: <Education data={education} />,
    },
    {
      title: labels[2],
      icon: labelsIcon[2],
      component: <Description description={achievements} />,
    },
  ];

  return (
    <>
      <Intro intro={intro} labels={labels} />
      <ResumeContainer>
        {sections
          .filter(({ title }) => !!title)
          .map(({ title, icon, component, styles }) => (
            <ModernHeader icon={getIcon(icon)} title={title} styles={styles} key={title}>
              {component}
            </ModernHeader>
          ))}
      </ResumeContainer>
    </>
  );
}
