import { css } from 'lit';

const stylesNavBar = css`
  .list {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 1em;
    background: var(--color-bg-secondary);
  }

  .link {
    text-decoration: none;
    padding: 1em;
    color: var(--color-text);
  }

  .link:hover {
    color: var(--color-blue);
  }
`;

export { stylesNavBar };
