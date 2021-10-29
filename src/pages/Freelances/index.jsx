import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import { useState } from 'react';
import { Loader } from '../../utils/style/Atoms';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
`;

function Freelances() {
  const [profiles, setProfils] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [error, setError] = useState(false);

  useState(() => {
    toggleLoading(true);
    fetch('http://localhost:8000/freelances')
      .then((res) => res.json())
      .then(({ freelancersList }) => setProfils(freelancersList))
      .catch((e) => {
        setError(true);
      })
      .finally(() => toggleLoading(false));
  }, []);

  if (error) {
    return <ErrorDiv>Oups! Il y'a un probléme ...</ErrorDiv>;
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {!loading ? (
        <CardsContainer>
          {profiles.map((profile, index) => (
            <Card
              key={profile.id}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </div>
  );
}

export default Freelances;
