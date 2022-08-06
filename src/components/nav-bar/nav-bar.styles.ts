import { css } from 'lit';

const stylesNavBar = css`
  .list {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 1em;
    background: var(--color-bg-secondary);
  }
`;

const stylesLink = css`
  a {
    text-decoration: none;
    padding: 1em;
    color: var(--color-blue);
  }
  
  a:hover {
    color: var(--color-text);
  }
`

export { stylesNavBar, stylesLink };
