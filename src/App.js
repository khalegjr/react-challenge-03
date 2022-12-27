import { useState } from "react";

function App() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    maritalStatus: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };

      return newData;
    });
  };

  const calculateProgress = () => {
    const totalKeys = Object.keys(data).length;

    let value = 0;
    const amountToAdd = 100 / totalKeys;

    if (data.fullName.trim().split(" ").length > 1) {
      value += amountToAdd;
    }

    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (pattern.test(data.email)) {
      value += amountToAdd;
    }

    if (data.maritalStatus) {
      value += amountToAdd;
    }

    if (data.gender) {
      value += amountToAdd;
    }

    return value;
  };

  const handleClick = () => {
    console.log("submmited");

    alert("Formulário enviado com sucesso!");
    setData({
      fullName: "",
      email: "",
      maritalStatus: "",
      gender: "",
    });
  };

  return (
    <div className="App">
      <h3>React Challenge 3</h3>
      <h1>progresso do formulário</h1>

      <main>
        <div className="bar-container">
          <div
            className="bar"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>

        <div className="form-group">
          <label htmlFor="">Nome Completo</label>
          <input
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input name="email" value={data.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="">Estado Civil</label>
          <select
            name="maritalStatus"
            value={data.maritalStatus}
            onChange={handleChange}
          >
            <option value="">- selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="">Gênero</label>
          <div className="radios-container">
            <span>
              <input
                type="radio"
                name="gender"
                value="masculino"
                onChange={handleChange}
                checked={data.gender === "masculino"}
              />
              Masculino
            </span>
            <span>
              <input
                type="radio"
                name="gender"
                value="feminino"
                onChange={handleChange}
                checked={data.gender === "feminino"}
              />
              Feminino
            </span>
          </div>
        </div>
        <button onClick={handleClick} disabled={calculateProgress() !== 100}>
          Enviar Formulário
        </button>
      </main>
    </div>
  );
}

export default App;
