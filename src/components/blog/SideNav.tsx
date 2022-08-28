import styled from 'styled-components';
import { IBlogProps } from '../../pages/Blog';

const Container = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  float: left;
  align-items: center;

  padding-top: 60px;
  width: 200px;
`;

const Subject = styled.summary`
  position: relative;
  width: calc(100% - 64px);
  /* text-align: center; */
  font-size: 1.125rem;
  text-align: left;
  margin-bottom: 8px;

  :before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 20px;
    background: linear-gradient(
      -105deg,
      transparent 0%,
      var(--soft-blue-50) 10%,
      var(--soft-blue-500) 75%
    );
    transform: translate3d(-40px, 8px, 0) scale(0.6);
    border-radius: 2px;
  }
`;

const List = styled.section`
  display: flex;
  flex-direction: column;
  > a {
    display: flex;
    align-items: stretch;
    width: 120px;
    color: var(--gray-800);
    font-size: 0.875rem;
    &.total {
      margin-bottom: 4px;
    }
    > div {
      flex: auto;
      &.label-name {
        text-align: left;
      }

      &.label-count {
        text-align: right;
        color: var(--gray-500);
      }
    }
    :hover {
      > div {
        &.label-name {
          color: var(--soft-orange-900);
        }
        &.label-count {
          color: var(--gray-800);
        }
      }
    }
  }
`;

const SideNav = ({ data, isLoading }: IBlogProps) => {
  const LABELS: { [key: string]: number } = {};
  data?.forEach((issue) => {
    const { labels } = issue;
    labels
      .map((label) => typeof label === 'string' || label.name)
      .forEach((label) => {
        if (
          typeof label === 'string' &&
          label[0].toUpperCase() === label[0] &&
          !(label === 'Blog')
        )
          LABELS[label] === undefined
            ? (LABELS[label] = 1)
            : typeof label === 'string' && LABELS[label]++;
      });
  });
  const toArr = Object.entries(LABELS);
  const total = toArr.reduce(
    ([_A, count], [_B, cur]) => ['', count + cur],
    ['', 0]
  );
  return (
    <Container>
      <Subject>Tags</Subject>
      <List>
        <a className="label-link total" href="/blog">
          <div className="label-name">Total</div>
          <div className="label-count">({total})</div>
        </a>
        {toArr.map(([label, count], index) => {
          return (
            <a key={index} className="label-link" href="#">
              <div className="label-name">{label}</div>
              <div className="label-count">({count})</div>
            </a>
          );
        })}
      </List>
    </Container>
  );
};

export default SideNav;