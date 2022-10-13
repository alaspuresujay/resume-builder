import React from 'react';
import { Flex } from 'src/styles/styles';
import styled from 'styled-components';

const Container = styled.section``;

const EducationContainer = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  line-height: 20px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__course {
      font-size: 12px;
      font-weight: 600;
    }
  }

  .institution {
    font-weight: 600;
  }

  .score {
    span {
      font-weight: 600;
    }
  }
`;

const Degree = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
`;

const Specialization = styled.div`
  font-weight: 400;
  font-size: 0.7rem;
`;

function EducationEntry({ education }: any) {
  return (
    <EducationContainer>
      <Flex jc="space-between">
        <Degree>{education.studyType}</Degree>
        <em>
          {education.startDate} - {education.endDate}
        </em>
      </Flex>

      <Specialization>{education.area}</Specialization>
      <Flex jc="space-between">
        <div>{education.institution}</div>
        <em>{education.score}</em>
      </Flex>
    </EducationContainer>
  );
}

export default function Education({ data }: any) {
  if (!data?.length) return null;

  return (
    <Container>
      {data.map((education, i) => (
        <EducationEntry key={i} education={education} />
      ))}
    </Container>
  );
}
