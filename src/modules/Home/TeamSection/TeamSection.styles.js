import styled from 'styled-components';

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 70%;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  background-color: var(--color-background-secondary);
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1366px) {
    width: 80%;
  }
`;

export const TeamIntroduction = styled.div`
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  line-height: 1.5rem;
  text-align: center;
  margin: -1rem 0 3rem 0;
  color: var(--color-text-primary);
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 0.875rem;
    margin-top: -0.5rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1366px) {
    width: 80%;
    font-size: 0.875rem;
    margin-top: -0.5rem;
  }
`;

export const TeamMember = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.125rem;
  align-items: start;
  padding: 1rem;
  border-radius: 0.5rem;
  justify-items: center;
  justify-content: center;
  background-color: transparent;
  max-width: 20%;
  height: 100%;
  align-content: space-evenly;
  transition: background-color 0.3s ease;

  &:hover {
    &:first-child {
      background-color: #f8020533;
    }
    &:nth-child(2) {
      background-color: #31c70433;
    }
    &:last-child {
      background-color: #0798ce33;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: 18.5rem;
    max-height: 100%;

    &:first-child {
      background-color: #f8020533;
    }
    &:nth-child(2) {
      background-color: #31c70433;
    }
    &:last-child {
      background-color: #0798ce33;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1366px) {
    max-width: 80%;
  }
`;

export const TeamMemberImage = styled.img`
  width: auto;
  height: 8rem;
  border-radius: 50%;
  margin-bottom: 0.75rem;
`;

export const TeamMemberName = styled.h4`
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: var(--color-text-primary);
  letter-spacing: 0.05rem;
  margin: 0;
`;

export const TeamMemberNickname = styled.span`
  font-size: 0.875rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
`;

export const TeamMemberRole = styled.p`
  font-size: 0.875rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  letter-spacing: 0.016rem;
  margin: 0;
  color: var(--color-text-secondary);
`;

export const TeamMemberDescription = styled.p`
  font-size: 0.75rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  text-align: center;
  margin: 0;
  color: var(--color-text-secondary);
`;

export const TeamThanksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 60%;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    text-align: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1366px) {
    width: 80%;
    text-align: center;
  }
`;

export const TeamThanksTitle = styled.h3`
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`;

export const TeamThanksSubtitle = styled.div`
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  line-height: 1.5rem;
  text-align: center;
  margin: -1rem 0 2.25rem 0;
  color: var(--color-text-primary);
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 0.875rem;
    margin-top: -0.5rem;
  }
`;

export const TeamThanksMemberContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: -1rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: left;
  }

  @media screen and (min-width: 769px) and (max-width: 1366px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
`;

export const TeamThanksMember = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: flex-start;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff33;
  }

  @media screen and (max-width: 768px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
      text-align: right;
    }
  }
`;

export const TeamThanksMemberImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  opacity: 1;
`;

export const TeamThanksMemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TeamThanksMemberName = styled.p`
  font-size: 1.125rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05rem;
  color: var(--color-text-primary);
  margin: 0.5rem 0 0 0;

  & > span {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-text-secondary);
  }
`;

export const TeamThanksMemberRole = styled.p`
  font-size: 0.875rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: var(--color-text-secondary);
  margin: 0;
`;

export const TeamThanksMoreLink = styled.p`
  font-size: 0.875rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  text-align: center;
  width: 100%;
  color: var(--color-text-secondary);
  margin: 0;
  margin-top: 1rem;
  grid-column: 1/-1;

  & > a {
    text-decoration: none;
    color: var(--color-text-primary);
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
