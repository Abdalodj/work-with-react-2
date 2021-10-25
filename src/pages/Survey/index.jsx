import { Link, useParams } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <div>
        {questionNumberInt > 1 && (
          <Link to={`${questionNumberInt - 1}`}>Précédent</Link>
        )}
        {questionNumberInt !== 10 ? (
          <Link to={`${questionNumberInt + 1}`}>Suivant</Link>
        ) : (
          <Link to='/results'>Results</Link>
        )}
      </div>
    </div>
  );
}

export default Survey;
