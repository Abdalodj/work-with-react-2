import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/color';
import { Loader } from '../../utils/style/Atoms';
import { useFetch } from '../../utils/hooks';

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
  const { data, isLoading, error } = useFetch(
    'http://localhost:8000/freelances'
  );
  const profiles = data.freelancersList;
  const { loading } = isLoading;
  const { isError } = error;

  if (isError) {
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
          {profiles &&
            profiles.map((profile) => (
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
