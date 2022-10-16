import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import { getIcon } from 'src/styles/icons';
import Image from 'next/image';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  padding: 10px 25px 0;
  /* background-color: aqua; */
  /* border-bottom: 0.5px solid lightgray; */

  .about {
    display: flex;
    align-items: center;

    &__profile-image {
      img {
        width: 72px;
        border-radius: 50%;
        border: 2px solid ${(props) => Color(props.theme.primaryColor).toString()};
      }
      margin-right: 10px;
    }

    &__info {
      line-height: 24px;
      &__name {
        font-size: 32px;
        /* font-weight: 500; */
        color: ${(props) => Color(props.theme.primaryColor).toString()};
        margin-bottom: 10px;
      }
      &__title {
        font-size: 14px;
        color: ${(props) => Color(props.theme.primaryColor).alpha(0.75).toString()};
        font-weight: 600;
      }
      &__experience {
        display: flex;
        &__item {
          &:first-of-type {
            margin-right: 10px;
          }
          font-size: 10px;
          span {
            font-weight: 700;
          }
        }
      }
    }
  }
`;

const ContactItemContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 6px 0;
  .label {
  }
  .icon {
    margin-right: 6px;
    display: flex;
    align-items: center;
  }
`;

const Role = styled.h3`
  color: ${(props) => Color(props.theme.primaryColor).alpha(0.75).toString()};
  margin-bottom: 0;
  font-weight: 600;
`;

function ContactItem({ value = '', icon = <></>, redirectAction = '' }: any) {
  return (
    <ContactItemContainer>
      <div className="icon">{icon}</div>
      <p className="label">
        {redirectAction ? <a href={redirectAction}>{value}</a> : <p>{value}</p>}
      </p>
    </ContactItemContainer>
  );
}

function Intro({ intro }: any) {
  const linkedIn = intro.profiles.find((item) => item.network === 'linkedin');
  return (
    <IntroContainer>
      <div className="about">
        {/* {intro.image && (
          <div className="about__profile-image">
            <Image src={intro.image} alt={intro.name} />
          </div>
        )} */}
        <div className="about__info">
          <p className="about__info__name">{intro.name}</p>
          <p className="about__info__title">{intro.label}</p>
          <div className="about__info__experience">
            {/* <p className="about__info__experience__item">
              Relevant Experience: <span>{intro.relExp}</span>
            </p> */}
            <p className="about__info__experience__item">
              Total Experience: <span>{intro.totalExp}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="contact">
        <ContactItem
          icon={getIcon('mobile')}
          value={intro.phone}
          redirectAction={`tel:${intro.phone}`}
        />
        <ContactItem
          icon={getIcon('email')}
          value={intro.email}
          redirectAction={`mailto:${intro.email}`}
        />
        <ContactItem
          icon={getIcon('linkedin')}
          value={`${linkedIn.network}/${linkedIn.username}`}
          redirectAction={`${linkedIn.url}`}
        />
        <ContactItem icon={getIcon('location')} value={intro.location.city} type="location" />
      </div>
    </IntroContainer>
  );
}

export default Intro;
