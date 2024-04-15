import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAwardsSection = styled.section`
  max-width: 900px;
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const Awards = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAwardsSection id="awards" ref={revealContainer}>
      <h2 className="numbered-heading">Awards</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              <i>2024:</i> Obtained <b>Ph.D. scholarships</b> from{' '}
              <a href="https://www.stonybrook.edu/">SBU</a>, <a href="https://www.rit.edu/">RIT</a>
            </p>
          </div>
        </StyledText>
      </div>
    </StyledAwardsSection>
  );
};

export default Awards;
