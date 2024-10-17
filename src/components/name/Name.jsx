import PropTypes from "prop-types";
import "./name.css"



// function in which users can write their favourite superhero name

export const Name = ({ value, updateFormData }) => {
  const handleNameChange = (e) => {
    updateFormData("name", e.target.value);
  };

  return (
    <>
      <div className="name-form-container">
        {/* <p>
          Welcome to the Superpower Shenanigans survey! Get ready to create useless superpowers, choose funny scenarios, and design the silliest superhero costume. Let’s have some fun and discover your quirky superhero side!</p> */}
        <p>Have you ever dreamed of being a superhero? Of course, you have! Now's your chance to unleash your inner hero – and it only takes three easy steps. 🎉</p>
        <label className="label-text-name">First things first: Pick a name! How do you want to be known in the world of superheroes? Captain Lightning? Lady Starlight? The Unstoppable Rubber Band? Let your imagination run wild and give your alter ego a name that screams heroism!</label>
        <input className="name-input" type="text" value={value} onChange={handleNameChange} />

      </div>


    </>
  );
};


// props validation
Name.propTypes = {
  value: PropTypes.string.isRequired,
  updateFormData: PropTypes.func.isRequired,
}