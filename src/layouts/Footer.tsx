import styled from 'styled-components';
import { FaGithub, FaMailBulk, FaChalkboardTeacher } from 'react-icons/fa';

const Container = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 64px;
  left: 0;
  bottom: 0;
  font-size: 1rem;
  padding: 8px 0;
  background-color: var(--soft-blue-100);
  > .footer-links {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
    align-items: center;
    gap: 8px;
    > img {
      margin-right: 4px;
      width: 28px;
      height: 28px;
      border-radius: 32px;
    }
    > a {
      height: auto;
      font-size: 0.875rem;
      font-weight: 300;
      align-items: center;
      vertical-align: middle;
      > svg {
        margin-right: 4px;
        transform: translateY(2px);
      }

      :hover {
        :after {
          transform: scale(1);
        }
      }
      :after {
        display: block;
        content: '';
        border-bottom: 1px solid var(--gray-900);
        transform: scale(0);
        transition: transform 0.3s ease-in-out;
      }
    }
  }
  > .footer-names {
    font-size: 0.75rem;
    color: var(--gray-600);
  }
`;

export const Footer = () => {
  return (
    <Container>
      <div className="footer-links">
        <img src={`${process.env.PUBLIC_URL}/ramglogo.png`} alt="ramg_logo" />

        <a href="mailto:tok1324@naver.com">
          <FaMailBulk />
          E-mail
        </a>
        <a
          href="https://github.com/citysquirrel"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          Github
        </a>
      </div>
      <div className="footer-names">created by 도시다람쥐</div>
    </Container>
  );
};
