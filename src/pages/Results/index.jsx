import { useContext } from 'react';
import styled from 'styled-components';
import { SurveyContext } from '../../utils/context';

const ShowResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ShowResults = styled.div`
  padding: 20px;
`;

function Results() {
  const { answers } = useContext(SurveyContext);
  return (
    <ShowResultsWrapper>
      <h1>Résultats : </h1>
      {Object.values(answers).length === 0 ? (
        <ShowResults>Résultats non disponible</ShowResults>
      ) : (
        Object.keys(answers).map((key) => (
          <ShowResults key={key}>
            {`Question ${key}: ${answers[key]}`}
          </ShowResults>
        ))
      )}
    </ShowResultsWrapper>
  );
}

export default Results;
